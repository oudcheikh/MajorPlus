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
                <FormulaTextF> الهمزة المتوسطة على الألف </FormulaTextF>
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
                        دخل المعلم الفصل فألقى على طلابه السلام فردوا عليه، ثـم سَأَلَهُمْ عـن سـبب
                        رسـم الهمزة علـى الألف في كلمـة مسألة، فتسابق الطلاب للجـواب، فأعطاهـم
                        كلمة أخرى هي كلمة فَأْس و سَأَلَهُم السؤال نفسه، فقام طالب للجـواب، لكنـــه لـم
                        يوفق للصواب، فقال المعلم لا تيأس، حاول مرة أخرى، فحاول فأصـــاب الجــواب.
                        وهكذا انتهى الدرس في . حيوية ونشاط، فسرّ المعلم لفهم طلابه، وقال لهم: إنّ
                        هذا النشاط والحيوية داخل الفصل يساعدان الطالب على الاستفادة من الدرس.
                        <br></br>  <br></br>
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
                            <SmallCard2>
                                أتأمل في كل كلمة بها همزة متوسطة مكتوبة بالف، ثم أعود إلى القطعة مرة أخرى وأنظر إلى
                                حركة الهمزة وحركة الحرف الذي قبلها في كلمة ( سألهم)... ماذا أجد؟
                            </SmallCard2>
                            <br></br>

                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                    أجد أن حركة الهمزة
                                    وحركة الحرف الذي قبلها هي الفتح والهمزة المتوسطة إذا كانت مفتوحة وما قبلها مفتوح.
                                    على ألف.مثل : سَأَلَهُمْ.
                                </span>
                            </SmallCard3>


                            <br></br>
                            <SmallCard4>
                                أنظر في حركة الهمزة ، ثم أنظر إلى حركة الحرف الذي قبلها في كلمتي (مَسْأَلَة وَتَيْأَسُ). ونلاحظ
                                أن حركة الهمزة هي الفتح ، والحرف الذي قبلها ساكن.
                                والهمزة المتوسطة إذا كانت مفتوحة وما قبلها ساكن كُتبت على ألف مثل: مَسْأَلَةٌ ، تَيْأَس.
                                ونلاحظ أن الهمزة المتوسطة تكتب على الألف إذا كانت ساكنة وحركة الحرف الذي قبلها مفتوح.
                                مثل: فأس.
                            </SmallCard4>
                            <br></br>


                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>

                    </Card>
                </div>
            )}

            {section >= 2 && (
                <div>
<br></br>
                    <Card>

                        <FormulaText dir="rtl">


                            <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>

                                    <br></br>       تكتب الهمزة المتوسطة على ألف في الحالات التالية:
                                    <br></br>أ - إذا كانت الهمزة مفتوحة وما قبلها مفتوح.
                                    <br></br>ب ـ إذا كانت الهمزة مفتوحة وما قبلها ساكن.
                                    <br></br>ج - إذا كانت الهمزة ساكنة وما قبلها مفتوح.
                                </span>
                            </SmallCard4>

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
