/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  let numeroUno = document.getElementById("txtIdNumeroUno").value;
  let numeroDos = document.getElementById("txtIdNumeroDos").value;
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  alert(`La suma es de ${numeroUno + numeroDos}`);
}

function restar() {
  let numeroUno = document.getElementById("txtIdNumeroUno").value;
  let numeroDos = document.getElementById("txtIdNumeroDos").value;
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  alert(`La resta es de ${numeroUno - numeroDos}`);
}

function multiplicar() {
  let numeroUno = document.getElementById("txtIdNumeroUno").value;
  let numeroDos = document.getElementById("txtIdNumeroDos").value;
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  alert(`La multiplicacion es de ${numeroUno * numeroDos}`);
}

function dividir() {
  let numeroUno = document.getElementById("txtIdNumeroUno").value;
  let numeroDos = document.getElementById("txtIdNumeroDos").value;
  numeroUno = parseInt(numeroUno);
  numeroDos = parseInt(numeroDos);
  alert(`La division es de ${numeroUno / numeroDos}`);
}

// Tobias Valentin Tortosa