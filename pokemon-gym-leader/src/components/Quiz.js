import React from 'react';
import Welcome from "./Welcome";

import Question from './Questions/Question'
import QuestionCount from "./Questions/QuestionCount";
import AnswerOption from "./Answers/AnswerOption";

const Quiz = ({question, questionId, questionTotal}) => {
    return (
        <div className="quiz">
          <QuestionCount
            counter={props.questionId}
            total={props.questionTotal}
          />
          <Question content={props.question} />
          <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
        </div>
    );
}

export default Quiz;

