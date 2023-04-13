import Navigation from 'components/Navigation/Navigation';
import { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const JavaScript = () => {

  
  
  return (
    <div style={{ display: 'flex' }}>
      <Navigation>
        <ul>
          <li>
            <NavLink to="module-6">Module 6</NavLink>
          </li>
          <li>
            <NavLink to="module-6">Module 7</NavLink>
          </li>
          <li>
            <NavLink to="module-6">Module 8</NavLink>
          </li>
          <li>Task 4</li>
        </ul>
      </Navigation>
      <div>
        <h1>JavaScript page</h1>
        <Outlet />
      </div>
    </div>
  );
};

export default JavaScript;
