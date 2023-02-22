/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 07
*/

/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
  let contador;
  let acumulador;
  let respuesta;
  let numeroIngresado;

  contador = 0;
  acumulador = 0;
  respuesta = true;

  do {
    numeroIngresado = prompt("Agregar Numero");
    numeroIngresado = parseInt(numeroIngresado);
    acumulador = acumulador + numeroIngresado;
    respuesta = confirm("Desea seguir agregando numeros?");
    contador++;
  } while (respuesta);

  console.log(acumulador, contador);

  document.getElementById("txtIdSuma").value = acumulador;
  document.getElementById("txtIdPromedio").value = acumulador / contador;
}
