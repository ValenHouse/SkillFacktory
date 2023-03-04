const testTextField1 = document.querySelector('#testTextField1');
const testTextField2 = document.querySelector('#testTextField2');
const testTextField3 = document.querySelector('#testTextField3');

testTextField1.onclick = function() {
    console.log('This block')
}

testTextField2.addEventListener('click', function(event) {
    this.testContent = 'Это событие:' + event.type;
    console.log('X' + event.clientX, 'Y' + event.clientY);
})

let clickcounter =0;

testTextField1.addEventListener('click', function() {
    clickcounter = clickcounter +1;
    this.textContent = 'wou' + clickcounter + ' more!';
})

testTextField2.addEventListener('click', function() {
    clickcounter = clickcounter +1;
    this.textContent = 'Nou' + clickcounter + ' more!';
})

testTextField3.addEventListener('click', function(event) {
    this.textContent = 'Вы точно хотите перейти на Яндекс?';
    event.preventDefault();
})