// API_KEY 변수는 보안을 위해 key.js에 저장되어 .gitignore 처리를 받음.

// getCurrentPosition이 성공했을 때 실행하는 함수.
function onGeoOk(data) {
  // lat위도와 long경도 데이터를 받음.
  const lat = data.coords.latitude;
  const lon = data.coords.longitude;
  // 화씨 야드 대신 섭씨 미터로 표기하기 위해 &units=metric 추가. 자세한건 사이트 참고.
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // fetch로 url을 보내고, 서버에서 받은 데이터(json)에서 원하는 데이터를 뽑음. 간단한 구조니까 직접 보면서 확인하면 됨.
  const test = fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // html에 넣기 위해 선택.
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:nth-child(2)");
      const weatherDesc = document.querySelector("#weather span:nth-child(3)");
      const temp = document.querySelector("#weather span:nth-child(4)");
      const tempMax = document.querySelector("#weather span:nth-child(5)");
      const tempMin = document.querySelector("#weather span:nth-child(6)");
      const humidity = document.querySelector("#weather span:nth-child(7)");
      // .innerText로 값 넣어주기
      city.innerText = `동네 ${data.name}`;
      weather.innerText = `날씨 ${data.weather[0].main}`;
      weatherDesc.innerText = `${data.weather[0].description}한 날입니다.`;
      temp.innerText = `평균 온도는 ${data.main.temp}°C입니다.`;
      tempMax.innerText = `최고 온도는 ${data.main.temp_max}°C입니다.`;
      tempMin.innerText = `최저 온도는 ${data.main.temp_min}°C입니다.`;
      humidity.innerText = `습도는 ${data.main.humidity}%입니다.`;
    });
}

// getCurrentPosition이 실패했을 때 실행하는 함수.
function onGeoError() {
  alert("Can't load weather data in your location.");
}

// 이걸로 사용자의 위치를 물어볼 수 있음. 권한 필요.
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
