'use strict';

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.btn-confirmacao').addEventListener('click', function (event) {
    event.preventDefault();

    // Confirmar o pallet e tirar da lista

    window.location.href = 'confirmacao.html';
  });
});