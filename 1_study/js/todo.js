const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
// 실수를 방지하기 위한 변수-스트링.
const TODOS_KEY = "todos";

// 만든 toDo를 저장하는 Array.
// 이전에 작성한 toDo를 저장하기 위해서 let으로 작성해야 한다. (재정의=업데이트 가능)
let toDos = [];

function saveToDos() {
  // localStorage에 저장하기.
  // localStorage는 string만 받아서 변환해야 함.
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  // 부모 엘리먼트 li를 찾고 지움.
  const li = event.target.parentElement;
  // localStorage에서도 지우기 위해 id 값을 가져옴.
  console.log(li.id);
  li.remove();
}

function paintToDo(newTodo) {
  // Object를 주기 때문에,(이후 코드 참고) 코드를 조금 수정해야 함. .id .text
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;

  const button = document.createElement("button");
  button.innerText = "delete";
  // 코드에 이모지를 넣어도 작동한다.
  button.addEventListener("click", deleteToDo);

  li.appendChild(span);
  li.appendChild(button);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  // 값을 저장하기. (toDoInput변수의 값을 다른 변수에 입력해서)
  const newTodo = toDoInput.value;
  // 입력칸을 비우기.
  toDoInput.value = "";
  // toDos 어레이에 넣기. 넣고 빼기 위해 id부여 = object로 가공해야 함.
  const newTodoObj = {
    text: newTodo,
    // 고유 id 생성. 여기선 date로 간단하게 떼움.
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  // toDo를 html에 넣어 표시하기.
  paintToDo(newTodoObj);
  // saveToDos 함수를 통해 localStorage에 저장하기. 값이 이미 들어가서, 괄호안에 안넣어도 됨.
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

// localStorage에 저장된 값 불러오기. (string인 상태)
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  // savedToDos가 존재한다면~ 이란 뜻.
  // JSON.parse로 array로 만들기. (저장된 값은 string이므로)
  const parsedToDos = JSON.parse(savedToDos);
  // toDos 어레이에 localStorage에 저장된 값 업데이트하기.
  toDos = parsedToDos;
  // array의 item에 paintToDo함수 실행하기.
  parsedToDos.forEach(paintToDo);
}
