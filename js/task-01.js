

const listWithItem = document.querySelectorAll(`.item`);
console.log(`Number of categories: ${listWithItem.length}`);

listWithItem.forEach((number) => {
    console.log(`Category: ${number.firstElementChild.textContent}`);
    console.log(`Elements: ${number.lastElementChild.childElementCount}`);
  });




