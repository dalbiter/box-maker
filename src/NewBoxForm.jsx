import React, { useState } from 'react';

const NewBoxForm = () => {
    const INITIAL_STATE = {
        width: 100,
        height: 100,
        color: 'blue'
    }
    const [formData, setFormData] = useState(INITIAL_STATE)
    return (
        <form>
            <label htmlFor="width">Width: </label>
            <input type="text"
                   id="width"
                   name="width"
                   value={formData.width}
                   placeholder="width"  
            />
            <label htmlFor="height">Height: </label>
            <input type="text"
                   id="height"
                   name="height"
                   value={formData.height}
                   placeholder="height"  
            />
            <label htmlFor="color">Color: </label>
            <input type="text"
                   id="color"
                   name="color"
                   value={formData.color}
                   placeholder="color"  
            />
        </form>
    )
};

export default NewBoxForm;