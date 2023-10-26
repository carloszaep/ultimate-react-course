import Header from "./Header";
import Main from "./Main";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Progress from "./Progress";
import Question from "./Question";
import NextButton from "./NextButton";
import Timer from "./Timer";
import FinishScreen from "./FinishScreen";
import { useQuestionsContext } from "./context/QuestionsContext";


function App() {
  const { status } = useQuestionsContext()

  return (
    <div className="app">
      <Header />
      <Main>
        {status === 'loading' && <Loader />}
        {status === 'error' && <Error />}
        {status === 'ready' && <StartScreen />}
        {status === 'active' && <>
          <Progress />
          <Question />
          <footer>
            <Timer />
            <NextButton />
          </footer></>
        }
        {status === 'finished' && <FinishScreen />}

      </Main>
    </div>
  );
}

export default App;
