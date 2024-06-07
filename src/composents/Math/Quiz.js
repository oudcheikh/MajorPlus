import React, { useState } from 'react';

const Quiz = () => {
  const questions = [
    {
      question: "__________ and __________ are the two types of website?",
      options: [
        "Static and Dynamic Websites",
        "Status and Dynamic Websites",
        "Strict and Dynamic Websites",
        "Static and Dynamics Websites"
      ],
      answer: "Static and Dynamic Websites"
    },
    // Add more questions as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestionIndex].answer) {
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer. Try Again.");
    }
    setSelectedOption("");
    setShowResult(false);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz Completed!");
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Free Quiz Mode</h1>
      <div>
        <p>Question {currentQuestionIndex + 1} of {questions.length}</p>
        <p>{questions[currentQuestionIndex].question}</p>
        <div>
          {questions[currentQuestionIndex].options.map((option, index) => (
            <div key={index}>
              <button
                style={{
                  display: "block",
                  width: "100%",
                  padding: "10px",
                  margin: "10px 0",
                  backgroundColor: selectedOption === option ? "#4CAF50" : "#f1f1f1",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer"
                }}
                onClick={() => handleOptionChange(option)}
              >
                {option}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
          onClick={handleNextQuestion}
        >
          Next
        </button>
        <button
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            marginLeft: "10px"
          }}
          onClick={() => alert("Quiz Quit!")}
        >
          Quit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
