/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 06
*/

function mostrar() {
  //tomo la edad
  let edad;
  let mensaje;

  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);

  if (edad > 17) {
    mensaje = "Persona Mayor";
  } else if (edad < 13) {
    mensaje = "Niño";
  } else {
    mensaje = "Adolecente";
  }

  alert(mensaje);
} //FIN DE LA FUNCIÓN
