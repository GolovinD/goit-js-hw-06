const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.querySelector('#ingredients');

const ingredientsClass = 'item'

const makeIngredientsList = ingredients => {
  return ingredients.map(ingredient => {
    const ingredientsItem = document.createElement('li');
    ingredientsItem.classList.add(ingredientsClass);
    ingredientsItem.textContent = ingredient;

  return ingredientsItem;
  
  }); 
};

const ingredientsList = makeIngredientsList(ingredients);
ingredientsListRef.append(...ingredientsList);