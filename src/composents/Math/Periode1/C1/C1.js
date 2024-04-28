import React, { useState } from 'react';
import C1A1 from './C1A1';
import C1A2 from './C1A2';
import C1A3 from './C1A3';
import QCMC1 from './QCMC1';


import styled from 'styled-components';
import Audio from "./Audio1";
import './C1.css';
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

const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>


            <button className="continue-button" >
                <FormulaText><strong>  Les grands nombres.</strong></FormulaText>

            </button>
            {/* <img src={'/images/Math/C/images C18/PetiTeacher.png'} alt="Teacher" style={imageStyle} /> */}
            <img src={'/images/ines2.png'} alt="Teacher" />


            <SectionContainer>
                <strong>
                    <Card>

                        <BodyText>

                            Salut! Aujourd'hui, on va parler d'un sujet intéressant :   <strong className="mot_importante">Les grands nombres.</strong>
                        </BodyText>

                    </Card>
                </strong>
            </SectionContainer>

            {section >= 1 && (
                <div>
                    <SectionContainer>
                        <FormulaBox>
                            <Subtitle ><span style={{ color: 'red' }}>Concept clés 🔍</span></Subtitle>
                            < Card>
                                <FormulaText>
                                    <strong>Plus un nombre a de chiffres, plus il est grand.
                                        <br></br>
                                        Ainsi,<br></br>

                                        <NumberDisplay >
                                            <span style={{ color: 'green' }}>100</span> est plus grand que <span style={{ color: 'brown' }}>99.</span>
                                        </NumberDisplay>

                                        <br></br>
                                        On utilise des séparateurs, comme une virgule, pour faciliter la lecture:

                                        <NumberDisplay ><span style={{ color: 'blue' }}>1 000<span style={{ color: 'green' }}>, </span> 10 000</span></NumberDisplay>

                                    </strong>
                                </FormulaText>
                            </Card>
                            <div>
                                <br></br>
                            </div>

                            <Card>

                                <FormulaText>
                                    <strong style={{ color: 'blueviolet' }}>Noms des grands nombres :</strong>

                                    <NumberDisplay2 ><strong>1 000 =<span style={{ color: '#FF7F50' }}>"mille"</span></strong></NumberDisplay2>

                                    <NumberDisplay2 ><strong> 1 000 000 =   <span style={{ color: '#FF7F50' }}>"million"</span></strong></NumberDisplay2>
                                    <NumberDisplay2 > <h4>1 000 000 000 =</h4>  <span style={{ color: '#FF7F50' }}>"milliard"</span></NumberDisplay2>


                                </FormulaText>
                            </Card>
<Card>
                            <FormulaText>
                                <strong style={{ color: 'maroon' }}>Astuce :Pense à des situations réelles: </strong>
                                <br></br>
                              <strong>*une tarte qui contient  des milliers de cerise,</strong>  


                                <img src={'/images/Math/C/C1/i10.JPG'} alt="tarte"  style={imageStyle} />
                                <strong>*un pays a des millions d'habitants !</strong>
                                <img src={'/images/Math/C/C1/milliard.PNG'} alt="habitant"  style={imageStyle} />

                            </FormulaText>
                            <div style={{ display: "flex", alignItems: "center" }}>
                                <Audio />
                            </div>


                            </Card>
                        </FormulaBox>
                    </SectionContainer>



                </div>
            )}

            {section >= 2 && (
                <div>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/Math/C/images C18/PetiTeacher.png"} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                               <strong style={{ color: 'blue' }}>Écris un nombre et découvre ses détails.</strong> 
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}

            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <ImageContainer>
                            <img src={"/images/ines2.png"} alt="Enseignant" />
                        </ImageContainer>
                        <C1A2 />
                    </div>
                    <div className="separator"></div>
                </div>
            )}

            {section >= 4 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <ImageContainer>
                            <img src={"images/petitInestine.png"} alt="Enseignant" />
                        </ImageContainer>
                        <C1A3 />
                    </div>
                    <div className="separator"></div>
                </div>
            )}

            {section >= 5 && (
                <div>
                    <QCMC1 />
                </div>
            )}

            {section < 5 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
