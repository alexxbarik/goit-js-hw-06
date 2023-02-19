
const buttonDecrement = document.querySelector(`button[data-action="decrement"]`);
const buttonIncrement = document.querySelector(`button[data-action="increment"]`);
const valueEl = document.querySelector(`#value`);
let counterValue = 0;




const onButtonIncrementClick = () =>{
    counterValue = counterValue + 1;
    valueEl.textContent = counterValue;
};

const onButtonDecrementClick = () =>{
    counterValue = counterValue - 1;
    valueEl.textContent = counterValue;
};

buttonDecrement.addEventListener(`click`, onButtonDecrementClick);
buttonIncrement.addEventListener(`click`, onButtonIncrementClick);













