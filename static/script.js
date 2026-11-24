const translations = {
  English: {online:"Online",location:"Location",language:"Language",welcome:"Hello! 🌿 Upload a photo of any plant, tree, crop, vegetable, stem, fruit, or leaf. I’ll identify health issues and suggest the safest treatment for your local weather.",placeholder:"Ask about a plant, tree, crop, vegetable, stem, fruit, or leaf...",sample:"📷 Try Sample Diseased Plant",spray:"🌦️ Spray advice",organic:"🍃 Organic treatment",typing:"SasyaVaidya AI is typing...",custom:"Enter city"},
  Malayalam: {online:"ഓൺലൈൻ",location:"സ്ഥലം",language:"ഭാഷ",welcome:"നമസ്കാരം! 🌿 ചെടി, മരം, വിള, പച്ചക്കറി, തണ്ട്, കനി അല്ലെങ്കിൽ ഇല എന്നിവയുടെ ഫോട്ടോ അപ്‌ലോഡ് ചെയ്യുക. ആരോഗ്യ പ്രശ്നം കണ്ടെത്താനും പ്രാദേശിക കാലാവസ്ഥയ്ക്ക് സുരക്ഷിത ചികിത്സം सुझിക്കാനും സഹായിക്കും.",placeholder:"ചെടി, മരം, വിള, പച്ചക്കറി, തണ്ട്, കനി അല്ലെങ്കിൽ ഇലയെ കുറിച്ച് ചോദിക്കുക...",sample:"📷 രോഗമുള്ള ചെടിയുടെ സാമ്പിൾ",spray:"🌦️ സ്പ്രേ advice",organic:"🍃 ജൈവ ചികിത്സ",typing:"SasyaVaidya AI ടൈപ്പ് ചെയ്യുന്നു...",custom:"നഗരം നൽകുക"},
  Hindi: {online:"ऑनलाइन",location:"स्थान",language:"भाषा",welcome:"नमस्ते! 🌿 पौधा, पेड़, फसल, सब्जी, तना, फल या पत्ती की फोटो अपलोड करें। मैं स्वास्थ्य समस्या पहचानकर स्थानीय मौसम के अनुसार सुरक्षित उपचार बताऊंगा।",placeholder:"पौधा, पेड़, फसल, सब्जी, तना, फल या पत्ती के बारे में पूछें...",sample:"📷 पौधे का नमूना",spray:"🌦️ छिड़काव सलाह",organic:"🍃 जैविक उपचार",typing:"SasyaVaidya AI लिख रहा है...",custom:"शहर दर्ज करें"},
  Tamil: {online:"ஆன்லைன்",location:"இடம்",language:"மொழி",welcome:"வணக்கம்! 🌿 எந்தச் செடி, மரம், பயிர், காய், தண்டு, பழம் அல்லது இலை புகைப்படத்தையும் பதிவேற்றுங்கள். ஆரோக்கியச் சிக்கலைக் கண்டறிந்து உள்ளூர் காலநிலைக்கு பாதுகாப்பான தீர்வு வழங்குவேன்.",placeholder:"செடி, மரம், பயிர், காய், தண்டு, பழம் அல்லது இலை பற்றி கேளுங்கள்...",sample:"📷 நோயுள்ள தாவர மாதிரி",spray:"🌦️ தெளிப்பு ஆலோசனை",organic:"🍃 இயற்கை சிகிச்சை",typing:"SasyaVaidya AI தட்டச்சு செய்கிறது...",custom:"நகரத்தை உள்ளிடுங்கள்"},
  Kannada: {online:"ಆನ್ಲೈನ್",location:"ಸ್ಥಳ",language:"ಭಾಷೆ",welcome:"ನಮಸ್ಕಾರ! 🌿 ಗಿಡ, ಮರ, ಬೆಳೆ, ತರಕಾರಿ, ಕಾಂಡ, ಹಣ್ಣು ಅಥವಾ ಎಲೆಯ ಫೋಟೋ ಅಪ್‌ಲೋಡ್ ಮಾಡಿ. ಆರೋಗ್ಯ ಸಮಸ್ಯೆ ಗುರುತಿಸಿ ಸ್ಥಳೀಯ ಹವಾಮಾನಕ್ಕೆ ಸುರಕ್ಷಿತ ಚಿಕಿತ್ಸೆ ಸಲಹೆ ನೀಡುತ್ತೇನೆ.",placeholder:"ಗಿಡ, ಮರ, ಬೆಳೆ, ತರಕಾರಿ, ಕಾಂಡ, ಹಣ್ಣು ಅಥವಾ ಎಲೆ ಬಗ್ಗೆ ಕೇಳಿ...",sample:"📷 ಸಸ್ಯದ ಮಾದರಿ",spray:"🌦️ ಸಿಂಪಡಣೆ ಸಲಹೆ",organic:"🍃 ಸಾವಯವ ಚಿಕಿತ್ಸೆ",typing:"SasyaVaidya AI ಟೈಪ್ ಮಾಡುತ್ತಿದೆ...",custom:"ನಗರವನ್ನು ನಮೂದಿಸಿ"},
  Telugu: {online:"ఆన్‌లైన్",location:"ప్రదేశం",language:"భాష",welcome:"నమస్కారం! 🌿 మొక్క, చెట్టు, పంట, కూరగాయ, కాండం, పండు లేదా ఆకు ఫోటోను అప్లోడ్ చేయండి. ఆరోగ్య సమస్యను గుర్తించి స్థానిక వాతావరణానికి సురక్షిత చికిత్స సూచిస్తాను.",placeholder:"మొక్క, చెట్టు, పంట, కూరగాయ, కాండం, పండు లేదా ఆకు గురించి అడగండి...",sample:"📷 మొక్క నమూనా",spray:"🌦️ స్ప్రే సలహా",organic:"🍃 సేంద్రీయ చికిత్స",typing:"SasyaVaidya AI టైప్ చేస్తోంది...",custom:"నగరం నమోదు చేయండి"},
  Marathi: {online:"ऑनलाइन",location:"स्थान",language:"भाषा",welcome:"नमस्कार! 🌿 वनस्पती, झाड, पीक, भाजी, देठ, फळ किंवा पानाचा फोटो अपलोड करा. स्वास्थ्य समस्या ओळखून स्थानिक हवामानासाठी सुरक्षित उपचार सुचवेन.",placeholder:"वनस्पती, झाड, पीक, भाजी, देठ, फळ किंवा पानाबद्दल विचारा...",sample:"📷 वनस्पतीचा नमुना",spray:"🌦️ फवारणीचा सल्ला",organic:"🍃 जैविक उपचार",typing:"SasyaVaidya AI टाइप करत आहे...",custom:"शहर प्रविष्ट करा"}
};

