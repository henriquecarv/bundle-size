import React from 'react';
import { render } from '../../testUtils';
import Layout from '../../../client/components/Layout';

describe('Layout component', () => {
  it('matches snapshot', () => {
    const props = { children: '' };
    const { asFragment } = render(<Layout {...props} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
