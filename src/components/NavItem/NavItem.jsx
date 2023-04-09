import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavItem = styled(NavLink)`
  display: block;
  padding: 15px;
  color: white;
  text-decoration: none;

  &.active {
    background-color: #3971ff
  }
`;
