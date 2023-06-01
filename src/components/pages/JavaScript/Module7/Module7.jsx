import { useEffect } from 'react';

export const Module7 = () => {
  // console.log(ingredientList);

  useEffect(() => {
    const ingredientList = document.querySelector('#ingredients');
    const ingredients = [
      'Potatoes',
      'Mushrooms',
      'Garlic',
      'Tomatos',
      'Herbs',
      'Condiments',
    ];
    for (const element of ingredients) {
      const newTagLine = document.createElement('li');
      newTagLine.textContent = element;
      console.log(element);
      ingredientList.append(newTagLine);
    }
  }, []);

  return <ul id="ingredients"></ul>;
};
