let nameUser=prompt("Здравствуйте, как вас зовут?", "Представьтесь");

    alert("Рад вас видеть, "+ nameUser);

if (confirm ('Вы уверены?')) {
    alert ("Я очень рад, что Вы уверены!") ;  
    } else {
    alert ("Жаль,\nчто Вы не уверены...");  
    }  

const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода инфо в консоль');
})

let x = confirm('Нажмите ОК или Отмена');
if (x){
alert('OK')
}else{alert('Отмена')}

function temperatureConverter(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelcius").innerHTML=(valNum-32)/1.8;
  }
