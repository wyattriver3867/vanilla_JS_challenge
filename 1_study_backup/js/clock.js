const clock = document.querySelector("h2#clock");
//h2의 id가 clock인걸 찾기 때문에 붙여서 씀.

function getClock() {
  const date = new Date();
  //padStart는 string에만 작동하므로, 나온 값을 String()으로 변환하고 붙여야 함.
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;

  //더 간단한 방식
  //clock.innerText = new Date().toLocaleTimeString("en-US", { hour12: false });
}

getClock();
setInterval(getClock, 1000);
