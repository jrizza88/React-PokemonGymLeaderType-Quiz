import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Question = ({content, imageContent}) => {
return (
    <div>
        <ImageContent src={imageContent} alt={Date.now()}/> 
        <h2>{content}</h2>
        
    </div>
)
}

Question.propTypes = {
    content: PropTypes.string.isRequired
  };

export default Question;


const ImageContent = styled.img`
max-width: 800px;
width: 100%
`