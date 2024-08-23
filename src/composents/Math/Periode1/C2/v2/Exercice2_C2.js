import React, { useState, useEffect } from 'react';
import { Box, Button, Grid, Alert } from "@mui/material";
import { DndProvider, useDrag, useDrop, useDragLayer } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TouchBackend } from 'react-dnd-touch-backend';
import { isMobile } from 'react-device-detect';
import styled from "styled-components";
import { Card as Card1 } from '../../../../Styles/MajorStyles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ReplyIcon from '@mui/icons-material/Reply';

import ActivityWrapper from "../../../Reusable Components/Slides Content/ActivityWrapper";
import { useAuth } from "../../../../Sign_in/v2/context/AuthContext";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../../../Sign_in/v2/firebase";

import './c2.css'







const ButtonContainer = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '20px',
});

const ItemType = 'card';

const StyledText = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }`;


const imageStyle = {
  width: "50%",
  height: "auto",
  maxWidth: "70%",
  display: "block",
  marginLeft: "auto",
  marginRight: "auto",
};
const layerStyles = {
  position: 'fixed',
  pointerEvents: 'none',
  zIndex: 100,
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
};

function getItemStyles(currentOffset) {
  if (!currentOffset) {
    return {
      display: 'none',
    };
  }

  const { x, y } = currentOffset;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const CustomDragLayer = () => {
  const {
    itemType,
    isDragging,
    item,
    currentOffset,
  } = useDragLayer((monitor) => ({
    item: monitor.getItem(),
    itemType: monitor.getItemType(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if (!isDragging) {
    return null;
  }

  return (
    <div style={layerStyles}>
      <div style={getItemStyles(currentOffset)}>
        <Button
          variant="contained"
          style={{ backgroundColor: '#0000FF', color: 'white' }}
        >
          {item.text}
        </Button>
      </div>
    </div>
  );
};

const Card = ({ id, text, moveCard }) => {
  const [{ isDragging }, drag] = useDrag({
    type: ItemType,
    item: { id, text },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        moveCard(item.id, dropResult.id);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Button
      ref={drag}
      variant="contained"
      style={{ opacity: isDragging ? 0 : 1, backgroundColor: '#0000FF', color: 'white' }}
    >
      {text}
    </Button>
  );
};

const Slot = ({ id, accept, lastDroppedId, moveCard }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: () => ({ id }),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  return (
    <Button ref={drop} variant="outlined">
      {lastDroppedId !== null ? lastDroppedId : '?'}
    </Button>
  );
};

const C2A1 = () => {
  const [cards, setCards] = useState([]);
  const [table, setTable] = useState(Array(4).fill(null));
  const [finished, setFinished] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const { currentUser } = useAuth(); // Use the authentication context
  const [score, setScore] = useState(0);
  const [entryTime, setEntryTime] = useState(null);
  const [isGameOver, setIsGameOver] = useState(false);
  const [repondre, setReponder] = useState(true)
  const [rejouer, setRejouer] = useState(true)

  const [terminer, setTerminer] = useState(false)


  useEffect(() => {
    const now = new Date();
    setEntryTime(now);
  }, []);


  useEffect(() => {
    const newCards = [];
    while (newCards.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10000);
      if (!newCards.includes(randomNumber)) {
        newCards.push(randomNumber);
      }
    }
    setCards(newCards);
  }, []);

  const moveCard = (cardId, slotId) => {
    setTable(table.map((item, index) => index === slotId ? cardId : item));
    setCards(cards.filter(item => item !== cardId));
  };

  useEffect(() => {

    if (cards.length === 3) {
      setFinished(true);
    }
  }, [cards]);

  const checkResult = () => {
    const sortedTable = [...table].sort((a, b) => b - a);
    const isOrderedDescending = table.every((num, idx) => num === sortedTable[idx]);

    if (isOrderedDescending) {
      setSuccess(true);
      setScore(100)

    } else {
      setSuccess(false);
    }
    setShowResult(true);

    setRejouer(false)
    setReponder(false)
    setTerminer(true)


  };

  const resetGame = () => {
    const newCards = [];
    while (newCards.length < 4) {
      const randomNumber = Math.floor(Math.random() * 10000);
      if (!newCards.includes(randomNumber)) {
        newCards.push(randomNumber);
      }
    }
    setCards(newCards);
    setTable(Array(4).fill(null));
    setFinished(false);
    setSuccess(false);
    setShowResult(false);
    setScore(0)
    setTerminer(false)
    setRejouer(true)
    setReponder(true)
    setSuccess(false)

  };

  const checkAnswer = () => {
    return {
      allAnswersCorrect: success,
      calculatedScore: success ? 100 : 0, // Example score calculation
    };
  };







  const sendActivityData = async () => {
    const endTime = new Date();
    const timeSpent = (endTime - entryTime) / 1000;
    // const { allAnswersCorrect, totalQuestions, correctAnswers, incorrectAnswers } = checkAnswer();

    const activityData = {
      userId: currentUser.uid,
      activityName: "Comparaison",
      entryTime: entryTime.toISOString(),
      timeSpent: timeSpent,
      score: score
      // totalQuestions,
      // correctAnswers,
      // incorrectAnswers,
      // allAnswersCorrect
    };

    try {
      await addDoc(collection(db, 'users',currentUser.uid, 'activities'), activityData);
      console.log('Activity data sent:', activityData);
    } catch (e) {
      console.error('Error sending activity data:', e);
    }
  };


  const handleFinish = () => {
    sendActivityData();
    resetGame();
  };

  return (
    <ActivityWrapper
      activityTitle={"C2E2"}
      explanationVideoUrl={"/Videos/number_sorting.mp4"}
      onSubmit={checkAnswer}
      user={currentUser}
      activityName="C2E2"
    >
      <DndProvider backend={HTML5Backend}>

        <Box>
          <CustomDragLayer />
          <Card1>
            <StyledText>
              <strong>Ordonnez ces nombres du plus grand au plus petit</strong>
            </StyledText>
          </Card1>

          <img src="/images/Math/C/C1/pro2.png" alt="Activity" style={imageStyle} />

          <br />
          <br />

          <Grid container spacing={2} justifyContent="center">
            {cards.map((card, index) => (
              <Grid item key={index}>
                <Card id={card} text={card} moveCard={moveCard} />
              </Grid>
            ))}
          </Grid>
          <br />
          <Grid container spacing={2} justifyContent="center">
            {table.map((slot, index) => (
              <Grid item key={index}>
                <Slot id={index} accept={ItemType} lastDroppedId={slot} moveCard={moveCard} />
              </Grid>
            ))}
          </Grid>
          <Grid container spacing={2} justifyContent="center" style={{ marginTop: '2em' }}>
            {/* <Grid item>
              <Button   className='mySvg' onClick={checkResult} variant='contained' color='primary' disabled={!finished}>
                <CheckCircleIcon />
              </Button>
            </Grid>
            <Grid item>
              <Button  className='mySvg'  variant='contained' color='primary' onClick={resetGame}>
                <ReplyIcon />
              </Button>
              <br />

            </Grid> */}


            <Grid>
              <ButtonContainer>
                {repondre && <Button variant="contained" style={{ margin: "20px", marginRight: "80px", marginLeft: "1px" }}
                  onClick={checkResult} > Répondre  </Button>}
                {terminer && <Button variant="contained" onClick={handleFinish}  >   Terminer  </Button>}
                {rejouer && <Button variant="contained" onClick={resetGame} > Rejouer </Button>}


              </ButtonContainer>
            </Grid>




            <br /> <br /> <br />
            {showResult && (
              <Alert severity={success ? "success" : "error"}>
                {success
                  ? "Félicitations, ces nombres sont bien ordonnés dans l'ordre décroissant !"
                  : `Désolé, ces nombres ne sont pas ordonnés dans l'ordre décroissant.`}
              </Alert>
            )}
          </Grid>
        </Box>
      </DndProvider>

    </ActivityWrapper>
  );
};

export default C2A1;
