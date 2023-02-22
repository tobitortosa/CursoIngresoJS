/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar() {
  let altura;
  let edad;

  altura = document.getElementById("txtIdNombre").value;
  altura = parseInt(altura);
  edad = document.getElementById("txtIdEdad").value;
  edad = parseInt(edad);

  if (altura < 120) {
    alert("No puede subirse a la montaña rusa");
  } else {
    if (edad < 18 || edad > 80) {
      alert("El monto a pagar es de $200");
    } else {
      alert("El monto a pagar es de $400");
    }
  }
}

// Tobias Valentin Tortosa
