const clock = document.querySelector("h2#clock");
//h2의 id가 clock인걸 찾기 때문에 붙여서 씀.

function getClock() {
  const date = new Date();
  clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

getClock();
setInterval(getClock, 1000);
