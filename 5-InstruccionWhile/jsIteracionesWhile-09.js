/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 09
*/

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar() {
  let numeroIngresado;
  let numeroMaximo;
  let numeroMinimo;
  let respuesta;
  let bandera;

  bandera = true;
  respuesta = true;

  while (respuesta) {
    numeroIngresado = prompt("Agregar Numero");
    numeroIngresado = parseInt(numeroIngresado);

    if (bandera || numeroIngresado > numeroMaximo) {
      numeroMaximo = numeroIngresado;
    }

    if (bandera || numeroIngresado < numeroMinimo) {
      numeroMinimo = numeroIngresado;
    }

    bandera = false;

    respuesta = confirm("Desea seguir agregando numeros?");
  }

  document.getElementById("txtIdMaximo").value = numeroMaximo;
  document.getElementById("txtIdMinimo").value = numeroMinimo;
}
