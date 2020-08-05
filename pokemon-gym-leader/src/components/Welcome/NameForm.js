import React from 'react';

const NameForm = ({value, handleChangeProp, handlePropSubmit}) => {
    return (
        <form>
            <label>
            Enter Name:
            <input 
                onChange={handleChangeProp}
                type="text"
                name="trainerList"
                value={value}
            />
            </label>
            <button onClick={handlePropSubmit}>Submit</button>
        </form>
    )
}

export default NameForm;