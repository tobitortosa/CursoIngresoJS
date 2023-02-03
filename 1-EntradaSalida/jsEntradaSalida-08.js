/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  let dividendoNumber = document.getElementById("txtIdNumeroDividendo").value;
  let divisorNumber = document.getElementById("txtIdNumeroDivisor").value;

  dividendoNumber = parseInt(dividendoNumber);
  divisorNumber = parseInt(divisorNumber);

  let cociente = dividendoNumber / divisorNumber;

  let resto = dividendoNumber - Math.floor(cociente) * divisorNumber;

  alert(`El resto es ${resto} .`);
}

// Tobias Valentin Tortosa