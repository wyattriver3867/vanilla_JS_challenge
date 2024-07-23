const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 반복되는 string을 줄이기 위해서 함수를 만듭니다. 이는 대문자로 씁니다.
// string이 html이나 css에서 지정되지 않아도 씀. USERNAME_KEY 참고.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// submit한 후 username을 h1에 넣어서 표시해줌.
function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

// greeting 관련 함수가 반복되어 묶음으로 만듦.
// 1. h1에 텍스트(username) 추가해야 함.
// 2. hidden 클래스 제거해서 조합된 h1을 보여줘야 함.
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

// localStorage에서 username이 있는지 확인하기 위해 함수 설정.
const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // username이 없음 = 로그인 안함 = 새로 받아야 함.
  // 폼보여주기, eventListner로 submit 받기.
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
