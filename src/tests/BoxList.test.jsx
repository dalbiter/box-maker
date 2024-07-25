import { render } from '@testing-library/react';
import BoxList from '../BoxList';
import { describe, expect, it } from 'vitest';

describe('BoxList', () => {
    it('renders BoxList component', () => {
        render(<BoxList />)
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BoxList />)
        expect(asFragment()).toMatchSnapshot()
    })
});