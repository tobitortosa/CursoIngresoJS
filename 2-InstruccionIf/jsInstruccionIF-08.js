/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 08
*/

function mostrar() {
  //tomo la edad
  let edad;
  let estadoCivil;

  estadoCivil = document.getElementById("estadoCivil").value;
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);

  if (edad >= 18 && estadoCivil === "Soltero") {
    alert("Es soltero y no es menor");
  }
} //FIN DE LA FUNCIÓN
