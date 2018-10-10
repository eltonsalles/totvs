document.addEventListener('DOMContentLoaded', () => {
  let close = document.querySelector('.container__title i');
  close.addEventListener('click', () => {
    // Sair
    window.location.href = '/login.html';
  });

  let input = document.querySelector('#codigo-pallet');
  input.addEventListener('input', () => {
    let items = document.querySelectorAll('.lista-pallet__detalhes-produto');

    if (input.value.length > 0) {
      items.forEach(item => {
        let codigo = item.querySelector('.codigo');
        let regex = new RegExp(input.value, 'i');

        if (!regex.test(codigo.textContent)) {
          item.classList.add('lista-pallet__detalhes-produto--invisivel');
        } else {
          item.classList.remove('lista-pallet__detalhes-produto--invisivel');
        }
      });
    } else {
      items.forEach(item => item.classList.remove('lista-pallet__detalhes-produto--invisivel'));
    }
  });

  let pallets = document.querySelectorAll('.lista-pallet__detalhes-produto');
  pallets.forEach(pallet => {
    pallet.addEventListener('click', () => {
      // Ir para leitura do código de barras
      window.location.href = '/leitura-codigo-barras.html';
    });
  });
});