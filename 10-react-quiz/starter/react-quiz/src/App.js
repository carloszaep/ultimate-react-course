import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import { useEffect, useReducer } from 'react'
import { actions } from "./actions";





const initialState = {
  questions: [],
  // 'loading' , 'error', 'ready', 'active', 'finished'
  status: 'loading',
  index: 0
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
    default:
      throw new Error('action is unknown')

  }
}

function App() {
  const [{ questions, status, index }, dispatch] = useReducer(reducer, initialState)



  const numQuestions = questions.length



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
        {status === 'active' && <Question question={questions[index]} />}
      </Main>
    </div>
  );
}

export default App;
