import { render } from '@testing-library/react';
import Box from '../Box';
import { describe, expect, it } from 'vitest';

describe('Box', () => {
    it('renders Box component', () => {
        render(<Box />)
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<Box />)
        expect(asFragment()).toMatchSnapshot()
    })
});