import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const AnswerOption = ({answerType , answer, onAnswerSelected, answerContent}) => {
  return (
    <AnswerOptionList>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={answerType === answer}
        id={answerType}
        value={answerType}
        disabled={answer}
        onChange={onAnswerSelected}
      />
      <label className="radioCustomLabel" htmlFor={answerType}>
        {answerContent}
      </label>
    </AnswerOptionList>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;


const AnswerOptionList = styled.li`
list-style: none;
font-size: 1.3rem;
margin: 0;
padding: 20px;
border-top: 1px solid black;

:hover {
  background: lavender;
}
`