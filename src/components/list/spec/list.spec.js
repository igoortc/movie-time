import React from 'react';
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';
import movies from '../../../utils/movies';
import List from '..';

describe('List', () => {
  it('should render List correctly', () => {
    const component = shallow(
      <BrowserRouter>
        <List movies={movies} />
      </BrowserRouter>
    );

    expect(component).toMatchSnapshot();
  });
});
