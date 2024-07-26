const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// 실수를 방지하기 위한 변수-스트링.
const TODOS_KEY = "todos";

// 만든 toDo를 저장하는 Array.
// 이전에 작성한 toDo를 저장하기 위해서 let으로 작성해야 한다. (재정의=업데이트 가능)
let toDos = [];

function deleteToDo(event) {
  // 부모 엘리먼트 li를 찾고 지움.
  const li = event.target.parentElement;
  li.remove();
}

function saveToDos() {
  // localStorage에 저장하기.
  // localStorage는 string만 받아서 변환해야 함.
  localStorage.setItem("todos", JSON.stringify(toDos));
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.appendChild(span);
  li.appendChild(button);

  span.innerText = newTodo;
  button.innerText = "delete😂";
  // 코드에 이모지를 넣어도 작동한다.

  toDoList.appendChild(li);

  button.addEventListener("click", deleteToDo);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // 값을 저장하기. (toDoInput변수의 값을 다른 변수에 입력해서)
  const newTodo = toDoInput.value;
  // 입력칸을 비우기.
  toDoInput.value = "";
  // toDos 어레이에 넣기.
  toDos.push(newTodo);
  // toDo를 html에 넣어 표시하기.
  paintToDo(newTodo);
  // saveToDos 함수를 통해 localStorage에 저장하기. 값이 이미 들어가서, 괄호안에 안넣어도 됨.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 값 불러오기. (string인 상태)
const savedToDos = localStorage.getItem(TODOS_KEY);

if (saveToDos) {
  // saveToDos가 존재한다면~ 이란 뜻.
  // JSON.parse로 array로 만들기. (저장된 값은 string이므로)
  const parsedToDos = JSON.parse(savedToDos);
  // toDos 어레이에 localStorage에 저장된 값 업데이트하기.
  toDos = parsedToDos;
  // array의 item에 paintToDo함수 실행하기.
  parsedToDos.forEach(paintToDo);
}
