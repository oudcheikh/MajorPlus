import React, { useState, useRef } from 'react';
import { Card } from '../../../Styles/MajorStyles';
import { Button } from '@mui/material';

// Style CSS pour le carreau avec bordure rouge
const squareStyle = {
  border: '1px solid red', // Bordure rouge d'un pixel
  borderRadius: '5px', // Coins arrondis
  textAlign: 'center', // Centrage du texte
  width: 'fit-content', // Ajustement de la largeur au contenu
  padding: '5px', // Espacement intérieur du carreau
  display: 'inline-block', // Affichage en ligne
};

// Style pour le conteneur éditable
const editableContainerStyle = {
  position: 'relative',
  display: 'inline-block',
};

// Style pour le texte éditable
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

// Style pour le texte de remplacement
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
  const[first,setFirst]=useState(initialState.firstNumber)
  const[second,setSecond]=useState(initialState.secondNumber)
  const[x,setX]=useState(true)
  const [y,setY]=useState(false)

  const firstNumberRef = useRef(null);
  const secondNumberRef = useRef(null);

  const [explanation, setExplanation] = useState("Entrez les numéros et cliquez sur 'Résoudre'");

  const handleAnimationStep = () => {
    if (currentStep >= 0) {
      const firstNumber = values.firstNumber.replace(/\s+/g, '').padStart(8, ' ');
      const secondNumber = values.secondNumber.replace(/\s+/g, '').padStart(8, ' ');
      const firstDigit = firstNumber[currentStep] === ' ' ? null : parseInt(firstNumber[currentStep], 10);
      const secondDigit = secondNumber[currentStep] === ' ' ? null : parseInt(secondNumber[currentStep], 10);
      
      if (firstDigit === null && secondDigit === null) {
        setResult(prevResult => prevResult.substr(0, currentStep) + ' ' + prevResult.substr(currentStep + 1));
        setExplanation("");
        setCurrentStep(currentStep - 1);
        return;
      }
  
      let sum = (firstDigit || 0) + (secondDigit || 0) + carry;
      let carryMessage = "";
  
      // Vérifier s'il y a seulement des zéros dans les étapes restantes
      const remainingFirst = firstNumber.slice(0, currentStep).replace(/\s/g, '');
      const remainingSecond = secondNumber.slice(0, currentStep).replace(/\s/g, '');
      const onlyZerosLeft = /^[0]*$/.test(remainingFirst + remainingSecond);
  
      if (sum > 9 && !onlyZerosLeft) {
        setCarry(1);
        sum = sum % 10;
        carryMessage = `, je retiens 1`;
      } else {
        setCarry(0);
      }
  
      // Ajuster le résultat pour tenir compte des chiffres à deux chiffres
      let newResult = result.split('');
      newResult[currentStep] = sum.toString();
      setResult(newResult.join(''));
  
      setExplanation(`${firstDigit || 0} + ${secondDigit || 0}${carry > 0 ? " + 1" : ""} = ${(firstDigit || 0) + (secondDigit || 0) + carry}${carryMessage}, j'écris ${sum} en bas.`);
    
      setCurrentStep(currentStep - 1);
    } else {
      setExplanation("");
    }
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

    <div>
                            <img  style ={{ width:'70%'  ,height: '10%',marginLeft:'40px' }}  src={"/images/Math/C/C4/neuf.png"} alt="addition" />
   
    <Card>
      <br></br>
      <br></br> <br></br>
      <div style={{ fontSize: '20px', color: 'green' }}>
        {explanation}
      </div>
      <br></br>
      <br></br>
      <div style={{ textAlign: 'center' }}>
        <div style={editableContainerStyle}>
          <div
            ref={firstNumberRef}
            contentEditable
            onInput={e => handleChange(e, "firstNumber")}
            style={editableStyle}
          > 
            {values.firstNumber}
          </div>
          {values.firstNumber === "" && (
            <div style={placeholderStyle}>Saisir ici</div>
          )}
        </div>
       
        <div style={{ fontSize: '30px', color: 'blue', marginBottom: '4px', textAlign: 'left', paddingLeft: '90px' }}>+</div>
        <div style={editableContainerStyle}>
          {x &&<div
            ref={secondNumberRef}
            contentEditable
            onInput={e => handleChange(e, "secondNumber")}
            style={editableStyle}
          ></div>
          }
          {y && <div>-----</div>}
          {values.secondNumber === "" && (
            <div style={placeholderStyle}>Saisir ici</div>
          )}
        </div>
        <div style={{ ...editableStyle, marginBottom: '4px' }}>--------------------</div>
        <div style={{ ...editableStyle }}>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            {result}
          </div>
        </div>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        
        <Button variant='contained' color='primary' style={{ marginLeft: 0 }} onClick={handleAnimationStep}>
          Résoudre
        </Button>
        <Button variant='contained' color='primary' style={{ marginLeft: 10 }} onClick={handleReset}>
          Réinitialiser
        </Button>
        <br></br>
        <br></br>
        <br></br>
     
      </div>
    </Card>

    </div>
  );
}

export default EditableDiv;
