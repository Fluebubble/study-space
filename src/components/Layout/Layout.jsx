// import { Suspense } from 'react';
import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { NavItem } from 'components/NavItem/NavItem';
import { Outlet } from 'react-router-dom';
// import { Container, NavBar, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <NavBar>
          <NavItem to="/codewars">Codewars</NavItem>
          <NavItem to="/javascript">JavaScript</NavItem>
          <NavItem to="/react">React</NavItem>
          <NavItem to="/nodejs">NodeJS</NavItem>
        </NavBar>
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
