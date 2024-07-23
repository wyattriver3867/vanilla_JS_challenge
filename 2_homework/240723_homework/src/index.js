const numberForm = document.querySelector(".form-numbers");
const numberInput1 = document.querySelector(".number1");
const numberInput2 = document.querySelector(".number2");
const info = document.querySelector(".info");
const result = document.querySelector(".result");

const HIDDEN_CLASSNAME = "hidden";

function numberSumbmit(event) {
  // 새로고침 방지
  event.preventDefault();
  // 숫자 함수 설정
  const number1 = parseInt(numberInput1.value);
  const number2 = parseInt(numberInput2.value);
  console.log(`Random Limit Number: ${number1}`);
  console.log(`Guess Number: ${number2}`);
  // 랜덤 숫자 생성
  const randomNumber = Math.round(Math.random() * number1);
  console.log(`Generated Random Number: ${randomNumber}`);
  // 비교하기
  if (number2 === randomNumber) {
    info.innerText = `You chose: ${number2}, the machine chose: ${randomNumber}.`;
    info.classList.remove(HIDDEN_CLASSNAME);
    result.innerText = `You Win!`;
    result.classList.remove(HIDDEN_CLASSNAME);
  } else {
    info.innerText = `You chose: ${number2}, the machine chose: ${randomNumber}.`;
    info.classList.remove(HIDDEN_CLASSNAME);
    result.innerText = `You Lost!`;
    result.classList.remove(HIDDEN_CLASSNAME);
  }
}

numberForm.addEventListener("submit", numberSumbmit);
