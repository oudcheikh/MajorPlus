import React, { useState } from 'react';
import QCMC2 from './QCMC1';

// import pic19 from '../imagesHist/pic19.png';
// import pic20 from '../imagesHist/pic20.png';


import Audio from "./Audio1" ;
import {
  Container,FormulaText, Card, ContinueButton, SmallCard
} from '../../../Styles/MajorStyles'; 



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
        <Container >
         <FormulaText dir="rtl"><strong>الملف التاسع : المساجد المشهورة في الإسلام
</strong></FormulaText>
<Card dir="rtl">
                       
                       <FormulaText > <strong> -أتعرف على أهم المساجد في المشرق
</strong>
<br></br>
<strong>-أتعرف على أشهر المساجد في المغرب و الأندلس
</strong>
</FormulaText>
                           </Card>
                         
                  <br></br>
                  <Card >
                  <br></br>

             
<img src={"/images/imagesHist/pic19.png"} alt="Teacher" style={imageStyle} /> 
                       
                       <FormulaText dir="rtl"><strong>
                       <SmallCard>
                        من أهم المساجد في المشرق الإسلامي المسجد الحرام,المسجد النبوي
                         ,المسجد الأقصى, جامع الأزهر, جامع بغداد و الجامع الأموي بدمشق.</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>
                           </Card>
            
            {section >= 1 && (
                <div>
                 
              
                 
                 
<br></br>        
 <Card>
 <br></br>

             
<img src={"/images/imagesHist/pic20.png"} alt="Teacher" style={imageStyle} /> 
                       
 <FormulaText dir="rtl"><strong>
    <SmallCard>
    أشهر المساجد في المغرب و الأندلس هي:جامع شنقيط -جامع القيروان-جامع الزيتونة - جامع قرطبة- .</SmallCard></strong></FormulaText>
                       <div style={{ display: "flex", alignItems: "center" }}>
  <Audio/>
</div>



                    </Card>
                    <br></br>
                   
                </div>
            )}

                      

{section >= 2 && (
                <div dir="rtl">
                    <QCMC2 />
                </div>
            )}

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>تابع</ContinueButton>
            )}
        </Container>
    );
}

export default C1;