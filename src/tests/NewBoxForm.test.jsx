import { render } from '@testing-library/react';
import NewBoxForm from '../NewBoxForm';
import { describe, expect, it } from 'vitest';

describe('NewBoxForm', () => {
    it('renders App component', () => {
        render(<NewBoxForm />)
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<NewBoxForm />)
        expect(asFragment()).toMatchSnapshot()
    })
});

