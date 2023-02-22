/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Trabajo Practico N°12
*/

/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso() {
  let edadIngresada;
  let sexoIngresado;
  let estadoCivilIngresado;
  let sueldoBrutoIngresado;
  let legajoIngresado;
  let nacionalidadIngresada;

  do {
    edadIngresada = prompt("Edad, entre 18 y 90 inclusive");
  } while (edadIngresada < 18 || edadIngresada > 90);

  do {
    sexoIngresado = prompt("Sexo, “M” para masculino y “F” para femenino");
  } while (sexoIngresado !== "M" && sexoIngresado !== "F");

  do {
    estadoCivilIngresado = prompt(
      "Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"
    );
  } while (
    estadoCivilIngresado !== "1" &&
    estadoCivilIngresado !== "2" &&
    estadoCivilIngresado !== "3" &&
    estadoCivilIngresado !== "4"
  );

  do {
    sueldoBrutoIngresado = prompt("Sueldo bruto, no menor a 8000.");
    sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
  } while (sueldoBrutoIngresado < 8000);

  do {
    legajoIngresado = prompt(
      "Número de legajo, numérico de 4 cifras, sin ceros a la izquierda."
    );
  } while (legajoIngresado.length !== 4);

  do {
    nacionalidadIngresada = prompt(
      "Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados."
    );
  } while (
    nacionalidadIngresada !== "A" &&
    nacionalidadIngresada !== "E" &&
    nacionalidadIngresada !== "N"
  );

  document.getElementById("txtIdEdad").value = edadIngresada;
  document.getElementById("txtIdSexo").value = sexoIngresado;
  document.getElementById("txtIdEstadoCivil").value = estadoCivilIngresado;
  document.getElementById("txtIdSueldo").value = sueldoBrutoIngresado;
  document.getElementById("txtIdLegajo").value = legajoIngresado;
  document.getElementById("txtIdNacionalidad").value = nacionalidadIngresada;
}
