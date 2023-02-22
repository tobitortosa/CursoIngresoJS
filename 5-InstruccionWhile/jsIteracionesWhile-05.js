/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 05
*/

/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
  let sexoIngresado;
  let sexoValido;

  sexoValido = document.getElementById("txtIdSexo");
  sexoIngresado = prompt("Ingrese F o M.");

  while (sexoIngresado !== "f" && sexoIngresado !== "m") {
    alert("Sexo no Valido");
    sexoIngresado = prompt("ingrese f o m .");
  }

  sexoValido.value = sexoIngresado;
}
