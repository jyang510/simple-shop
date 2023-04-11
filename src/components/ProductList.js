import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ProductCard from './ProductCard';
import productsData from '../data/products.json';

const ProductListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

function ProductList({products}) {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   setProducts(productsData);
  // }, []);

  return (
    <ProductListContainer>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </ProductListContainer>
  );
}

export default ProductList;
