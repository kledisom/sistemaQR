let scanner = new Instascan.Scanner({
    video: document.getElementById("preview"),
  });
  scanner.addListener("scan", (content) => {
    console.log(content);
    pegaDados(content);
  });

  Instascan.Camera.getCameras()
    .then(function (cameras) {
      if (cameras.length > 0) {
       // scanner.start(cameras[0]);
        console.log(cameras);
      } else {
        console.error("não encontrou a camera");
      }
    })
    .catch(function (e) {
      console.error(e);
    });

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
  }
