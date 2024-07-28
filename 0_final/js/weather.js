// API_KEY 변수는 보안을 위해 key.js에 저장되어 .gitignore 처리를 받음.

function onGeoOk(data) {
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

  const test = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector(".weather-location");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const weatherDesc = document.querySelector("#weather span:nth-child(3)");
      const temp = document.querySelector("#weather span:nth-child(4)");
      const tempMax = document.querySelector("#weather span:nth-child(5)");
      const tempMin = document.querySelector("#weather span:nth-child(6)");
      const humidity = document.querySelector("#weather span:nth-child(7)");

      city.innerText = `${data.name}`;
      weather.innerText = `날씨 ${data.weather[0].main}`;
      weatherDesc.innerText = `${data.weather[0].description}한 날입니다.`;
      temp.innerText = `평균 온도는 ${data.main.temp}°C입니다.`;
      tempMax.innerText = `최고 온도는 ${data.main.temp_max}°C입니다.`;
      tempMin.innerText = `최저 온도는 ${data.main.temp_min}°C입니다.`;
      humidity.innerText = `습도는 ${data.main.humidity}%입니다.`;
    });
}

function onGeoError() {
  alert("Can't load weather data in your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
