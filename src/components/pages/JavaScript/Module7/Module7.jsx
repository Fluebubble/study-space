import { useEffect } from 'react';

export const Module7 = () => {
  const ingredientList = document.querySelector('#ingredients');

  useEffect(() => {
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
  }, [ingredientList]);

  return <ul id="ingredients"></ul>;
};
