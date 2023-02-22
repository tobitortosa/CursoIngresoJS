/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 06
*/

function mostrar() {
  let contador;
  let acumulador;
  let numeroIngresado;

  contador = 0;
  acumulador = 0;

  while (contador < 5) {
    numeroIngresado = prompt("Ingrese un Numero");
    numeroIngresado = parseInt(numeroIngresado);
    acumulador = acumulador + numeroIngresado;
    contador++;
  }

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / contador;
}
