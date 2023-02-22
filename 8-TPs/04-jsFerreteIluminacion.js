/*
Tobías Valentin Tortosa
Division Z
Grupo 3 
Trabajo Practico N°4
*/

/*
4.	Para el departamento de iluminación:

Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
*/

function CalcularPrecio() {
  let cantidadDeLamparas;
  let marcaDeLamparita;
  let precioConDescuento;
  let precioFinalXLamparita;
  let precioBruto;
  let totalConDescuento;
  let descuento;

  cantidadDeLamparas = document.getElementById("txtIdCantidad").value;
  cantidadDeLamparas = parseInt(cantidadDeLamparas);
  marcaDeLamparita = document.getElementById("Marca").value;
  precioFinalXLamparita = 35;
  precioBruto = cantidadDeLamparas * precioFinalXLamparita;

  switch (cantidadDeLamparas) {
    case 1:
    case 2:
      precioConDescuento.value = `$${precioBruto}`;
      break;

    case 5:
      switch (marcaDeLamparita) {
        case "ArgentinaLuz":
          descuento = precioBruto * 0.4;
          break;

        default:
          descuento = precioBruto * 0.3;
          break;
      }
    case 4:
      switch (marcaDeLamparita) {
        case "ArgentinaLuz":
        case "FelipeLamparas":
          descuento = precioBruto * 0.25;
          break;
        default:
          descuento = precioBruto * 0.2;
          break;
      }
    case 3:
      switch (marcaDeLamparita) {
        case "ArgentinaLuz":
          descuento = precioBruto * 0.15;
          break;
        case "FelipeLamparas":
          descuento = precioBruto * 0.1;
          break;
        default:
          descuento = precioBruto * 0.05;
      }
  }

  totalConDescuento = precioBruto - descuento;

  if (totalConDescuento > 120) {
    totalConDescuento = totalConDescuento + precioBruto * 0.1;
    alert(`IIBB Usted pago $${precioBruto * 0.1}`);
  }

  document.getElementById(
    "txtIdprecioDescuento"
  ).value = `$${totalConDescuento}`;
}
