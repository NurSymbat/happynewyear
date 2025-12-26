const lyrics = [
    { text: "last christmas,", time: 1990 },
    { text: "I gave you my heart", time: 1993 },
    { text: "but the very next day,", time: 2067 },
    { text: "you gave it away", time: 2000 },
    { text: "", time: 1000 },
    { text: "this year,", time: 2000 },
    { text: "to save me from tears", time: 2000 },
    { text: "I'll give it to someone special", time: 3065 },
    { text: "", time: 1260 },               
    { text: "last christmas,", time: 1990 },
    { text: "I gave you my heart", time: 1995 },
    { text: "but the very next day,", time: 2100 },
    { text: "you gave it away", time: 2000 },
    { text: "", time: 1000 },
    { text: "this year,", time: 2000 },
    { text: "to save me from tears", time: 2000 },
    { text: "I'll give it to someone special", time: 3040 },
    { text: "", time: 1000 }
];
const lyricsDiv = document.getElementById('lyrics');
let index = 0;
function showNextLine() {
    if (index < lyrics.length) {
        const line = lyrics[index];
        lyricsDiv.textContent = line.text;
        lyricsDiv.classList.remove('visible');
        setTimeout(() => {
            lyricsDiv.classList.add('visible');
        }, 100);
        index++;
        const delay = line.time || 3500;

        setTimeout(showNextLine, delay);
    } else {
        setTimeout(() => {
            index = 0;
            showNextLine();
        }, 100);
    }
}
const music = document.getElementById('music');
document.body.addEventListener('click', () => {
    music.play().catch(() => {}); 
}, { once: true });
window.addEventListener('load', () => {
    setTimeout(showNextLine, 1000);
});
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
    setTimeout(() => {
        snowflake.remove();
    }, 25000);
}
setInterval(createSnowflake, 650);
const greetingText = document.querySelector('.greeting-text');
function checkScroll() {
    const rect = greetingText.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.8) {  
        greetingText.classList.add('visible');
    }
}
window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); 