/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 04
*/

/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar() {
  let numeroIngresado;
  let numeroValido;

  numeroValido = document.getElementById("txtIdNumero");
  numeroIngresado = prompt("ingrese un número entre 0 y 9.");

  while (numeroIngresado < 0 || numeroIngresado > 9) {
    alert("Numero no Valido");
    numeroIngresado = prompt("ingrese un número entre 0 y 9.");
  }
  numeroValido.value = numeroIngresado;
}
