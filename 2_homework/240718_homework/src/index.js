// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const superEventHandler = {
  // 마우스 위에 있음
  titleMouseEnter: function () {
    title.style.color = colors[0];
    title.textContent = "The mouse is here!";
  },
  //   마우스 떠남
  titleMouseLeave: function () {
    title.style.color = colors[1];
    title.textContent = "The mouse is gone!";
  },
  //   윈도우 크기 재설정
  windowResize: function () {
    title.style.color = colors[2];
    title.textContent = "You just resized!";
  },
  //   우클릭
  titleMouseRightClick: function (e) {
    if (e.button === 2) {
      title.style.color = colors[4];
      title.textContent = "That was a right click!";
    }
  },
};

// h2 뽑아오기
const title = document.querySelector("body h2");

// addEventListner
title.addEventListener("mouseenter", superEventHandler.titleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.titleMouseLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("mousedown", superEventHandler.titleMouseRightClick);

//vscode에서 작업후 크롬에서 확인시 2번째 줄에서 오류가 발생해서 주석처리하고 작성함.
//CodeSandbox에서는 작동하는 것을 확인함.
