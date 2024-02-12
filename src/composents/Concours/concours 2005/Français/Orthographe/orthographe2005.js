import React, { useState } from 'react';

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
  
  const [repCorrecte, setRepCorrecte] = useState(0)
  const [donnees, setDonnees] = useState([]);


  //Dans ce tableau je veus stoker le question la bonne réponce et le réponse de l'utilisateur et montionner si vrai ou faux  
  const RemplirtableauFinale = (x) => {



    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);

    console.log(currentQuizIndex)
    const currQ = quizzes[currentQuizIndex].questions[currentQuestionIndex]
    console.log("the current question is ", currQ)
    const currQPhrase = currQ.question
    console.log("the phrase oh the question is  ", currQPhrase)


    const correcte = quizzes[currentQuizIndex].questions[currentQuestionIndex].correctAnswer
    const mot = quizzes[currentQuizIndex].questions[currentQuestionIndex].options[correcte]
   

    const userRepindex = quizzes[currentQuizIndex].questions[currentQuestionIndex].options[x]
    const userRep = quizzes[currentQuizIndex].questions[currentQuestionIndex].options[userRepindex]
    


    if (userRepindex == mot) {
     
      setRepCorrecte(repCorrecte + 1)
    }
    else {
      console.log("incorrecte")
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
    console.log(donnees)

  };
  const handleAnswerSelect = (selectedOptionIndex) => {
    

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

    
    RemplirtableauFinale(selectedOptionIndex)
  };


  //s'il clique sur un choix il peut passer si non il reste bloqué
  const BoutonNext = () => {

    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setUserSelection(null)
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


  const Modal = () => {
    const [modal, setModal] = useState(false);
    const currentQuiz = quizzes[currentQuizIndex];

    const toggleModal = () => {
      setModal(!modal);
    };

    if (modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }

    return (
      <>
        <button color="primary" onClick={toggleModal} className="btn-modal">
          Lire le texte
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

              <p>
                <span ><FormulaTextF>{currentQuiz.text}</FormulaTextF>  </span>
              </p>

            </div>
          </div>
        )}

      </>
    );
  }

//fonction de base 
  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div>


        {renderProgressBar()}
        <span ><FormulaTextF>concour{currentQuiz.concours}</FormulaTextF></span>
      
      <Modal />

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

            <Button className='option-button-suivant' disabled={isNextButtonDisabled} onClick={BoutonNext} variant="contained" style={{ marginTop: '10px', display: 'block' }}>
              <span ><FormulaTextF>  Suivant  </FormulaTextF></span>
            </Button>




          </div>
        </div>


      </div>


    );
  };



  const renderReport2 = () => {

    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const score = (repCorrecte / totalQuestions) * 100
   
    return (
      <div>

        <div>
          <h2> votre score est :{score}% </h2>
          <div>
            {donnees.map((item, index) => (
              <div key={index}>
                {/* Afficher les informations de l'item */}
                N°C:{item.concours}
                <p>Q°{item.QQI}:{item.question}--Reponse:{item.userRep}-<strong>RéponseCorrecte:</strong>{item.RepCorrecte}</p>
                <p></p>




              </div>
            ))}

          </div>
        </div>




      </div>
    );
  };

  return (


    <div >
      <Container>
        <div>



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




