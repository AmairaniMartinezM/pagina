const message = [
  "me haces feliz",
  "Eres mi sol",
  "Eres mi luna",   
  "Eres mi estrella",                                          
];

function randomTextBubble() {
  const bubble = document.createElement("div");
  bubble.className = "text-bubble";
  bubble.innerText = message[Math.floor(Math.random() * message.length)];

  const left = Math.random() * 80 + 10;
  const top = Math.random() * 80 + 10;

  bubble.style.left = left + "vw";
  bubble.style.top = top + "vh";

  const container = document.getElementById("bubbles-text");
  container.appendChild(bubble);

  setTimeout(() => {  
    const rect = bubble.getBoundingClientRect();

    if (rect.right > window.innerWidth) {
      const newLeft = window.innerWidth - rect.width - 10;
      bubble.style.left = newLeft + 'px';
    }
    if (rect.bottom > window.innerHeight) {
      const newTop = window.innerHeight - rect.height - 10;
      bubble.style.top = newTop + 'px';
    }
    if (rect.left < 0) {
      bubble.style.left = '10px';
    }
    if (rect.top < 0) {
      bubble.style.top = '10px';
    }
  }, 10);

  setTimeout(() => {
    bubble.remove();
  }, 8000);
}

setInterval(randomTextBubble, 500);
