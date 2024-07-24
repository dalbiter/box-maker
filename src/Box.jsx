import React from 'react';

const Box = ({ width, height, color, idx, removeBox }) => {

    const handleClick = (e) => {
        const boxId = e.target.id;
        console.log(boxId)
        removeBox(boxId)   
    }
    return (
        <div>
            <br />
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}>
                <button onClick={handleClick} id={idx}>X</button>
            </div>
        </div>
            
        
    )
};

export default Box;