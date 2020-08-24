import React from 'react';
import styled from "styled-components";


const NameForm = ({value, handleChangeProp, handlePropSubmit}) => {
    return (
        <FormContainer>
            <FormLabel>
            Enter Name:
            <InputBar 
                onChange={handleChangeProp}
                type="text"
                name="trainerList"
                value={value}
            />
            </FormLabel>
            <NameButton onClick={handlePropSubmit}>Submit</NameButton>
        </FormContainer>
    )
}

export default NameForm;

const FormContainer = styled.form`
display: flex;
background: lavender;
justify-content: space-evenly;
align-items: center;
// max-width: 1200px;
width: 100%;
// padding-right: 15px;
// padding-left: 15px;
// margin-right: auto;
// margin-left: auto;
`


const FormLabel = styled.label`
margin: 10px 0;
padding-top: 20px;
font-size: 50px;
`

const InputBar = styled.input`
padding: 20px 10px 15px 10px;
font-size: 35px;
// margin-bottom: 10px;
`

const NameButton = styled.button`
background: red;
color: white;
cursor: pointer;
padding: 25px 50px;
font-size: 25px;
margin-top: 20px;
`