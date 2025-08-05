const p1sd = document.querySelector("#p1sD");
const p2sd = document.querySelector("#p2sD");

const p1btn = document.querySelector("#p1score");
const p2btn = document.querySelector("#p2score");
const reset = document.querySelector("#reset");

const wss = document.querySelector("#set-score");

let p1score = 0;
let p2score = 0;
let isgameover = false;
let ws = parseInt(wss.value); 

p1btn.addEventListener('click', () => {
    if (!isgameover) {
        p1score += 1;
        if (p1score === ws) {
            isgameover = true;
            p1sd.classList.add('winner');
            p2sd.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
            document.body.classList.add('p1-wins');
            
        }
        p1sd.textContent = p1score;
    }
});

p2btn.addEventListener('click', () => {
    if (!isgameover) {
        p2score += 1;
        if (p2score === ws) {
            isgameover = true;
            p2sd.classList.add('winner');
            p1sd.classList.add('loser');
            p1btn.disabled = true;
            p2btn.disabled = true;
            document.body.classList.add('p1-wins');
        }
        p2sd.textContent = p2score;
    }
});

reset.addEventListener("click", resetf);

wss.addEventListener('change', (event) => {
    ws = parseInt(event.target.value);
    resetf();
});

function resetf() {
    isgameover = false;
    p1score = 0;
    p2score = 0;
    p1sd.textContent = p1score;
    p2sd.textContent = p2score;
    p1sd.classList.remove('winner', 'loser');
    p2sd.classList.remove('winner', 'loser');
    p1btn.disabled = false;
    p2btn.disabled = false;
    document.body.classList.remove('p1-wins');
}
