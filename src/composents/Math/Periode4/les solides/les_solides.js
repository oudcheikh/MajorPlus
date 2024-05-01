import React, { useState } from 'react';
import Exercice1 from'../les solides/Exercice1'
import Cardre from '../les solides/Cadre'
import Pyramides from '../les solides/Pyramides'


import styled from 'styled-components';

// Import des styles
import { Box, Typography, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct


export const textStyle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #444;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;


const StyledBox = styled(Box)({

});

const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'FF7F50',
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
const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
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

const imageStyle = {
    width: '90%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '90%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};

const Les_solides = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>


            <button className="continue-button" >
                <FormulaText><strong> Les solides </strong></FormulaText>

            </button>

            <img src={'/images/Math/periode 4/uniivers.png'} alt="univers" />


            <SectionContainer>
                <strong>
                    <Card>

                        <BodyText>

                            Notre univers est  <span style={{ color: 'blue' }}>un ensemble d'objet</span> chaque objet admet  <span style={{ color: '#ff4500' }}>sa propre forme</span>
                            <br></br>
                            <strong style={{ color: 'orange' }}>Allons-nous découvrir les formes des objets?</strong>
                        </BodyText>

                    </Card>
                </strong>
            </SectionContainer>

            {section >= 1 && (
                <div>
                    <SectionContainer>

              
                    <FormulaBox>
                      

                    <button className="continue-button" >
                <FormulaText><strong>  Les cube  </strong></FormulaText>

            </button>
                    

                  <Cardre />          
                  </FormulaBox>  
                    </SectionContainer>
                </div>
            )}

            
{section >= 2 && (
                <div>
                    <SectionContainer>
                
                  
                        <FormulaBox>
                       

                        <button className="continue-button" >
                <FormulaText><strong> Les pyramides  </strong></FormulaText>

            </button>
                        <strong><span style={{ color: 'orange' }}>  </span></strong>   
                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Pyramides /> 
                        </div>
                        <div className="separator"></div>
                    </div>

                        
                    </FormulaBox>  
                    </SectionContainer>
                </div>
            )}



{section >= 3 && (
                <div>
                    <SectionContainer>
                    
                        <FormulaBox>

                        <button className="continue-button" >
                <FormulaText><strong> Les sphéres  </strong></FormulaText>

            </button>
                       
                            <strong><span style={{ color: 'orange' }}></span></strong>    

                              

                                    <Exercice1/>

                           
                         

                            <div>
                                <br></br>
                            </div>


                        </FormulaBox>
                    </SectionContainer>



                </div>
            )}

           

           


            {section < 3 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default Les_solides;
