import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuidv4()}]);
    }
    const removeBox = (idx) => {
        setBoxes(boxes.splice(idx, 1))
        console.log(`I am in BoxList and the box you clicked is ${idx}`)
    }
    
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ width, height, color, id }, idx) => (
                <Box width={width} 
                     height={height} 
                     color={color} 
                     key={id} 
                     idx={idx}
                     removeBox={removeBox} 
                />
            ))}
        </div>
    )
};

export default BoxList;