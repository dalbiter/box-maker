import { render, fireEvent } from '@testing-library/react';
import BoxList from '../BoxList';
import { describe, expect, it } from 'vitest';

function addBox(boxList, height = "100", width = "100", color = "peachpuff") {
    const heightInput = boxList.getByLabelText("Height:");
    const widthInput = boxList.getByLabelText("Width:");
    const backgroundInput = boxList.getByLabelText("Color:");
    fireEvent.change(backgroundInput, { target: { value: color } });
    fireEvent.change(widthInput, { target: { value: width } });
    fireEvent.change(heightInput, { target: { value: height } });
    const button = boxList.getByText("Create Box!");
    fireEvent.click(button);
  };

describe('BoxList', () => {
    it('renders BoxList component', () => {
        render(<BoxList />);
    });

    it('should match snapshot', () => {
        const { asFragment } = render(<BoxList />);
        expect(asFragment()).toMatchSnapshot();
    });

    it('should add a box', () => {
        const boxList = render(<BoxList />);
        
        expect(boxList.queryByText("X")).not.toBeInTheDocument();

        addBox(boxList);

        const removeButton = boxList.getByText('X');
        expect(removeButton).toBeInTheDocument();
        // expect there to be a box
        expect(removeButton.parentElement).toHaveClass("Box")
        //form should have 3 empty inputs
        expect(boxList.getAllByDisplayValue("")).toHaveLength(3);     
    });

    it("should remove a box", function() {
        const boxList = render(<BoxList />);
        addBox(boxList);
      
        const removeButton = boxList.getByText("X");
      
        // click the remove button and the box should be gone
        fireEvent.click(removeButton);
        expect(removeButton).not.toBeInTheDocument();
      });
});