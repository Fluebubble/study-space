// import { Suspense } from 'react';
import { Container } from 'components/Container/Container';
import { NavBar } from 'components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';
// import { Container, NavBar, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Container>
        <NavBar />
        <Outlet />
      </Container>
    </>
  );
};

export default Layout;
