import React, { useState } from 'react';
import {
  Container,
  SectionContainer,
  BodyText,
  FormulaTextF,
  Card,
  PositionedButton,
  Button,
  SmallCard
} from './Orthographe2005Styles';
import ArrowForward from '@mui/icons-material/ArrowForward';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';


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
  const navigate = useNavigate();

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

  const handleClick = () => {
    navigate("/Concours");
  };
  

  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div style={{ padding: '2px' }}>
  <div style={{ display: 'flex', alignItems: 'center', width: "100%" }}>
        <IconButton variant="outlined" color="primary" onClick={handleClick} style={{top:'-10px',marginRight:'8px'}}>
          <CloseIcon />
        </IconButton>
        
        {renderProgressBar()}
      </div>
<br></br>
        <Card>
        
        
        {/* Affichage direct du texte du quiz actuel */}
        <p><FormulaTextF>{currentQuiz.text}</FormulaTextF></p>
        </Card>
      
        <br/>
        
        
        <span><SmallCard><FormulaTextF>{currentQuestion.question}</FormulaTextF></SmallCard></span>

        <div className="choices">
          {currentQuestion.options.map((option, optionIndex) => (
            <button
              key={optionIndex}
              onClick={() => setUserSelection(optionIndex)}
              className={`choice-button ${userSelection === optionIndex ? 'selected' : ''}`}
            >
              <span ><FormulaTextF>{option}</FormulaTextF></span>
            </button>
          ))}
        </div>

        <div style={{ position: 'fixed', right: 20, bottom: 20, zIndex: 1000 }}>
  <ArrowForward 
    disabled={isNextButtonDisabled}
    onClick={BoutonNext}
    // Vous pouvez supprimer cette ligne si le style est déjà défini dans CSS
  >
    {/* Assurez-vous d'avoir importé ArrowForward correctement */}
  </ArrowForward>
</div>


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
       
          <BodyText>
            {showReport ? renderReport2() : renderQuiz()}
          </BodyText>
        
      )}
    </Container>
  );
};

export default Orthographe2005;
