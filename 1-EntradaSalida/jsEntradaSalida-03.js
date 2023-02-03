/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar() {
  let value = document.getElementById("txtIdNombre").value;
  value = parseInt(value);

  let importeBruto = value;
  let iva = value * 1.21 - value;
  let importeConIva = value * 1.21;
  let valorDelDescuento = value * 1.05 - value;
  let totalAPagar = importeConIva - valorDelDescuento;

  alert(`
  Importe Bruto: $${importeBruto}
  Iva: $${iva}
  Importe con Iva: $${importeConIva}
  Valor del Descuento: $${valorDelDescuento}
  Total a Pagar: $${totalAPagar}
  `);
}

// Tobias Valentin Tortosa
