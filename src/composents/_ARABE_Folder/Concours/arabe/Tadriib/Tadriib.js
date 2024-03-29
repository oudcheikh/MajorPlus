import React, { useState } from 'react';
import useSound from 'use-sound';
import { ProgressBarContainer, FormulaTextF, ProgressBarFiller, SmallCard4, SectionContainer, BodyText } from '../../../../Styles/MajorStyles';
import './Vocabulaire.css';

import { Box, Typography, Card, CardContent, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';
const StyledBox = styled(Box)({

});
const NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: 'auto',
  padding: '20px',
  backgroundColor: '#E1F5FE',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
const Tadriib = ({ quizzes, correctSound, incorrectSound }) => {

  const [showSections, setShowSections] = useState([true]);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [answerChecked, setAnswerChecked] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [progress, setProgress] = useState(0);
  const [playCorrect] = useSound(correctSound);
  const [playIncorrect] = useSound(incorrectSound);






  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(Array(quizzes.length).fill(null));
  const [userSelection, setUserSelection] = useState(null); // Ajout de l'état de la sélection
  const [showReport, setShowReport] = useState(false);
  const [isNextButtonDisabled, setIsNextButtonDisabled] = useState(false);

  const [repCorrecte, setRepCorrecte] = useState(0)
  const [donnees, setDonnees] = useState([]);
  const [showDiv, setShowDiv] = useState(false)
  const currentQuiz = quizzes[currentQuizIndex];
  const currentQuestion = quizzes[currentQuestionIndex];






  //------------


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
    console.log("----------")
    console.log(userSelection)
    if (userSelection !== null) {
      handleAnswerSelect(userSelection);
      setUserSelection(null)
    }
  };





  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setAnswerChecked(false);
  };






  const checkAnswer = () => {
    setAnswerChecked(true);
    const isAnswerCorrect = selectedChoice === currentQuestion.correctAnswer;
    setIsCorrect(isAnswerCorrect);
    isAnswerCorrect ? playCorrect() : playIncorrect();
  };

  const retryQuestion = () => {
    setSelectedChoice(null);
    setAnswerChecked(false);
    setIsCorrect(false);
  };

  const handleContinue = () => {
    if (isCorrect) {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < quizzes.length) {
        setCurrentQuestionIndex(nextIndex);
        setCorrectAnswersCount(prevCount => prevCount + 1);
        setProgress((correctAnswersCount / quizzes.length) * 100);
      } else {
        alert('Fin du quiz!');
        setCurrentQuestionIndex(0);
        setCorrectAnswersCount(0);
        setProgress(0);
      }
    }
    retryQuestion();
  };



  const renderQuiz = () => {
    const currentQuiz = quizzes[currentQuizIndex];
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];

    return (
      <div className="vocabulary-trainer">
        <ProgressBarContainer>
          <ProgressBarFiller width={progress} />
        </ProgressBarContainer>
        <Card>
          <span className='arabic-text'><FormulaTextF>كونكور سنة {currentQuiz.concours}</FormulaTextF></span>
          <FormulaTextF className='arabic-text' styles={{ fontSize: '1em' }}><h4>{currentQuiz.text}</h4>  </FormulaTextF>
        </Card>

        <FormulaTextF styles={{ fontSize: '1em' }}> {currentQuestion.question}</FormulaTextF>

        <div className="choices">
          {currentQuestion.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <button
                key={optionIndex}
                onClick={() => setUserSelection(optionIndex)}
                className={`choice-button ${userSelection === optionIndex ? 'selected' : ''}`} >
                <span className="choice-text"><FormulaTextF>{option}</FormulaTextF></span>

              </button>
            </div>
          ))}
          <button
            className="validate-button"
            onClick={BoutonNext}

          >
            <FormulaTextF>التالي</FormulaTextF>
          </button>

        </div>



      </div>

    );

  }

  const renderReport2 = () => {
    const totalQuestions = quizzes.reduce((total, quiz) => total + quiz.questions.length, 0);
    const score = (repCorrecte / totalQuestions) * 100
    const repFausse = totalQuestions - repCorrecte

    return (
      <StyledBox>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} md={12}>
            <Card style={{ marginTop: '-20px' }}>
              <CardContent>
                <Grid container spacing={2}>

                  {score > 50 ? (

                    <img  src={"/images/imagesConcoursArabe/valide.PNG"} alt="Image 1" width="100" height="100" />
                  ) : (

                    <img src={"/images/imagesConcoursArabe/inv.PNG"} alt="Image 2" width="100" height="100" />
                  )}

                  
                  <NumberDisplay>
                    <h2>%{score.toFixed(3)}:النتيجة</h2>
                    <p>{totalQuestions} : عدد الاسئلة</p>
                    <p>{repCorrecte}: عدد الاجابات الصحيحة</p>
                    <p>{repFausse}: عدد الاجابات الخاطئة</p>
                  </NumberDisplay>
                  <Button onClick={toggleDiv}>تثبت من اجاباتك</Button>
                  <Button onClick={handleRefresh}> &nbsp;&nbsp; &nbsp;&nbsp;العب مرة اخرى &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;</Button>

                  {showDiv && (
   
   <div >
    <Box>
     {donnees.map((item, index) => (
       <div key={index}>
         {/* Afficher les informations de l'item */}
         كونكور سنة :{item.concours}🎉
         <p>سؤال °{item.QQI}:{item.question}<strong >  <span>&larr;</span> الاجابة الصحيحة</strong>{item.RepCorrecte}</p>
         <p></p>

       </div>
      
     ))}
 </Box>
   </div>
    )}


   
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </StyledBox>

    )
  }




  return (
    <div>


      {showSections[0] && (
        <div>

          <BodyText>
            {showReport ? renderReport2() : renderQuiz()}


          </BodyText>


        </div>
      )}



    </div>
  );
};

export default Tadriib;










