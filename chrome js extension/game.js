// Game Variables
let score = 0;
let timeLeft = 10;
let isGameRunning = false;
let timerInterval;

// DOM Elements
const clickBtn = document.getElementById('click-btn');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-btn');

// Disable click button initially
clickBtn.disabled = true;

// Click Button Event
clickBtn.addEventListener('click', () => {
    if (isGameRunning) {
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    }
});

// Start Game Button Event
startBtn.addEventListener('click', startGame);

function startGame() {
    // Reset score and time
    score = 0;
    timeLeft = 10;
    scoreDisplay.textContent = `Score: ${score}`;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;

    // Enable the click button
    clickBtn.disabled = false;

    // Start the game
    isGameRunning = true;
    startBtn.disabled = true;

    // Start the timer
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timeLeft--;
    timerDisplay.textContent = `Time Left: ${timeLeft}`;

    if (timeLeft <= 0) {
        endGame();
    }
}

function endGame() {
    isGameRunning = false;
    clearInterval(timerInterval);
    clickBtn.disabled = true;
    startBtn.disabled = false;
    alert(`Game over! Your final score is: ${score}`);
}
