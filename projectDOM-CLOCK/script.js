const switchbtn = document.querySelector(".switch");

 const themeToggle = document.querySelector('.switch');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('darkmode');
        });


const hrs = document.querySelector("#hrs");
const min = document.querySelector("#mins");
const sec = document.querySelector("#sec");



setInterval(() => {
    const currentTime = new Date();

    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();


    hrs.innerHTML = String(hours).padStart(2, '0');
    mins.innerHTML = String(minutes).padStart(2, '0');
    secs.innerHTML = String(seconds).padStart(2, '0');
    
}, 1000);

const swMinutes = document.getElementById('sw-minutes');
        const swSeconds = document.getElementById('sw-seconds');
        const swMilliseconds = document.getElementById('sw-milliseconds');
        const startBtn = document.getElementById('startBtn');
        const stopBtn = document.getElementById('stopBtn');
        const resetBtn = document.getElementById('resetBtn');

        let stopwatchInterval; 
        let startTime = 0;
        let elapsedTime = 0;
        let isRunning = false;

        function updateButtonStates() {
            startBtn.disabled = isRunning;
            stopBtn.disabled = !isRunning;
        }

        function formatTime() {
            const totalMilliseconds = elapsedTime + (isRunning ? Date.now() - startTime : 0);
            
            const minutes = Math.floor(totalMilliseconds / 60000);
            const seconds = Math.floor((totalMilliseconds % 60000) / 1000);
            const milliseconds = Math.floor((totalMilliseconds % 1000) / 10);

            swMinutes.textContent = String(minutes).padStart(2, '0');
            swSeconds.textContent = String(seconds).padStart(2, '0');
            swMilliseconds.textContent = String(milliseconds).padStart(2, '0');
        }

        
        function start() {
            if (!isRunning) {
                isRunning = true;
                startTime = Date.now();
                
                stopwatchInterval = setInterval(formatTime, 10);
                updateButtonStates();
            }
        }

        
        function stop() {
            if (isRunning) {
                isRunning = false;
                elapsedTime += Date.now() - startTime;
                clearInterval(stopwatchInterval);
                updateButtonStates();
            }
        }

      
        function reset() {
            stop(); 
            elapsedTime = 0;
            isRunning = false; 
            formatTime(); 
            updateButtonStates(); 
        }

       
        startBtn.addEventListener('click', start);
        stopBtn.addEventListener('click', stop);
        resetBtn.addEventListener('click', reset);

        
        updateButtonStates();