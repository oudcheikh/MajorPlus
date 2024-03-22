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
                <FormulaTextF>إن وأخواتها </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        (ا)
                        <br></br>1 - مَالِكٌ عَالِمُ.
                        <br></br>2 - خَالِدٌ نَجِيبٌ.
                        <br></br>3 - الحبيب قادم.
                        <br></br>4 - النجاح مُحْتَمَلٌ.
                        <br></br>5 - محمد أسد.
                        <br></br>
                        (ب) -
                        <br></br>1 - إِنَّ مالكًا عالمٌ.
                        <br></br>2 - لكنَّ خالدًا كسول.
                        <br></br>3 - لَيْتَ الحبيب قادمٌ.
                        <br></br>4 - لعل النجاح محتمل.
                        <br></br>5 - كأن محمدًا أسد.<br></br>
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
                                عندما نتأمل جمل المجموعة (أ) نلاحظ أنها جمل اسمية تألفت في القسم الأول من مبتدإ وخبر
                                و مرفوعين (مَالِكٌ عَالِمُ، خَالِدٌ نَجِيبٌ.)
                            </SmallCard2>
                            <br></br>

                            <SmallCard4>
                                أما في جمل المجموعة (ب) فنلاحظ أن المبتدأ والخبر دخلت عليهمـا بعـض الـحـروف
                                المشبهة بالفعل والتي تسمى الحروف الناسخة، (إنَّ مالا عالمٌ، لكنَّ خالدًا
                                كسولٌ، لَيْتَ الحبيب قادم. . . . . ) و قد أحدثت هذه روف بدخولها على ( المبتدا....
                                والخبر تغييرا لفظيا ومعنويا، حيث غيرت المبتدأ من رف إلى نصب ومن مبتدإ
                                إلــى اســم لـهـا، ثـم رفـعـت الخبر حيث صار خبرا لها، مع أن لكل منها معنى تفيده.

                            </SmallCard4>

                            <br></br>
                            <SmallCard4>

                                أما (إِنَّ وأَنَّ) فتفيدان التأكيد مثل : (إنّ) محمدًا لعظيم)، (لَكِنَّ) تفيد الاستدراك مثل (خالد نجيب
                                لكنّه كسول)، (لَيْتَ) تفيد التمني مثل: (ليت الشباب عائدٌ) ، ( لَعَلَّ) تفيد الترجيَّ مثل: (لعل النجاح
                                حاصل)، (كَأَنَّ) تفيد التشبيه مثل : ( كأنّ الجندي (ليت، وقد تفيد الظنّ مثل (كأنه ظفر بحاجته).
                                نستنتج مما تقدم أن إن وأخواتها حروف ناسخة تدخل على المبتدأ والخبر فتنصب المبتدأ اسما
                                لها، وترفع الخبر خبرا لها
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
                            <br></br>- علام تدخل إن وأخواتها؟
<br></br>- ما تفعل بالمبتدأ والخبر؟
<br></br>- ماذا يفيد كل حرف من حروف إن وأخواتها؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                               <br></br> 1 - إن وأخواتها حروف مشبهة بالفعل تدخل على المبتدأ والخبر، فتنصب المبتدأ، ويسمى اسمها،
وترفع الخبر، ويسمى خبرها، مثل: إن محمدا مجتهد.
<br></br>2 - إِنَّ وأَنَّ (للتأكيد)، لَكِنَّ (للاستدراك)، لَيْتَ (للتمني)، لَعَلَّ ( للترجي و التوقُّع)، كَأَنَّ
(للتشبيه).
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
