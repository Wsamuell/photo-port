import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import Modal from '../'


const mockToggleModal = jest.fn();


const currentPhoto = {
    name: 'Grocery aisle',
    category: 'commercial',
    description: 'lorem ipsum',
    index: 1
};

afterEach(cleanup);

describe('Modal Component', () => {
    it('renders', () => {
        render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);

    })
    it('matches snapshot DOM node structure', () => {
        const { asFragment } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
    })
});

describe('Click event', () => {
    it('calls onClose handler', () => {
        const { getByText } = render(<Modal
            onClose={mockToggleModal}
            currentPhoto={currentPhoto}
            />);
            fireEvent.click(getByText('Close this modal'));
            expect(mockToggleModal).toHaveBeenCalledTimes(1);

    })
})