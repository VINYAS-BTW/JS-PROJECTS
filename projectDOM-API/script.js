let quoteContent = document.getElementById("quote-content");
let newQuoteBtn = document.getElementById("new-quote-btn");

let memeContent = document.getElementById("meme-content");
let newMemeBtn = document.getElementById("new-meme-btn");

let jokeContent = document.getElementById("joke-content");
let newJokeBtn = document.getElementById("new-joke-btn");

function getQuote() {
    quoteContent.textContent = "Loading...";

    fetch("https://thequoteshub.com/api/")
        .then(function(response) {
            return response.json(); 
        })
        .then(function(data) {
            var quote = data.text;
            var author = data.author;
            quoteContent.innerHTML = `"${quote}"<br><br>- ${author}`;
        })
        .catch(function() {
            quoteContent.textContent = "Could not load a quote.";
        });
}



function getMeme() {
    memeContent.textContent = "Loading...";
    fetch("https://meme-api.com/gimme")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            memeContent.innerHTML = `<img src="${data.url}" style="max-height:200px; border-radius:8px;">`;
        })
        .catch(function() {
            memeContent.textContent = "Could not load a meme.";
        });
}

function getJoke() {
    jokeContent.textContent = "Loading...";
    fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single")
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            jokeContent.textContent = data.joke;
        })
        .catch(function() {
            jokeContent.textContent = "Could not load a joke.";
        });
}

newQuoteBtn.addEventListener("click", getQuote);
newMemeBtn.addEventListener("click", getMeme);
newJokeBtn.addEventListener("click", getJoke);

getQuote();
getMeme();
getJoke();
