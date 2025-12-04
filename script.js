const chatLogEl = document.getElementById("chat-log");
const userInputEl = document.getElementById("user-input");
const sendBtnEl = document.getElementById("send-btn");
const sarcasmeRangeEl = document.getElementById("sarcasme-range");
const sarcasmeValueEl = document.getElementById("sarcasme-value");

// Mettre à jour le niveau de sarcasme
sarcasmeRangeEl.addEventListener("input", () => {
  sarcasmeValueEl.textContent = sarcasmeRangeEl.value;
});

// Ajouter un message
function addMessage(text, sender = "bot") {
  const row = document.createElement("div");
  row.className = "message-row " + sender;

  const bubble = document.createElement("div");
  bubble.className = "message-bubble";
  bubble.textContent = text;

  if (sender === "bot") {
    const avatar = document.createElement("div");
    avatar.className = "avatar-small";
    avatar.innerHTML = `<img src="d.jpeg" alt="Brutus Mou">`;
    row.appendChild(avatar);
  }

  row.appendChild(bubble);
  chatLogEl.appendChild(row);
  chatLogEl.scrollTo({ top: chatLogEl.scrollHeight, behavior: "smooth" });
}

// Typing indicator
function showTypingIndicator() {
  const indicator = document.createElement("div");
  indicator.className = "message-row bot typing-indicator";
  indicator.innerHTML = `<div class="message-bubble">Brutus Mou réfléchit... 🌀</div>`;
  chatLogEl.appendChild(indicator);
  chatLogEl.scrollTo({ top: chatLogEl.scrollHeight, behavior: "smooth" });
  return indicator;
}

// Envoyer la question au serveur
async function envoyerMessage() {
  const message = userInputEl.value.trim();
  if (!message) return;

  addMessage(message, "user");
  userInputEl.value = "";
  sendBtnEl.disabled = true;

  const typingIndicator = showTypingIndicator();
  try {
    const sarcasme = sarcasmeRangeEl.value;
    const res = await fetch("http://localhost:3000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, sarcasme })
    });

    const data = await res.json();
    typingIndicator.remove();
    addMessage(data.response, "bot");
  } catch (err) {
    typingIndicator.remove();
    addMessage("Erreur serveur 😵‍💫", "bot");
    console.error(err);
  } finally {
    sendBtnEl.disabled = false;
    userInputEl.focus();
  }
}

// Événements
sendBtnEl.addEventListener("click", envoyerMessage);
userInputEl.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    envoyerMessage();
  }
});
