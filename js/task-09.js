function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector(`body`);

const span = document.querySelector(`.color`);

const button = document.querySelector(`.change-color`);
button.addEventListener(`click`, onBtnChangeColorClick);

function onBtnChangeColorClick(event){
  const randomColor = getRandomHexColor();
  span.textContent = randomColor;
  body.style.color = randomColor;
  console.log(randomColor);
};
