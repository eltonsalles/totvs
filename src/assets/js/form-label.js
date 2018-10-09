document.addEventListener('DOMContentLoaded', () => {
  let inputs = document.querySelectorAll('input');
  inputs.forEach(input => {
    let label = document.querySelector(`label[for=${input.id}]`);
    input.addEventListener('input', () => {
      addClassLabel(label);
    });

    input.addEventListener('focus', () => {
      addClassLabel(label);
    });

    input.addEventListener('blur', () => {
      if (!input.value) {
        removeClassLabel(label);
      }
    });
  });
});

function addClassLabel(label) {
  label.classList.add('container-input__label--change-label-position');
}

function removeClassLabel(label) {
  label.classList.remove('container-input__label--change-label-position');
}