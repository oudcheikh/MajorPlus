import React, { useState } from 'react';
import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3
} from '../../../Styles/MajorStyles';
import'../arabe.css'


const imageStyle = {
    width: '70%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '70%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};




const C3 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF> بناء الفعل الماضي على الضم والسكون
                </FormulaTextF>
            </button>

            <br></br>
            <br></br>
           
           
            <Card >
            <br></br>
            <SmallCard3 className='arabic-text'>
                يبنى الفعل الماضي على الضم إذا اتصلت به واو الجماعة مثل: (كتبوا)، ويبنـي علـى
                السكون إذا اتصلت به تاء الفاعل بأنواعها الثلاثة: مثل ( نجحْتُ، نجخ، نجخت). أو
                إذا اتصلت به نون الإناث مثل: (كتبْنَ)، أو (نا) الدالة على الفاعل مثل: (كتبنا).

            </SmallCard3>
            <br></br><br></br>
          
          
            <br></br>
                <FormulaText dir="rtl">

                <SmallCard>
                                <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4><br></br>

                            </SmallCard>
                    <Card>

                        <br></br>
                        <br></br> 1- المعلمون <strong>حَضَرُوا</strong> حفلة توزيع الجوائز.
                        <br></br> -2-  <strong>نَجَحْتُ </strong>في الدرجة الأولى <strong>،فَنِلْتُ </strong> الجائزة.<br></br>
                        3- الأولادُ <strong>لَعِبُوا</strong> بالكرة .<br></br>
                        4 - البناتُ  <strong>كَتَبْنَ </strong>دروسهن،  <strong>وتَعَلَّمْنَ </strong>الخياطة.<br></br>
                        5 - الرجالُ <strong>سافرُوا</strong> من البادية إلى المدينة .<br></br>
                        6 - نحن <strong>دَخَلْنا</strong> الحجرة <strong>وتعلَّمْنا</strong> بها.<br></br>
                        7 - أنا <strong>سَمِعْتُ</strong> شرح الدرس <strong>وفهمت</strong> مضمونه.<br></br>

                    </Card>
                </FormulaText>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Audio />
                </div>
            </Card>

            {section >= 1 && (
                <div>



                    <br></br>



                    <br></br>
                    <Card>


                        <FormulaText dir="rtl">
                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <br></br>
                            <br></br>
                            <SmallCard3>
                                *أتأمل الأمثلة فألاحظ أنها تشتمل أفعال ماضية مبنية، غير أن أحوال
                                بنائها تختلف، حيث نجد أفعالا ماضية مثل (حضروا، لعبوا، سافروا) قد
                                بنيت على الضم، ونلاحظ كذلك أنها اتصلت بضميـر هـو واو الجماعة، فنستنتج
                                من ذلك أن الفعل الماضـي يبنـى علـى الـطـم إذا اتصلـت بـه واو الجماعة.

                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                أما بقية الأفعال فنلاحظ أنها اتصلت مرة بتاء الفاعل كما في: ( سمعت، نجحت، نلت)
                                وتارة تتصل بنون الإناث مثل (كتبن ، تعلمن)، ومرة بضمير (نا) الدال على الفاعل
                                مثل: (دخلنا، تعلمنا)، وقد بنيت هذه الأفعال على السكون ، وتتستنتج من ذلك أنَّ الأفعال
                                الماضية المتصلة بالتاء المتحركة ونون الإناث أو (نا) الدالة على الفاعل تبنى على السكون.

                            </SmallCard3>



                            <br></br><br></br>



                        </FormulaText>
                       



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

export default C3;
