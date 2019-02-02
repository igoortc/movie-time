import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import { Wrapper, HeaderTitle, Navigation } from './styled';

class Header extends Component {
  render() {
    return (
      <Wrapper>
        <Helmet>
          <title>movieTime 🎞</title>
        </Helmet>
        <HeaderTitle>movieTime 🎞</HeaderTitle>
        <Navigation>
          <Link to="/">Search</Link>
        </Navigation>
      </Wrapper>
    );
  }
}

export default Header;
