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
                <FormulaTextF>الهمزة المتوسطة المفردة على السطر </FormulaTextF>
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
                        (أ)
                        <br></br>1 - <strong>تفاءل </strong> الناس خيرا بنزول المطر .

                        <br></br>2 - <strong>القراءة</strong> الدائمة ثقافة ومعرفة.
                        <br></br> (ب)
                        <br></br>1 -   <strong> المروءة </strong>من الفضائل المرغوبة.
                        <br></br> 2 - إن <strong> وضوءك </strong> للصلاة طهارة ونظافة.
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
                                أقرأ في المجموعة (۱) الكلمات البارزة   ثم أجيب عن الأسئلة التالية:                            </SmallCard2>
                            <br></br>

                            <SmallCard3>
                                <span style={{ color: 'blue' }}>
                                    لا شك أني عند قراءة كلمة ( تفاءل) سوفـ أجد الهمزة مفتوحة بعد ألف مد لذا كتبت على السطر،
                                    ومثلها كلمة ( القراءة). والهمزة إذا كانت مفتوح بعد ألف مةٍ تكتب على السطر مثل: ( تفاءل،
                                    قراءة - ملاءمة).
                                </span>
                            </SmallCard3>

                            <br></br>
                            <SmallCard3>
                                - أنتقل إلى المجموعة (ب) فأجد الهمزة مفتوحة بعد واو .
                                - أقرأ كلمة ( المروءة) فأجد الهمزة مفتوحة ، والحرف الذي قبلها وا ومد ، لذا كتبت مفردة على
                                السطر، ومثلها كلمة ( وضوءك).
                            </SmallCard3>
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

                                    <br></br>      تكتب الهمزة المتوسطة مفردة على السطر:
                                    <br></br> 1 - إذا كانت مفتوحة بعد ألف مد.
                                    <br></br> 2 إذا كانت مفتوحة بعد واو مد.
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
