import React, { useState } from 'react';
import QCMC1 from './QCMC1';


import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard3
} from '../../../Styles/MajorStyles';



const imageStyle = {
    width: '70%', // L'image prendra 80% de la largeur de son parent
    height: 'auto', // La hauteur change automatiquement pour garder les proportions
    maxWidth: '70%', // Assure que l'image ne dépasse pas la largeur de la carte
    display: 'block', // Empêche l'image de prendre plus de place que nécessaire
    marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
    marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};




const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF>النكرة والمعرفة </FormulaTextF>
            </button>
            <br></br><br></br>


            <Card >


                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <br></br>
                    <Card>
                        (ا)
                        <br></br> 1 -<strong>مسجدا</strong> دخلت
                        <br></br>2- <strong>صديق</strong>زارني
                        <br></br>3 - <strong>كتابا</strong>قرأ أحمد
                        <br></br>
                        <br></br> (ب)

                        <br></br> 1 -<strong>المسجد</strong> دخلت
                        <br></br>2 - <strong>محمد</strong>رآني
                        <br></br>3 -قرأ أحمد<strong> كتاب الحديث </strong>
                        <br></br><br></br>

                    </Card>
                </FormulaText>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Audio />
                </div>
            </Card>

            {section >= 1 && (
                <div>

                    <br></br>
                    <Card>
                        <br></br>
                        <FormulaText dir="rtl">
                            <br></br>
                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <SmallCard>

                                عند تأمل الكلمات التي خط تحتها في المجموعة (أ) والمجموعة (ب) نجد أنها أسماء
                            </SmallCard>
                            <br></br>

                            <SmallCard3>
                                ونلاحظ
                                كذلك أن الأسماء المخطوط تحتها في المجموعة الأولى ( مسجدا، صديق، كتابا) لا تدل على اسم
                                معين بذاته؛ بينما الأسماء الواردة في المجموعة الثانية (المسجد، محمد، كتاب الحديث) يدل كل
                                واحد منها على شيء معين.
                            </SmallCard3>
                            <SmallCard>فالجملة: دخلت مسجدا، لا تدل على مسجد معين لأنك لا تعرف أي مسجد يقصده المتكلم.</SmallCard>
                            <br></br>
                            <span style={{ color: 'red' }}>  بم نسمي هذا النوع من الكلمات؟
                            </span>

                            <br></br>
                            <SmallCard>

                                <span style={{ color: 'green' }}>  نسمي هذا النوع من الكلمات بالنكرة لأنها تدل على اسم غير معين. </span>

                            </SmallCard>

                            <br></br>
                            <SmallCard>
                                أما الجملة: دخلت المسجد، فكلمة المسجد أصبحت معينة، لأن المتكلم يقصد مسجدا محددا
                                يعرفه المخاطب.
                            </SmallCard>
                            <br></br>
                            <span style={{ color: 'red' }}>  بم نسمي هذا النوع من الكلمات؟
                            </span>

                            <br></br>
                            <SmallCard>

                                <span style={{ color: 'green' }}> نسمي هذا النوع من الكلمات بالمعرفة لأنها تدل اسم معين. </span>

                            </SmallCard>



                            <br></br>
                            <span style={{ color: 'red' }}>- ما الحرف الذي دخل على كلمة مسجد وحولها من النكرة إلى المعرفة؟<br></br>

                                - ما الفرق بين كلمة (كتابا) في المجموعة (أ) و عبارة (كتاب الحديث) في المجموعة</span>

                            <br></br>
                            <SmallCard3>

                                <span style={{ color: 'green' }}> - النكرة اسم يدل على شيء غير معين بذاته قابل لدخول (ال) عليه، ولم تدخل عليه مثل:
                                  <br></br>  (كتاب - ولد).
                                  <br></br>   - المعرفة اسم يدل على معين.
                                    <br></br>  - من المعرفة: العلم الاسم المعرف بأل الضمائر ، أسماء الإشارة ، الأسماء الموصولة، المضاف
                                    إلى معرفة. </span>

                            </SmallCard3>

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

export default C5;