const chat = document.getElementById("chat");
const languageSelect = document.getElementById("languageSelect");
const locationSelect = document.getElementById("locationSelect");
const customLocation = document.getElementById("customLocation");
const messageInput = document.getElementById("messageInput");
const imageInput = document.getElementById("imageInput");
let pendingImage = null;
let typingRow = null;

function clockTime() {
  return new Date().toLocaleTimeString([], {hour:"2-digit", minute:"2-digit"});
}

document.getElementById("welcomeTime").textContent = clockTime();

function applyLanguage() {
  const t = translations[languageSelect.value];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.getElementById("welcomeText").textContent = t.welcome;
  messageInput.placeholder = t.placeholder;
  customLocation.placeholder = t.custom;
  document.querySelector('[data-action="sample"]').textContent = t.sample;
  document.querySelector('[data-action="spray"]').textContent = t.spray;
  document.querySelector('[data-action="organic"]').textContent = t.organic;
}
languageSelect.addEventListener("change", applyLanguage);

locationSelect.addEventListener("change", () => {
  customLocation.hidden = locationSelect.value !== "custom";
  if (!customLocation.hidden) customLocation.focus();
});

function selectedLocation() {
  return locationSelect.value === "custom" ? customLocation.value.trim() : locationSelect.value;
}

