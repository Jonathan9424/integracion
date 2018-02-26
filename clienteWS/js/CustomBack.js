document.getElementById("boton").onclick = function () {
  var valorUno = document.getElementById("uno").value;
  var valorDos = document.getElementById("dos").value;

  valorUno = parseInt(valorUno);
  valorDos = parseInt(valorDos);
  var res = suma(valorUno, valorDos);
  document.getElementById("resultado").innerHTML = res;
  netBeans();
};

function suma(valorUno, valorDos) {
  return valorUno + valorDos;
}

function creaAjax() {
  var obj = new XMLHttpRequest();
  obj.open("post", "http://localhost:8080/WebService-0.0.1-SNAPSHOT/calcula HTTP/1.1", true);
  obj.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
  obj.onreadystatechange = function () {
    if (obj.readyState == 4) {
      if (obj.status == 200) {
        var recibe = obj.responseXML;
        document.getElementById("res").innerHTML = "hola" + recibe;
      }
    }
  };

  var xml = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:web="http://WebService.integracion.com/">' +
    '<soapenv:Header/>' +
    '<soapenv:Body>' +
    '<web:iva>' +
    '<arg0>30000</arg0>' +
    '<arg1>19</arg1>' +
    '</web:iva>' +
    '</soapenv:Body>' +
    '</soapenv:Envelope>';

  obj.send(xml);
}

function netBeans() {
  var obj = new XMLHttpRequest();
  obj.open("post", "http://localhost:8080/sandraDos/Iva?WSDL", true);
  obj.setRequestHeader("Content-Type", "text/xml;charset=UTF-8");
  obj.onreadystatechange = function () {
    if (obj.readyState == 4) {
      if (obj.status == 200) {
        var recibe = obj.responseXML;
        document.getElementById("res").innerHTML = "hola" + recibe;
      }
    }
  };

  var xml = '<?xml version="1.0" encoding="UTF-8"?><S:Envelope xmlns:S="http://schemas.xmlsoap.org/soap/envelope/" xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<SOAP-ENV:Header/>' +
    '<S:Body>' +
    '<ns2:calcula xmlns:ns2="http://ws.app.integracio.com/">' +
    '<arg0>30000</arg0>' +
    '<arg1>19</arg1>' +
    '</ns2:calcula>' +
    '</S:Body>' +
    '</S:Envelope>';

  obj.send(xml);
}

function ajac() {
  $.ajax({});
}