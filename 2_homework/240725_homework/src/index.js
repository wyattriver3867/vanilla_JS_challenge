const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34",
];

const clickButton = document.querySelector("button");

// 입력용 <style> 만들기
const makeStyle = document.createElement("style");

function makeGradient() {
  // 색을 설정함.
  const color1 = colors[Math.floor(Math.random() * colors.length)];
  const color2 = colors[Math.floor(Math.random() * colors.length)];

  // <style>안의 내용물을 작성하고 주입하는 function.
  function injection() {
    // 두번 이상 작동할 때를 대비해 <style>안의 내용을 지우고 작성함.
    makeStyle.innerHTML = "";
    makeStyle.innerHTML = `body {background: linear-gradient(-90deg, ${color1}, ${color2})}`;
    document.body.appendChild(makeStyle);
  }

  // 색1과 색2의 색이 동일할 때, 색2를 다시 고름.
  if (color1 === color2) {
    // 더 좋은 방법. 이렇게 함수 내부에 자기 자신을 호출하는걸 '재귀 함수'라고 함.
    return makeGradient();
    // const color2 = colors[Math.floor(Math.random() * colors.length)];
    injection();
  } else {
    injection();
  }
}

// 클릭 감지.
clickButton.addEventListener("click", makeGradient);
