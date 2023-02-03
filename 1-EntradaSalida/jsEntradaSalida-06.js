/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  let numberoUno = document.getElementById("txtIdNumeroUno").value;
  let numberoDos = document.getElementById("txtIdNumeroDos").value;

  let suma = parseInt(numberoUno) + parseInt(numberoDos);

  alert(`La suma es ${suma}`);
}

// Tobias Valentin Tortosa
