import Answer from "./Answer";

function Quiz({ question, correctAnswer, showAnswer, userAnswer }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <h2>{question}</h2>
      
      <Answer
        correctAnswer={correctAnswer}
        showAnswer={showAnswer}
        userAnswer={userAnswer}
      />
    </div>
  );
}

export default Quiz;
