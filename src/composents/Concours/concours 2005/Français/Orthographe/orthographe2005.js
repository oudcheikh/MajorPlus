import React, { useState } from 'react';
import {
  Container,
  SectionContainer,
  BodyText,
  FormulaTextF,
  Card,
  ProgressBarFiller,
  Button
} from './Orthographe2005Styles';


const Orthographe2005 = ({ quizzes }) => {
  const [showSections, setShowSections] = useState([true]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null);
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  const [repCorrecte, setRepCorrecte] = useState(0);
  const [donnees, setDonnees] = useState([]);

  const RemplirtableauFinale = (x) => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const currQ = quizzes[currentQuizIndex].questions[currentQuestionIndex];
    const currQPhrase = currQ.question;
    const correcte = currQ.correctAnswer;
    const mot = currQ.options[correcte];
    const userRepindex = currQ.options[x];

    if (x === correcte) {
      setRepCorrecte(repCorrecte + 1);
    } else {
      console.log("incorrecte");
    }

    const nouvelElement = {
      id: donnees.length + 1,
      QQI: currentQuestionIndex + 1,
      concours: quizzes[currentQuizIndex].concours,
      question: currQPhrase,
      RepCorrecte: mot,
      userRep: userRepindex
    };

    setDonnees([...donnees, nouvelElement]);
  };

  const handleAnswerSelect = (selectedOptionIndex) => {
    if (userSelection === null) {
      console.log("cliquer sur une bouton");
    } else {
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
    RemplirtableauFinale(selectedOptionIndex);
  };

  const BoutonNext = () => {
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setUserSelection(null);
    }
  };

  const renderProgressBar = () => {
    // Calculer le nombre total de questions dans tous les quiz
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    
    // Calculer le nombre de questions répondues jusqu'à présent
    // Cela inclut toutes les questions des quiz précédents plus les questions actuelles du quiz actuel
    const questionsAnswered = quizzes.slice(0, currentQuizIndex).reduce((total, quiz) => total + quiz.questions.length, 0) + currentQuestionIndex + 1;
    
    // Calculer le pourcentage de progression
    const progressPercentage = ((questionsAnswered-1) / totalQuestions) * 100;
  
    return (
      <div className="progress-bar-container">
        <div className="progress-bar" style={{ width: `${progressPercentage}%` }}></div>
      </div>
    );
  };
  

  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div>
        {renderProgressBar()}

        <Card>
        <span><FormulaTextF>Concours {currentQuiz.concours}</FormulaTextF></span>
        
        {/* Affichage direct du texte du quiz actuel */}
        <p><FormulaTextF>{currentQuiz.text}</FormulaTextF></p>
        </Card>
        <h3>Exercices</h3>
        <span><FormulaTextF>{currentQuestion.question}</FormulaTextF></span>

        <div className="choices">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => setUserSelection(optionIndex)}
              className={`choice-button ${userSelection === optionIndex ? 'selected' : ''}`}
            >
              <span className="choice-text"><FormulaTextF>{option}</FormulaTextF></span>
            </button>
          ))}
        </div>

        <Button
          className='option-button-suivant'
          disabled={isNextButtonDisabled}
          onClick={BoutonNext}
          variant="contained"
          style={{ marginTop: '10px' }}
        >
          Suivant
        </Button>
      </div>
    );
  };

  const renderReport2 = () => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const score = (repCorrecte / totalQuestions) * 100;

    return (
      <div>
        <h2>Votre score est :{score}%</h2>
        {donnees.map((item, index) => (
          <div key={index}>
            <p>N°C:{item.concours} Q°{item.QQI}: {item.question} -- Réponse: {item.userRep} - <strong>Réponse Correcte:</strong>{item.RepCorrecte}</p>
          </div>
        ))}
      </div>
    );
  };

  return (
    <Container>
      {showSections[0] && (
        <SectionContainer>
          <BodyText>
            {showReport ? renderReport2() : renderQuiz()}
          </BodyText>
        </SectionContainer>
      )}
    </Container>
  );
};

export default Orthographe2005;
