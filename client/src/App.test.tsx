import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders backend tester text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Backend tester/i);
  expect(linkElement).toBeInTheDocument();
});
