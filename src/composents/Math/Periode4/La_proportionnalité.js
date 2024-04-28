import React, { useState } from 'react';

import Exercice1 from './Exercice1'
import Exercice2 from './Exercice2'

import styled from 'styled-components';

// Import des styles
import { Box, Typography, CardContent, Grid, Fab, Table, TableBody, TableCell, TableContainer, TableRow } from '@mui/material';

import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct


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

const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>


            <button className="continue-button" >
                <FormulaText><strong>  La proportionnalité </strong></FormulaText>

            </button>
            {/* <img src={'/images/Math/C/images C18/PetiTeacher.png'} alt="Teacher" style={imageStyle} /> */}
            <img src={'/images/ines2.png'} alt="Teacher" />


            <SectionContainer>
                <strong>
                    <Card>

                        <BodyText>

                            La proportionnalité en mathématiques est <span style={{ color: 'blue' }}>une relation entre deux grandeurs</span> qui <span style={{ color: '#ff4500' }}>varient de manière cohérente.</span>
                        </BodyText>

                    </Card>
                </strong>
            </SectionContainer>

            {section >= 1 && (
                <div>
                    <SectionContainer>
                        <FormulaBox>

                            < Card>
                                <FormulaText>

                                    <img src={'/images/Math/periode 4/proportionnalité.PNG'} alt="Teacher" />

                                    <strong>

                                        <NumberDisplay>
                                            <div style={{ display: 'inline' }}>
                                                si deux grandeurs sont <span style={{ color: '#ff4500' }}>proportionnelles</span>,<br />
                                                cela signifie que <span style={{ color: 'blue' }}>lorsque l'une change,</span> l'autre change<span style={{ color: 'blue' }}> de manière correspondante.</span>
                                            </div>
                                        </NumberDisplay>


                                    </strong>
                                </FormulaText>
                            </Card>
                            <div>
                                <br></br>
                            </div>


                        </FormulaBox>
                    </SectionContainer>



                </div>
            )}



{section >= 2 && (
                <div>
                    <SectionContainer>
<Card>

<FormulaText>
    <strong style={{ color: 'rgb(27, 226, 226)' }}>Pour mieu comprendre :</strong><br></br>
    <strong> Imagine que tu aimes les glaces et que tu veux partager une glace avec ton ami. Vous avez une grande glace que vous voulez partager équitablement.
    </strong>
    <img src={'/images/Math/periode 4/glasse.PNG'} alt="glasse" />
    <strong>Maintenant, si vous divisez la glace en deux parts égales, chacun de vous aura une moitié de la glace, c'est-à-dire la même quantité. <span style={{ color: '#ff4500' }}>C'est la proportionnalité !</span></strong>


</FormulaText>
</Card>
</SectionContainer>
</div>
)}



{section >= 3 && (
                <div>
                    <SectionContainer>

                        <Card>


                            <BodyText>
                                <strong style={{ color: 'blue' }}>Exercice explicatif:</strong>
                            </BodyText>

 <img src={'/images/Math/periode 4/crayon.PNG'} alt="Teacher" />
 
                            <Exercice2 />



                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            {/* <C1A1 /> */}
                        </div>
                        <div className="separator"></div>
                    </div>
                </div>
            )}


            {section >= 4 && (
                <div>
                    <SectionContainer>

                      
                        


                           

                            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <Exercice1 />
                        </div>
                        <div className="separator"></div>
                    </div>


                            <br></br>
                        
                           

                    </SectionContainer>
                    <br></br>
                    <br></br>

                   
                </div>
            )}

           
            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
