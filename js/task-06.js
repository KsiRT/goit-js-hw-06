const validatingInputEl = document.querySelector("#validation-input");
console.dir(validatingInputEl);
const requiredLengthData = validatingInputEl.dataset;
// console.dir(requiredLengthData);
const { length } = requiredLengthData;
// console.dir(length);
validatingInputEl.addEventListener("blur", (evt) => {
  let lengthOfInput = Number(evt.target.value.length);
  if (lengthOfInput === Number(length)) {
    evt.target.classList.remove("invalid");
    evt.target.classList.add("valid");
  } else {
    evt.target.classList.remove("valid");
    evt.target.classList.add("invalid");
  }
});
