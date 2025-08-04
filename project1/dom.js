const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'


for (let i = 1; i <= 151; i++) {
    const poke = document.createElement('div');
    poke.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`


    poke.appendChild(newImg);
    poke.appendChild(label);
    container.appendChild(poke)
}
