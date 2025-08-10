import { render, screen } from '@testing-library/react';
import HeroBanner from '../../src/components/home/HeroBanner';

test('renders hero banner title', () => {
  render(<HeroBanner title="Bluitt Law Firm" subtitle="Legal Experts" />);
  expect(screen.getByText(/Bluitt Law Firm/i)).toBeInTheDocument();
});
