import React from 'react';
import { Link } from 'react-router-dom';
import { Wrapper, HeaderTitle } from './styled';

export const Header = () => {
  return (
    <Wrapper>
      <Link to="/">
        <HeaderTitle>movieTime 🎞</HeaderTitle>
      </Link>
    </Wrapper>
  );
};

export default Header;
