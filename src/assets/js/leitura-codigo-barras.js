const codeReader = new ZXing.BrowserBarcodeReader(ZXing.BarcodeFormat.EAN_13);

codeReader.getVideoInputDevices()
  .then(videoInputDevices => {
    const firstDeviceId = videoInputDevices[0].deviceId;

    codeReader.decodeFromInputVideoDevice(firstDeviceId, 'video')
      .then(result => {
        document.querySelector('.found').textContent = result.text;
      })
      .catch(err => console.error(err));
  })
  .catch(err => console.error(err));