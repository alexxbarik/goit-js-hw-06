const inputEl = document.querySelector(`input`);
console.log(inputEl);
const spanEl = document.querySelector(`span`);
console.log(spanEl);

inputEl.addEventListener(`input`, onInputChange);

function onInputChange(event){
    const textSize = event.currentTarget.value + `px`
    console.log(textSize);
    return spanEl.style.fontSize = textSize;
      
}
