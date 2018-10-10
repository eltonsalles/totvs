document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.btn-confirmacao').addEventListener('click', event => {
    event.preventDefault();

    // Confirmar o pallet e tirar da lista

    window.location.href = 'confirmacao.html';
  });
});