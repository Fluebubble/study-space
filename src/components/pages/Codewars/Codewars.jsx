import { NavLink, Outlet } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';

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
          <li>
            <NavLink to="task3">Task 3</NavLink>
          </li>
          <li>Task 4</li>
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
