import React, { useState } from 'react';
import QCMC1 from './QCMC1';
import Lait from '../Images/Lait.png';
import teacher from '../Images/inestine.png';
import Healthy from '../Images/HealthyFood.png';
import glucides from  '../Images/glucides .png';
import lipidesSource from '../Images/lipides.png';
import proteines from '../Images/proteines.png';
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
                  <FormulaText><strong> Les operation sur les fractions </strong></FormulaText>

            </button>
                  <img src={teacher} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                  <FormulaText> <strong> Les fractions, c'est comme couper une pizza 🍕 :
chaque morceau de la pizza est une partie d'elle. Quand on parle de fractions, on parle de ces morceaux ! </strong> </FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>

                        <FormulaText> <strong> La fraction se compose de deux elements : </strong> </FormulaText>
                        <FormulaText> <strong> 1. Le numérateur </strong> </FormulaText>
                        <FormulaText> <strong> 2. Le denominateur </strong> </FormulaText>
                        <FormulaText>
                      
                       
                       <Fractiondetail></Fractiondetail>
</FormulaText>




<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      
{section >= 2 && (
                <div>
                    <br></br>
                    <br></br>
                      
                    <button className="continue-button" >
                  <FormulaText><strong> Addition et soustraction des fractions</strong></FormulaText>

            </button>
            <br></br>
            <br></br>
                    <Card>    <FormulaText> <strong>  Pour additionner ou soustraire deux fractions de méme denominateur , on ajuste seulement les numérateurs, comme dans l'exemple suivant. </strong> </FormulaText>
                        <FormulaText>

                       <Addexemple1></Addexemple1>
                       
</FormulaText>




<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>
            )}
            <br></br>
                    <br></br>
                      
            {section >= 3 && (
                <div style={{ marginBottom: '50px', width: '100%' }}>

<Card> <FormulaText> <strong> Les fractions n’ont pas le même dénominateur, il faut 
chercher des fractions équivalentes ayant le même 
dénominateur , example :
 </strong> </FormulaText>
                        <FormulaText>
                            <br></br>

                       <Addexemple2></Addexemple2>
                       
</FormulaText>

<br></br>


<div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>
                </div>

                
            )}


            

            {section >= 4 && (

                
                <div style={{ marginBottom: '50px', width: '100%' }}>
                      <button className="continue-button" >
                  <FormulaText><strong> Multiplication des  fractions </strong></FormulaText>

            </button>
            <br></br>
            <br></br>
                    <Card>
    <FormulaText><strong>Multiplier un nombre entier par 
une fraction, je multiplie ce 
nombre par le numérateur et je 
conserve le dénominateur : </strong></FormulaText>    
    
  <Multipexempl></Multipexempl>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}

            {section >= 5 && (
                <div>
                    
                    <Card>
    <FormulaText><strong>Multiplier deux 
fractions je multiplie 
les numérateurs 
ensemble et les 
dénominateurs 
ensemble :</strong></FormulaText>    
    
  <Multipexampl2></Multipexampl2>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}
<br></br>
{section >= 6 && (
                <div>

<button className="continue-button" >
                  <FormulaText><strong> Multiplication des  fractions </strong></FormulaText>

            </button>
            <br>
            </br>
            <br></br>
                    <Card>
     
    
  <Divisionexampl1></Divisionexampl1>
    <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
</Card>

                </div>
            )}
 <br></br>
 <br></br>

{section >= 7 && (
                <div>
                    <QCMC1 />
                </div>
            )}



            {section < 7 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;