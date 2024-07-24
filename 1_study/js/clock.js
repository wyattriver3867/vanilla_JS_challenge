const clock = document.querySelector("h2#clock");
//h2의 id가 clock인걸 찾기 때문에 붙여서 씀.

function sayHello() {
  console.log("hello");
}

setInterval(sayHello, 5000);
