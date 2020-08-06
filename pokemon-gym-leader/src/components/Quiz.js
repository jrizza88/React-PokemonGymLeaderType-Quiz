import React from 'react';
import Welcome from "./Welcome";

import Question from './Questions/Question'
import QuestionCount from "./Questions/QuestionCount";
import AnswerOption from "./Answers/AnswerOption";

const Quiz = ({question, questionId, questionTotal, answerOptions}) => {
    return (
        <div className="quiz">
          <QuestionCount
            counter={questionId}
            total={questionTotal}
          />
          <Question content={question} />
          <ul className="answerOptions">
            {answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
    );
}

export default Quiz;

