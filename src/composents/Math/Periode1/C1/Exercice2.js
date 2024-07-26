import React, { useState } from 'react'
import'./NumberTable.css';
import {
   Button
  } from "@mui/material";

const NumberTable = () => {

    const [userInputs, setUserInputs] = useState(Array(12).fill('0'));
    const [result, setResult] = useState('');
    const [step, setStep] = useState(1);
    const [randomNumber, setRandomNumber] = useState(Math.floor(Math.random() * 999));

    const handleChange = (index, value) => {
        if (/^\d?$/.test(value)) { // Allow only digits or empty string
            const newInputs = [...userInputs];
            newInputs[index] = value;
            setUserInputs(newInputs);
        }
    };

    const checkAnswer = () => {
        const formattedNumber = randomNumber.toString().padStart(12, '0');
        const isCorrect = userInputs.every((input, index) => input === formattedNumber[index]);
        setResult(isCorrect ? 'Bonne réponse!' : 'Mauvaise réponse. Essayez encore.');
        console.log(result)
    };

    const tableStyle = {
        borderCollapse: 'collapse',
        margin: '40px 0',
        fontSize: '10px',
        textAlign: 'center',
        maxWidth: '100%'
    };

    const headerStyle = {
        padding: '10px 3px',
        border: '1px solid black',
        fontSize: '18px', // Changer la taille de la police
        fontFamily: 'Arial, sans-serif', // Changer la police
        color: 'black', // Changer la couleur du texte
    };

    const inputStyle = {
        width: '10px',
        textAlign: 'center',
        padding: '10px 2px',
        margin: '1px',
        border: '1px solid #ccc',
        borderRadius: '2px',
        fontSize: '16px', // Changer la taille de la police
        fontFamily: 'Arial, sans-serif', // Changer la police
        color: 'black', // Changer la couleur du texte
    };

    function generateRandomNumber(step) {
        if (step === 1) {
            return Math.floor(Math.random() * 1000).toString();
        } else if (step === 2) {
            return Math.floor(1000 + Math.random() * 9000).toString();
        } else if (step === 3) {
            return Math.floor(10000 + Math.random() * 90000).toString();
        }
        else if (step === 4) {
            return Math.floor(100000 + Math.random() * 900000).toString();
        }
        else if (step === 5) {
            return Math.floor(1000000 + Math.random() * 9000000).toString();
        }
        else if (step === 6) {
            return Math.floor(10000000 + Math.random() * 90000000).toString();
        }
        else if (step === 7) {
            return Math.floor(100000000 + Math.random() * 900000000).toString();
        }
        else if (step === 8) {
            return Math.floor(1000000000 + Math.random() * 9000000000).toString();
        }
        else if (step === 9) {
            return Math.floor(10000000000 + Math.random() * 90000000000).toString();
        }
        else if (step === 10) {
            return Math.floor(100000000000 + Math.random() * 900000000000).toString();
        }
        else if (step === 11) {
            return Math.floor(1000000000000 + Math.random() * 9000000000000).toString();
        }
       


        return 'Bravooo !';
    }


    const next = () => {
        checkAnswer();
        if (result === 'Bonne réponse!') {
            const nextStep = step + 1;
            setStep(nextStep);
            setRandomNumber(generateRandomNumber(nextStep));
            setUserInputs(Array(12).fill('0'));
            setResult('');
        }
    };

    const imageStyle = {
        width: '70%',
        height: 'auto',
        maxWidth: '70%',
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
      };

    return (
        <div>
                  <img  src='/images/Math/C/imgC19/Activity.png' alt="Activity" style={imageStyle} />

            <h2 style={{ color: 'blue' }}>Compléter le tableau suivant:</h2>
            <h3>Classez les chiffres du nombre : {randomNumber}</h3>
            
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th colSpan="3" className="header-group-1"style={headerStyle}>milliards</th>
                        <th colSpan="3" className="header-group-2"style={headerStyle}>millions</th>
                        <th colSpan="3" className="header-group-3" style={headerStyle}>milliers</th>
                        <th colSpan="3" className="header-group-4" style={headerStyle}>unités</th>
                    </tr>
                    <tr>
                        {['C', 'D', 'U', 'C', 'D', 'U', 'C', 'D', 'U', 'C', 'D', 'U'].map((header, index) => (
                            <th key={index} style={headerStyle}>{header}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {userInputs.map((input, index) => (
                            <td key={index} style={headerStyle}>
                                <input
                                    style={inputStyle}
                                    placeholder='-'
                                    type="text"
                                    value={input}
                                    maxLength="1"
                                    onChange={(e) => handleChange(index, e.target.value)}
                                />
                            </td>
                        ))}
                    </tr>
                </tbody>
            </table>
            <Button variant="contained" color="primary" onClick={next}>suivant</Button>
           {result && <p style={{color:'red'}}>{result}</p>}
        </div>
    );
};

export default NumberTable;
