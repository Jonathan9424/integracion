document.getElementById("boton").onclick = function() {
  var valorUno = document.getElementById("uno").value;
  var valorDos = document.getElementById("dos").value;

  valorUno = parseInt(valorUno);
  valorDos = parseInt(valorDos);
  var res = suma(valorUno, valorDos);
  document.getElementById("resultado").innerHTML = res;
};

function suma(valorUno, valorDos) {
  return valorUno + valorDos;
}

function creaAjax() {
  var obj = new XMLHttpRequest();
  obj.open("POST", "", true);
  obj.onreadystatechange = function() {
    if (obj.readyState == 4) {
      if (obj.status == 200) {
        var elemento = document.createElement(
          "<p>" + obj.responseText + "</p>"
        );
        document.getElementById("resultado").firstChild.appendChild(elemento);
      }
    }
  };



}
