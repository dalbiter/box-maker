import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, {...newBox, id: uuidv4()}]);
    }
    
    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {boxes.map(({ width, height, color, id }) => <Box width={width} height={height} color={color} key={id}/>)}
        </div>
    )
};

export default BoxList;