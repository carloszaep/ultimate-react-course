import { actions } from "./actions";
import { useQuestionsContext } from "./context/QuestionsContext";

const StartScreen = () => {
    const { numQuestions, dispatch } = useQuestionsContext()
    return <div className="start">
        <h2>Welcome to React Quiz!</h2>
        <h3>{numQuestions} questions to rest your React mastery</h3>
        <button onClick={() => dispatch({ type: actions.start })} className="btn btn-ui">Let's start</button>
    </div>
};

export default StartScreen;