import { render, screen } from '@testing-library/react';
import HeroBanner from '../../src/components/home/HeroBanner';

test('renders hero banner title', () => {
  render(<HeroBanner title="Blob Law Firm" subtitle="Legal Experts" />);
  expect(screen.getByText(/Blob Law Firm/i)).toBeInTheDocument();
});
