import React, { useState } from 'react';


import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, SmallCard2,FormulaTextF
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

            
<button className="continue-button" >
                <FormulaTextF> بناء الفعل الماضي على الضم والسكون
                </FormulaTextF>
            </button>
            
            <br></br> <br></br>
           
            <br></br>
            <Card >


                <FormulaText dir="rtl">
                <SmallCard>أقرأ الأمثلة</SmallCard>
                    <Card>
                        (ا)
                        <br></br>
                        <strong>كتب</strong> المعلم الدرس <br></br>
                        - <strong>قرأ</strong> التلميذ الكتاب
                        <br></br>-  <strong>هطل </strong>المطر
                        <br></br>   <br></br> (ب)<br></br>

                        -<strong>نجحا </strong>الولدان
                        <br></br>-<strong>عادا</strong> المسافران
                        <br></br>- الملاحان <strong>نجوا </strong><br></br><br></br>
                        (ج)
                        <br></br>-  <strong>نجحت </strong>مريم في الامتحان
                        <br></br>- <strong>البنتُ </strong>قامَتْ

                        <br></br>- <strong>كُسِرَتْ </strong>النافذة
                        <br></br>


                    </Card>
                </FormulaText>
               
            </Card>

            {section >= 1 && (
                <div>
                    <br></br>

                    <br></br>
                    <Card>
                        <br></br>


                        <FormulaText dir="rtl">
                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <br></br><br></br>
                            <SmallCard2>
  -كتب، قرأ، هطل  أفعال ماضية لم يتصل بها ضمير
                                -كل فعل  ورد في المجموعة <br></br>
                                على آخره فتحة، فالفعل الماضـ إذن يبنى على الفتح إذا لم يتصــل بــه شـيء.
                            </SmallCard2>
                            <br></br><br></br>
                            <SmallCard2>
                                أما في المجموعة (2) فتلاحظ أن الكلمات ا( نجحا ، عادا، نجوا) أفعال ماضية
                                كذلك، وقد اتصل بآخرها ضمير هو الاثنين ونلاحظ في آخر كل منها فتحة.
                            </SmallCard2>
                            <br></br>



                            <br></br>
                            <SmallCard2>وأما في المجموعة (3) فتلاحظ أن الكلمات التي خـ خط تحتها (نجحَتْ ، قَامَتْ، كُسِرَتْ أَفعال
                                ماضية، وقد اتصلت بهذه الأفعال تاء التأنيث الساكنة، وتلاحظ أنه في آخر كل فعل من هذه الأفعال
                                فتحة؛ فالفعل الماضي إذن يبنى على الفتح إذا اتصلت به تاء التأنيث الساكنة.
                                </SmallCard2>
                            <br></br>


                           


                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>



                    </Card>
                    <br></br>

                </div>
            )}



            

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
