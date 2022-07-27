var redlight = document.getElementById("redlight");
var yellowlight = document.getElementById("yellowlight");
var greenlight = document.getElementById("greenlight");

function start() {
  if (redlight.classList.contains("on")) {
    redlight.classList.remove("on"); //switch off red
    yellowlight.classList.add("on"); //switch on yellow
  } else if (yellowlight.classList.contains("on")) {
    yellowlight.classList.remove("on"); //switch off yellow
    greenlight.classList.add("on"); //switch on green   
  } else if (greenlight.classList.contains("on")) {
    greenlight.classList.remove("on"); //switch off green
    redlight.classList.add("on"); //switch on red
  }
}