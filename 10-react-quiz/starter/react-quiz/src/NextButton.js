import React from 'react';
import { actions } from './actions';

function NextButton({ dispatch, answer }) {
    if (answer === null) return null

    return (
        <button className='btn btn-ui' onClick={() => dispatch({ type: actions.nextQuestion })}>
            Next
        </button>
    );
}

export default NextButton;