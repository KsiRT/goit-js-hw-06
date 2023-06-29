const formEl = document.querySelector(".login-form");

const logInputEls = formEl.getElementsByTagName("input");
//* массив из двух инпутов
const emailInp = logInputEls[0];
const passInp = logInputEls[1];

const onSubmitValidation = (event) => {
  event.preventDefault();
  console.log("Submitted");
  const emailLength = emailInp.value.length;
  const passLength = passInp.value.length;
  if (emailLength === 0 || passLength === 0) {
    return alert("All fields must be filled :P");
  }

  const formSubmissionResult = {
    Email: emailInp.value,
    Password: passInp.value,
  };
  event.target.reset();
  console.log(formSubmissionResult);
  return formSubmissionResult;
};

formEl.addEventListener("submit", onSubmitValidation);

// ? Вопрос по 4 пункту приема задания "Для доступу до елементів форми використовуй властивість elements" что имеется ввиду?

// Електрички очень старался убирать :D
