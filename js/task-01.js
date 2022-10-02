const categoriesListRef = document.querySelector('#categories');

const categoriesItemRef = document.querySelectorAll('.item');

const numberOfCategories = categories =>
    console.log(`Number of categories: ${categories.children.length}`);

numberOfCategories(categoriesListRef);


const categoriesItem = items => items.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`);
   
});

categoriesItem(categoriesItemRef);