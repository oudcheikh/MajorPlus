import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard3, SmallCard4
} from  '../../../Styles/MajorStyles';
import '../arabe.css'

const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >
            <button className="continue-button" >
                <FormulaTextF>الفاعل</FormulaTextF>
            </button>
            <br></br><br></br>

            <br></br>
            <Card >


                <FormulaText dir="rtl">

                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        1 - وَصَلَ <strong>الوَلَدُ</strong> إلى البيت.<br></br>


                        2 - ساعَدَتْ <strong>فَاطِمَةُ</strong> أُمّها في أعمال البيت.<br></br>
                        3 - <strong>العُصْفُورُ</strong>طارَ .<br></br>
                        4 - يَلْعَبُ <strong>الطَّفْلُ</strong> بِالكُرَةِ.<br></br>
                        5 - تُلاعِبُ <strong>خَدِيجَةُ</strong> دُمْيَتَها
                        <br></br>6 - <strong>الرّجُلُ</strong>مَرِضَ .
                        <br></br>7 - <strong>الحِصان</strong>ماتَ .
                        <br></br>- 8 <strong>الحَجِرُ</strong>سَقَط
                        <br></br>9 - <strong>الكأس</strong>انكسر .
                        <br></br>10 -<strong>الكِتابَ</strong> قَرَأْتُ

                        <br></br>11 - <strong>المعلم</strong> يَحْضُرُ مبكر
                        <br></br>


                    </Card>
                </FormulaText>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Audio />
                </div>
            </Card>

            {section >= 1 && (
                <div>
                    <Card>
                        <FormulaText dir="rtl">
                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>

                            <SmallCard3>
                                ألاحظ عند تأمل جملة (وَصَلَ الوَلَدُ إلى البيت) أن الذي فعل الفعل هو ( الولدُ)، وأنه اسم مرفوع،
                                وفي المثال الثاني ساعَدَتْ فاطِمَةُ أُمّها في أعمال (البيت) نجد أن (فاطمة) اسم مرفوع يدل على
                                الذي فعل الفعل (ساعَدَتْ)
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                وفي المثال الثالث (طارَ العُصْفُورُ) نجد أن (العُصْفُورُ) اسم مرفوع
                                الذي فعل الفعل (طار)، وفي الجملة الرابعة (يَلْعَبُ الطَّفْلُ بِالكُرَةِ) نلاحظ أن (الطَّفْلُ) اسم
                                مرفوع يدل على الذي فعل الفعل (يَلْعَبُ)، ونلاحظ كذلك في الجملة الخامسة (تُلاعِبُ خَدِيجَةُ
                                دُمْيَتَها) أن ( خديجة) اسم مرفوع هو الذي فعل الفعل ( تُلاعِب)
                            </SmallCard3>


                            <br></br>
                            <SmallCard4>
                                وألاحظ عند تأمل ترتيب عناصر كل جملة أن الفعل متقدم. الفاعل، كما نلاحظ كذلك
                                أن الفاعل يسند إليه الفعل فتربطه به علاقة عمل وتنفيذ كما في الأمثلة (1، 2، 3، 4، 5) أو
                                علاقة تأثر ففي المثال السادس مَرِ الرّجُلُ نلاحظ أن الفاعل (الرّجُلُ) لم يفعل الفعل:
                                أي لم يفعل المرض، وإنّما أسند إليه فعل (مرض) فهو متأثر به ولكن (الرَّجُلُ) يعرب
                                فاعلا، لأن الفاعل يطلق على من قام بالفعل أو أُسند إليه الفعل،
                            </SmallCard4>
                            <br></br>
                            <SmallCard3>
                                ونلاحظ عند تأمل المثال العاشر (قَرَأْتُ الكتاب أن الفاعل هو ضمير المتكلم المتصل
                                بالفعل (قرأ)، أما المثال الحادي عشر (المعلم يَحْضُرُ مبكرا) فنلاحظ عند تأمله أن الفاعل
                                غـيـر ظـاهـر فـهـو ضمير مستتر، إنه ضمير الغائب (هو)، وقد كان الفاعل (المعلم) ولكـن
                                الفاعل لا يتقدم علـى فعلـه، وبنـاء عـلـى ذلـك لـم يـعـد هـو الفاعل وإنمـا صــار مبتدأ.
                            </SmallCard3>
                            <br></br>

                            <SmallCard3>
                                نستنتج مما تقدم أن الفاعل اسم مرفوع يدل على من قام بالفعل أو أسند إليه الفعل، وأنه
                                يأتي دائمـا بعـد الفعل. وأنه قد يكون اسما ظاهرا مثل (جاء محمد)، أوضميرا متصلا مثل
                                ( دخلنا) أو ضميرا مستترا (المعلم حضر)
                            </SmallCard3>


                        </FormulaText>


                    </Card>


                </div>
            )}
            {section >= 2 && <div>
                <br></br>

                <Card>
                    <FormulaText dir="rtl">
                        <span style={{ color: 'red' }}>1- عرّف الفاعل.
                            <br></br>2- كيف يكون الفاعل؟
                            <br></br>3- ما أنواع الفاعل؟
                            <br></br>4- ما رتبة الفاعل في الجملة الفعلية؟</span>

                        <SmallCard3>
                            <span style={{ color: 'green' }}>
                                الفاعـل اســم مرفوع يدل علـى مـن قـام بالفعل أو أسند إليه الفعل، و يأتي دائمـا بعـد الفعل.
                                وأنـه قـد يـكـون اسـما ظاهرا مثل (جاء محمد)، أوضميرا متصلا مثل ( دخلنا) أو ضميرا
                                مستترا المعلم (حضر)

                            </span>
                        </SmallCard3>
                    </FormulaText>
                </Card>
            </div>}

            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
