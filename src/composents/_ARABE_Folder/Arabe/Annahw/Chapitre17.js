import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF> عمل اسم المفعول</FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - مُحَمَّدٌ مُحْتَرِمٌ قَدْرُهُ لأَنَّه عَالِمٌ.
                        <br></br>2 - رَجُلُ الْخَيْرِ مَذْكُورَةٌ أَعْمَالُهُ بالثَّنَاءِ.

                        <br></br>3 - الْغَنِيُّ السَّخِيُّ مَسْمُوعٌ كَلَامُهُ بِينِ النَّاسِ.
                        <br></br>4 - اتَّصَلْتُ بِالْكَرِيمِ المَأْمُولِ عَطَاوَهُ.
                        <br></br> 5 - هَلْ مُعْطَى الْمِسْكِينُ الصَّدقَةَ الَّتِي اسْتَحَقَّهَا.
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
                                تأمل الكلمات :(مذكورة، مسموعة، مأمول، معطى) تجد أن كل كلمة منهـا اســم مفعول، علما بأن اسم المفعول يعمل عمل الفعل المبني للمجهول فيرفع نائب فاعـل كـمـا  في الأمثلة: 1 - 2 - 3 - 4 (أعماله.,كلامه, عطاؤه)، وقد ينصب
                                اسم المفعول مفعولا به إذا كان فعله متعديا لمفعولين اثنين كما في المثال الخامس،                            </SmallCard4>
                            <br></br>
                            <SmallCard4>

                                ، فقد
                                نصب اسم المفعول ( معطى) الصدقة مفعولا به ،ثانيا، إذ هي مشتقة من الفعل ( أعطى)
                                المتعدي إلى مفعولين، هذا ويلزم أن تتوفر فيه الشروط المذكورة في إعمال اسم الفاعل.    </SmallCard4>
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

                                <br></br>- ما عمل اسم المفعول؟
                                <br></br>- ما شروط إعماله؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                    يعمل اسم المفعول عمل فعله المبني للمجهول بالشروط المذكورة في اسم الفاعل، فيرفع نائب
                                    فاعل:( الأرض مُحَاطٌ سطحها بالهواء)، وينصب مفعولا به إذا كان فعله متعديا لمفعولين ( ما
                                    مُعْطى الضعيفُ حقَّه).
                                </span>
                            </SmallCard3>
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
