const images = ["1.jpg", "2.webp", "3.jpg", "4.jpg", "5.webp"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

// img Element를 생성 = <img>
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
// 대충 <img src="img/4.jpg"> 이런게 생김.

// 만들어진 걸 <body>에 넣음.
document.body.appendChild(bgImage);
