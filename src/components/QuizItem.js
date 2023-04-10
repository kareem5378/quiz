//import from react redux
import { useDispatch, useSelector } from "react-redux";
//import setResult from redux action
import { setResult } from "../redux/action";
//import from react
import { useState } from "react";
//import style
import style from "./styles.module.css";

function QuizItem({ question }) {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const dispatch = useDispatch();
  const handleAnswerSelect = (answerIndex, choice) => {
    setSelectedAnswer(answerIndex);
    if (question.correct == choice) dispatch(setResult());
  };

  return (
    <div className={style.questionContainer}>
      <h2>{question.question}</h2>
      <ul>
        {question.choices.map((choice, index) => (
          <li
            key={index}
            onClick={() => handleAnswerSelect(index, choice)}
            style={{
              backgroundColor:
                selectedAnswer === index
                  ? "lightblue"
                  : "rgba(220,220,220,0.4)",
            }}
            className={style.choices}
          >
            {choice}
          </li>
        ))}
        <hr />
      </ul>
    </div>
  );
}
export default QuizItem;
