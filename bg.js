const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const gradient = generateLinearGradient();
    document.body.style.background = gradient;
    h1.innerText = gradient;
});

function randomColorValue() {
    return Math.floor(Math.random() * 256);
}

function getRandomColor() {
    const r = randomColorValue();
    const g = randomColorValue();
    const b = randomColorValue();
    return `rgb(${r}, ${g}, ${b})`;
}

function generateLinearGradient() {
    const angle = Math.floor(Math.random() * 360); // degrees
    const color1 = getRandomColor();
    const color2 = getRandomColor();
    return `linear-gradient(${angle}deg, ${color1}, ${color2})`;
}

