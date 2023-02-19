const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.querySelector(`.gallery`);
listRef.style.display = `flex`;
listRef.style.flexWrap = `wrap`;
listRef.style.justifyContent = `center`;
listRef.style.listStyle = 'none';

const elements = images.map(function({url, alt})  {
  
  return `<li><img src = ${url} alt = ${alt} width = "300" height = "200"></li>`;

}).join("");
console.log(elements);
listRef.insertAdjacentHTML("beforeend", elements);


// const listRef = document.querySelector(`.gallery`);
// listRef.style.display = `flex`;
// listRef.style.flexWrap = `wrap`;
// listRef.style.justifyContent = `center`;
// listRef.style.listStyle = 'none';

// const elements = ({url, alt}) =>{
// return `<li><img src = ${url} alt = ${alt} width = "300" height = "200"></li>`;
// };

// const items = images.map(elements);
// listRef.insertAdjacentHTML("beforeend", items);
