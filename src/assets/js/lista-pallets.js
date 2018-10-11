'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var close = document.querySelector('.container__title i');
  close.addEventListener('click', function () {
    // Sair
    window.location.href = '/login.html';
  });

  var input = document.querySelector('#codigo-pallet');
  input.addEventListener('input', function () {
    var items = document.querySelectorAll('.lista-pallet__detalhes-produto');

    if (input.value.length > 0) {
      items.forEach(function (item) {
        var codigo = item.querySelector('.codigo');
        var regex = new RegExp(input.value, 'i');

        if (!regex.test(codigo.textContent)) {
          item.classList.add('lista-pallet__detalhes-produto--invisivel');
        } else {
          item.classList.remove('lista-pallet__detalhes-produto--invisivel');
        }
      });
    } else {
      items.forEach(function (item) {
        return item.classList.remove('lista-pallet__detalhes-produto--invisivel');
      });
    }
  });

  var pallets = document.querySelectorAll('.lista-pallet__detalhes-produto');
  pallets.forEach(function (pallet) {
    pallet.addEventListener('click', function () {
      // Ir para leitura do código de barras
      window.location.href = '/leitura-codigo-barras.html';
    });
  });
});