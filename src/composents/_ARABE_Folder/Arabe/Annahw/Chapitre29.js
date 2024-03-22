import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from  '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF> المفعول معه </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1- جئت والقافلة.
                        <br></br>2- مشيت ورصيف الشارع.
                        <br></br>3- سيري والطريق.

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
                                1- إذا تأملنا أواخر الأسماء التي خط تحتها القافلة- رصيف - الطريق - المهندسين تجد أنها
                                منصوبة بالفتحة الظاهرة على آخر كل منها، وأن المهندسين نصبت بالياء نيابة عن الفتحة،
                                ونلاحظ أن هذه الأسماء وقعت بعد واو بمعنى (مع) تسمى ( واو المعية)، والاسم المنصوب
                                بعد واو المعية يسمى ( مفعولا معه) وهو يدل على المصاحبة، وأنها وردت في كل الأمثلة
                                ولا تفصل عن المفعول معه.
                            </SmallCard3>

                            <br></br>

                            <br></br>

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

                    <Card>

                        <FormulaText dir="rtl">

                            <span style={{ color: 'red' }}>
                                <br></br>- ماذا تسمى الواو قبل المعمول معه؟
                                <br></br>- علام تدل؟
                                <br></br> ماذا يسمى الاسم بعدها؟
                            </span>
                            <br></br>

                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                المفعول معه اسم منصوب يذكر بعد واو المعية للدلالة على المصاحبة، ويأتي بعد جملة الفعل مثل جئت والقافلة
                                             </span>
                            </SmallCard>
                            
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
