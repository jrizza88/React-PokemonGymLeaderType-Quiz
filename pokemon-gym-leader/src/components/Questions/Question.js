import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const Question = ({content, imageContent}) => {
return (
    <div>
        <ImageContent src={imageContent} alt={Date.now()}/> 
        <Content>{content}</Content>
        
    </div>
)
}

Question.propTypes = {
    content: PropTypes.string.isRequired
  };

export default Question;


const ImageContent = styled.img`
max-width: 800px;
width: 100%;
`

const Content = styled.div`
padding: 0.5rem 2.5rem 1.5rem 2.5rem;
font-size: 2rem;;
margin: 20px 0;
`