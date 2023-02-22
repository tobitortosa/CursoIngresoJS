/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  let fahrenheitACelsius;
  let celsius;

  fahrenheitACelsius = document.getElementById("txtIdTemperatura").value;
  celsius = (fahrenheitACelsius - 32) / 1.8;

  alert(
    `${fahrenheitACelsius} grados Fahrenheit son ${celsius} grados Celsius`
  );
}

function CentigradosFahrenheit() {
  let celsiusAFahrenheit;
  let fahrenheit;
  celsiusAFahrenheit = document.getElementById("txtIdTemperatura").value;
  fahrenheit = celsiusAFahrenheit * 1.8 + 32;

  alert(
    `${celsiusAFahrenheit} grados Celsius son ${fahrenheit} grados Fahrenheit`
  );
}

// Tobias Valentin Tortosa