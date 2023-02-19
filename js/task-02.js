const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const newIngredients =[];
 ingredients.forEach((element) =>{
  const itemRef = document.createElement(`li`);
  itemRef.textContent = element;
  itemRef.classList.add(`item`);
  newIngredients.push(itemRef);
});
console.log(newIngredients);

const listRef = document.querySelector(`#ingredients`);
listRef.append(...newIngredients);

// const newIngredients = ingredients.map((ingredient) => {
// const itemRef = document.createElement(`li`);
// itemRef.classList.add(`item`);
// itemRef.textContent = ingredient;
// return itemRef
// });
// console.log(...newIngredients);
// const listRef = document.querySelector(`#ingredients`);
// listRef.append(...newIngredients);




