window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('genderOutput').innerText=initPerson.gender;
    document.getElementById('firstNameOutput').innerText = initPerson.name[0];
    document.getElementById('surnameOutput').innerText = initPerson.name[1];
    document.getElementById('patronymicOutput').innerText = initPerson.name[2];
    document.getElementById('professionOutput').innerText = initPerson.name[3];
    document.getElementById('birthDateOutput').innerText=initPerson.birthDate;
};

document.getElementById('reboot').addEventListener('click',function(){
    window.location.reload();
});

document.getElementById('clear').addEventListener('click',function () {
    document.getElementById('genderOutput').innerText= 'пол';
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('professionOutput').innerText = 'профессия';
    document.getElementById('birthDateOutput').innerText= 'дата рождения';
})