function addMessage(text, type="bot", image=null) {
  const row = document.createElement("div");
  row.className = `message-row ${type}-row`;
  const bubble = document.createElement("div");
  bubble.className = `message ${type}-message`;
  if (image) {
    const img = document.createElement("img");
    img.className = "chat-image";
    img.src = image;
    bubble.appendChild(img);
  }
  if (text) {
    const content = document.createElement("div");
    content.innerHTML = formatMessage(text);
    bubble.appendChild(content);
  }
  const time = document.createElement("time");
  time.textContent = clockTime();
  bubble.appendChild(time);
  row.appendChild(bubble);
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function formatMessage(text) {
  return text
    .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>")
    .replace(/\*(.*?)\*/g,"<strong>$1</strong>")
    .replace(/^[-•]\s?/gm,"• ")
    .replace(/\n/g,"<br>");
}

function showTyping() {
  typingRow = document.createElement("div");
  typingRow.className = "message-row bot-row";
  typingRow.innerHTML = `<div class="typing"><span></span><span></span><span></span><b>${translations[languageSelect.value].typing}</b></div>`;
  chat.appendChild(typingRow);
  chat.scrollTop = chat.scrollHeight;
}
function hideTyping() { if (typingRow) typingRow.remove(); }

function generateSampleLeaf() {
  const canvas = document.createElement("canvas");
  canvas.width = 420; canvas.height = 420;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle="#eef4dd"; ctx.fillRect(0,0,420,420);
  ctx.fillStyle="#3f7d35";
  ctx.beginPath(); ctx.moveTo(210,380); ctx.bezierCurveTo(70,320,45,120,210,55); ctx.bezierCurveTo(375,120,350,320,210,380); ctx.fill();
  ctx.strokeStyle="#dbe7b5"; ctx.lineWidth=7; ctx.beginPath(); ctx.moveTo(210,370); ctx.lineTo(210,75); ctx.stroke();
  ctx.strokeStyle="#dbe7b5"; ctx.lineWidth=4;
  for(let y=110;y<340;y+=55){ctx.beginPath();ctx.moveTo(210,y);ctx.quadraticCurveTo(150,y-20,105,y-5);ctx.moveTo(210,y);ctx.quadraticCurveTo(270,y-20,315,y-5);ctx.stroke();}
  ctx.fillStyle="#8b5a2b";
  [[145,155],[260,205],[115,260],[290,300],[210,245],[175,330]].forEach(([x,y])=>{ctx.beginPath();ctx.arc(x,y,18,0,Math.PI*2);ctx.fill();ctx.fillStyle="#a8b85a";ctx.beginPath();ctx.arc(x,y,8,0,Math.PI*2);ctx.fill();ctx.fillStyle="#8b5a2b";});
  return canvas.toDataURL("image/png");
}

async function analyze(question) {
  const location = selectedLocation();
  if (!location) { addMessage("Please enter a valid city.","bot"); return; }
  if (!pendingImage) { addMessage("📷 Please upload a plant, crop, vegetable, stem, fruit, or leaf image, or use the sample.","bot"); return; }

  showTyping();
  document.getElementById("sendButton").disabled = true;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 15000);
    let response;
    try {
      response = await fetch("/generate", {
        method:"POST", headers:{"Content-Type":"application/json"},
        body:JSON.stringify({image:pendingImage,mimeType:"image/png",language:languageSelect.value,location,question}),
        signal: controller.signal
      });
    } finally {
      clearTimeout(timeoutId);
    }
    const data = await response.json();
    hideTyping();
    if (!response.ok) throw new Error(data.error || "Analysis failed");
    addMessage(data.explanation,"bot");
  } catch (error) {
    hideTyping();
    addMessage(`⚠️ ${error.message}`,"bot");
  } finally {
    document.getElementById("sendButton").disabled = false;
  }
}

imageInput.addEventListener("change", event => {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => { pendingImage = reader.result; addMessage("", "user", reader.result); };
  reader.readAsDataURL(file);
});

document.getElementById("sendButton").addEventListener("click", () => {
  const text = messageInput.value.trim();
  if (text) addMessage(text,"user");
  messageInput.value = "";
  analyze(text || "Please analyze this plant or plant part and give a complete advisory.");
});
messageInput.addEventListener("keydown", e => { if(e.key === "Enter") document.getElementById("sendButton").click(); });

document.getElementById("quickActions").addEventListener("click", event => {
  const button = event.target.closest("button");
  if (!button) return;
  if (button.dataset.action === "sample") {
    pendingImage = generateSampleLeaf();
    addMessage("", "user", pendingImage);
    analyze("Please analyze this sample plant image.");
  } else {
    messageInput.value = button.dataset.action === "spray" ? "What is the safest treatment or spraying window?" : "Suggest organic treatment options for this plant issue.";
    document.getElementById("sendButton").click();
  }
});

applyLanguage();