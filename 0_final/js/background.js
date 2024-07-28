const images = ["1.jpg", "2.webp", "3.jpg", "4.jpg", "5.webp"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
