import React from 'react';
import {FormulaText, Card, ContinueButton,BodyText } from '../Styles/MajorStyles';



const Acceuil = ({ titre, imgSrc, altText }) => {
    return (

        <div>

<button className="continue-button" >
                                    <FormulaText><strong>{titre}</strong></FormulaText>
                                </button>
          

            <div   style={{marginTop: '100px'}}></div>
            <img src={imgSrc} alt="image" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />

            <div style={{ marginTop: '100px' }}></div>
            <Card>

                <BodyText>
                    <strong> Salut! Aujourd'hui, on va parler d'un sujet intéressant :  <span style={{color:'blue'}}>{altText} </span> </strong>
                </BodyText>

            </Card>


            <div style={{ marginTop: '100px' }}></div>
        </div>

    );
};



export default Acceuil;