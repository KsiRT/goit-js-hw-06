const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createListFromArray(array, parentId) {
  const ul = document.querySelector(parentId);
  const resultingArray = array.map((element) => {
    const listItem = document.createElement("li");
    listItem.textContent = element;
    listItem.classList.add("item");

    return listItem;
  });
  ul.append(...resultingArray);
}
createListFromArray(ingredients, "#ingredients");

// *Спочатку зробив інакше, але потім передивився практику
// ? Це те що робив до цього:

// function createListFromArray(array, parentId) {
//   const ul = document.querySelector(parentId);
//   const fragment = document.createDocumentFragment();
//   let res;
//   for (const item of array) {
//     let listItem = document.createElement("li");
//     listItem.textContent = item;
//     listItem.classList.add("item");
//     fragment.appendChild(listItem);
//   }
//   res = ul.appendChild(fragment);
//   return res;
// }
// *Виклик функції*
//? Не знав як вирішити щоб не аппендити кажен елемент і звернувся до Чат gpt, підказала про метод створення фрагмента документа, все інше сам. Для чесності читав про нього,якщо я вірно зрозумів - він не викликає рефлоу і тому його теж використовують
