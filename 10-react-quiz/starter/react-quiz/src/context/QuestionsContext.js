import { createContext, useContext, useEffect, useReducer } from 'react';
import { actions } from '../actions';

const SECFORQUESTIONS = 30

const initialState = {
    questions: [],
    // 'loading' , 'error', 'ready', 'active', 'finished'
    status: 'loading',
    index: 0,
    answer: null,
    points: 0, secondsRemaining: null
}
function reducer(state, action) {
    switch (action.type) {
        case actions.dataReceived:
            return { ...state, questions: action.payload, status: 'ready' }

        case actions.dataFailed:
            return { ...state, status: 'error' }

        case actions.dataLoading:
            return { ...state, status: 'loading' }

        case actions.start:
            return { ...state, status: 'active', secondsRemaining: state.questions.length * SECFORQUESTIONS }

        case actions.newAnswer:
            const question = state.questions[state.index]
            const wasCorrect = question.correctOption === action.payload
            const points = wasCorrect ? state.points + question.points : state.points
            return { ...state, points, answer: action.payload }

        case actions.nextQuestion:
            return { ...state, index: state.index + 1, answer: null }

        case actions.finished:
            return { ...state, status: 'finished' }

        case actions.resTimer:
            return {
                ...state, secondsRemaining: state.secondsRemaining - 1,
                status: state.secondsRemaining <= 0 ? 'finished' : state.status
            }

        case actions.restart:
            return { ...initialState, status: 'ready', questions: state.questions }
        default:
            throw new Error('action is unknown')

    }
}



const QuestionsContext = createContext();



export function QuestionsContextProvider({ children }) {
    const [{ questions, status, index, answer, points, secondsRemaining }, dispatch] = useReducer(reducer, initialState)



    const numQuestions = questions.length
    const numPoints = questions.reduce((acc, curr, i) => {
        return acc + curr.points
    }, 0)



    useEffect(() => {
        async function fetchQuestions() {
            try {
                const data = await fetch('http://localhost:8000/questions')
                dispatch({ type: actions.dataLoading })

                if (!data.ok || !data) throw new Error('something happen')

                const parseData = await data.json()

                dispatch({ type: actions.dataReceived, payload: parseData })

            } catch (err) {
                dispatch({ type: actions.dataFailed })
            }

        }

        fetchQuestions()
    }, [])

    return (
        <QuestionsContext.Provider value={{
            questions, status, index,
            answer, points, secondsRemaining,
            dispatch, numPoints, numQuestions
        }}>
            {children}
        </QuestionsContext.Provider>
    );
}

export function useQuestionsContext() {
    const context = useContext(QuestionsContext);
    if (!context) {
        throw new Error('useQuestionsContext must be used within a QuestionsContextProvider');
    }
    return context;
}