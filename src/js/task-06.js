const validatingInputEl = document.querySelector("#validation-input");

validatingInputEl.addEventListener("blur", (evt) => {
  let lengthOfInput = Number(evt.target.value.length);
  if (lengthOfInput === 6) {
    validatingInputEl.classList.remove("invalid");
    validatingInputEl.classList.add("valid");
  } else {
    validatingInputEl.classList.remove("valid");
    validatingInputEl.classList.add("invalid");
  }
});
