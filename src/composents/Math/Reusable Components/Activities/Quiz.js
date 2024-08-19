import React, { useState } from 'react';
import { Button, Typography, FormControl, RadioGroup, FormControlLabel, Radio, FormHelperText } from '@mui/material';


const Quiz = ({ question, options, correctAnswer, explanation, onVerify }) => {
    const [selectedOption, setSelectedOption] = useState('');
    const [isVerified, setIsVerified] = useState(false);
  
    const handleOptionChange = (event) => {
      setSelectedOption(event.target.value);
    };
  
    const handleVerify = () => {
      setIsVerified(true);
      if (onVerify) {
        onVerify(selectedOption === correctAnswer);
      }
    };
  
    return (
      <div style={{ margin: '20px' }}>
        <Typography variant="h6">{question}</Typography>
        <FormControl component="fieldset" style={{ margin: '20px 0' }}>
          <RadioGroup value={selectedOption} onChange={handleOptionChange}>
            {options.map((option, index) => (
              <FormControlLabel key={index} value={option} control={<Radio />} label={option} />
            ))}
          </RadioGroup>
          {isVerified && (
            <FormHelperText style={{ color: selectedOption === correctAnswer ? 'green' : 'red' }}>
              {selectedOption === correctAnswer ? 'Correct!' : 'Incorrect!'}
            </FormHelperText>
          )}
        </FormControl>
        {isVerified && (
          <Typography variant="body2" style={{ marginTop: '10px' }}>
            Explanation: {explanation}
          </Typography>
        )}
      </div>
    );
};
export default Quiz;
