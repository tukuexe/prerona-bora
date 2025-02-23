// Telegram Bot API setup
const botToken = '7609668402:AAGWOLDkkQIAEzXqL75TjtD6vAQqaLgehM4'; // Replace with your bot token
const chatId = '6715819149'; // Replace with your chat ID

// Function to send a message to Telegram
function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error sending message:', error));
}

// DOM elements
const note1 = document.getElementById('note1');
const note2 = document.getElementById('note2');
const imageScreen = document.getElementById('image-screen');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const noteYes = document.getElementById('note-yes');
const noteNo = document.getElementById('note-no');

// First note disappears with animation
setTimeout(() => {
  note1.classList.add('hidden');
  createParticles(note1);
  setTimeout(() => {
    note2.classList.remove('hidden');
  }, 1000);
}, 3000);

// Second note disappears with animation
setTimeout(() => {
  note2.classList.add('hidden');
  createParticles(note2);
  setTimeout(() => {
    imageScreen.classList.remove('hidden');
  }, 1000);
}, 6000);

// Button click handlers
yesBtn.addEventListener('click', () => {
  imageScreen.classList.add('hidden');
  noteYes.classList.remove('hidden');
  createParticles(noteYes);
  sendTelegramMessage(' প্ৰেৰণাএ Yes কৈছে।💕🙃');
});

noBtn.addEventListener('click', () => {
  imageScreen.classList.add('hidden');
  noteNo.classList.remove('hidden');
  createParticles(noteNo);
  sendTelegramMessage(' প্ৰেৰণাএ No কলে বেহ! 😢');
});

// Create particles animation
function createParticles(element) {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particles');
    particle.style.left = `${Math.random() * 100}vw`;
    particle.style.top = `${Math.random() * 100}vh`;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
}
