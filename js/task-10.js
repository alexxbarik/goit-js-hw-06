function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxes = document.querySelector(`#boxes`);
const createBtn = document.querySelector(`button[data-create]`);
const destroyBtn = document.querySelector(`button[data-destroy]`);
const inputEl = document.querySelector(`input`);


inputEl.addEventListener(`click`, onInputEvent);
createBtn.addEventListener(`click`, onСreateBtnClick);
destroyBtn.addEventListener(`click`, onDestroyBtnClick);



function onСreateBtnClick(){
  console.log(Number(inputEl.value));
  createBoxes(Number(inputEl.value));
}

function onDestroyBtnClick(){
  boxes.innerHTML = "";
  inputEl.value = ``;
}


let inputValue = 0;
function onInputEvent (event){
  console.log(event.currentTarget.value);
  inputValue = event.currentTarget.value;
}


function createBoxes(amount){
  let cards = [];
  let sizeCard = 30;
  for(let i = 0; i < amount; i += 1){
    sizeCard += 10;
    const card = document.createElement("div");
    card.style.width = `${sizeCard}px`;
    card.style.height = `${sizeCard}px`;
    card.style.backgroundColor = getRandomHexColor();
    cards.push(card);
  }
 
  return boxes.append(...cards);
}




