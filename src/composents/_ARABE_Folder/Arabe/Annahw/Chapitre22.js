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
                <FormulaTextF> البدل </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1- انتصر القائد خالد بن الوليد في اليرموك. 5- سَأَلَ التَّلْمِيذُ أَحْمَدُ مُعَلَمَهُ
                        <br></br>2 - حفظتُ القصيدة نصفها.
                        <br></br>3- أعجبني أحمد خلقُه.
                        <br></br>6 - قَرِأْتُ الْكِتَابَ نِصْفَهُ.
                        <br></br>7 - أَعجِبَنِي مُحَمَّدٌ جَمَالُهُ.
                        <br></br>4 - أكلت خبزا لَحْمًا.
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
                                تأمل الجملة (سَأَلَ التَّلْمِيذُ أَحْمَدُ مُعلمه)، تجد أن كلمة ( أحمد ) أظهرت المعنى بكلمـة
                                (التلميذ) لأن التلاميذ كثيرون،                            </SmallCard2>

                            <br></br>
                            <SmallCard4>
                                فكلمة التلميذ غير مقصودة لذاتها، لأن الفائدة لا تتـم بـهـا
                                وإنما جاءت لتمهد للكلمة التي بعدها : ( أحمد ) ولتجعل الانسان يتطلع إلى معرفة التلميذ أهو
                                إبراهيم أم موسى أم أحمد؟ ويمكن الاستغفاء من كلمة ( التلميذ) والاكتفاء ب (سَأَلَ أَحْمَدُ
                                معلمة)، وعندما يكون أحمد بدلا من التلميذ والتلميذ مبدلا منه نلا حظ ان البدل مطابق للمبدل منه في المعنى، فهما واقعان على ذات احمد ويسمى البدل المطابق أو بدل الكل من الكل

                            </SmallCard4>
                            <br></br>

                            <SmallCard4>
                                أما في الجملة (حفظت القصيدة نصفها)، فالقصيدة حفظ نصفها، أي جزء منها. .
                                ويسمى بـدل بعض من كل، أما الجملة (أعجبني أحمد خلقه ) فكلمة (فالخلق) أمر شتمل
                                عليه أحمد، لأن حسن خلق أحمد من مشتملات ،كيانه وتسمى بدل الاشتمال.
                                (أكلت خبزا لَحْمًا) ففي هذا النوع من البدل المقصود لحما بدل خبزا مثلا،يسمى  بدل الغلظ
                            </SmallCard4>
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
                                <br></br> أ - ما البدل؟
                                <br></br>ب - ما أنواعه؟
                                <br></br>ج - ما البدل الذي يجب اتصاله بضمير يعود على المبدل منه؟
                            </span>
                            <br></br>
                         
                            <SmallCard2>
                                <span style={{ color: 'green' }}>


                                    <br></br>البدل اسم تابع يمهد له بذكر اسم قبله غير مقصود لذاته يسمى المبدل منه.
                                </span>
                            </SmallCard2>

                            <br></br>
                            <strong>  أنواع البدل:</strong>
                            <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    <br></br>-1- البدل المطابق (بدل كلّ من كلّ):فيه يُطابقُ البدلُ المبدل منه في المعنى، فخالد في المثالِ السَّابِقِ يُطابق (القائدَ) في المعنى.
                                </span>
                            </SmallCard2>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>

                                    <br></br>2- بدلُ بعض من كلّ:
                                    يكون البدل جزءاً من المبدل منه، ويحتوي على ضمير يعودُ إلى المبدل منه ويطابقه.
                                    مثال: حفظتُ القصيدة نصفَها، فنصفها بدل منصوب بالفتحة الظاهرة، والهاء ضمير متصل مبني
                                    على السكون في محلّ جرّ بالإضافة.
                                </span>
                            </SmallCard4>
                            <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                                    <br></br> 3- بدل اشتمال:
                                    يكونُ المبدلُ منه مشتملاً على البدل دونَ أنْ يكونَ البدلُ جزءاً منه.
                                    مثال: أعجبني أحمد خلقه، خلقه: بدَلُ اشتمال مرفوع بالضَّمَّةِ الظَّاهرة، والهاء ضمير متصل مبني
                                    على الضم في محلّ جرّ بالإضافة.
                                   
                                </span>
                            </SmallCard4>

                            <br></br>
                            <SmallCard>
                            <span style={{ color: 'green' }}>
                            <br></br>4 - بدل الغلظ مثل، أكلت خبزا لَحْمًا
                            </span>
                            </SmallCard>
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
