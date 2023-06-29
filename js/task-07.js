const rangeInput = document.querySelector("#font-size-control");
const sampleText = document.querySelector("#text");

const onInputValueChange = ({ target: { value } }) => {
  // console.log(value);
  sampleText.style.fontSize = `${value}px`;
};

rangeInput.addEventListener("input", onInputValueChange);
