import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import screenshot from '../../Images/SuperSewerBros_Screenshot.png';
import ProjectDisplay from './ProjectDisplay';


const props = {
    title: 'The Title',
    description: 'The description',
    image: screenshot,
}
describe('ProjectDisplay', () => {
    let testObject;
    beforeEach(() => {
        testObject = render(<ProjectDisplay title={props.title} description={props.description} image={props.image} />);
    })

    it('should have a title', () => {
        const title = screen.queryByText(props.title);

        expect(title).toBeInTheDocument();
    });

    it('should have a description', () => {
        const description = screen.queryByText(props.description);
        expect(description).toBeInTheDocument();
    });

    it('should have a image', () => {
        const image = screen.getByAltText('screenshot');

        expect(image).toHaveAttribute('src', props.image);
    });
});