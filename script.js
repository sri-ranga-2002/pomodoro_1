let sessionLength = 25;
let breakLength = 5;
let timerInterval;

function adjustSessionLength(change) {
  sessionLength += change;
  if (sessionLength < 1) {
    sessionLength = 1;
  }
  document.getElementById('session-length').innerText = sessionLength;
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
  document.getElementById('timer').innerText = '25:00';
}

function startTimer() {
  let time = sessionLength * 60;
  let minutes, seconds;
  timerInterval = setInterval(function() {
    minutes = Math.floor(time / 60);
    seconds = time % 60;
    document.getElementById('timer').innerText = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    if (time <= 0) {
      clearInterval(timerInterval);
    } else {
      time--;
    }
  }, 1000);
}
