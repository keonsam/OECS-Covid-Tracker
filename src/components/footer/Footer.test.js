import Footer from './Footer'
import { render, screen, } from '@testing-library/react';

describe('Footer', () => {
    it('should render Footer', () => {
        render(<Footer />);
        expect(screen.getByTestId('footer')).toBeInTheDocument();
    });
})