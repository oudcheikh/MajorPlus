import React, { useState } from 'react';
import styled from 'styled-components';
import { Box } from '@mui/material';


// Assurez-vous que ce fichier CSS est dans le même dossier que votre composant
import '../Ex1.css'

// Définir un composant styled-components pour le conteneur
const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '5px',
    backgroundColor: 'rgb(248, 248, 227)',
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

function Exmple1() {
    const [inputValue, setInputValue] = useState('');
    const [isValid, setIsValid] = useState(false);
    const[rep,setRep]=useState('')

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleVerification = () => {
        if (inputValue.trim() === '452.16') {
            setRep('réponse correcte')
        } else {
            setRep('réponse incorrecte car   :   3.14 * 12 * 12 =452.16 dm²')
        }
    };

    const handleReponse = () => {
        setInputValue('452.16');
       
    };

    return (

        <div>

            <img src={'/images/Math/periode 4/cercles.png'} alt="ballon" />

            <NumberDisplay2 >
                
            <div style={{ display: 'inline' }}> <span style={{ color: 'orange' }}>Rayon</span>  =Diamétre/2</div> 
            <div style={{ display: 'inline' }}><span style={{ color: 'orange' }}>Air</span>    =3.14*rayon*rayon</div> 
           
            </NumberDisplay2>

            
            Pour un diamétre de 24dm  donner l'air de la cercle :
            <br></br>
            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="----"
                />

              
                <button onClick={handleVerification}>Vérifier</button>

                &nbsp; &nbsp;
                <button onClick={handleReponse}>Réponse</button>
              <div>
               <div style={{ display: 'inline' }}> <span style={{ color: 'blue' }}>   {rep}</span>
               </div>
               </div>
             

            </div>

        </div>
    );
}

export default Exmple1;
