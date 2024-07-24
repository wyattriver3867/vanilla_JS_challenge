const clockTitle = document.querySelector(".js-clock");

function getClock() {
  // 크리스마스 날짜 구하기
  const christmas = new Date("2024/12/24");
  // 오늘 날짜 구하기
  const now = new Date();

  // 크리스마스 날짜 - 오늘 날짜
  const waitChristmas = christmas - now;
  console.log(`계산된 밀리초 ${waitChristmas}`);

  // 밀리초를 일, 시간, 분, 초로 나누기
  const milliDays = 1000 * 60 * 60 * 24;
  const milliHours = 1000 * 60 * 60;
  const milliMinutes = 1000 * 60;
  const milliSeconds = 1000;

  const days = String(Math.floor(waitChristmas / milliDays));
  const hours = String(
    Math.floor((waitChristmas % milliDays) / milliHours)
  ).padStart(2, "0");
  const minutes = String(
    Math.floor((waitChristmas % milliHours) / milliMinutes)
  ).padStart(2, "0");
  const seconds = String(
    Math.floor((waitChristmas % milliMinutes) / milliSeconds)
  ).padStart(2, "0");

  clockTitle.innerText = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
