import { NavBar } from 'components/NavBar/NavBar';
import { NavItem } from 'components/NavItem/NavItem';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const Module6 = () => {
  // useEffect(() => {
  //   // const ulCategories = document.querySelectorAll('#categories');
  //   const numberOfAllCategories = document.querySelectorAll(
  //     '#categories li.item'
  //   );
  //   const namesOfCategories = document.querySelectorAll(
  //     '#categories li.item h2'
  //   );
  //   const numberOfCategories = document.querySelectorAll('li.item ul');
  //   console.log('Number of categories: ', numberOfAllCategories.length);
  //   console.log('Category: ', namesOfCategories[0].textContent);
  //   console.log('Elements ', numberOfCategories[0].childNodes.length);
  //   console.log('Category: ', namesOfCategories[1].textContent);
  //   console.log('Elements ', numberOfCategories[1].childNodes.length);
  //   console.log('Category: ', namesOfCategories[2].textContent);
  //   console.log('Elements ', numberOfCategories[2].childNodes.length);
  //   // console.log(numberOfCategories[0].childNodes.length);
  // }, []);

  return (
    <>
      <NavBar>
        <NavItem to="task1">Task1</NavItem>
        <NavItem to="task2">Task2</NavItem>
        <NavItem to="task3">Task3</NavItem>
      </NavBar>
      <Outlet />
      {/* <a href="https://www.edu.goit.global/ru/learn/5329046/2294/2300/homework">
        HOMEWORK TASK LINK
      </a> */}
      {/* <ul id="categories">
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
      </ul> */}
    </>
  );
};
