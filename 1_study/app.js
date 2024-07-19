const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleH1Click() {
  h1.classList.toggle("active");
  // "active"같은 string이 반복되면 따로 함수를 설정해도 됨.
}

h1.addEventListener("click", handleH1Click);
