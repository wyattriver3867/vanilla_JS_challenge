// API_KEY 변수는 보안을 위해 key.js에 저장되어 .gitignore 처리를 받음.

function onGeoOk(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const test = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-location");
      const weather = document.querySelector(".weather-climate");
      const weatherDesc = document.querySelector(".weather-climate-detail");
      const temp = document.querySelector(".weather-temp-ave");
      const tempMax = document.querySelector(".weather-temp-max");
      const tempMin = document.querySelector(".weather-temp-min");
      const humidity = document.querySelector(".weather-humid");

      city.innerText = "";
      city.innerText = `${data.name}`;
      weather.innerText = "";
      weather.innerText = `${data.weather[0].main}`;
      weatherDesc.innerText = `${data.weather[0].description}`;
      temp.innerText = `• Temp Ave : ${data.main.temp}°C`;
      tempMax.innerText = `• Temp Max : ${data.main.temp_max}°C`;
      tempMin.innerText = `• Temp Min : ${data.main.temp_min}°C`;
      humidity.innerText = `• Humidity : ${data.main.humidity}%`;
    });
}

function onGeoError() {
  alert("Can't load weather data in your location.");
  const city = document.querySelector(".weather-location");
  city.innerText = `Can't find your location`;
  const weather = document.querySelector(".weather-climate");
  weather.innerText = `Failed`;
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
