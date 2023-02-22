/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 08
*/

function mostrar() {
  let destinoIngresado;
  let clima;

  destinoIngresado = document.getElementById("txtIdDestino").value;

  switch (destinoIngresado) {
    case "Bariloche":
    case "Ushuaia":
      clima = "Frio";
      break;
    case "Mar del plata":
    case "Cataratas":
      clima = "Calor";
      break;
  }

  alert(`En ${destinoIngresado} hace ${clima}`);
}
