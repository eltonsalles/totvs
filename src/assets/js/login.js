'use strict';

document.addEventListener('DOMContentLoaded', function () {
  setInterval(function () {
    document.querySelector('.container').classList.add('fadeIn');
  }, 500);

  var btn = document.querySelector('.container__form button');
  btn.addEventListener('click', function () {
    // Validar os dados do usuário

    window.location.href = '/lista-pallets.html';
  });
});