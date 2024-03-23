import React, { useState, useRef } from 'react';
import { Card } from '../../../Styles/MajorStyles';
import { Button } from '@mui/material';

const editableContainerStyle = {
  position: 'relative',
  display: 'inline-block',
};
const squareStyle = {
    border: '1px solid black', // Bordure noire d'un pixel
    borderRadius: '5px', // Coins arrondis
    textAlign: 'center', // Centrage du texte
    width: 'fit-content', // Ajustement de la largeur au contenu
    padding: '5px', // Espacement intérieur du carreau
    display: 'inline-block', // Affichage en ligne
    color:'red'
  };

const editableStyle = {
  border: 'none',
  outline: 'none',
  fontSize: '30px',
  color: 'blue',
  overflow: 'auto',
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'pre-wrap',
  alignItems: 'center',
  textAlign: 'center',
  minWidth: '30px', 
};

const placeholderStyle = {
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  border: 'none',
  outline: 'none',
  fontSize: '30px',
  color: 'blue',
  overflow: 'auto',
  display: 'flex',
  justifyContent: 'center',
  whiteSpace: 'pre-wrap',
  alignItems: 'center',
  textAlign: 'center',
};

function EditableDiv() {
  const initialState = {
    firstNumber: "",
    secondNumber: ""
  };
  const initialResult = "        ";
  const initialStep = 7;
  const initialCarry = 0;

  const [values, setValues] = useState(initialState);
  const [result, setResult] = useState(initialResult);
  const [currentStep, setCurrentStep] = useState(initialStep);
  const [carry, setCarry] = useState(initialCarry);

  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);

  const [explanation, setExplanation] = useState("Entrez les numéros et cliquez sur 'Résoudre'");

  const handleAnimationStep = () => {
    // Extraire les chiffres des unités de chaque entier
    const firstUnit = parseInt(values.firstNumber.charAt(values.firstNumber.length - 1), 10);
    const secondUnit = parseInt(values.secondNumber.charAt(values.secondNumber.length - 1), 10);

    // Afficher les chiffres des unités dans des "carreaux"
    setResult(
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <div style={{ border: '1px solid black', borderRadius: '5px', textAlign: 'center', width: '60px', height: '60px', fontSize: '30px', margin: '0 5px' }}>
          {firstUnit}
        </div>
        <div style={{ border: '1px solid black', borderRadius: '5px', textAlign: 'center', width: '60px', height: '60px', fontSize: '30px', margin: '0 5px' }}>
          {secondUnit}
        </div>
      </div>
    );

    // Réinitialiser les chiffres d'unités
    setValues(prevValues => ({
      ...prevValues,
      firstNumber: "",
      secondNumber: ""
    }));

    // Réinitialiser l'explication
    setExplanation("");
  };

  const handleChange = (event, field) => {
    const currentValue = event.target.innerText;
    if (!isNaN(currentValue)) {
      setValues(prevValues => ({
        ...prevValues,
        [field]: currentValue
      }));
    } else {
      setExplanation(
        <div>
          <span style={{ color: 'red' }}>Veuillez saisir un nombre valide.</span>
        </div>
      );
      handleReset();
    }
  };

  const handleReset = () => {
    setValues(initialState);
    setResult(initialResult);
    setCurrentStep(initialStep);
    setCarry(initialCarry);
    setExplanation("Entrez les numéros et cliquez sur 'Résoudre'");

    if (firstNumberRef.current) firstNumberRef.current.innerText = "";
    if (secondNumberRef.current) secondNumberRef.current.innerText = "";
  };



  return (
    <Card>
      <br />
      <div style={{ fontSize: '20px', color: 'green' }}>
        {explanation}
      </div>
      <br />
      <br />
      <div style={{ textAlign: 'center' }}>
        <div style={editableContainerStyle}>
          <div
            ref={firstNumberRef}
            contentEditable
            onInput={e => handleChange(e, "firstNumber")}
            style={editableStyle}
          ></div>
          {values.firstNumber === "" && (
            <div style={placeholderStyle}>Saisir ici</div>
          )}
        </div>
        <div style={{ fontSize: '30px', color: 'blue', marginBottom: '4px', textAlign: 'left', paddingLeft: '90px' }}>+</div>
        <div style={editableContainerStyle}>
          <div
            ref={secondNumberRef}
            contentEditable
            onInput={e => handleChange(e, "secondNumber")}
            style={editableStyle}
          ></div>
          {values.secondNumber === "" && (
            <div style={placeholderStyle}>Saisir ici</div>
          )}
        </div>
        <div style={{ ...editableStyle, marginBottom: '4px' }}>--------------------</div>
        
        <div style={{ ...editableStyle }}>
          {result}
        </div>

        <br />
        <br />
        <br />
        <br />
        
        <Button variant='contained' color='primary' style={{ marginLeft: 0 }} onClick={handleAnimationStep}>
          Résoudre
        </Button>
        <Button variant='contained' color='primary' style={{ marginLeft: 10 }} onClick={handleReset}>
          Réinitialiser
        </Button>
        <br />
        <br />
        <br />
      </div>
    </Card>
  );
}

export default EditableDiv;
