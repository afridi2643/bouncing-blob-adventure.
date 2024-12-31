const ball = document.getElementById("ball");
const gameArea = document.getElementById("gameArea");
const scoreBoard = document.getElementById("scoreBoard");

let gravity = 0.5;
let velocity = 0;
let isGameOver = false;
let score = 0;
let ballY = 50; // Initial ball position (from bottom)

// Game loop to update ball position
function updateGame() {
  if (isGameOver) return;

  // Apply gravity
  velocity -= gravity;
  ballY += velocity;

  // Ball hits the ground
  if (ballY <= 0) {
    ballY = 0;
    endGame();
  }

  // Prevent ball from flying out of bounds
  const maxBallHeight = gameArea.clientHeight - ball.offsetHeight;
  if (ballY > maxBallHeight) {
    ballY = maxBallHeight;
    velocity = 0;
  }

  // Update ball position
  ball.style.bottom = `${ballY}px`;

  requestAnimationFrame(updateGame);
}

// Bounce ball on click
gameArea.addEventListener("click", () => {
  if (isGameOver) return;
  velocity = 10;
  score++;
  scoreBoard.textContent = `Score: ${score}`;
});

// End game logic
function endGame() {
  isGameOver = true;
  scoreBoard.textContent = `Game Over! Final Score: ${score}`;
  alert("Game Over! Refresh to play again.");
}

// Start the game
updateGame();

