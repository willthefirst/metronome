import { render, screen } from '@testing-library/react';
import Marionome from './Marionome';

test('renders learn react link', () => {
  render(<Marionome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
