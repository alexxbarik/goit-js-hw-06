
const input = document.querySelector(`#name-input`);
const span = document.querySelector(`#name-output`);

input.addEventListener(`input`, onInputChange);


function onInputChange (event) {
console.log(event.currentTarget.value);
if(input.value ===""){
    span.textContent = `Anonymous`
}else{
    span.textContent = event.currentTarget.value;
}
 };

 // refs - посилання (створюєм один обєкт замість багатьох змінних,  не обовязково)

// const refs = {
//     input: document.querySelector(`#name-input`),
//     span: document.querySelector(`#name-output`),
// };
// console.log(refs.input);
// console.log(refs.span);
// refs.input.addEventListener(`input`, onInputChange);
// function onInputChange (event){
// if(refs.input.value === ""){
// refs.span.textContent = `Anonimus`
// }else{
// refs.span.textContent = event.currentTarget.value;
// }
// };
