import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import teacher from './petitInestine.png';

import Audio from "./Audio1" ;
import {
  Container, SectionContainer, ImageContainer,FormulaText, Card, FormulaBox,BodyText,Subtitle, ContinueButton
} from '../Styles/MajorStyles'; 
import Addexemple1 from './Addexemple1';
import Addexemple2 from './Addexample2';
import Multipexempl from './Multipexempl';
import Multipexampl2 from './Multipexampl2';
import Divisionexampl1 from './Divisionexampl1';
import Fractiondetail from './Fractiondetail';
import Cho from './Aire.png'


const imageStyle = {
    width: '70%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '70%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};


const C1 = () => {
    const [section, setSection] = useState(0);

    return (
        <Container>

         <button className="continue-button" >
                  <FormulaText><strong> Calcule des aires </strong></FormulaText>

            </button>
                <br></br> 
                <br/>
                  <Card>
                       
                  <FormulaText>
  <strong>
 
Le calcul des aires, c'est comme mesurer l'espace à l'intérieur de différentes formes, comme des rectangles, des carrés ou des cercles. 
   
  </strong>
</FormulaText>

<img src={Cho} alt="Teacher" style={imageStyle} /> 
<FormulaText>
  <strong>
   
  C'est un peu comme compter combien de petits carrés on peut placer dans une grille de jeu
  </strong>
</FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              <br></br>
              <button className="continue-button" >
                  <FormulaText><strong> 1. Aire du carré</strong></FormulaText>

            </button>
                 
                            <br></br>
                    <br></br>           
                    <Card>
  <Fractiondetail></Fractiondetail>
  <FormulaText><strong>
    Calcul de l'aire du Carré :<br/> Aire du carré = <span style={{color: '#0000FF'}}>côté</span> x <span style={{color: '#0000FF'}}>côté</span><br/> Aire = <span style={{color: '#FF00FF'}}>c</span> x <span style={{color: '#FF00FF'}}>c</span>
  </strong></FormulaText>
<FormulaText><strong>
    Calcul du Périmètre du Carré :<br/> Périmètre = <span style={{color: '#00FF00'}}>côté</span> x 4
  </strong></FormulaText>
<FormulaText><strong>
    Calcul du Côté du Carré :<br/> Côté = <span style={{color: '#FFA500'}}>périmètre</span> ÷ 4
  </strong></FormulaText>


  <div style={{ display: "flex", alignItems: "center" }}>
    <Audio/>
  </div>
</Card>

                    <br></br>
                   
                </div>
            )}

                      
{section >= 2 && (
                <div>
                  
                  <button className="continue-button" >
                  <FormulaText><strong> 2. Une part est Multiple de l'autre.</strong></FormulaText>

            </button>
                 
                            <br></br>
                    <br></br>           
                    <Card>
  <img src={teacher} alt="Teacher" style={imageStyle} />
  <FormulaText><strong>
    Sidi et Moussa possèdent ensemble <span style={{color: '#FF0000'}}>600 Um</span>.
    La part de Sidi est le triple de celle de Moussa.
    Quelle est la part de chacun ?
  </strong></FormulaText>
  <FormulaText><strong>Solution</strong></FormulaText>

  <FormulaText><strong>
    Si la part de Moussa est <span style={{color: '#0000FF'}}>x Um</span>, alors celle de Sidi est <span style={{color: '#0000FF'}}>3x Um</span>.<br/>
    Ensemble : <span style={{color: '#FF0000'}}>x</span> + <span style={{color: '#0000FF'}}>3x</span> = <span style={{color: '#FF0000'}}>600 Um</span>.
  </strong></FormulaText>
  <FormulaText><strong>
    Total des parts :<br/> <span style={{color: '#0000FF'}}>4x</span> = <span style={{color: '#FF0000'}}>600 Um</span>.
  </strong></FormulaText>
  <FormulaText><strong>
    La part de Moussa :<br/> <span style={{color: '#FF0000'}}>600 Um</span> ÷ 4 = <span style={{color: '#FFA500'}}>150 Um</span>
  </strong></FormulaText>
  <FormulaText><strong>
    La part de Sidi :<br/> <span style={{color: '#FFA500'}}>150 Um</span> × 3 = <span style={{color: '#FF00FF'}}>450 Um</span>
  </strong></FormulaText>
  <FormulaText><strong>
    Je vérifie :<br/> <span style={{color: '#FF00FF'}}>450 Um</span> + <span style={{color: '#FFA500'}}>150 Um</span> = <span style={{color: '#FF0000'}}>600 Um</span>
  </strong></FormulaText>
{/* 
  <div style={{ display: "flex", alignItems: "center" }}>
    <Audio/>
  </div> */}
</Card>


                </div>
            )}
            <br></br>
                    <br></br>
                      
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    <br></br>
                    <br></br>
                      
                    <button className="continue-button" >
                  <FormulaText><strong> 3. un part est un </strong></FormulaText>

            </button>
            <br></br>
            <br></br>

<Card> 
                        
                       <Addexemple2></Addexemple2>
                       


<br></br>
<br></br><br></br>


<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>

                
            )}


            

            {section >= 4 && (

                
                <div style={{ marginBottom: '50px', width: '100%' }}>
                    
            <br></br>
            <br></br>
                    <Card>    
    
  <Multipexempl></Multipexempl>
    
</Card>

                </div>
            )}

            {section >= 5 && (
                <div>
                    
                    <Card>    
    
    <Multipexampl2></Multipexampl2>
      
  </Card>

                </div>
            )}
<br></br>




            {section < 5 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
