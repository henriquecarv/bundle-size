import React from 'react';
import { render } from '../testUtils';
import Search from '../../pages/Search';

describe('Search page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Search />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
