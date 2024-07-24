import React from 'react';

const Box = ({ width, height, color }) => {

    const handleClick = (e) => {
        console.log(e.target.id)
    }
    return (
        <div>
            <br />
            <div style={{width: `${width}px`, height: `${height}px`, backgroundColor: color}}>
                <button onClick={handleClick} id={0}>X</button>
            </div>
        </div>
            
        
    )
};

export default Box;