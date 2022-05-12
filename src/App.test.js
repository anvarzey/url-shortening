import { render, screen } from '@testing-library/react';
import App from './App';

test('renders "more than just shorter links"', () => {
  render(<App />);
  const title = screen.getByText(/More than just shorter links/i);
  expect(title).toBeInTheDocument();
});
