import { render, screen } from '@testing-library/react';
import App from './App';

describe('nav bar', () => {
  it('should load a navbar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });
})
