var back = function() {
  var valorUno = document.getElementById("uno");
  var valorDos = document.getElementById("dos");

  var res = valorUno + "" + valorDos;

  document.getElementById("respuesta").innerHTML = "<p>" + res + "</p>";
};
