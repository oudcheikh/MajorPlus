import React, { useState } from 'react';
//import './QuizApp.css';
import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../../Styles/MajorStyles';

import { ProgressBarContainer, FormulaTextF, ProgressBarFiller } from '../../../../Styles/MajorStyles'
const Orthographe2005 = ({ quizzes }) => {

  const [showSections, setShowSections] = useState([true]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null); // Ajout de l'état de la sélection
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
 const [elboutontemchi, setElboutontemchi] = useState(false)

  const handleAnswerSelect = (selectedOptionIndex) => {
    console.log(selectedOptionIndex)

    if (userSelection === null) {
      console.log("cliquer sur une bouton")
    }

    else {
      setUserAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[currentQuizIndex * quizzes[currentQuizIndex].questions.length + currentQuestionIndex] = selectedOptionIndex;
        return newAnswers;
      });

    }

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

  const BoutonNext = () => {

    console.log("---------------")
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setUserSelection(null)
    }
  };


  const test = () => {
    console.log(elboutontemchi)
  }




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
        <span ><FormulaTextF>concour{currentQuiz.concours}</FormulaTextF></span>
        <span ><FormulaTextF>{currentQuiz.text}</FormulaTextF></span>

        <div>
          <div>
            <br></br>
            <h3>Exercices</h3></div>

          <span ><FormulaTextF> {currentQuestion.question}</FormulaTextF></span>

          <div className="choices">
            {currentQuestion.options.map((option, optionIndex) => (
              <div key={optionIndex}>
                <button

                  onClick={() => setUserSelection(optionIndex)}
                  className={`choice-button ${userSelection === optionIndex ? 'selected' : ''}`}

                >


                  <span className="choice-text"><FormulaTextF>{option}</FormulaTextF></span>

                </button>
              </div>
            ))}
          </div >
        </div>
        <div>

          <button className='option-button-suivant' disabled={elboutontemchi} onClick={BoutonNext}  >
            <span ><FormulaTextF>  Suivant</FormulaTextF></span>
          </button>

    
        </div>



      </div>
    );
  };



  const renderReport2 = () => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const correctAnswersCount = userAnswers.reduce((count, answer, index) => {
      const quizIndex = Math.floor(index / quizzes[currentQuizIndex].questions.length);
      console.log(userAnswers)
      const questionIndex = index % quizzes[currentQuizIndex].questions.length;

      const currentQuiz = quizzes[quizIndex];
      if (currentQuiz && currentQuiz.questions && currentQuiz.questions[questionIndex]) { // Check if currentQuiz and currentQuiz.questions are defined
        return count + (answer === currentQuiz.questions[questionIndex].correctAnswer ? 1 : 0);
      }
      return count;
    }, 0);

    const score = (correctAnswersCount / totalQuestions) * 100;
    console.log(score)
    return (
      <div>
        <h2>Rapport du Quiz</h2>
        <p>Score: {score}%</p>
        <ul>
          {quizzes.map((quiz, quizIndex) => (
            quiz.questions.map((question, questionIndex) => {
              const userAnswer = userAnswers[quizIndex * quiz.questions.length + questionIndex];
              if (!question || !question.correctAnswer) return null; // Skip if question or correctAnswer is not defined
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


      <div class="card text-center">
        <div class="card-header">
          <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
              <a class="nav-link active" aria-current="true" href="#">Active</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
        </div>
        <div class="card-body">
          <h5 class="card-title">Special title treatment</h5>
          <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
      </div>

    </div>

  );
};

export default Orthographe2005;


