const categoriesNumber = document.querySelectorAll(".item");
console.log(`Number of categories:${categoriesNumber.length}`);

const categoriesList = categoriesNumber.forEach((element) => {
  const categName = element.querySelector("h2").textContent;
  const categQuantity = element.querySelector("ul").children.length;
  console.log(`
  Category: ${categName}
  Elements: ${categQuantity}`);
});

// const categoriesNames = categoriesList.forEach((item, index, arr) =>
//   console.log(
//     `${item.firstElementChild.textContent} ${item.lastElementChild.children.length}`
//   )
// );
// console.log(categoriesList);
// console.log(categoriesNames);
