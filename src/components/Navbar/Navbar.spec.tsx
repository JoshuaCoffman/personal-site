import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Navbar from './Navbar';

describe('Navbar', () => {

    it('should expand when the hamburger is clicked', () => {
        render(<Navbar />);
        const expandButton = screen.getByText('|||');
        
        fireEvent.click(expandButton);

        const expandedHomeButton = screen.queryByText('Home');

        expect(expandedHomeButton).toBeInTheDocument();
    })
    })