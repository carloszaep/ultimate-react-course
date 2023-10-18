import React from 'react';

function FinishScreen({ points, numPoints }) {
    const percentage = (points / numPoints) * 100
    return (
        <p className='result'>
            You scored <strong>{points}</strong> out of {numPoints} ({Math.ceil(percentage)}%)
        </p>
    );
}

export default FinishScreen;