import { render, screen } from '@testing-library/react';
import App from './App';

test('renders project title', () => {
  render(<App />);
  const linkElement = screen.getByText('React + Firebase = ❤️');
  expect(linkElement).toBeInTheDocument();
});
