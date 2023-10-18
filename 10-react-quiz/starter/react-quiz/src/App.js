import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import NextButton from "./NextButton";
import FinishScreen from "./FinishScreen";
import { useEffect, useReducer } from 'react'
import { actions } from "./actions";





const initialState = {
  questions: [],
  // 'loading' , 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0,
  answer: null,
  points: 0
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
      return { ...state, status: 'active' }
    case actions.newAnswer:
      const question = state.questions[state.index]
      const wasCorrect = question.correctOption === action.payload
      const points = wasCorrect ? state.points + question.points : state.points
      return { ...state, points, answer: action.payload }

    case actions.nextQuestion:
      return { ...state, index: state.index + 1, answer: null }

    case actions.finished:
      return { ...state, status: 'finished' }
    default:
      throw new Error('action is unknown')

  }
}

function App() {
  const [{ questions, status, index, answer, points }, dispatch] = useReducer(reducer, initialState)



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
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen numQuestions={numQuestions} dispatch={dispatch} />}
        {status === 'active' && <>
          <Progress answer={answer} index={index} numQuestions={numQuestions} points={points} numPoints={numPoints} />
          <Question question={questions[index]} dispatch={dispatch} answer={answer} />
          <NextButton dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index} /></>
        }
        {status === 'finished' && <FinishScreen points={points} numPoints={numPoints} />}

      </Main>
    </div>
  );
}

export default App;
