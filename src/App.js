import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ProductPage from './components/ProductPage';
import PurchasePage from './components/ProductBuyPage';

const WholePage = styled.div`
`

const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 20px;
`;

function App() {
  return (
    <Router>
      <Header />
      <WholePage>
        <Container>
          <Routes>
            <Route exact path="/simple-shop" element={<HomePage />} />
            <Route path="/simple-shop/products/:id" element={<ProductPage />} />
            <Route path="/simple-shop/products/buy/:id" element={<PurchasePage />} />
          </Routes>
        </Container>
      </WholePage>
    </Router>
  );
}

export default App;
