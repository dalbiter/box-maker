import { render, fireEvent } from '@testing-library/react';
import BoxList from '../BoxList';
import { describe, expect, it } from 'vitest';

function addBox(boxList, height = "2", width = "2", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height");
    const widthInput = boxList.getByLabelText("Width");
    const backgroundInput = boxList.getByLabelText("Background Color");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Add a new box!");
    fireEvent.click(button);
  }

describe('BoxList', () => {
    it('renders BoxList component', () => {
        render(<BoxList />);
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BoxList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should add a box', () => {
        const { getByLabelText, queryByText } = render(<BoxList />)
        

         
    });
});