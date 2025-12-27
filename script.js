const lyrics = [
    { text: "last christmas,", time: 16 },
    { text: "I gave you my heart", time: 18 },
    { text: "but the very next day,", time: 21 },
    { text: "you gave it away", time: 23 },
    { text: "", time: 26 },
    { text: "this year,", time: 28 },
    { text: "to save me from tears", time: 30 },
    { text: "I'll give it to someone special", time: 32 },
    { text: "", time: 36 },
    { text: "last christmas,", time: 65 },
    { text: "I gave you my heart", time: 67 },
    { text: "but the very next day,", time: 70 },
    { text: "you gave it away", time: 72 },
    { text: "", time: 75 },
    { text: "this year,", time: 77 },
    { text: "to save me from tears", time: 79 },
    { text: "I'll give it to someone special", time: 81 },
    { text: "", time: 85 }
];

const lyricsDiv = document.getElementById('lyrics');
const music = document.getElementById('music');
let currentLine = 0;

function updateLyrics() {
    const currentTime = music.currentTime;
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time && (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)) {
            if (i !== currentLine) {
                lyricsDiv.textContent = lyrics[i].text;
                currentLine = i;
            }
            break;
        }
    }
}

music.addEventListener('timeupdate', updateLyrics);
music.addEventListener('play', updateLyrics);
music.addEventListener('seeked', updateLyrics);

document.body.addEventListener('click', () => {
    music.play().catch(() => {});
}, { once: true });

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    const flakes = ['❄', '❅', '❆', '✻', '✼'];
    snowflake.textContent = flakes[Math.floor(Math.random() * flakes.length)];
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = (Math.random() * 10 + 10) + 's';
    snowflake.style.fontSize = (Math.random() * 0.6 + 0.6) + 'em';
    snowflake.style.opacity = Math.random() * 0.4 + 0.4;
    document.body.appendChild(snowflake);
    setTimeout(() => snowflake.remove(), 25000);
}
setInterval(createSnowflake, 650);

const greetingText = document.querySelector('.greeting-text');
function checkScroll() {
    if (!greetingText) return;
    const rect = greetingText.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    if (rect.top <= windowHeight * 0.8) {
        greetingText.classList.add('visible');
    }
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll);
