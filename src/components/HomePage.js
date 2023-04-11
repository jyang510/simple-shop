import React, { useState } from 'react';
import styled from 'styled-components';
import ProductList from './ProductList';
import productsData from '../data/products.json';

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Heading = styled.h2`
  font-size: 28px;
  margin: 0 0 20px 0;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchLabel = styled.label`
  margin-right: 10px;
  font-size: 18px;
`;

const SearchInput = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const PriceFilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const PriceInputLabel = styled.label`
  margin-right: 10px;
  font-size: 18px;
`;

const PriceInputContainer = styled.div`
  display: flex;
  align-items: center;
`;

const PriceInput = styled.input`
  width: 100px;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const PriceSeparator = styled.span`
  margin: 0 10px;
  font-size: 18px;
`;

const PriceUnit = styled.span`
  font-size: 18px;
`;

const ErrorText = styled.p`
  color: red;
  margin: 0 0 10px 0;
`;
const SearchButton = styled.button`
  padding: 8px 16px;
  margin-left: 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #3e8e41;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: #6aaf50;
  }
`;

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [priceError, setPriceError] = useState('');
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  
  const handleSearchButtonClick = () => {
    const filtered = productsData.filter((product) => {
      if (
        searchTerm !== '' &&
        !(
          product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      ) {
        return false;
      }
      if (minPrice !== '' && parseInt(product.price) < parseInt(minPrice)) {
        return false;
      }
      if (maxPrice !== '' && parseInt(product.price) > parseInt(maxPrice)) {
        return false;
      }
      return true;
    });
    setFilteredProducts(filtered);
  };
  

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleMinPriceChange = (e) => {
    const value = e.target.value;
    setMinPrice(value);
    if (value !== '' && (isNaN(value) || parseInt(value) < 0)) {
      setPriceError('올바른 가격을 입력해주세요.');
    } else {
      setPriceError('');
    }
  };

  const handleMaxPriceChange = (e) => {
    const value = e.target.value;
    setMaxPrice(value);
    if (value !== '' && (isNaN(value) || parseInt(value) < 0)) {
      setPriceError('올바른 가격을 입력해주세요.');
    } else {
      setPriceError('');
    }
  };
  return (
    <HomePageContainer>
      <Heading>저희 가게에 오신 것을 환영합니다</Heading>
      <SearchContainer>
        <SearchLabel>상품 검색</SearchLabel>
        <SearchInput type="text" value={searchTerm} onChange={handleSearchTermChange} />
        <SearchButton onClick={handleSearchButtonClick}>검색</SearchButton>
      </SearchContainer>

      <PriceFilterContainer>
        <PriceInputLabel>가격대</PriceInputLabel>
        <PriceInputContainer>
          <PriceInput type="number" value={minPrice} onChange={handleMinPriceChange} />
          <PriceSeparator>~</PriceSeparator>
          <PriceInput type="number" value={maxPrice} onChange={handleMaxPriceChange} />
          <PriceUnit>{"\u00A0"}{"\u00A0"}{"\u00A0"}원</PriceUnit>
        </PriceInputContainer>
      </PriceFilterContainer>

      {priceError && <ErrorText>{priceError}</ErrorText>}

      <ProductList products={filteredProducts} />
    </HomePageContainer>
  );
}

export default HomePage;
