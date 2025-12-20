let seconds = 0;
let timer = null;
let running = false;
let lapCount = 1;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

document.getElementById("start").addEventListener("click", start);
document.getElementById("pause").addEventListener("click", pause);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("lap").addEventListener("click", lap);

function updateTime()
{
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;

  display.textContent =
    String(hrs).padStart(2, '0') + ':' +
    String(mins).padStart(2, '0') + ':' +
    String(secs).padStart(2, '0');
}

function start() {
  if (!running) {
    running = true;
    timer = setInterval(() => {
      seconds++;
      updateTime();
    }, 1000);
  }
}
function pause() {
  running = false;
  clearInterval(timer);
}
function reset() {
  pause();
  seconds = 0;
  lapCount = 1;
  updateTime();
  laps.innerHTML = "";
}
function lap() 
{
  if (running)
  {
    const p = document.createElement("p");
    p.textContent = "Lap " + lapCount + " - " + display.textContent;
    laps.appendChild(p);
    lapCount++;
  }
}