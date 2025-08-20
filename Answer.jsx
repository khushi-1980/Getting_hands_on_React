function Answer({ correctAnswer, showAnswer, userAnswer }) {

  return (
    <div style={{ marginTop: "10px" }}>
      {showAnswer ? (
        <>
          <p>Correct Answer: {correctAnswer}</p>
          <p>
            Your Answer: {userAnswer}{" "}
            {userAnswer.trim().toLowerCase() ===
            correctAnswer.trim().toLowerCase() ? (
              <span style={{ color: "green" }}>✅ Correct</span>
            ) : (
              <span style={{ color: "red" }}>❌ Incorrect</span>
            )}
          </p>
        </>
      ) : (
        <p>Answer is Hidden</p>
      )}
    </div>
  );
}

export default Answer;
