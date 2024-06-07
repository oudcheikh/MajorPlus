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
import Cho from './CHoo.png'


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
                  <FormulaText><strong> Les Nombere Decimaux </strong></FormulaText>

            </button>
                  <img src={teacher} alt="Teacher" style={imageStyle} /> 
                  <Card>
                       
                  <FormulaText>
  <strong>
    Pense à une délicieuse barre de chocolat 🍫 : une barre entière plus la moitié d'une autre.
   
  </strong>
</FormulaText>

<img src={Cho} alt="Teacher" style={imageStyle} /> 
<FormulaText>
  <strong>
   
    Cela fait 1 +1/2 en tout, et c'est ça un nombre décimal, un tout et un petit plus !
  </strong>
</FormulaText>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                            <br></br>
                    <br></br>           
 <Card>

                        <FormulaText> <strong> Regarde cette règle : entre les nombres entiers, il y a dix petites marques. Chaque marque ajoute 0.1.  </strong> </FormulaText>
                       
                        <FormulaText>
                      <br></br>
                      <br/>
                       
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
                  
            <Card>

<FormulaText> <strong> il ya aussi ce qu'on appele les centaines , par example entre 1 et 1,1 il ya dix nomber decimaux, avec un pas de 0.01.  </strong> </FormulaText>

<FormulaText>
<br></br>
<br/>

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
                    <br></br>
                    <br></br>
                      
                    <button className="continue-button" >
                  <FormulaText><strong> Les fractions decimals</strong></FormulaText>

            </button>
            <br></br>
            <br></br>

<Card> <FormulaText> <strong> Voici quelque nombre décimaux remarquable:
 </strong> </FormulaText>
                        <FormulaText>
                            <br></br>
                            <br></br>
                            <br></br>

                       <Addexemple2></Addexemple2>
                       
</FormulaText>

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
