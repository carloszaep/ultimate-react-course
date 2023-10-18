import React from 'react';

function Progress({ index, numQuestions, points, numPoints }) {
    return (
        <header>
            <p>Question <strong>{index + 1}</strong> / {numQuestions}</p>
            <p><strong>{points}</strong> / {numPoints}</p>
        </header>
    );
}

export default Progress;