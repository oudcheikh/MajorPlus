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
                <FormulaTextF>  الاستثناء بالا </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - حضر الطَّلَابُ إِلا خالداً.
                        <br></br> 2 - وصل المسافرون إلا أمتعتهم.
                        <br></br> 3 - نجحَ الطَّلابُ إلا طالباً.
                        <br></br> 4 - لم يرسب الطَّلابُ إلا طالباً.
                        <br></br> 5 - لم يرسب الطَّلابُ إلا طالبٌ.
                        <br></br> 6 - ما نجح إلا خالد.
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

                            <SmallCard2>
                                انظر الأسماء التي وردت في الأمثلة السابقة بعد إلا وهي: ( إلا خالداً، إلا أمتعتهم، إلا
                                طالبا، ..... ) تلاحظ أن كلا منها يخالف ما قبله في الحكم                            </SmallCard2>

                            <br></br>
                            <SmallCard4>
                                ففي الجملة الأولى من الأمثلة:
                                (حضرَ الطِّلابُ إلا خالداً). حكمنا على الطلاب بالحضور، أما (خـالـدًا) وهو الاسم الذي
                                جاء بعد (إلا) فلم يحضر مسماه، ولم يدخل في الحكم بل هو مخالف لما يقتضيه، ولذلك
                                يسمى ( مستثنى) ويسمى الاسم الذي قبل (إلا) وهو (الطلاب) (مستثنى منه) مذكورا
                            </SmallCard4>
                            <br></br>


                            <SmallCard3>
                                فمـا أتـي مـن الأسماء بعد (إلا) يكون منصوبا مثل ما طار إلا واحدة، قام القوم إلا
                                صالحا، فإذا ذكر المستثنى منه، مع نفي الكلام ينصب ما بعد ) (إلا) على الاستثناء أو أن
                                يكون بدلا تابعا للمستثنى منه في إعرابه،
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                وإذا كان الكلام ناقصا ،منفيا، يعرب المستثنى
                                حسب موقعه في الجملة - وتكون (إلا) ملغاة لا عمل لها، مثل:
                                <br></br>-
                                ما صاحبت إلا الأخيار.
                                <br></br>- مامربي إلا سائل.
                            </SmallCard3>

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
                            <span style={{ color: 'red' }}>
                                <br></br>- ما المستثنى وما المستثنى منه؟
                                <br></br>- ما أدوات الاستثناء؟
                                <br></br>- ما حكم ما بعد إلا؟
                            </span>
                            <br></br>
                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    الاستثناء إخراج المستثنى من الحكم الثابت للمستثنى منه، والمستثنى اسم يذكر بعد أداة
                                    الاستثناء مخالفا لما قبلها في الحكم.
                                </span>
                            </SmallCard>

                            <br></br>


                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    <br></br>   أركانُه: أداة الاستثناء المستثنى- المستثنى منه.
                                    مثال: حضر الطَّلابُ إلاّ خالداً، إلا : أداة الاستثناء، الطَّلابُ، المستثنى منه، خالداً: المستثنى.                                </span>
                            </SmallCard>
                            <br></br>
                            <SmallCard4>
                                <span style={{ color: 'blue' }}>
                                    الاستثناء إمّا استثناء متّصل : حيثُ يكونُ المستثنى من جنس المستثنى منه، مثال: حضر
                                    الطِّلابُ إلا خالداً ، فخالد من جنس الطلاب.
                                    <br></br>
                                    أو استثناء منقطع : حيث يكون المستثنى من غير جنس المستثنى منه، مثال: وصـــل
                                    المسافرون إلا أمتعتهم ، فالأمتعة ليست من جنس المسافرين.                                </span>
                            </SmallCard4>
                        </FormulaText>
                    </Card>
                </div>
            )}




            {section >= 3 && (
                <div>

                    <Card>

                        <FormulaText dir="rtl">

                            <br></br>
                            <span style={{ color: 'red' }}>
                                أنواعُ الاستثناء:
                            </span>
                            <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>

                                    1:الاستثناءُ النَّامُ المثبتُ: هو الذي ذُكِرَتْ أركانُه كلُّها، والكلامُ فيه مثبت غيرُ منفيّ، يُعرِبُ
                                    الاسم بعد إلا منصوباً على الاستثناء، مثال: نجحَ الطِّلابُ إلا طالباً، طالباً: مستثنى بإلاّ
                                    منصوب وعلامة نصبه الفتحة الظاهرة.
                                </span>
                            </SmallCard2>

                            <br></br>


                            <SmallCard3>
                                <span style={{ color: 'green' }}>


                                    2- الاستثناءُ النَّامُ المنفيُّ: هو الذي ذُكِرَتْ أركانُه كلُّها، والكلام فيه منفي، ويُعربُ الاسمُ
                                    بعدَ إلا إما منصوباً على الاستثناء، أو بدلاً من المستثنى منه، مثالٌ : لم يرسب الطِّلابُ إلا
                                    طالباً، طالباً مستثنى بالاً منصوب وعلامة نصبه الفتحة الظاهرة ، أو : لم يـ سب الطَّلَابُ إِلاّ
                                    طالب، طالب: بدل مرفوع وعلامة رفعه الضمة الظاهرة.               </span>
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                    3-الاستثناء الناقص المنفيُّ الذي يكون فيه المستثنى منه محذوفاً، والكلام منفياً،
                                    فيُعربُ الاسمُ بعدَ إلا بحسب موقعه في الكلام، مثال: ما نجح إلا خالد، خالد : فاعل مرفوع
                                    وعلامة رفعه الضمة الظاهرة.                               </span>
                            </SmallCard3>
                        </FormulaText>
                    </Card>
                </div>
            )}

            {section < 3 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
