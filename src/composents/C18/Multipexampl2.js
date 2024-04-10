import React, { useState, useRef } from 'react';
import { InlineMath } from 'react-katex';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import 'katex/dist/katex.min.css';
import correctSound from '../sounds/correct.mp3';
import incorrectSound from '../sounds/incorrect.mp3';
import { FormulaText } from '../Styles/MajorStyles';

const FractionToDecimalBoundary = () => {
  const [prevValue, setPrevValue] = useState('');
  const [nextValue, setNextValue] = useState('');
  const [fraction, setFraction] = useState({ numerator: 1, denominator: 10 });
  const [isCorrect, setIsCorrect] = useState(null);
  const correctSoundRef = useRef(new Audio(correctSound));
  const incorrectSoundRef = useRef(new Audio(incorrectSound));

  const generateFraction = () => {
    const numerator = Math.floor(Math.random() * 8) + 1;
    const denominator = 10 ** (Math.floor(Math.random() * 2) + 1);
    setFraction({ numerator, denominator });
  };

  const handleSubmit = () => {
    const prevInt = parseInt(prevValue, 10);
    const nextInt = parseInt(nextValue, 10);
    const decimalValue = fraction.numerator / fraction.denominator;

    if (prevInt === Math.floor(decimalValue) && nextInt === Math.ceil(decimalValue)) {
      setIsCorrect(true);
      correctSoundRef.current.play();
    } else {
      setIsCorrect(false);
      incorrectSoundRef.current.play();
    }
  };

  const handleReset = () => {
    generateFraction();
    setPrevValue('');
    setNextValue('');
    setIsCorrect(null);
  };

  return (<div>
<FormulaText> <strong> Encadre les nombres suivants par deux nombresentiers consécutifs.
        </strong>
        </FormulaText>

    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', my: 4 }}>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <TextField
          label="Entier Précédent"
          variant="outlined"
          value={prevValue}
          onChange={(e) => setPrevValue(e.target.value)}
          error={isCorrect === false}
        />
        <InlineMath math={`\\frac{${fraction.numerator}}{${fraction.denominator}}`} style={{ fontSize: '3em' }} />
        <TextField
          label="Entier Suivant"
          variant="outlined"
          value={nextValue}
          onChange={(e) => setNextValue(e.target.value)}
          error={isCorrect === false}
        />
      </Box>

      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-around', width: '100%' }}>
        <Button variant="contained" onClick={handleSubmit}>
          Vérifier
        </Button>
        <Button variant="contained" onClick={handleReset}>
          Réssaier
        </Button>
      </Box>

      {isCorrect !== null && (
        <Box sx={{ mt: 2, color: isCorrect ? 'success.main' : 'error.main' }}>
          {isCorrect ? 'Correct!' : 'Essaie encore!'}
        </Box>
      )}
    </Box>
    </div>
  );
};

export default FractionToDecimalBoundary;
