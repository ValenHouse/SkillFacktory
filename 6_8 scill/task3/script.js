const trafficLightEl = document.querySelector('#trafficLight');

function makeGreen() {
    trafficLightEl.style.background = ('green');
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

trafficLightEl.addEventListener('click', makeGreen);

function handleClick() {
    console.log('click');
  }
  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });