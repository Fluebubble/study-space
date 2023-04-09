import { NavItem } from 'components/NavItem/NavItem';

export const NavBar = () => {
  return (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px solid yellow',
        backgroundColor: '#5887FF',
      }}
    >
      <NavItem to="/codewars">Codewars</NavItem>
      <NavItem to="/javascript">JavaScript</NavItem>
      <NavItem to="/react">React</NavItem>
      <NavItem to="/nodejs">NodeJS</NavItem>
    </div>
  );
};
