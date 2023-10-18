import React from 'react';
import { actions } from './actions';

function NextButton({ dispatch, answer, numQuestions, index }) {
    if (answer === null) return null

    if (index < numQuestions - 1) return (
        <button className='btn btn-ui' onClick={() => dispatch({ type: actions.nextQuestion })}>
            Next
        </button>
    );

    if (index === (numQuestions - 1)) return (
        <button className='btn btn-ui' onClick={() => dispatch({ type: actions.finished })}>
            Finish
        </button>)

}

export default NextButton;