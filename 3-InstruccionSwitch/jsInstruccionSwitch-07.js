/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 07
*/

function mostrar() {
  let destinoIngresado;
  let puntoCardinal;
  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Bariloche":
      puntoCardinal = "Este";
      break;
    case "Cataratas":
      puntoCardinal = "Norte";
      break;
    case "Mar del plata":
      puntoCardinal = "Oeste";
      break;
    case "Ushuaia":
      puntoCardinal = "Sur";
      break;
  }
  alert(`Se encuentra al ${puntoCardinal}`);
}
