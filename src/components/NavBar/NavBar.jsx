import { NavItem } from 'components/NavItem/NavItem';

export const NavBar = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        borderBottom: '1px solid yellow',
        backgroundColor: '#5887FF',
      }}
    >
      {children}
    </div>
  );
};
