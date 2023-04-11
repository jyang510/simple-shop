import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:hover {
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  }
`;

const Title = styled.h3`
  font-size: 20px;
  margin: 0;
  color: black;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 10px 0;
  color: black;
`;

const Price = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: black;
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function ProductCard({ product }) {
  return (
    <Card>
      <StyledLink to={`/products/${product.id}`}>
        <Image src={require(`../image/${product.image}`)} alt={product.name} />
        <Title>{product.name}</Title>
        <Description>{product.description}</Description>
        <Price>${product.price}</Price>
      </StyledLink>
    </Card>
  );
}

export default ProductCard;
