'use strict';

document.addEventListener('DOMContentLoaded', function () {
  var inputs = document.querySelectorAll('input');
  inputs.forEach(function (input) {
    var label = document.querySelector('label[for=' + input.id + ']');
    input.addEventListener('input', function () {
      addClassLabel(label);
    });

    input.addEventListener('focus', function () {
      addClassLabel(label);
    });

    input.addEventListener('blur', function () {
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