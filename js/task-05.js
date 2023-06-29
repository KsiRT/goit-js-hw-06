const nameInputEl = document.querySelector("#name-input");
const nameOutputEl = document.querySelector("#name-output");

nameInputEl.addEventListener("input", (event) => {
  if (event.target.value === "") {
    nameOutputEl.textContent = "Anonymous";
    return;
  }
  nameOutputEl.textContent = event.target.value;
});
