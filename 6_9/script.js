console.log(document.querySelector('#h2'));

const testTextField = document.querySelector('#testTextField');

let clickCounter = 0;

testTextField.addEventListener('click', function() {
    clickCounter = clickCounter + 1;
    this.textContent = 'this is block ' + clickCounter + ' more!';
})
// обработка по нужной кнопке//
document.addEventListener('click', (event) => {
    if (event.target.nodeName === 'BUTTON') {
        console.log('clicked', event.target.textContent);
    }
})
//обработчик на кнопку//
let button = document.querySelector('button');
let para = document.querySelector('p');

// клик на мышь, элемент WHICH, какая клавиша, левая или правая? //
button.addEventListener('mousedown', (event) => {
console.log('обработчик кнопки')

    if (event.which === 1){
        event.stopPropagation();
    }
});

para.addEventListener('mousedown', () => {
    console.log('Обработка параграфа')
})

function once() {
    console.log('O, YES!');
    button.removeEventListener('click', once);
}

button.addEventListener('click', once);

let link = document.querySelector('a');
link.addEventListener('click', (event) => {
    console.log('Фигушки')
    event.preventDefault()
})

addEventListener('keydown', (event) => {
    if (event.keyCode === 67) {
        document.body.style.background = 'violet';
    }
})
addEventListener('keyup', (event) => {
    if (event.keyCode === 67) {
        document.body.style.background = '';
    }
})

// функция таймера, на примере окрашивания экрана//
document.body.style.background = 'lightblue';
setTimeout(function() {
    document.body.style.background = 'yellow';
}, 5000);