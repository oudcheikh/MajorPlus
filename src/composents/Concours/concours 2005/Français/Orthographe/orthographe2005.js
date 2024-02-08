import React, { useState } from 'react';
//import './QuizApp.css';
import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../../Styles/MajorStyles';

import { Button } from '@mui/material';
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
  const [repCorrecte, setRepCorrecte] = useState(0)
  const [donnees, setDonnees] = useState([]);


//Dans ce tableau je veus stoker le question la bonne réponce et le réponse de l'utilisateur et montionner si vrai ou faux  
  const RemplirtableauFinale=(x)=>{
    

/*
console.log("le quiz  est:",currentQuizIndex)
console.log("le question est:",currentQuestionIndex)
console.log("la reponse correcte")
*/
//console.log(quizzes[currentQuizIndex].questions[currentQuestionIndex][correctAnswerIndex])
//console.log( quizzes[currentQuizIndex].concours)
//if(x==)

const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);

console.log(currentQuizIndex)
const currQ=quizzes[currentQuizIndex].questions[currentQuestionIndex]

const correcte=quizzes[currentQuizIndex].questions[currentQuestionIndex].correctAnswer
const mot=quizzes[currentQuizIndex].questions[currentQuestionIndex].options[correcte]
console.log("mot correcte ",mot )
console.log("xxxxxxxxxx",x)

const userRepindex=quizzes[currentQuizIndex].questions[currentQuestionIndex].options[x]
const userRep=quizzes[currentQuizIndex].questions[currentQuestionIndex].options[userRepindex]
console.log("rep user",userRepindex )
if(userRepindex==mot){
  console.log("correcte");
  setRepCorrecte(repCorrecte+1)
}
  else{
    console.log("incorrecte")
  }

 console.log("totale correcte",repCorrecte)

  

    const nouvelElement = {
      id: donnees.length + 1,
      concours :quizzes[currentQuizIndex].concours,
      question: currQ,
      RepCorrecte: mot,
      userRep:userRepindex
    };
    setDonnees([...donnees, nouvelElement]);
 console.log(donnees)

  };
  const handleAnswerSelect = (selectedOptionIndex) => {
    console.log(selectedOptionIndex)

    if (userSelection === null) {
      console.log("cliquer sur une bouton")
    }

    else {
      console.log(userAnswers)
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
    RemplirtableauFinale(selectedOptionIndex)
  };

  const BoutonNext = () => {

    console.log("---------------")
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setUserSelection(null)
    }
  };


  const Verifier = () => {
    console.log(donnees)
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
                  className={`choice-button ${userSelection === optionIndex ? 'selected' : ''}`} >


                  <span className="choice-text"><FormulaTextF>{option}</FormulaTextF></span>

                </button>
              </div>
            ))}
          </div >
        </div>
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>

            <Button  className='option-button-suivant' disabled={elboutontemchi} onClick={BoutonNext} variant="contained" style={{ marginTop: '10px', display: 'block' }}>
              <span ><FormulaTextF>  Suivant  </FormulaTextF></span>
            </Button>


            <Button  onClick={Verifier}  variant="contained" color="primary" style={{ marginTop: '10px', display: 'block' }}>
              <span ><FormulaTextF>  Verifier</FormulaTextF></span>
            </Button>

          </div>
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

    {/*
      <div class="card text-center">
        
        <div class="card-body">
        <table>
        <thead>
          <tr>
            <th>concours</th>
            <th>question</th>
            <th>RepCorrecte</th>
            <th>userRep</th>
            
          </tr>
        </thead>
        <tbody>
          {donnees.map((element, index) => (


            <tr key={index}>
              <td>{element.concours}</td>
              <td>{element.question}</td>
              <td>{element.RepCorrecte}</td>
              <td>{element.userRep}</td>
            </tr>
          ))}
        </tbody>
      </table>
        </div>
      </div>
          */}
    </div>

  );
};
export default Orthographe2005;





