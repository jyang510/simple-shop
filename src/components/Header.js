import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2e2e2e;
  color: #fff;
  padding: 10px 20px;
`;

const Logo = styled.h1`
  font-size: 24px;
  margin: 0;
`;

const Links = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  & > li:not(:last-child) {
    margin-right: 10px;
  }
`;

const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>My Shop</Logo>
      <nav>
        <Links>
          <li>
            <StyledLink to="/simple-shop">Home</StyledLink>
          </li>
        </Links>
      </nav>
    </HeaderContainer>
  );
}

export default Header;
