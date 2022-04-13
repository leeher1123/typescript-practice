import React from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import Header from '../../shared/header/Header';

function Navigation() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

const Container = styled.div``;

export default Navigation;
