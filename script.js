<script>  
    const date = new Date();

  const jour = date.getDate();
  const mois = date.getMonth() + 1; 
  const annee = date.getFullYear();
  const heure = date.getHours();
  const minutes = date.getMinutes();
  const secondes = date.getSeconds();

  document.getElementById("date-heure").innerHTML = `Aujourd'hui le <b>${jour} / ${mois} / ${annee} à ${heure}h ${minutes} ${secondes} s.</b>`;
  
    function scrollToBottom() {
    const chatbox = document.querySelector(".chatbox");
    chatbox.scrollTop = chatbox.scrollHeight;
}
    function copierTexte() {
    const dernierMessageIA = document.querySelector(".chat.incoming p");

    if (dernierMessageIA) {
        navigator.clipboard.writeText(dernierMessageIA.textContent)
            .then(() => alert('Réponse copiée !'))
            .catch(err => console.error("Erreur de copie : ", err));
    } else {
        alert("Aucune réponse à copier !");
    }
}

    function toggleMenu() {
            const sidebar = document.getElementById("mySidebar");
            if (sidebar.style.width === "250px") {
                sidebar.style.width = "0";
            } else {
                sidebar.style.width = "250px";
            }
        }

        function closeMenu() {
            document.getElementById("mySidebar").style.width = "0";
        }
        
    const showTypingIndicatort = () => {
    const typingIndicatort = document.createElement("li");
    typingIndicator.classList.add("chat", "incoming", "typing-indicator");
    typingIndicator.innerHTML = `
        <span class="material-symbols-outlined">smart_toy</span>
        <div class="typing">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>`;
    chatList.appendChild(typingIndicator);
    chatList.scrollTop = chatList.scrollHeight;
    return typingIndicator;
};
    
const prompts = {
  scientifique: `Salut à toi moi c'est Luka une intelligence artificielle crée par Mr Sidje Samuel , un jeune programmeur web .`,
  presentation: `Bonjour , je suis un assistant IA conçu par Mr Sidje Samuel , mon principal rôle est de vous aidez dans vos différentes préoccupations !`,
  fonctionnement: `J'ai été crée par Mr Sidje Samuel pour vous aidez à résoudre tous vos différents problèmes quotidiens .`,
  createur: `Bonjour je suis un assistant IA crée par Mr Sidje Samuel , un jeune développeur web passionné par l'intelligence artificielle .`
};

const toggleModeBtn = document.getElementById("toggle-mode");
const clearChatBtn = document.getElementById("clear-chat");
const chatList = document.querySelector(".chat-list");
const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".send-icon");

let isDarkMode = false;

const API_KEY = "AIzaSyAlgCGWEJVof5--FLwewqEkTAsEKSjJDh8"; 
const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${API_KEY}`;

clearChatBtn.addEventListener("click", () => {
    chatList.innerHTML = "";
});

toggleModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    isDarkMode = !isDarkMode;
    toggleModeBtn.querySelector("span").textContent = isDarkMode ? "dark_mode" : "light_mode";
});


const showTypingIndicator = () => {
    const typingIndicator = document.createElement("li");
    typingIndicator.classList.add("chat", "incoming", "typing-indicator");
    typingIndicator.innerHTML = `
        <span class="material-symbols-outlined">smart_toy</span>
        <div class="typing">
            <span class="dot"></span>
            <span class="dot"></span>
            <span class="dot"></span>
        </div>`;
    chatList.appendChild(typingIndicator);
    chatList.scrollTop = chatList.scrollHeight;
    return typingIndicator;
}

const generateResponse = async (userMessage) => {
    const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
            contents: [{ 
                role: "user", 
                parts: [{ text: userMessage }] 
            }] 
        }),
    };

    try {
        const response = await fetch(API_URL, requestOptions);
        const data = await response.json();
        if (!response.ok) throw new Error(data.error.message);
        return data.candidates[0].content.parts[0].text;
    } catch (error) {
        return `Error: ${error.message}`;
    }
}

sendChatBtn.addEventListener("click", async () => {
  const userMessage = chatInput.value.trim();
  if (userMessage === "") return;

  const outgoingChat = document.createElement("li");
  outgoingChat.classList.add("chat", "outgoing");
  outgoingChat.innerHTML = `<p>${userMessage} <span onclick="copierTexte()"> 📝</span></p>`;
  scrollToBottom()  
  chatList.appendChild(outgoingChat);
  chatInput.value = "";
  chatList.scrollTop = chatList.scrollHeight;

  const typingIndicator = showTypingIndicator();

  if (userMessage.toLowerCase().includes("qui t'a crée ?") || userMessage.toLowerCase().includes("qui est ton créateur") || userMessage.toLowerCase().includes("créateur") || userMessage.toLowerCase().includes("Qui t'a créer ") || userMessage.toLowerCase().includes("Qui t'a crée") || userMessage.toLowerCase().includes("Qui t'a créer ?") || userMessage.toLowerCase().includes("Qui est ton créateur ?")) {
    const botMessage = Object.values(prompts)[Math.floor(Math.random() * Object.values(prompts).length)];
    setTimeout(() => {
      typingIndicator.remove();
      const incomingChat = document.createElement("li");
      incomingChat.classList.add("chat", "incoming");
      incomingChat.innerHTML = ` <span class="material-symbols-outlined">smart_toy</span> <p>${botMessage}<span onclick="copierTexte()"> 📝</span></p>`;
      scrollToBottom()
      chatList.appendChild(incomingChat);
      chatList.scrollTop = chatList.scrollHeight;
    }, 500);
  } else if (userMessage.toLowerCase().includes("Luka")) {
    const botMessage = prompts.connaitre;
    setTimeout(() => {
      typingIndicator.remove();
      const incomingChat = document.createElement("li");
      incomingChat.classList.add("chat", "incoming");
      incomingChat.innerHTML = ` <span class="material-symbols-outlined">smart_toy</span> <p>${botMessage}<span onclick="copierTexte()"> 📝</span></p>`;
      scrollToBottom()
      chatList.appendChild(incomingChat);
      chatList.scrollTop = chatList.scrollHeight;
    }, 500);
  } else {
    const botMessage = await generateResponse(userMessage);
    setTimeout(() => {
      typingIndicator.remove();
      const incomingChat = document.createElement("li");
      incomingChat.classList.add("chat", "incoming");
      incomingChat.innerHTML = ` <span class="material-symbols-outlined">smart_toy</span> <p>${botMessage}<span onclick="copierTexte()"> 📝</span></p>`;
      scrollToBottom()
      chatList.appendChild(incomingChat);
      chatList.scrollTop = chatList.scrollHeight;
    }, 500);
  }
});
</script>  
