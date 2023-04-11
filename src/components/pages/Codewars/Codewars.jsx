import { NavLink, Outlet } from 'react-router-dom';
import { Navigation } from './Codewars.styled';

const Codewars = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Navigation>
        <ul>
          <li>
            <NavLink to="task1">Task 1</NavLink>
          </li>
          <li>
            <NavLink to="task2">Task 2</NavLink>
          </li>
          <li>Task 3</li>
        </ul>
      </Navigation>
      <div>
        <h1>Codewars page</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default Codewars;
