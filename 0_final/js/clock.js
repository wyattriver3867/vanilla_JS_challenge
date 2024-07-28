const clock1 = document.querySelector(".clock1");
const clock2 = document.querySelector(".clock2");

function getClock() {
  const date = new Date();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock1.innerText = `${hours}:${minutes}:${seconds}`;
  clock2.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
setInterval(getClock, 1000);
