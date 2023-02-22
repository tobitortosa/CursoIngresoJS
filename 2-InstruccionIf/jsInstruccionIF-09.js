/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 09
*/

function mostrar() {
  //Genero el número RANDOM entre 1 y 10
  let min;
  let max;
  let ramdomNumber;

  min = Math.ceil(1);
  max = Math.floor(10);
  ramdomNumber = Math.floor(Math.random() * (max - min + 1) + min);

  alert(ramdomNumber);
}
//FIN DE LA FUNCIÓN
