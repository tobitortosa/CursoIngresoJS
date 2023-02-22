/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 10
*/

function mostrar() {
  let estacionIngresada;
  let destinoIngresado;
  let viaje;
  let mensaje;

  estacionIngresada = document.getElementById("txtIdEstacion").value;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (estacionIngresada) {
    case "Invierno":
      switch (destinoIngresado) {
        case "Bariloche":
          viaje = true;
          break;
        default:
          viaje = false;
          break;
      }
      break;
    case "Verano":
      switch (destinoIngresado) {
        case "Mar del plata":
        case "Cataratas":
          viaje = true;
          break;
        default:
          viaje = false;
          break;
      }
      break;
    case "Otoño":
      viaje = true;
      break;
    case "Primavera":
      switch (destinoIngresado) {
        case "Bariloche":
          viaje = false;
          break;
        default:
          viaje = true;
          break;
      }
      break;
  }

  switch (viaje) {
    case true:
      mensaje = "Se viaja";
      break;
    case false:
      mensaje = "No se viaja";
      break;
  }

  alert(mensaje);
}
