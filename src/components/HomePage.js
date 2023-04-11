import React from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin: 0 0 20px 0;
`;

function HomePage() {
  return (
    <HomePageContainer>
      <Heading>저희 가게에 오신 것을 환영합니다</Heading>
      <ProductList />
    </HomePageContainer>
  );
}

export default HomePage;
