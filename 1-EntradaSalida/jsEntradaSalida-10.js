/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
  let importe = document.getElementById("txtIdImporte").value;
  let resultado = document.getElementById("txtIdResultado");

  importe = parseInt(importe);
  let importeConDescuento = Math.floor(importe - (importe * 1.25 - importe));
  resultado.value = importeConDescuento;
}
