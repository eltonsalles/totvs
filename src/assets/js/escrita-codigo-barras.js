'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.form__limpar').addEventListener('click', function () {
    document.querySelector('#codigo-barras').value = '';
  });

  document.querySelector('.form__btn').addEventListener('click', function () {
    // Faz a validação do pallet
    window.location.href = '/validacao.html';
  });
});