import React from 'react';
import { actions } from './actions';
import { useQuestionsContext } from './context/QuestionsContext';

function FinishScreen() {
    const { points, numPoints, dispatch } = useQuestionsContext()
    const percentage = (points / numPoints) * 100
    return (
        <>

            <p className='result'>
                You scored <strong>{points}</strong> out of {numPoints} ({Math.ceil(percentage)}%)
            </p>
            <button className='btn btn-ui' onClick={() => dispatch({ type: actions.restart })}>
                Restart
            </button>
        </>
    );
}

export default FinishScreen;