import React from 'react';
import PropTypes from 'prop-types';

const Question = ({content}) => {
return (
    <div>
        Question Div...
        <h2>{content}</h2>
        
    </div>
)
}

Question.propTypes = {
    content: PropTypes.string.isRequired
  };

export default Question;