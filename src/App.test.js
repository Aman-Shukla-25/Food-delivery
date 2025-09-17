import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Website Logo image', () => {
  render(<App />);
  const linkElement = screen.getByAltText(/website logo/i);
  expect(linkElement).toBeInTheDocument();
});

