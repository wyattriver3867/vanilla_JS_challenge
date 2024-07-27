function onGeoOk(data) {
  // lat위도와 long경도 데이터를 받음.
  const lat = data.coords.latitude;
  const long = data.coords.longitude;
  console.log(`위도 ${lat}, 경도 ${long}`);
}
function onGeoError() {
  alert("Can't load weather data in your location.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
