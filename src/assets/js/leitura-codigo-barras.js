Quagga.init({
  inputStream: {
    name: "Live",
    type: "LiveStream",
    constraints: {
      width: 324,
      height: 400,
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