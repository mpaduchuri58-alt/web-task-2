let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;
let running = false;
function updateDisplay() {

  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  document.getElementById("display").innerText =
    `${h}:${m}:${s}`;
}


function startStopwatch() {

  if (!running) {

    running = true;

    timer = setInterval(() => {

      seconds++;

      if (seconds == 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes == 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();

    }, 1000);
  }
}


function pauseStopwatch() {
  running = false;
  clearInterval(timer);
}


function resetStopwatch() {

  running = false;
  clearInterval(timer);

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();

  document.getElementById("laps").innerHTML = "";
}


function lapTime() {

  if (running) {

    let lap = document.createElement("li");

    lap.innerText =
      document.getElementById("display").innerText;

    document.getElementById("laps").appendChild(lap);
  }
}
