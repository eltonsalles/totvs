document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => {
    document.querySelector('.container').classList.add('fadeIn');
  }, 500);

  let btn = document.querySelector('.container__form button');
  btn.addEventListener('click', () => {
    // Validar os dados do usuário

    window.location.href = '/lista-pallets.html';
  });
});