import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should load a navbar', () => {
    render(<App />);
    expect(screen.getByRole('navigation')).toBeInTheDocument();
  });

  it('should load a footer', () => {
    render(<App />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
})
