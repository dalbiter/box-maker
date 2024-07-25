import { render, fireEvent } from '@testing-library/react';
import BoxList from '../BoxList';
import { describe, expect, it } from 'vitest';

describe('BoxList', () => {
    it('renders BoxList component', () => {
        render(<BoxList />)
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BoxList />)
        expect(asFragment()).toMatchSnapshot()
    });

    it('should add a box', () => {
        const { getByLabelText, queryByText } = render(<BoxList />)
        const widthInput = getByLabelText('Width:')
        const heightInput = getByLabelText('Height:')
        const colorInput = getByLabelText('Color:')
        const btn = queryByText('Create Box!')
        console.log(boxes) 
    });
});