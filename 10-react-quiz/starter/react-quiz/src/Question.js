import React from 'react';
import { actions } from './actions';

function Question({ question, dispatch, answer }) {

    const answered = answer !== null
    return (
        <div>
            <h4>{question.question}</h4>
            <div className='options'>
                {question.options.map((option, index) => {
                    return (
                        <button key={option} className={`btn btn-option ${index === answer ? "answer" : ''}
                         ${answered ? index === question.correctOption ? 'correct' : 'wrong' : ''}`}
                            onClick={() => dispatch({ type: actions.newAnswer, payload: index })}
                            disabled={answered}>
                            {option}
                        </button>)
                })}
            </div>
        </div >
    );
}

export default Question;