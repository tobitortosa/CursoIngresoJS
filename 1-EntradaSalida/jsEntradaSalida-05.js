/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  const name = document.getElementById("txtIdNombre").value;
  const edad = document.getElementById("txtIdEdad").value;
  alert(`Usted se llama ${name} y tiene ${edad} años`);
}

// Tobias Valentin Tortosa