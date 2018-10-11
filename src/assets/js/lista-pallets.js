'use strict';

document.addEventListener('DOMContentLoaded', function () {
//   <section class="lista-pallet__detalhes-produto">
//     <img src="assets/images/pallet.svg" alt="pen drive" class="img-responsive">
//     <div>
//        <span>Código do pallet</span>
//        <p class="codigo">ABCDE445566</p>
//        <span>Produto</span>
//        <p>Pen drive Multilaser Twist 2 16GB</p>
//     </div>
//   </section>
  var listaPallet = document.querySelector('.lista-pallet');
  for (var i = 0; i < 5; i++) {
    var section = document.createElement('section');
    var img = document.createElement('img');
    var div = document.createElement('div');
    var spanPallet = document.createElement('span');
    var pPallet = document.createElement('p');
    var spanProduto = document.createElement('span');
    var pProduto = document.createElement('p');

    spanPallet.textContent = 'Código do Pallet';
    pPallet.textContent = 'ABCDE';
    pPallet.classList.add('codigo');
    spanProduto.textContent = 'Produto';
    pProduto.textContent = 'Pen drive';
    div.appendChild(spanPallet);
    div.appendChild(pPallet);
    div.appendChild(spanProduto);
    div.appendChild(pProduto);

    img.setAttribute('src', 'assets/images/pallet.svg');
    img.classList.add('img-responsive');

    section.classList.add('lista-pallet__detalhes-produto');
    section.appendChild(img);
    section.appendChild(div);

    listaPallet.appendChild(section);
  }

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