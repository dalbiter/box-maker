import React from 'react';

const Box = ({ width, height, color, idx, removeBox }) => {

    const handleClick = (e) => {
        const boxId = e.target.id;
        removeBox(boxId)   
    }
    return (
        <div>
            <br />
            <div className="Box" style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}>
                <button className="Box-remove-button" onClick={handleClick} id={idx}>X</button>
            </div>
        </div>
            
        
    )
};

export default Box;