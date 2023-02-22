/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 09
*/

function mostrar() {
  let estacionIngresada;
  let destinoIngresado;
  let precioBruto;
  let porcentajeDeAumento;
  let porcentajeDeDescuento;
  let precioFinal;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  precioBruto = 15000;
  porcentajeDeAumento = 0;
  porcentajeDeDescuento = 0;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentajeDeAumento = 20;
          break;
        case "Cataratas":
        case "Cordoba":
          porcentajeDeDescuento = 10;
          break;
        case "Mar del plata":
          porcentajeDeDescuento = 20;
          break;
      }
      break;
    case "Verano":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentajeDeDescuento = 20;
          break;
        case "Cataratas":
        case "Cordoba":
          porcentajeDeAumento = 10;
          break;
        case "Mar del plata":
          porcentajeDeAumento = 20;
          break;
      }
      break;
    case "Otoño":
    case "Primavera":
      switch (destinoIngresado) {
        case "Bariloche":
          porcentajeDeAumento = 10;
          break;
        case "Cataratas":
          porcentajeDeAumento = 10;
          break;
        case "Mar del plata":
          porcentajeDeAumento = 10;
          break;
      }
      break;
  }

  precioFinal =
    precioBruto +
    (precioBruto * porcentajeDeAumento) / 100 -
    (precioBruto * porcentajeDeDescuento) / 100;

  alert(`$${precioFinal}`);
}
