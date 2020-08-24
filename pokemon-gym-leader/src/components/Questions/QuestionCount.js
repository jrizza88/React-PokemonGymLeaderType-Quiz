import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";

const QuestionCount = ({counter, total}) => {
    return (
        <QuestionCountContainer>
           Question <span> {counter}</span> of <span>{total}</span>
        </QuestionCountContainer>
    )
    }
    
    QuestionCount.propTypes = {
        counter: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired
      };
    
    export default QuestionCount;

const QuestionCountContainer = styled.div`
padding: 1.2rem 2rem 0;
font-size: 16px;
`