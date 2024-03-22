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
                <FormulaTextF>ظرف المكان</FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1- وقف المعلم أمام التلاميذ.
                        <br></br>2 - وضعت الكتاب فوق المكتب.
                        <br></br>3 - جلست بين والدي.
                        <br></br>4 - صليت خلف الإمام.
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
                                ألاحظ عند تأمل الأمثلة أن الكلمات التي خُط تحتها ( أمام - فوق - بين - خلف أسماء)
                                منصوبة،
                            </SmallCard2>

                            <br></br>
                            <SmallCard4>
                                ونلاحظ كذلك أنها تعين المكان الذي حصل فيه الفعل، فمثلا إذا قلنا: ( وقـف)
                                المعلــم أمــام التلاميذ فكلمة (أمام) عينت مكان وقوف المعلم، وكلمـة ( فوق) في المثال
                                الثاني عينت مكان وضع الكتاب، وهكذا الحال في بقية الأمثلة ونستخلص من ذلك أن كل
                                اسم يعين المكان الذي يحدث فيه الفعل يسمى (ظرف مكان) وينصب علـى أنـه مفعول فيه.
                            </SmallCard4>
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
                                <br></br> - ما ظرف المكان؟
                                <br></br>- علام ينصب؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    ظرف المكان اسم يدل على مكان حصول الفعل، ويُنصب على أنه ( مفعول فيه) مثل:
                                    قضيت العطلة شمال انواكشوط.
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
