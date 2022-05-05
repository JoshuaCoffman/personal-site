import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';

describe('Navbar', () => {

    it('should expand when the hamburger is clicked', () => {
        render(<BrowserRouter> <Navbar /> </BrowserRouter>);
        const expandButton = screen.getByText('|||');

        const expandedHomeButton = screen.queryByText('Home');

        expect(expandedHomeButton).toBeInTheDocument();

        fireEvent.click(expandButton);

        const collapsedHomeButton = screen.queryByText('H');

        expect(collapsedHomeButton).toBeInTheDocument();
    })
})