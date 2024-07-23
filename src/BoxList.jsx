import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

const BoxList = () => {
    const [boxes, setBoxes] = useState([])
    
    return (
        <div>
            <NewBoxForm />
            <Box />
        </div>
    )
};

export default BoxList;