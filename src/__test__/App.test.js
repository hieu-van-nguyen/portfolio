import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the portfolio header', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: /hieu van nguyen/i })
  ).toBeInTheDocument();
});
