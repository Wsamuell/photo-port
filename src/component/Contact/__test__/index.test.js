import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Contact from '..';
import ContactForm from '..';

afterEach(cleanup);
describe('contactForm components', () => {
    it('renders', () => {
        render(<ContactForm />)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    })
})

it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('h1tag')).toHaveTextContent('Contact Me')
  })
   
  it('renders', () => {
    const { getByTestId } = render(<ContactForm />)
    expect(getByTestId('button')).toHaveTextContent('Submit')
  })