function Converter(){
  var temperaturaElemento = parseFloat(document.getElementById("entrada").value);
  
  var entradaTemperatura = parseInt(document.getElementById("temperatura").value);
  var saidaTemperatura = parseInt(document.getElementById("conversao").value);
  
  var temperaturaConvertida;
  
  if(entradaTemperatura == 1){
    temperaturaConvertida = EntradaCelsius(temperaturaElemento, saidaTemperatura);
  } else if(entradaTemperatura == 2){
    temperaturaConvertida = EntradaFahrenheit(temperaturaElemento, saidaTemperatura);
  } else {
    temperaturaConvertida = EntradaKelvin(temperaturaElemento, saidaTemperatura);
  }
    
  
  
  var elementoTemperaturaConvertida = document.getElementById("temperaturaConvertida");
  elementoTemperaturaConvertida.innerHTML = "A temperatura será: " + temperaturaConvertida;
}

function EntradaCelsius(celsius, x){
  
  if(x == 2){
    //Celsius para Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit.toFixed(2) + " °F";
  } else if(x == 3){
    //Celsius para Kelvin
    let kelvin = celsius + 273.15;
    return kelvin.toFixed(2) + " K";
  } else {
    return celsius.toFixed(2) + " °C";
  }
  
}

function EntradaFahrenheit(fahrenheit, x){
  
  if(x == 1){
    //Fahrenheit para Celsius
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius.toFixed(2) + " °C";
  } else if(x == 3){
    //Fahrenheit para Kelvin
    let kelvin = (fahrenheit - 32) * 5/9 + 273.15;
    return kelvin.toFixed(2) + " K";
  } else {
    return fahrenheit.toFixed(2) + " °F";
  }
  
}

function EntradaKelvin(kelvin, x){
  
  if(x == 1){
    //Kelvin para Celsius
    let celsius = kelvin - 273.15;
    return celsius.toFixed(2) + " °C";
  } else if(x == 2){
    //Kelvin para Fahrenheit
    let fahrenheit = (kelvin - 273.15) * 9/5 + 32;
    return fahrenheit.toFixed(2) + " °F";
  } else {
    return kelvin.toFixed(2) + " K";
  }
  
}