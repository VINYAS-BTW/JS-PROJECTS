const btn=document.querySelector(".btn")
const h1=document.querySelector("#h1");


btn.addEventListener("click",()=>{
     const color1 = randomcolor();
    const color2 = randomcolor();  
document.body.style.background = `linear-gradient(90deg, ${color1}, ${color2})`;
h1.innerText=`${color1} → ${color2}`;
})

const randomcolor=()=>
{
        const r=Math.floor(Math.random()*255);
const g=Math.floor(Math.random()*255);
const b=Math.floor(Math.random()*255);

return `rgb(${r},${g},${b})`;
}