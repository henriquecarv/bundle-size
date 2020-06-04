import React from 'react';
import { render } from '../../testUtils';
import PackageNotFound from '../../../client/components/PackageNotFound';

describe('PackageNotFound component', () => {
  it('matches snapshot', () => {
    const { asFragment } = render(<PackageNotFound />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
