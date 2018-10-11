let alturaTela = (screen.width) >= 600 ? 160 : 400;

Quagga.init({
  inputStream: {
    name: "Live",
    type: "LiveStream",
    constraints: {
      width: 324,
      height: alturaTela,
      facingMode: "environment"
    }
  },
  locator: {
    patchSize: "medium",
    halfSample: true
  },
  numOfWorkers: 4,
  locate: true,
  decoder : {
    readers: ["ean_reader"]
  }
}, function() {
  Quagga.start();
});

Quagga.onDetected(function(result) {
  document.querySelector(".found").innerHTML = result.codeResult.code;
});

document.querySelector('', () => {
  let codigoBarras = document.querySelector('.found');
  codigoBarras.addEventListener('input', () => {
    // Leio o código de barras
    alert(codigoBarras.textContent);
  })
});