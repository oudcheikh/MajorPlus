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
                <FormulaTextF>  الاستثناء بغير وسوى </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>  1- حضرَ الطَّلابُ غير طالب.
                        <br></br> 5 - مَا قَبَّلْتُ يَدَ أَحَدٍ غَيْرَ وَالِدِي.
                        <br></br>2 - لم يحضر الطَّلابُ غير طالب.
                        <br></br> 6 - لَمْ يَفْتَرِسِ الذِّئْبُ سِوَى شَاةٍ.
                        <br></br>3 - لم يحضر الطَّلابُ غيرُ طالب.
                        <br></br>4 - لم يحضر غيرُ طالب
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
                                نلاحظ أن (غير، وسوى) بمنزلة الاسم المستثنى الواقع بعد إلا ، وبالتالي فتنطبق عليهما نفس
                                الأحكام
                            </SmallCard2>

                            <br></br>
                            <SmallCard4>
                                <br></br>    تذكير : للمستثنى بإلا ثلاثة أنواع:<br></br>
                                أ - كلام تام صحيح الأركان غير منفي، يجب الاسم الذي يأتي بعد إلا.<br></br>
                                ب - كلام تام صحيح الأركان منفي، يجوز نصب الاسم أو إعرابه بدلا .<br></br>
                                ج ـ إذا كان الكلام ناقصا ومنفيا، يعرب الاسم على . موقعه من الكلام، ويعرب الاسم<br></br>
                                الذي بعد غير وسوى على أنه مضاف إليه مجرور
                            </SmallCard4>
                            <br></br>
                            <strong> إذا كان:</strong>
                            <br></br>
                            <SmallCard3>
                                1 - كلام تام صحيح الأركان غير منفي مثل رأيت الأزهار متفتحة غير زهرة) لماذا
                                نصبنا غير ؟ لأن الجملة تامة الأركان غير منفية فوجب النصب ( راجع حكـم الاســم
                                المستثنى بعد إلا. )
                            </SmallCard3>
                            <br></br>

                            <SmallCard2>
                                2 - كلام تام صحيح الأركان منفي، مثل: ما جاء التلاميذ سوى تلميذين ( اسم منصوب على
                                الاستثناء) . أو – ما قام القوم غيرُ محمد (بدل مرفوع) .
                            </SmallCard2>
                            <br></br>
                            <SmallCard2>
                                3 - كلام ناقص ومنفي، مثل: ما جاء سوى واحدٍ ( فاعل) ما رأيت سوى واحدٍ (مفعول
                                به).
                                <br></br>- ما مررت بسوى واحد ( اسم مجرور).
                            </SmallCard2>
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
                                <br></br> - ما حكم إعراب المستثنى بغير؟
                                <br></br>  - ما حكم إعراب المستثنى بسوى؟

                            </span>
                            <br></br>
                            <br></br>
                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    يُستثنى بغير وسوى فتُعربان إعراب الاسمِ الواقع بعدَ إلا.
                                </span>
                            </SmallCard>

                            <br></br>


                            <SmallCard>
                                <span style={{ color: 'blue' }}>

                                    1- إذا كان الاستثناءُ تاماً مثبتاً تعربان اسمين منصوبين على الاستثناء، مثال: حضر
                                    الطَّلابُ غير طالب، غير اسم منصوبٌ على الاستثناء وعلامة نصبه الفتحة الظاهرة.                                </span>
                            </SmallCard>
                            <br></br>
                            <SmallCard4>
                                <span style={{ color: 'blue' }}>
                                    2- إذا كانَ الاستثناءُ تامّاً منفياً تُعربان إما اسمين منصوبين على الاستثناء
                                    أو بدلين من المستثنى منه، مثال: لم يحضر الطَّلابُ غير طالب، غيرَ: اسمٌ
                                    منصوب على الاستثناء وعلامة نصبه الفتحة الظاهرة أو لم يحضر الطَّلابُ
                                    غير طالب، غير بعدل من الطلاب مرفوع وعلامة رفعه الضمة الظاهرة.
                                </span>
                            </SmallCard4>
                            <br></br>
                            <SmallCard3>
                            <span style={{ color: 'blue' }}>
                              <br></br> 3- إذا كانَ الاستثناءُ ناقصاً . منفيّاً تُعربان بحسب موقعهما في الكلام<br></br> ،مثال: لم يحضر غيرُ
                                طالب، غيرُ : فاعل مرفوع وعلامة رفعه الضمة الظاهرة.<br></br>
                                ما رأيت غير طالب، غیر مفعول به منصوب وعلامة نصبه الفتحة الظاهرة على آخره.
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
