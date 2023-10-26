import React, { useEffect } from 'react';
import { actions } from './actions';
import { useQuestionsContext } from './context/QuestionsContext';

function Timer() {
    const { dispatch, secondsRemaining } = useQuestionsContext()
    const mins = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60

    useEffect(() => {
        const interval = setInterval(() => {
            dispatch({ type: actions.resTimer })
        }, 1000)

        return () => clearInterval(interval)
    }, [dispatch])
    return (
        <div className='timer'>
            {mins}:{`${seconds < 10 ? 0 : ''}${seconds}`}
        </div>
    );
}

export default Timer;