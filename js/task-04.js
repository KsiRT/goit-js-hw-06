const minusBtn = document.querySelector("#counter").firstElementChild;
const plusBtn = document.querySelector("#counter").lastElementChild;
const valueElement = document.querySelector("#value");

let counterValue = 0;

// function increaseValue() {
//   counterValue += 1;
//   valueElement.textContent = counterValue;
// }
// function decreaseValue() {
//   counterValue -= 1;
//   valueElement.textContent = counterValue;
// }
function changeValue({ target }) {
  if (target.dataset.action === "decrement") {
    counterValue -= 1;
  } else {
    counterValue += 1;
  }
  valueElement.textContent = counterValue;
}

plusBtn.addEventListener("click", increaseValue);
minusBtn.addEventListener("click", decreaseValue);

// * Це я зробив спочатку:

// const value = document.querySelector("#value");

// function decreaseValue() {
//   value.textContent = Number(value.textContent) - 1;
// }

// function increaseValue() {
//   value.textContent = Number(value.textContent) + 1;
// }

// plusBtn.addEventListener("click", increaseValue);
// minusBtn.addEventListener("click", decreaseValue);
