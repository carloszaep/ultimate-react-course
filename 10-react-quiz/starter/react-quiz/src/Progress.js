import React from 'react';
import { useQuestionsContext } from './context/QuestionsContext';

function Progress() {
    const { index, numQuestions, points, numPoints, answer } = useQuestionsContext()
    return (
        <header className='progress'>
            <progress max={numQuestions} value={index + Number(answer !== null)} />
            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {numPoints}</p>
        </header>
    );
}

export default Progress;