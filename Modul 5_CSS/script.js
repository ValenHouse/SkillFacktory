let modal = document.querySelector('dialog');
document.querySelector('#open').onclick = function() {
    modal.showModal();
}

document.querySelector('#close').onclick = function() {
    modal.close();
}