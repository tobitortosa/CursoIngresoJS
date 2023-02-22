/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 08
*/

/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar() {
  let respuesta;
  let sumaPositivos;
  let multiplicacionNegativos;

  sumaPositivos = 0;
  multiplicacionNegativos = 1;

  do {
    numeroIngresado = prompt("Agregar Numero");
    numeroIngresado = parseInt(numeroIngresado);
    if (numeroIngresado > 0) {
      sumaPositivos += numeroIngresado;
    } else {
      multiplicacionNegativos *= numeroIngresado;
    }

    respuesta = confirm("Desea seguir agregando numeros?");
  } while (respuesta);

  document.getElementById("txtIdSuma").value = sumaPositivos;
  document.getElementById("txtIdProducto").value = multiplicacionNegativos;
}
