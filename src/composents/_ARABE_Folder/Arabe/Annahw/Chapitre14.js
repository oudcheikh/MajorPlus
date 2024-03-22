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
                <FormulaTextF> اسم الفاعل</FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - صَدَقَ الْعَالِمُ -----الْعَالِمُ صَادِقٌ
                        <br></br>2 - رَسَبَ الْكَسُولُ----الْكَسُولُ رَاسِبٌ
                        <br></br>3 - نَامُ الرَّجُلُ-------الرَّجُلُ نَائِمٌ
                        <br></br>4 - أَتْقَنَ الْمَعَلَّمُ----المُعَلِّمُ مُتَّقِنٌ
                        <br></br>5 - اسْتَجَابَ اللَّهُ الدُّعَاءَ ---- اللَّهُ مُسْتَجِيَبُ الدُّعَاءَ


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
                                انظر كلمـــات القســـم الثانـي مـن الأمثلة ( راســب، صادق، نائـم) وفي الكلمتين ( متقن،
                                مستجيب) تجد أن كلا منها إسم يدل على فاعل الفعل أو عامله الذي يعرف من الكلمة،
                                فصادق يدل على فاعل الصدق وراسب يدل على فاعل الرسوب ونائم يدل على فاعل
                                النوم ومن أجل ما ذكر تسمى كل كلمة من هذا النوع (اسم الفاعل)
                            </SmallCard3>
                            <br></br>

                            <SmallCard4>
                                وإنّ اسم الفاعل
                                المأخوذ من الفعل الثلاثي يصاغ على صورة فاعل في عدد الحروف والشكل مثل: ناجح،
                                أما مازاد على الثلاثي فيصاغ اسم فاعله من لفظ مضارعه مع إبدال حرف المضارعة
                                ميما مضمومة وكسر ما قبل الحرف الأخير، فنقول يتقن - متقن، يستجيب، مستجيب.
                            </SmallCard4>

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
                                <br></br> 1 -  علام يصاغ اسم الفاعل من الفعل الثلاثي؟
                                <br></br>2 - وعلام يصاغ من غير الثلاثي؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                                    يصاغ إسم الفاعل من الفعل الثلاثي على وزن فاعل مثل ( كاتب، وصادق) ويصاغ من غير
                                    الثلاثي على وزن مضارعه مع إبدال حرف المضارعة ميما مضمومة و كسرما قبل الأخير مثل:
                                    منقطع - مذنب.
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
