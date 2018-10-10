document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.form__limpar').addEventListener('click', () => {
    document.querySelector('#codigo-barras').value = '';
  });

  document.querySelector('.form__btn').addEventListener('click', () => {
    // Faz a validação do pallet
    window.location.href = '/validacao.html';
  });
});