/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 05
*/

function mostrar() {
  let edad;

  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);

  if (edad < 13 || edad > 17) {
    alert("La Persona No es Adolecente");
  }
}

