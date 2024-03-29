import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './arabe.css'

import {
  Container, SectionContainer, ImageContainer, Card, BodyText,
  Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../Styles/MajorStyles';

import { Button } from '@mui/material';
import { ProgressBarContainer, FormulaTextF, ProgressBarFiller } from '../../../Styles/MajorStyles'
// import valide from'./valide.png'

// import invalide from './inv.PNG'
const ConcoursArabe = ({ quizzes }) => {

  const [showSections, setShowSections] = useState([true]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null); // Ajout de l'état de la sélection
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);
  
  const [repCorrecte, setRepCorrecte] = useState(0)
  const [donnees, setDonnees] = useState([]);
  const [showDiv, setShowDiv]=useState(false)
 
  const handleRefresh = () => {
    window.location.reload();
  };
  //Dans ce tableau je veus stoker le question la bonne réponce et le réponse de l'utilisateur et montionner si vrai ou faux  
  const RemplirtableauFinale = (x) => {

    const currQ = quizzes[currentQuizIndex].questions[currentQuestionIndex]

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
   
  };

  const toggleDiv = () => {
    setShowDiv(!showDiv);
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
         <span className='arabic-text'>اقرا النص</span>
        </button>

        {modal && (
          <div className="modal">
            <div onClick={toggleModal} className="overlay"></div>
            <div className="modal-content">

              <p>
                <span className='arabic-text'><FormulaTextF>{currentQuiz.text}</FormulaTextF>  </span>
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

   
      <div className="app-container">
      {renderProgressBar()}

        <span  className='arabic-text'><FormulaTextF>كونكور سنة {currentQuiz.concours}</FormulaTextF></span>
      
      <Modal />

        <div>
          <div>
            <br></br>
            <h3 className='arabic-text'>دراسة النص</h3></div>
            

          <span className='arabic-text'><FormulaTextF> {currentQuestion.question}</FormulaTextF></span>

          <div className="full-width-container">
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
        
          <div >
            <Button className='option-button-suivant' disabled={isNextButtonDisabled} onClick={BoutonNext} variant="contained" style={{ marginTop: '10px', display: 'block' }}>
              <span className='arabic-text'><FormulaTextF>  التالي  </FormulaTextF></span>
            </Button>




          </div>
        </div>


      </div>


    );
  };



  const renderReport2 = () => {

    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const score = (repCorrecte / totalQuestions) * 100
   const repFausse=totalQuestions-repCorrecte
    return (
      <div className="app-container">

       
        <div >
           {/* <h1>  &nbsp; &nbsp;&nbsp;&nbsp;النتيجة</h1>*/}
          
            { score > 50 ? (

    <img className="app-container" src={"/images/imagesConcoursArabe/valide.PNG"} alt="Image 1"  width="100" height="100" />
      ) : (
        
        <img className="app-container" src={"/images/imagesConcoursArabe/inv.PNGinvalide"} alt="Image 2" width="100" height="100"  />
      )}
           <div className="app-container">
            <div className="quiz-details">
                <h2>%{score.toFixed(3)}:المعدل</h2>
                <p>{totalQuestions} : عدد الاسئلة</p>
                <p>{repCorrecte}: عدد الاجابات الصحيحة</p>
                <p>{repFausse}: عدد الاجابات الخاطئة</p>
            </div>
            </div>
       
            </div>
        <div className="app-container">
        
   <Button onClick={toggleDiv}>تثبت من اجاباتك</Button>
   <Button onClick={handleRefresh}> &nbsp;&nbsp; &nbsp;&nbsp;العب مرة اخرى &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</Button>



    {showDiv && (
   
          <div >
            {donnees.map((item, index) => (
              <div key={index}>
                {/* Afficher les informations de l'item */}
                كونكور سنة :{item.concours}🎉
                <p>سؤال °{item.QQI}:{item.question}<strong >  <span>&larr;</span> الاجابة الصحيحة</strong>{item.RepCorrecte}</p>
                <p></p>

              </div>
            ))}

          </div>
           )}


        </div>



      
      </div>
    );
  };

  return (
    <div className="container">
     
        
        {showSections[0] && (
          <><SectionContainer>

            <BodyText>
              {showReport ? renderReport2() : renderQuiz()}


            </BodyText>
            

          </SectionContainer>
          </>
        )}



    </div>
    
  );
};
export default ConcoursArabe;




