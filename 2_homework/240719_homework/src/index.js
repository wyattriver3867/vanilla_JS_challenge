// class를 붙여줄 body 가져오기
const body = document.querySelector("body");

// 색이 바뀔 width 정해주기
const lineYellow = 750;
const linePurple = 450;

// 최초 부팅시에 넣을 class 결정
let currentWidth;

if (window.innerWidth >= lineYellow) {
  currentWidth = "yellow";
} else if (window.innerWidth >= linePurple) {
  currentWidth = "purple";
} else {
  currentWidth = "blue";
}

body.className = currentWidth;

// event에 필요한 function과 조건 설정
function windowResize() {
  if (window.innerWidth >= lineYellow) {
    body.className = "yellow";
    console.log("노랑. 창너비가 " + lineYellow + "px이상입니다.");
  } else if (window.innerWidth >= linePurple) {
    body.className = "purple";
    console.log(
      "보라. 창너비가 " + lineYellow + "px 미만 " + linePurple + "px이상입니다."
    );
  } else {
    body.className = "blue";
    console.log("파랑. 창너비가 " + linePurple + "px미만입니다.");
  }
}

// addEventListner
window.addEventListener("resize", windowResize);
