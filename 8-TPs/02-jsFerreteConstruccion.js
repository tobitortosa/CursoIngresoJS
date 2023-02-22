/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  let largo;
  let ancho;
  let radio;
  let cantidadDeAlambreAComprar;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  radio = document.getElementById("txtIdRadio").value;
  cantidadDeAlambreAComprar = (parseInt(largo) * 2 + parseInt(ancho) * 2) * 3;

  alert(`Cantidad de Alambre a Comprar: ${cantidadDeAlambreAComprar} metros`);
}

function Circulo() {
  // Perímetro = 2(pi) por radio
  let largo;
  let ancho;
  let radio;
  let cantidadDeAlambreAComprar;
  let perimetro;
  let diametro;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  radio = document.getElementById("txtIdRadio").value;

  diametro = 2 * parseInt(radio);
  perimetro = diametro * Math.PI;
  cantidadDeAlambreAComprar = perimetro * 3;

  alert(`Cantidad de Alambre a Comprar: ${cantidadDeAlambreAComprar} metros`);
}

function Materiales() {
  let largo;
  let ancho;
  let radio;
  let bolsasDeCal;
  let bolsasDeCemento;
  let area;

  largo = document.getElementById("txtIdLargo").value;
  ancho = document.getElementById("txtIdAncho").value;
  radio = document.getElementById("txtIdRadio").value;

  area = parseInt(largo) * parseInt(ancho);
  bolsasDeCal = parseInt(area) * 3;
  bolsasDeCemento = parseInt(area) * 2;

  alert(`
  Se necesitan:
  ${bolsasDeCemento} bolsas de Cemento.  
  ${bolsasDeCal} bolsas de Cal.
  `);
}

// Tobias Valentin Tortosa
