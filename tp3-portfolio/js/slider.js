const images = [
  "img/burger-rush.png",
  "img/monster-survival.png",
  "img/unreal-manor.png"
];

let current = 0;
const slide = document.getElementById("slide");

setInterval(() => {
  current = (current + 1) % images.length;
  slide.src = images[current];
}, 3000);
