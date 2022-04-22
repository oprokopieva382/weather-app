function displayTemperature(responce) {
  console.log(responce.data);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(responce.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = responce.data.name;
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = responce.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = responce.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(responce.data.wind.speed);
}

let apiKey = "31062848022c12a9b5c54447286aa8b2";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
