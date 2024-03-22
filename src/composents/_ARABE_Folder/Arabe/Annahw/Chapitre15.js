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
                <FormulaTextF> عمل اسم الفاعل </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - مُحَمَّدٌ <strong>مُسَافِرٌ</strong> عَمُّهُ.
                        <br></br>2 - الْحَقُّ  <strong>قَاطِعٌ </strong>سَيْفُهُ الْبَاطِلَ.

                        <br></br>3 -  <strong>أُعَارِفٌ</strong>أَبُوكَ قِيمَةَ الْعِلْمِ؟
                        <br></br>4 - لَسْتُ <strong>بِالْجَاحِدِ</strong> نِعْمَةَ رَبِّي.
                        <br></br> 5 - عُمَرُ  <strong>مُعْطَ</strong>عَمْرًا حَقَّهُ
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

                            <SmallCard4>
                                كل كلمة من الكلمات الموجودة في الأمثلة: (مُسَافِرِ، قَاطِعْ ، عَارِفٌ، جَاحِدِ، مُعْطٍ) اسم فاعل قد حل محل فعله، وعمل عمله، وعليه يرفع اسم الفاعل فاعله إذا كان فعله لازما (. مسافر عـمـه) فكلمـة مسافر ، اسم فاعل مشتق من فعل لازم هو ( سافر) و (عمه) فاعل لاسم الفاعل (مسافر) ويتعدّى اسم الفاعل إلى المفعول فينصبه إذا كان فعله متعديا ( الحق قاطع سيفه الباطل) فقاطع اسم فاعل من الفعل (قطع) المتعدي إلى مفعول به
                            </SmallCard4>
                            <br></br>
                            <SmallCard>
                                ولذا فإن اسم الفاعل ( قاطع رفع فاعلا هو سيفه، ونصب مفعولا به هو ( الباطل) وذلك تبعا لعمل فعله.
                            </SmallCard>
                            <br></br>
                            <SmallCard3>
                                والكلمة في المثال الثالث (عارف) رفعت فاعلا أبوك، ونصبت مفعولا به هو قيمة، أما في المثال
                                الرابع فالجاحد اسم فاعل من فعل (جحد المتعدي إلى مفعول به، وقد نصب مفعولا به هو: نعمة.
                                وفي المثال الرابع نلاحظ أن اسم الفاعل (معط) نصب مفعولين هما (عمرا) و (حق) لأنّ فعله
                                ( أعطى) متعد إلى مفعولين، فعمل اسم الفاعل عمل فعله.
                            </SmallCard3>
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

                                <br></br> - ما عمل اسم الفاعل؟
                                <br></br> - متى ينصب مفعولا به؟                            </span>
                            <br></br> <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    اسم الفاعل يعمل عمل فعله، فإن كان فعله لازما رفع الفاعل، وإن كان فعله متعديا رفع الفاعل
                                    ونصب المفعول به نحو أَجَالِسٌ مُحَمَّدٌ؟ أَكَاتِبُ الْوَلَدُ دَرْسَهُ؟
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
