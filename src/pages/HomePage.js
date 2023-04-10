//import react
import React, { useState } from "react";
//import quiz questions component
import QuizQuestions from "../components/QuizQuestions";
//import styles
import styles from "./styles.module.css";

function HomePage() {
  const [inQuiz, setInQuiz] = useState(true);
  const [topic, setTopic] = useState(null);
  const handleButtonClick = (selectedTopic) => {
    setTopic(selectedTopic);
    setInQuiz(false);
  };

  return (
    <>
      {inQuiz ? (
        <div className={styles.container}>
          <p className={styles.heading}>
            Choose the subject that you'd like to take a quiz at
          </p>
          <button
            onClick={() => handleButtonClick("biology")}
            className={styles.buttons}
          >
            Biology
          </button>
          <button
            onClick={() => handleButtonClick("math")}
            className={styles.buttons}
          >
            Math
          </button>
          <button
            onClick={() => handleButtonClick("chemistry")}
            className={styles.buttons}
          >
            Chemistry
          </button>
          <button
            onClick={() => handleButtonClick("english")}
            className={styles.buttons}
          >
            English
          </button>
          <button
            onClick={() => handleButtonClick("physics")}
            className={styles.buttons}
          >
            Physics
          </button>
        </div>
      ) : (
        <>{topic && <QuizQuestions topic={topic} />}</>
      )}
    </>
  );
}

export default HomePage;
