/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 03
*/

/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar() {
  let claveIngresada;
  let claveCorrecta;

  claveCorrecta = "utn750";
  claveIngresada = prompt("ingrese el número clave.");

  while (claveIngresada !== claveCorrecta) {
    alert("Clave no Valida");
    claveIngresada = prompt("ingrese el número clave.");
  }
}
