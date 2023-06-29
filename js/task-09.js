function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const colorChangeBtn = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const colorSpan = document.querySelector(".color");

const onColorChange = () => {
  let randomColor = getRandomHexColor();
  bodyEl.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
  console.dir(randomColor);
};
colorChangeBtn.addEventListener("click", onColorChange);
