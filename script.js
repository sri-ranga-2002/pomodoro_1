let sessionLength = 25;
let breakLength = 5;
let timerInterval;
let currentTime = sessionLength * 60;
let timerRunning = false;

function adjustSessionLength(change) {
  sessionLength += change;
  if (sessionLength < 1) {
    sessionLength = 1;
  }
  document.getElementById('session-length').innerText = sessionLength;
  if (!timerRunning) {
    currentTime = sessionLength * 60;
    updateTimerDisplay();
  }
}

function adjustBreakLength(change) {
  breakLength += change;
  if (breakLength < 1) {
    breakLength = 1;
  }
  document.getElementById('break-length').innerText = breakLength;
}

function resetTimer() {
  clearInterval(timerInterval);
  currentTime = sessionLength * 60;
  updateTimerDisplay();
}

function startTimer() {
  if (!timerRunning) {
    timerInterval = setInterval(function() {
      if (currentTime <= 0) {
        clearInterval(timerInterval);
        // Handle break time here
        currentTime = breakLength * 60;
      } else {
        currentTime--;
      }
      updateTimerDisplay();
    }, 1000);
    timerRunning = true;
  }
}

function updateTimerDisplay() {
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
