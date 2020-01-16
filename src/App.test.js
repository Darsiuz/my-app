import React from 'react';
import { render } from '@testing-library/react';
import Inicio from './Inicio';
   
test('renders learn react link', () => {
  const { getByText } = render(<Inicio />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
