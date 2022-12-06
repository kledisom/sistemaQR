

 // api comunication function
  function pegaDados(content) {
    var obj = { code: content };
    fetch("http://localhost:1515/user", {
      method: "POST",
      body: JSON.stringify(obj),
      headers: { "Content-type": "application/json; charset=UTF-8" },
      mode: "cors",
    })
      .then((response) => response.blob())
      .then((result) => {
        const imgURL = URL.createObjectURL(result); // generate url to image location
        const img = `<img src="${imgURL}" />`; // print api response
        qrResult(img); 
      });
  }

  function qrResult(el) {
    let element = document.querySelector("#qr-result");
    element.innerHTML = el;
    element.style.cssText = `
    border: 2px solid #000;
    height: auto;
    width: auto;
    `;
  };


function fnScanEnable() { 
     EB.Barcode.enable({allDecoders:true},fnBarcodeScanned); 
      document.getElementById('input-status').value 
   = "enabled: press HW trigger to capture.";   
}

EB.Barcode.start()

function fnBarcodeScanned(jsonObject) {
  console.log("Barcode Scanned:{" + JSON.stringify(jsonObject) + "}");
  document.getElementById('input-result').value = "barcode: " + jsonObject.data;
}

fnScanEnable()

