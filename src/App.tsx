import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './style/GlobalStyle';

import Home from './pages/home/Home';
import Shop from './pages/shop/Shop';
import Navigation from './pages/navigation/Navigation';

function App() {
  return (
    <Container>
      <GlobalStyle />
      <Routes>
        <Route path="" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </Container>
  );
}

const Container = styled.div``;

export default App;
