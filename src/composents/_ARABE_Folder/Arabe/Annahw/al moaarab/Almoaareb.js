import React, { useState } from 'react';


// import table from '../imagesAnnahw/table.PNG';


import Audio from "../../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard,FormulaTextF,SmallCard2
} from '../../../../Styles/MajorStyles';



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
            <FormulaTextF>  (تعريف)المعرب والمبني</FormulaTextF>
          </button>
    
            

          <br></br>
            <br></br>
            <Card >


                <FormulaText dir="rtl"><strong>
                    <SmallCard>
                        تنقسم الكلمة إلى معربة و مبنية فالمعرب من الكلمات هو ما يتغير تشكيل آخره بتغير وضعه
                        في الجملة؛ أما الكلمات المبنية فهي التي لا يتغير تشكيل آخرها بتغير وضعها في الجملة، بل
                        يلزم حالة واحدة من السكون أو الفتح  أو الكسر
                    </SmallCard>
                </strong></FormulaText>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Audio />
                </div>
            </Card>

            {section >= 1 && (
                <div>


                    <Card>
                        <br></br>


                        <FormulaText dir="rtl">
                            <SmallCard>
                                <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4><br></br>

                            </SmallCard>
                            <br></br>


                            <Card>
                                ( أ) <br></br>
                                <span>   1 -  <strong>مُحَمَّدٌ</strong>رَسُولُ الله.</span><br></br>
                                2 أشهد أن  <strong>محمدًا</strong>رسولُ اللهِ.<br></br>
                                3- أيقنت صدق <strong>محمد</strong> رسول الله

                                <br></br>

                                <br></br>

                                1- يشربُ  <strong>  الطفلُ </strong>  الحليب   . <br></br>
                                2 - لن يشرب <strong>الطفل </strong> الحليب.<br></br>
                                3 - لم يشرب  <strong>الطفلُ</strong>  الحليب .<br></br>

                            </Card>
                            <br>
                            </br>
                            <Card>
                                ( ب) <br></br>
                                <br></br>  1 - <strong>أنتَ</strong> صادق في وعدك. <br></br>
                                2 -  <strong>هذه </strong>ساحة نظيفة. <br></br>
                                
                                3<stron>جاء</stron>  <strong>الذي </strong> أحببته.<br></br>
                                5 - <strong>تلك</strong> مدرسة فسيحة.<br></br>
                                7 - من <strong>أخبرك</strong> بمقدم أبيك.<br></br>

                            </Card>
                            <br></br>
                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span><br></br>
                            <SmallCard2>

                                عندما أتأمل الكلمات التي خط تحتها في الأمثلة ( أ) أجد أن حركة آخرها تتغير من جملة إلى
                                أخرى أي أن إعرابها يتغير حسب وظيفتها في الجملة؛ بم نسمي هذا النوع من الكلمات؟

                            </SmallCard2>
                            <h4 style={{ color: 'green' }}>- نسمي هذا النوع من الكلمات بالمعرب</h4><br></br>


                            <SmallCard>
                                وعندما نتأمل المجموعة (ب) نلاحظ أن الكلمات المخطوط تحتها يمكن وضعها في الخانات
                                التالية:

                            </SmallCard>
                            <img src={"/images/arabe/imagesAnnahw/table.PNG"} alt="table" style={imageStyle} />

                            <h4 style={{ color: 'green' }}> نطلق على هذا النوع من الكلمات: المبني.   </h4><br></br>

                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>



                    </Card>
                    <br></br>

                </div>
            )}


            {/*  
            {section >= 2 && (
                <div dir="rtl">
                    <Exercices />
                </div>
            )}
*/}
            {section <= 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
