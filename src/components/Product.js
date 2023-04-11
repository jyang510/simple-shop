import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 0;
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  object-fit: cover;
  margin-bottom: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
  text-align: center;
`;

const ProductDescription = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  text-align: center;
`;

const ProductPrice = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

const ProductBuyButton = styled.button`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: 700;
  background-color: #0070f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;


function Product({ product }) {

  return (
    <ProductContainer>
      <ProductImage src={require(`../image/${product.image}`)} alt={product.name} />
      <ProductName>{product.name}</ProductName>
      <ProductDescription>{product.description}</ProductDescription>
      <ProductPrice>{product.price}원</ProductPrice>
      <StyledLink to={`/products/buy/${product.id}`}>
        <ProductBuyButton>구매하기</ProductBuyButton>
      </StyledLink>
    </ProductContainer>
  );
}

export default Product;
