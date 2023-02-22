/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Ejercicio 10
*/

/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar() {
  let respuesta;
  let numeroIngresado;
  let sumaNegativos;
  let sumaPositivos;
  let contadorDePositivos;
  let contadorDeNegativos;
  let cantidadDeCeros;
  let cantidadNumerosPares;
  let cantidadNumerosImpares;
  let numeroMaximo;
  let numeroMinimo;
  let bandera;

  sumaNegativos = 0;
  sumaPositivos = 0;
  contadorDePositivos = 0;
  contadorDeNegativos = 0;
  cantidadDeCeros = 0;
  cantidadNumerosPares = 0;
  cantidadNumerosImpares = 0;
  bandera = true;
  respuesta = true;

  do {
    numeroIngresado = prompt("Agregar Numero");
    numeroIngresado = parseInt(numeroIngresado);

    if (numeroIngresado === 0) {
      cantidadDeCeros++;
    } else if (numeroIngresado > 0) {
      sumaPositivos += numeroIngresado;
      contadorDePositivos++;
    } else {
      sumaNegativos += numeroIngresado;
      contadorDeNegativos++;
    }

    if (numeroIngresado % 2 === 0) {
      cantidadNumerosPares++;
    } else {
      cantidadNumerosImpares++;
    }

    if (bandera || numeroIngresado > numeroMaximo) {
      numeroMaximo = numeroIngresado;
    }

    if (bandera || numeroIngresado < numeroMinimo) {
      numeroMinimo = numeroIngresado;
    }

    bandera = false;

    respuesta = confirm("Desea seguir agregando numeros?");
  } while (respuesta);

  document.write(`
  La suma de positivos es : ${sumaPositivos} <br>
  La suma de negativos es : ${sumaNegativos} <br>
  La cantidad de positivos es de : ${contadorDePositivos} <br>
  La cantidad de negativos es de : ${contadorDeNegativos} <br>
  La cantidad de ceros es de : ${cantidadDeCeros} <br>
  La cantidad de numeros pares es de: ${cantidadNumerosPares} <br>
  La cantidad de numeros impares es de: ${cantidadNumerosImpares} <br>
  Promedio de numeros positivos es de:  ${
    sumaPositivos / contadorDePositivos
  } <br>
  Promedio de numeros negativos es de:  ${
    sumaNegativos / contadorDeNegativos
  } <br>
  Diferencia entre positivos y negativos: ${sumaPositivos - sumaNegativos} <br>
  Porcentaje de números positivos: ${
    (contadorDePositivos /
      (contadorDeNegativos + contadorDePositivos + cantidadDeCeros)) *
    100
  } <br>
  Porcentaje de números negativos: ${
    (contadorDeNegativos /
      (contadorDeNegativos + contadorDePositivos + cantidadDeCeros)) *
    100
  } <br>
  El mas grande de los positivos: ${numeroMaximo} <br>
  El mas grande de los negativos: ${numeroMinimo}
  `);
}
