/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  let precioUno;
  let precioDos;
  let precioTres;
  let suma;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
  alert(suma);
}

function Promedio() {
  let precioUno;
  let precioDos;
  let precioTres;
  let suma;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
  alert(suma / 3);
}

function PrecioFinal() {
  let precioUno;
  let precioDos;
  let precioTres;
  let suma;

  precioUno = document.getElementById("txtIdPrecioUno").value;
  precioDos = document.getElementById("txtIdPrecioDos").value;
  precioTres = document.getElementById("txtIdPrecioTres").value;

  suma = parseInt(precioUno) + parseInt(precioDos) + parseInt(precioTres);
  alert(suma * 1.21);
}

// Tobias Valentin Tortosa