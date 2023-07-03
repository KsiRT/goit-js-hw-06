const validatingInputEl = document.querySelector("#validation-input");
// console.dir(validatingInputEl);
// const requiredLengthData = validatingInputEl.dataset;
// console.dir(requiredLengthData);
// const { length } = requiredLengthData;
// console.dir(length);
validatingInputEl.addEventListener("blur", (evt) => {
  const lengthRequired = evt.target.dataset.length;
  const targetClass = evt.target.classList;
  const lengthOfInput = Number(evt.target.value.length);

  if (lengthOfInput === Number(lengthRequired)) {
    targetClass.remove("invalid");
    targetClass.add("valid");
  } else {
    targetClass.remove("valid");
    targetClass.add("invalid");
  }
  console.dir(evt.target);
});
