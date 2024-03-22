import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from   '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF>ظرف الزمان</FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - نظرت في الزهور ساعةً.
                        <br></br>2 - مكثت في العاصمة سَنَةً.
                        <br></br>3 - سأزورك يَوْمَ الجمعة.
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

                            <SmallCard4>
                                إذا تأملنا الكلمات التي خط تحتها ( ساعة - سنة - يوم نلاحظ أن كلمة (ساعة) قد عينت
                                المدة التي قضيتها وأنا أنظر في الزهور، وكذلك (سنة) في الجملة الثانية من الأمثلـة قـد
                                عينت وحددت مدة إقامتي بالعاصمة، وكذلك الحال بالنسبة لكلمة (يوم) في المثال الثالث.                            </SmallCard4>
                            <br></br>
                            <SmallCard3>
                                ونستنتج أن كل اسم يبين الزمن الذي حدث أو يحدث فيـه الفـعـل يسمى: (ظرف زمان)
                                وينصب على أنه مفعول فيه.
                            </SmallCard3>
                            <br></br>

                            <br></br>


                            <br></br>

                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>



                    </Card>
                    <br></br>

                </div>
            )}



            {section >= 2 && (
                <div>

                    <Card>

                        <FormulaText dir="rtl">

                            <span style={{ color: 'red' }}>
                                <br></br> - ما ظرف الزمان؟
                                <br></br>- علام يدلّ؟
                                <br></br>- علام ينصب؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    ظرف الزمان اسم يدل على زمن حصول الفعل، ويُنصب على أنه ( مفعول فيه) مثل: قضيت
                                    شهرا في البادية.
                                </span>
                            </SmallCard2>
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
