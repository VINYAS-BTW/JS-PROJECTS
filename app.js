// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector(".container");
const url = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

for(let i = 1; i <= 152; i++) { 
  const poke=document.createElement('div');
  poke.classList.add('item');
  const img = document.createElement('img');
  const label=document.createElement('span');
  label.innerText=`${i}`;

  img.setAttribute('src', `${url}${i}.png`);
  poke.appendChild(img);
  poke.appendChild(label);
  container.append(poke);
}

