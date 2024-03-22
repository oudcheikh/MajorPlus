import React, { useState } from 'react';

import Audio from "../../../../composents/Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF> الهمزة المتوسطة على الياء </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>
                        ( ا )
                        <br></br>1 -  <strong>سُئِلَ </strong>الطَّالِبُ فَأَجَابَ.
                        <br></br>2 - أَنْتِ <strong>تَقْرَئِينِ </strong> كَثِيرًا.
                        <br></br>3 - جَاءَ الْأَقَارِبُ <strong>مُهَنَّئِينَ </strong> بِالْعِيدِ.
                        <br></br>4 -  <strong>أَسْئِلَةُ </strong>الاخْتِبَارِ سَهْلَةُ
                        <br></br>5 - <strong>مَائِدَةُ </strong> الطَّعَامِ مُنَظَّمَةٌ
                        <br></br>
                        <br></br>(ب)
                        <br></br>1 -  <strong>بِئْسَ </strong>الطَّالِبُ الكَسُولُ.
                        <br></br>2 - يَا <strong>نَاشِئَةَ </strong> الْبِلادِ أَنْتُمْ فَخْرُنا.
                        <br></br>3 <strong>أبنائي </strong>أهَنَتُكُمْ بِالنّجاح يا .

                        <br></br> <br></br>(ج)

                        <br></br> 1 - لا تُلوَّتُوا <strong>البِيئَةَ </strong> بِرَمْي الْمُخَلَّفَاتِ.
                        <br></br>
                        <br></br>
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
                        <br></br>


                        <FormulaText dir="rtl">

                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <br></br>
                            <SmallCard3>
                                أتأمّلُ الكلمات التالية في المجموعة (أ): سُئِل، تَقْرَئِين، مُهَنَّئِينَ ، أَسْئِلَةُ، مَائِدَةُ) وألاحظ أن الهمزة قد
                                كتبت على الياء، والسبب أنها جاءت مكسورة، فكل همزة متوسطة مكسورة تكتب على الياء مهما
                                كانت حركة ما قبلها.
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>

                                وفي المجموعة (ب) : (بِئْسَ ، نَاشِئَةَ ، أُهَنّتُكُمْ) كُتبت الهمزة على باء أيضا، وإن كانت غير مكسورة،
                                ذلك كَسِرُ ما قبلها ، وإذا كسر ما قبل الهمزة المتوسطة فإنها تكتب على ياء، مهما كانت
                                حركة الهمزة.
                            </SmallCard3>


                            <br></br>
                            <SmallCard>
                            <span style={{ color: 'blue' }}>
                                أتأمل كلمة (بيئة) في المجموعة (ج) فأجد أن الهمزة كتبت على الياء وهي لم تُكْسَرْ ولم يُكْسَر مَا
                                قبلها، فما السبب يا ترى؟
                           </span>
                            </SmallCard>
                            <br></br>
                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    السبب أنها سبقت بياء مكسور ما قبلها ، أَتَأَمَّلُ حركة الباء في (بيئة) أجدها مكسورة، وكل همزة
                                    متوسطة سبقت بياء مكسور ما قبلها فإنها تكتب على ياء.
                                </span>
                            </SmallCard>


                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>



                    </Card>


                </div>
            )}



            {section >= 2 && (
                <div>

                    <Card>

                        <FormulaText dir="rtl">

                            
                            <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>

                                    تكتب الهمزة المتوسطة على ياء إذا كانت مكسورة، أو مكسورا ما قبلها، أو سُبِقَتْ بياء مكسور ما
                                    قبلها.  </span>
                            </SmallCard3>

                            <br></br>



                        </FormulaText>
                    </Card>
                </div>
            )}

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
