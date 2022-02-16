const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListEl = document.querySelector('#ingredients');

// const elements = [];

// for (let i = 0; i < ingredients.length; i += 1) {
//   const ingredient = ingredients[i];
//   const itemEl = document.createElement('li');
//   itemEl.textContent = ingredient;
//   itemEl.classList.add('item');
//   elements.push(itemEl)

// }

// console.log(elements);

// ingredientsListEl.append(...elements);


const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.textContent = ingredient;
  itemEl.classList.add('item');

  return itemEl;
})
console.log(elements)

ingredientsListEl.append(...elements)





















































