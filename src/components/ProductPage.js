import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Product from './Product';
import productsData from '../data/products.json';

const ProductPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
`;

function ProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  return (
    <ProductPageContainer>
      {product ? (
        <Product
          key={product.id}
          product={product}
        />
      ) : (
        <h2>물품이 없네요</h2>
      )}
    </ProductPageContainer>
  );
}

export default ProductPage;
