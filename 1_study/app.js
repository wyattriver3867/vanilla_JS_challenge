const h1 = document.querySelector(".hello h1");

console.dir(h1);

function handleH1Click() {
  const currentColor = h1.style.color;
  let newColor;
  // let은 재할당이 가능하니까, 일단 값을 비워둠.
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  h1.style.color = newColor;
}

h1.addEventListener("click", handleH1Click);
