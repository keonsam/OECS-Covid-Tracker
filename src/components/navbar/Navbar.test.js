import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Navbar from './Navbar';


let search;

const c = jest.fn()
const s = jest.fn()

const handleChange = (event) => {
    if(!event.target.value) throw new Error("no value")
    search = event.target.value
    c()
    return;
}

const handleSubmit = (e) => {
    e.preventDefault()
    s()
    return;
}

const props = {
    searchValue: search,
    handleChange,
    handleSubmit
}

describe('nav bar', () => {
    it('should load a navbar', () => {
        render(<Navbar {...props} />);
        expect(screen.getByRole('navigation')).toBeInTheDocument();
    });

    it('should have heading of OECS COVID Tracker', () => {
        render(<Navbar {...props} />);
        expect(screen.getByRole('heading')).toHaveTextContent('OECS Covid Tracker');
    });

    it('should be search able', () => {
        render(<Navbar {...props} />);
        const search = screen.getByLabelText('Search')
        fireEvent.change(search, { target: { value: 'St. Vincent' } })
        expect(search.value).toBe('St. Vincent')
        expect(c).toHaveBeenCalledTimes(1)
        const submit = screen.getByRole("button", { name: /Search/i })
        fireEvent.click(submit)
        expect(s).toHaveBeenCalledTimes(1)
    });
})