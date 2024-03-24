let modalButton = document.querySelector('.button-nav');
let modalForm = document.querySelector('.modal-container');
let modalformCloseButton = document.querySelector('.modal-close-button')


modalButton.onclick = function () {
  modalForm.classList.remove('modal-close');
}

modalformCloseButton.onclick = function () {
  modalForm.classList.add('modal-close');
}
