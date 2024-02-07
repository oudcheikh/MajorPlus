import React, { useState,useEffect } from 'react';



const Orthographe2005 = ({ quizzes }) => {
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const handleAnswerSelect = (selectedOptionIndex) => {
    setUserSelection(selectedOptionIndex);
  
    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = selectedOptionIndex;
      return newAnswers;
    });
  
    setIsNextButtonDisabled(true);
  };
  
  useEffect(() => {
    if (userSelection === null) {
      setIsNextButtonDisabled(true);
    }
  }, [userSelection]);

  const handleNextButtonClick = () => {
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setIsNextButtonDisabled(true);
    }
  };

  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div>
        <h2>Quiz</h2>
        <p>{currentQuiz.text}</p>
        <p>{currentQuestion.question}</p>
        <ul>
          {currentQuestion.options.map((option, optionIndex) => (
            <li key={optionIndex}>
              <button 
                onClick={() => setUserSelection(optionIndex)}
                className={`option-button ${userSelection === optionIndex ? 'selected' : ''}`}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
        <button 
          className='option-button-suivant' 
          onClick={handleNextButtonClick} 
          disabled={isNextButtonDisabled}
        >
          Suivant
        </button>
      </div>
    );
  };

  const renderReport = () => {
    // Logique pour afficher le rapport de quiz
  };

  return (
    <div>
      {showReport ? renderReport() : renderQuiz()}
    </div>
  );
};

export default Orthographe2005;





{/*import React, { useState } from 'react';
//import './QuizApp.css';
import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../../Styles/MajorStyles';


const Orthographe2005 = ({ quizzes }) => {

const [showSections, setShowSections] = useState([true]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null); // Ajout de l'état de la sélection
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(true);


  const handleAnswerSelect = (selectedOptionIndex) => {
   console.log("answeer")
    setUserSelection(selectedOptionIndex);

    setIsNextButtonDisabled(false);

    setUserAnswers((prevAnswers) => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuizIndex * quizzes[currentQuizIndex].questions.length + currentQuestionIndex] = selectedOptionIndex;
      return newAnswers;
    });
  
    if (currentQuestionIndex < quizzes[currentQuizIndex].questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setCurrentQuestionIndex(0);
  
      if (currentQuizIndex < quizzes.length - 1) {
        setCurrentQuizIndex(currentQuizIndex + 1);
      } else {
        setShowReport(true);
      }
    }
  };
  

  const handleNextButtonClick = () => {
    console.log("l'option est nour")
    // Seulement passer à la question ou au quiz suivant si l'utilisateur a fait une sélection
    if (userSelection !== null) {
        handleAnswerSelect(userSelection);
        setIsNextButtonDisabled(true); // Désactiver le bouton "Suivant" après le clic
      }
    };

  const renderProgressBar = () => {
    const progressPercentage = ((currentQuizIndex + 0) / quizzes.length) * 100;

    return (
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    );
  };


  
  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div>
       
        
        {renderProgressBar()}
        {currentQuiz.text}
        <div>
            <div> 
                <br></br>
                <h3>Exercices</h3></div>
         
          <p>{currentQuestion.question}</p>
          <ul>
            {currentQuestion.options.map((option, optionIndex) => (
              <li key={optionIndex}>
                <button 
                  onClick={() => setUserSelection(optionIndex)}
                  className={`option-button ${userSelection === optionIndex ? 'selected' : ''}`}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
        
        <button  className='option-button-suivant' onClick={handleNextButtonClick} disabled={isNextButtonDisabled}>
          Suivant
        </button>
        


      </div>
    );
  };

  

  const renderReport2 = () => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
      const quizIndex = Math.floor(index / quizzes[currentQuizIndex].questions.length);
      const questionIndex = index % quizzes[currentQuizIndex].questions.length;
  
      const currentQuiz = quizzes[quizIndex];
      if (currentQuiz && currentQuiz.questions) {
        return count + (answer === currentQuiz.questions[questionIndex].correctAnswer ? 1 : 0);
      }
      return count;
    }, 0);
  
    const score = (correctAnswersCount / totalQuestions) * 100;
  
    return (
      <div>
        <h2>Rapport du Quiz</h2>
        <p>Score: {score}%</p>
        <ul>
          {quizzes.map((quiz, quizIndex) => (
            quiz.questions.map((question, questionIndex) => {
              const userAnswer = userAnswers[quizIndex * quiz.questions.length + questionIndex];
              const correctAnswerIndex = question.correctAnswer;
              const isCorrect = userAnswer === correctAnswerIndex;
  
              return (
                <li key={`${quizIndex}-${questionIndex}`}>
                  Texte {quizIndex + 1}: Question {questionIndex + 1} - Réponse: {question.options[userAnswer]} - {isCorrect ? 'Correcte' : 'Incorrecte'}
                </li>
              );
            })
          ))}
        </ul>
      </div>
    );
  };
  
    

  return (
 

        <div >
           <Container>
            <div>
                <Title> Orthographes</Title>
               

            </div>

            {showSections[0] && (
                <><SectionContainer> 
                    
                     <BodyText>
          {showReport ? renderReport2() : renderQuiz()}

          
          </BodyText>
          <BodyText>
         
                        </BodyText>
                   
                    </SectionContainer>
                    </>
            )}
           </Container>


        </div>
     
  );
};

export default Orthographe2005;

*/}


