import Loader from './Loader'
import { render, screen, } from '@testing-library/react';

describe('Loader', () => {
    it('should render Loader', () => {
        render(<Loader />);
        expect(screen.getByTestId('loader')).toBeInTheDocument();
    });
})