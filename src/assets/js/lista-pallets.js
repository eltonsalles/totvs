document.addEventListener('DOMContentLoaded', () => {
  let close = document.querySelector('.container__title i');
  close.addEventListener('click', () => {
    // Sair
    window.location.href = '/login.html';
  });


});