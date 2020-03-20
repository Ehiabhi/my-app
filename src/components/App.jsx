import React, { useState } from "react";
import Header from "./Header";
import Question from "./Question";
import Button from "./Button";
import { QuestionFile, Answer } from "./QuestionFile";

function App() {
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  function nextQuestion(event) {
    let choice = event.target.value;
    if (choice == Answer[count].key) {
      setScore(function(prevScore) {
        return prevScore + 1;
      });
    }

    setCount(function(prevCount) {
      return prevCount + 1;
    });
  }
  if (count === QuestionFile.length) {
    return (
      <div className="container">
        <h1>
          Thanks for taking the test. Your score is {score} /{" "}
          {QuestionFile.length}
        </h1>
      </div>
    );
  } else {
    return (
      <div className="container">
        <Header count={count + 1} />
        <hr />
        <Question question={QuestionFile[count].question} />
        {QuestionFile[count].options.map(function(option, index) {
          return (
            <Button
              key={index}
              setNextQuestion={
                count < QuestionFile.length ? nextQuestion : undefined
              }
              option={option}
            />
          );
        })}
      </div>
    );
  }
}

export default App;
