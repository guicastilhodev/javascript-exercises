const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * 5/9;
  let celsiusFormated = Number.isInteger(celsius) ? parseInt(celsius) : parseFloat(celsius.toFixed(1));
  return celsiusFormated;
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (9/5 * temp) + 32;
  let fahrenheitFormated = Number.isInteger(fahrenheit) ?  parseInt(fahrenheit) : parseFloat(fahrenheit.toFixed(1));
  return fahrenheitFormated;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
