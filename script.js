const toggle = document.getElementById("darkToggle");
const themeSelect = document.getElementById("themeSelect");

if (toggle) {
    toggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
}

if (themeSelect) {
    themeSelect.addEventListener("change", () => {
        document.body.classList.remove("theme-royal", "theme-purple", "theme-emerald", "theme-sunset");
        const value = themeSelect.value;
        if (value === "royal") document.body.classList.add("theme-royal");
        if (value === "purple") document.body.classList.add("theme-purple");
        if (value === "emerald") document.body.classList.add("theme-emerald");
        if (value === "sunset") document.body.classList.add("theme-sunset");
    });
}

/* Simple rule-based chatbot */
const chatbotInput = document.getElementById("chatbot-input");
const chatbotSend = document.getElementById("chatbot-send");
const chatbotBody = document.getElementById("chatbot-body");

function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("chatbot-message", sender);
    div.textContent = text;
    chatbotBody.appendChild(div);
    chatbotBody.scrollTop = chatbotBody.scrollHeight;
}

if (chatbotSend && chatbotInput && chatbotBody) {
    chatbotSend.addEventListener("click", () => {
        const q = chatbotInput.value.trim();
        if (!q) return;
        addMessage(q, "user");
        chatbotInput.value = "";

        let answer = "I can answer questions about Bincy's skills, projects, and experience.";

        const lower = q.toLowerCase();
        if (lower.includes("skill")) {
            answer = "Bincy works with deep learning, computer vision, NLP, Generative AI, Python, and ML pipelines.";
        } else if (lower.includes("project")) {
            answer = "You can explore projects like privacy-aware object detection, YOLO vs custom models, tourism forecasting, and sentiment analysis.";
        } else if (lower.includes("experience") || lower.includes("volvo")) {
            answer = "Bincy worked as an ML Engineer (Master Thesis) at Volvo Car Body Components, building a defect detection model.";
        }

        addMessage(answer, "bot");
    });
}

/* Fade-in on load */
window.addEventListener("load", () => {
    document.querySelectorAll("section").forEach(sec => {
        sec.classList.add("fade-in");
    });
});
