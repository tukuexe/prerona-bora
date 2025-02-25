// Telegram Bot API setup
const botToken = '7609668402:AAGWOLDkkQIAEzXqL75TjtD6vAQqaLgehM4'; // Replace with your bot token
const chatId = '6715819149'; // Replace with your chat ID

// Function to send a message to Telegram
function sendTelegramMessage(message) {
  const url = https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)};
  fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error sending message:', error));
}

// Function to collect device information
function getDeviceInfo() {
  const userAgent = navigator.userAgent; // Browser and OS information
  const platform = navigator.platform; // Operating system
  const screenWidth = window.screen.width; // Screen width
  const screenHeight = window.screen.height; // Screen height
  const language = navigator.language; // User's language
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone; // User's timezone
  const referrer = document.referrer || 'No referrer'; // Referrer URL (if any)

  return 
    🚀 A user visited your website! 🚀

    Device Information:
    - User Agent: ${userAgent}
    - Platform: ${platform}
    - Screen Resolution: ${screenWidth}x${screenHeight}
    - Language: ${language}
    - Timezone: ${timezone}
    - Referrer: ${referrer}
  ;
}

// Send device information when the website is opened
window.onload = () => {
  const deviceInfo = getDeviceInfo();
  sendTelegramMessage(deviceInfo);
};

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
  sendTelegramMessage('Prerona Says Yes! 💕👍');
});

noBtn.addEventListener('click', () => {
  imageScreen.classList.add('hidden');
  noteNo.classList.remove('hidden');
  createParticles(noteNo);
  sendTelegramMessage('why she said No😢!');
});

// Create particles animation
function createParticles(element) {
  for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.classList.add('particles');
    particle.style.left = ${Math.random() * 100}vw;
    particle.style.top = ${Math.random() * 100}vh;
    document.body.appendChild(particle);
    setTimeout(() => {
      particle.remove();
    }, 2000);
  }
    }
