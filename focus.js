const startPauseBtn = document.getElementById("startPauseBtn");
const resetBtn = document.getElementById("resetBtn");
const timeDisplay = document.getElementById("time-display");
const progressCircle = document.getElementById("progress");

let isRunning = false;
let timeLeft = 25 * 60; // Default 25 minutes
let timerInterval;

function updateTimerDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timeDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function updateProgress() {
    const totalDuration = 25 * 60;
    const progress = (timeLeft / totalDuration) * 565;
    progressCircle.style.strokeDashoffset = progress;
}

function startPauseTimer() {
    if (isRunning) {
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Start";
    } else {
        timerInterval = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateTimerDisplay();
                updateProgress();
            } else {
                clearInterval(timerInterval);
                alert("Time's up!");
            }
        }, 1000);
        startPauseBtn.textContent = "Pause";
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timerInterval);
    isRunning = false;
    timeLeft = 25 * 60;
    updateTimerDisplay();
    updateProgress();
    startPauseBtn.textContent = "Start";
}

startPauseBtn.addEventListener("click", startPauseTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimerDisplay();
updateProgress();
