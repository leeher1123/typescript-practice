import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconLogo } from '../../Icons';

function Header() {
  return (
    <Container>
      <TopHeader>
        <Logo to="/">
          <IconLogo />
        </Logo>
        <MenuList>
          <MenuItem to="/shop">Shop</MenuItem>
          <MenuItem to="/login">Login</MenuItem>
        </MenuList>
      </TopHeader>
    </Container>
  );
}

const Container = styled.div`
  background-color: #eee;
`;

const TopHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const Logo = styled(Link)``;

const MenuList = styled.div`
  display: flex;
  align-items: center;
`;

const MenuItem = styled(Link)`
  font-size: 19px;
  font-weight: bold;
  padding: 15px;
  cursor: pointer;
  color: #111;
`;

export default Header;
