import { useState } from "react";
import Quiz from "./Quiz";

function App() {
  const [userAnswer, setUserAnswer] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);

  const question = "What is the capital of France?";
  const correctAnswer = "Paris";

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowAnswer(true);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Simple Quiz</h1>

      <Quiz
        question={question}
        correctAnswer={correctAnswer}
        showAnswer={showAnswer}
        userAnswer={userAnswer}
      />

      {!showAnswer && (
        <form onSubmit={handleSubmit} style={{ marginTop: "15px" }}>
          <input
            type="text"
            placeholder="Type your answer..."
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            style={{ padding: "5px", marginRight: "10px" }}
          />
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
