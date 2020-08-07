import React from 'react';
import Question from './Questions/Question'
import QuestionCount from "./Questions/QuestionCount";
import AnswerOption from "./Answers/AnswerOption";

const Quiz = ({question, questionId, questionTotal, answerOptions, answer, onAnswerSelected}) => {
    const renderAnswerOptions = (key) => {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={answer}
            questionId={questionId}
            onAnswerSelected={onAnswerSelected}
          />
        );
      }
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

