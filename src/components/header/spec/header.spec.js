import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import Header from '..';

describe('Header', () => {
  it('should render Header correctly', () => {
    const component = shallow(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
