/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 10
*/

function mostrar() {
  //Genero el número RANDOM entre 1 y 10

  let min;
  let max;
  let ramdomNumber;
  let mensaje;

  min = Math.ceil(1);
  max = Math.floor(10);
  ramdomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  if (ramdomNumber === 9 || ramdomNumber === 10) {
    mensaje = "EXCELENTE";
  } else if (ramdomNumber >= 4) {
    mensaje = "APROBO";
  } else {
    mensaje = "Vamos, la proxima se puede";
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
