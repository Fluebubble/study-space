import { useEffect } from 'react';

export const Module6 = () => {
  useEffect(() => {
    // const ulCategories = document.querySelectorAll('#categories');
    const numberOfAllCategories = document.querySelectorAll(
      '#categories li.item'
    );
    const namesOfCategories = document.querySelectorAll(
      '#categories li.item h2'
    );
    const numberOfCategories = document.querySelectorAll('li.item ul');
    console.log('Number of categories: ', numberOfAllCategories.length);
    console.log('Category: ', namesOfCategories[0].textContent);
    console.log('Elements ', numberOfCategories[0].childNodes.length);
    console.log('Category: ', namesOfCategories[1].textContent);
    console.log('Elements ', numberOfCategories[1].childNodes.length);
    console.log('Category: ', namesOfCategories[2].textContent);
    console.log('Elements ', numberOfCategories[2].childNodes.length);
    // console.log(numberOfCategories[0].childNodes.length);
  }, []);

  return (
    <ul id="categories">
      <li className="item">
        <h2>Animals</h2>
        <ul>
          <li>Cat</li>
          <li>Hamster</li>
          <li>Horse</li>
          <li>Parrot</li>
        </ul>
      </li>
      <li className="item">
        <h2>Products</h2>
        <ul>
          <li>Bread</li>
          <li>Prasley</li>
          <li>Cheese</li>
        </ul>
      </li>
      <li className="item">
        <h2>Technologies</h2>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>
      </li>
    </ul>
  );
};
