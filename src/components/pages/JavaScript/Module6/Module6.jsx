import { NavBar } from 'components/NavBar/NavBar';
import { NavItem } from 'components/NavItem/NavItem';
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';

export const Module6 = () => {

  return (
    <>
      <NavBar>
        <NavItem to="task1">Task1</NavItem>
        <NavItem to="task2">Task2</NavItem>
        <NavItem to="task3">Task3</NavItem>
        <NavItem to="task4">Task4</NavItem>
      </NavBar>
      <Outlet />
    </>
  );
};
