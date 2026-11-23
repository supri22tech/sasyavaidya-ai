import os
import base64
import requests
from flask import Flask, render_template, request, jsonify
import google.generativeai as genai
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)

api_key = os.getenv("GEMINI_API_KEY")
if api_key:
    genai.configure(api_key=api_key)


def get_weather(location):
    geo = requests.get(
        "https://geocoding-api.open-meteo.com/v1/search",
        params={"name": location, "count": 1, "language": "en", "format": "json"},
        timeout=15,
    )
    geo.raise_for_status()
    results = geo.json().get("results")
    if not results:
        raise ValueError("Location not found")

    place = results[0]
    forecast = requests.get(
        "https://api.open-meteo.com/v1/forecast",
        params={
            "latitude": place["latitude"],
            "longitude": place["longitude"],
            "hourly": "temperature_2m,precipitation_probability",
            "forecast_days": 2,
            "timezone": "auto",
        },
        timeout=15,
    )
    forecast.raise_for_status()
    data = forecast.json()
    hourly = data["hourly"]
    weather = []
    for i in range(min(12, len(hourly["time"]))):
        weather.append({
            "time": hourly["time"][i],
            "temperature_c": hourly["temperature_2m"][i],
            "rain_probability_pct": hourly["precipitation_probability"][i],
        })

    return {
        "place": place,
        "timezone": data.get("timezone", ""),
        "hours": weather,
    }


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/generate", methods=["POST"])
def generate():
    if not api_key:
        return jsonify({"error": "GEMINI_API_KEY is missing. Add it to your .env file."}), 500

    data = request.get_json(silent=True) or {}
    image_base64 = data.get("image")
    mime_type = data.get("mimeType", "image/png")
    language = data.get("language", "English")
    location = data.get("location", "Nilambur, Kerala")
    question = data.get("question", "Please analyze this plant issue.")

    if not image_base64:
        return jsonify({"error": "Please upload an image of a plant, crop, vegetable, stem, fruit, or leaf."}), 400

    try:
        weather = get_weather(location)
        clean_base64 = image_base64.split(",")[-1]
        image_bytes = base64.b64decode(clean_base64)

        prompt = f"""You are SasyaVaidya AI, an expert plant-health, crop-disease, tree-care, vegetable, stem, fruit, leaf, and micro-climate advisory bot.
Reply 100% in {language}. Use English technical plant, crop, pest, disease, and chemical names in parentheses.
Use clean WhatsApp formatting: bold headers, bullet points, and emojis.
Analyze the attached image of a plant, tree, crop, vegetable, stem, fruit, or leaf. Identify the affected plant or plant part and diagnose the most likely issue. Also consider this exact question: {question}

Location: {weather['place'].get('name')}, {weather['place'].get('country', '')}
Timezone: {weather['timezone']}
Live 12-hour forecast (chronological): {weather['hours']}

Cover these sections exactly:
🌱 *Plant / Crop / Tree / Fruit Identified*
⚠️ *Disease, Pest, or Health Issue & Severity Level*
🌦️ *Micro-Climate Treatment or Spraying Window* — Give exact timing based on rain probability and temperature. If spraying is relevant, warn against spraying if rain is likely within 4 hours. Avoid spraying in rain, heat, or strong conditions.
💊 *Recommended Treatment (Organic & Chemical)*

Be practical, concise, and safety-focused. Adapt the advice to the exact plant part shown, whether it is a stem, fruit, leaf, vegetable, or whole plant. Clearly state when a horticulture or agricultural professional should inspect the plant. Do not add unsupported certainty; if the image is unclear, say so."""

        model = genai.GenerativeModel("gemini-2.5-flash")
        response = model.generate_content([
            prompt,
            {"mime_type": mime_type, "data": image_bytes},
        ])
        return jsonify({
            "explanation": response.text,
            "weather": weather,
        })
    except ValueError as exc:
        return jsonify({"error": str(exc)}), 404
    except requests.RequestException:
        return jsonify({"error": "Could not fetch live weather. Please try again."}), 502
    except Exception as exc:
        message = str(exc)
        if "API_KEY" in message.upper() or "API key" in message:
            message = "Gemini API key is missing or invalid."
        return jsonify({"error": f"AI analysis failed: {message}"}), 500


if __name__ == "__main__":
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)