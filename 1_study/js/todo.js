const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
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
  console.log(toDoInput.value);
  // 값을 저장하기. (toDoInput변수의 값을 다른 변수에 입력해서)
  const newTodo = toDoInput.value;
  // 입력칸을 비우기.
  toDoInput.value = "";
  paintToDo(newTodo);
}

toDoForm.addEventListener("submit", handleToDoSubmit);
