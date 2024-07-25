import { render } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';

describe('App', () => {
    it('renders App component', () => {
        render(<App />)
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<App />)
        expect(asFragment()).toMatchSnapshot()
    })
});