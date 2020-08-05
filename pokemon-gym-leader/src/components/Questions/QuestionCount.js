import React from 'react';
import PropTypes from 'prop-types';

const QuestionCount = ({counter, total}) => {
    return (
        <div className="questionCountContainer">
           Question <span> {counter}</span> of <span>{total}</span>
        </div>
    )
    }
    
    QuestionCount.propTypes = {
        counter: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired
      };
    
    export default QuestionCount;