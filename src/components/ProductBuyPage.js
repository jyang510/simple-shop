import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import productsData from '../data/products.json';

const ProductBuyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const ProductBuyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  font-size: 16px;
  padding: 10px;
  width: 100%;
`;

const SubmitButton = styled.button`
  background-color: #008CBA;
  border: none;
  color: white;
  font-size: 18px;
  font-weight: 700;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
`;

function ProductBuy() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    const foundProduct = productsData.find(
      (product) => product.id === parseInt(id)
    );
    setProduct(foundProduct);
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`구매 정보: ${name}, ${address}, ${phone}`);
  };


  return (
    <ProductBuyContainer>
      <h2>{product ? product.name : ""} 구매 페이지</h2>
      <ProductBuyForm onSubmit={handleSubmit}>
        <FormItem>
          <Label htmlFor="name">이름</Label>
          <Input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormItem>
        <FormItem>
          <Label htmlFor="address">주소</Label>
          <Input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </FormItem>
        <FormItem>
          <Label htmlFor="phone">전화번호</Label>
          <Input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </FormItem>
        <SubmitButton type="submit">구매하기</SubmitButton>
      </ProductBuyForm>
    </ProductBuyContainer>
  );
}

export default ProductBuy;
