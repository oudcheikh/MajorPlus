import React, { useState } from 'react';

import Audio from "../../../../composents/Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
       
                <FormulaTextF>   الهمزة المتوسطة على  الواو</FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>
                        (أ)
                        <br></br>1 -  <srtrong>رُؤُوسُ </srtrong>الجِبال صَعْبَةٌ.
                        <br></br>(ب)
                        <br></br>1 -  <strong>يَؤُمُّ </strong>المُصَلِّينَ <strong>أَقْرَؤُهُمْ</strong> لِكِتَابِ اللَّهِ. -
                        <br></br>2 - أَبْنَاءُ الْمُعَلِّمِينَ، <strong>يَنْشَؤُونَ </strong> مُحِيِّينَ لِلْعِلْمِ.
                        <br></br>(ج)
                        <br></br>1 - قال رسول الله صلى الله عليه وسلم كُلُّكُمْ ،راع، وكُلُّكُمْ <strong>مَسْئُولٌ </strong> عَنْ رَعِيَّتِهِ» رواه مسلم.
                        <br></br>2 - يَجِبُ عَلَى  <strong>الْمَرْؤوس </strong>طاعَةُ رَئِيسِهِ فِي غَيْرِ مَعْصِيَةِ اللَّهِ.
                        <br></br>(د)
                        <br></br>1 - قال رسول الله صلى الله عليه وسلم: « بَرُّوا أَبَاءَكُمْ تَبَرَّكُمْ <strong>أَبْنَاؤُكُم</strong>» رواه الترمذي.
                        <br></br> 2 - <strong>التَّفَاؤُلُ</strong> خَيْرٌ كُلُّهُ: يَشْرَحُ الصدر، وَيُعْطِي الأَمَلَ
                        <br></br>3 - <strong>وُضُوؤُكَ</strong> للصَّلَاةِ وَاجِبٌ.
                        <br></br>  <br></br>
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
                                أتأمل الكلمات التي خط تحتها في الأمثلة فألاحظ أن بهاهمزة متوسطة مكتوبة على واو:أنظر إلى
                                حركة الهمزة، وحركة الحرف الذي قبلها في المجموعة (أ) فأجد أن حركة الهمزة وحركة الحرف
                                الذي قبلها الضَّمُّة، والهمزة المتوسطة إذا كانت مضمومة وما قبلها مضموم تكتب على واو مثل:
                                رُؤُوسُ.
                            </SmallCard3>
                            <br></br>

                            <SmallCard3>

                                وأنظر إلى حركة الهمزة وحركة الحرف الذي قبلها في المجموعة (ب)، فأجد أن
                                حركة الهمزة الضمة وحركة الحرف الذي قبلها الفتحة والهمزة المتوسطة إذا
                                كانت مضمومة، وكان ما قبلها مفتوحا تكتب على واو ، مثل : يَنْشَؤُونَ، أَقْرَؤُهُمْ، يَؤُمُّ.
                            </SmallCard3>


                            <br></br>
                            <SmallCard3>
                                ثم أنتقل إلى المجموعة (ج) وأنظر إلى حركة الهمزة ثم أنظـر إلـى الحـرف
                                الذي قبلها فأجد أن حركة الهمزة الضم، وأن الحرف الذي قبلهـا سـاكن، والهمزة
                                المتوسطة إذا كانت مضمومة وما قبلها ساكن تكتـ على واو مثل: مَسْئُولٌ، مَرْؤوس
                            </SmallCard3>
                            <br></br>

                            <SmallCard>
                                بقي أن نعرف أنَّ الهمزة المتوسطة إذا كانت مضمومة ومسبوقة بحــرف مـــد ســـاكن(
                                ألف أو واو) كما في المجموعة (د) تكتب على واو مثل: التَّفَاؤُلُ، أَبْنَاؤُكُم، وُضُوؤُكَ.
                            </SmallCard>
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
                            <SmallCard4>
                                <span style={{ color: 'green' }}>

                                    <br></br>  تكتب الهمزة المتوسطة على واو في حالات منها:
                                    <br></br>أ - إذا كانت مضمومة وما قبلها مضموم.
                                    <br></br>ب ـ إذا كانت مضمومة وما قبلها مفتوح.
                                    <br></br>ج - إذا كانت مضمومة وما قبلها ساكن.
                                    <br></br>د - إذا كانت مضمومة وما قبلها مد بالألف أو الواو.
                                </span>
                            </SmallCard4>

                            <br></br>



                        </FormulaText>
                    </Card>
                </div>
            )}

            {section >= 3 && (
                <Card >

                    <FormulaText dir="rtl">
                        <SmallCard>
                            <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                        </SmallCard>
                        <Card>
                            <br></br>
                            (أ)
                            <br></br> 1 - قال صلى الله عليه وسلم: « <strong>لاَتُؤذوا </strong> المسلمينَ و لَا تَتَّبِعُوا عَوْرَاتِهِمْ».
                            <br></br>2 -  <strong>يُؤْجَرُ</strong>المُسْلِمُ عَلَى قِرَاءة القُرآن.
                            <br></br>3 - <strong>مؤلم</strong>الجُوع .
                            <br></br>(ب)
                            <br></br>1 - عَقَدَ النَّبِيُّ صلى الله عليه وسلم بَعْدَ هَجْرَته إلَى الْمَدِينَة <strong>مُؤَاخَاةً</strong> بَيْنَ الْمُهَاجِرِينَ وَالْأَنْصَارِ.
                            <br></br>2 - المُسْلِمُ الصَّادِقُ <strong>يُؤَدِّي </strong> وَاحِبَهُ كَاملاً نَحْوَ الخَالِقِ والمَخْلُوق.
                            <br></br>3 - الصَّديقُ <strong>يُؤَثَّرُ  </strong> في صديقه، فَأَخْتَرْ مَنْ تُصادق.
                            <br></br>  <br></br>
                        </Card>
                    </FormulaText>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Audio />
                    </div>
                </Card>
            )}

            {section >= 4 && (
                <div>
                    <br></br>

                    <br></br>
                    <Card>
                        <br></br>


                        <FormulaText dir="rtl">

                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <br></br>
                            <SmallCard3>
                                أتأمل الكلمات التي خط تحتها في الأمثلة فنلاحظ أن همزة متوسطة كتبت على الواو : أنظر
                                إلى المجموعة (أ) فأجدها ساكنة، وحركة الحرف الذي قبلها الصم ، لذا كتبت الهمزة فيها على واو
                                مثل: - يُؤْجَرُ، تُؤْذُوا، مُؤْلَمٌ.
                            </SmallCard3>
                            <br></br>

                            <SmallCard3>

                                ثم أنتقل إلى المجموعة (ب) وأنظر إلى حركة الهمزة وحركة الحرف الذي قبلها، فأجد أن حركة
                                الهمزة الفتحُةُ ، وحركة الحرف الذي قبلها الضمة، والهمزة المتوسطة إذا كانت مفتوحة وما قبلها
                                مضمومٌ تُكْتَبُ على واو مثل:مُؤَاخَاةً، يُؤَدَّي، يُؤَثَّرُ.
                            </SmallCard3>

                            <br></br>


                            <SmallCard3>
                            <span style={{ color: 'green' }}>
                           <br></br> من مواضع رسم الهمزة المتوسطة على واو ما يأتي:
                           <br></br>1 - إذا كانت الهمزة ساكنة وما قبلها مضموم.
                           <br></br>2 - إذا كانت الهمزة مفتوحة وما قبلها مضموم.
                           </span>
                            </SmallCard3>
                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>

                    </Card>
                </div>
            )}

            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
