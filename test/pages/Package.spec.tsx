import React from 'react';
import { render } from '../testUtils';
import Package from '../../pages/Search';

describe('Package page', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<Package />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
