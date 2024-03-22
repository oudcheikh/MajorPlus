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
                <FormulaTextF> الأفعال الناصبة لمفعولين </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - مَنَعَ الظَّالِمُ النَّاسَ حُقُوقَهُمْ.
                        <br></br>2 - مَنَحَ الرَّجُلُ الطَّفْلَ عِطْفَهُ.
                        <br></br>  3 - أَعْطَيْتُ الْفَقِيرَ صَدقَةً.

                        <br></br>4 - كَسَا الوالِدُ ابْنَهُ ثَوْباً جَدِيداً.
                        <br></br>  5 - أَلْبَسَ الجُنودُ النَّاسَ ثَوْبَ الحُرِّيَةِ.
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
                                أ تأمل جمل الأمثلة السابقة  لا ستنتج أنها جمل فعلية تحتوي كل جملة منها على
                                فعل ينصب مفعولين ليس أصلهما مبتدأ وخبرا
                            </SmallCard2>
                            <br></br>

                            <SmallCard4>
                                ففي المثال (1) نلاحظ أن كلمة (النَّاسَ) مفعول به أول لفعل (منع) وأن كلمة (حُقُوقَهُمْ) مفعول
                                به ثان ونلاحظ كذلك أن أصل المفعولين لا يصح أن يكون مبتدأ وخبرا.
                                أما في المثال (2) فنلاحظ أن هناك مفعولا به أول (الطَّفْلَ) ومفعولا ثانيا (عِطْفَهُ) وقد نصبهما
                                الفعل (مَنَحَ)، كما نلاحظ كذلك أن أصل المفعولين لا يصح أن يكون مبتدأ وخبرا.
                            </SmallCard4>

                            <br></br>
                            <SmallCard2>

                                ونلاحظ أن المثال (3) يبين أن هناك مفعولين هما: (الفقير) مفعول أول ( صَدقَةً) مفعول ثان وقد
                                نصبهما أعطى) ، و نلاحظ كذلك أن أصل المفعولين لا يصح أن يكون مبتدأ وخبرا.
                                وهكذا تسير الأمور في المثالين (4)، (5).
                            </SmallCard2>

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
                                <br></br> - ما اسم الفعل الذي ينصب مفعولا واحدا؟
                                <br></br>- ما الأفعال التي تنصب مفعولين؟
                                <br></br>- هل أصل هذين المفعولين مبتدأ وخبر؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                        <br></br>        من الأفعال التي تنصب مفعولين ليس أصلهما المبتدأ والخبرا (منع) - ألبس - أعطى - منح - كسا- وهب - علم - سأل)، ونسمي أفعال المنع و المنح، مثل: سأل المؤمن ربّه المغفرة - وهبت الصديق هدية - علمت الكتاب خير جليس.

<br></br>- المضارع والأمر يعملان عمل الماضي.
                                </span>
                            </SmallCard4>
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
