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
                <FormulaTextF>المفعول لأجله </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        يَبَرّ المُسْلِمِ وَالِدَيْهِ طَاعَةً لِرَبِّهِ ، ويُصَلِّي الفَرائِضَ امْتثالاً لأوامِرِهِ، وَيَصُومُ رَمَضَانَ ابْتِغَاءَ
                        مَرْضاةِ اللهِ، ويَحُجُّ البَيْتِ الحَرَامَ احْتِرَامًا لِشَرِيعَةِ اللهِ تَعَالَى ، و يَتَصَدَّقُ عَلَى الْفُقَرَاءِ،
                        أمَلأ فِي الثَّواب و يُعَظِمُ العُلَماء إجلالاً لِعِلْمِهِمْ، ويُسافِرُ إلى البلاد البعيدة طلباً لِلْعِلْمِ،
                        و يَزُورُ المَرِيض مُواسَاةً و يَمْتَنِعُ عن المَعَاصِي خَوْفًا مِنْ رَبِّهِ وَرَغْبَةً فِي ثَوَابِهِ.
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
                                عند تأمل الكلمات التي في النص السابق: ( طَاعَةً امْتِثالاً - ابْتِغَاء - اخْتِرَامًا - أَمَلاً
                                إجلالاً - مواساة . . . ) نلاحظ أنها أسماء منصوبة، وأن كل كلمة منها أضافت إلى الجملة
                                التي قبلهـا مـعـنـى جـديـدا
                            </SmallCard2>

                            <br></br>
                            <SmallCard4>
                                فالجملة : يَبَرُ المُسْلِمُ والدَيْهِ، نفهم منها برالمسلم والديه دون أن نعرف
                                السبب الذي دفعه إلى فعل ذلك ... وهكذا نلاحظ أن كل اسم من الأسماء المذكورة آنفا: ( طَاعَةً
                                امتثالاً - ابْتِغَاء - احْتِرَامًا - أَمَلاً إِجْلاَلاً - مواساة. ) جيء به لبيان سبب الفعل وعلة حصوله،
                                والاسم الذي يفيد هذا المعنى يسمى ( مفعولا لأجله) ويكون جوابا لسؤال محتمل لمَ فُعل كذا؟
                            </SmallCard4>
                            <br></br>

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
                           <br></br> ماذا يبيّن المفعول لأجله؟
<br></br>- ما حركة آخره؟
                            </span>
                            <br></br> 
                           <br></br> <strong> المفعول لأجله:</strong >
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                             

<br></br>- مصدرٌ يذكرُ لبيان سبب وقوع الفعلِ (مثال: وقفتُ احتراماً للمعلّم. احتراماً:
مفعول لأجله منصوب وعلامة نصبه الفتحة الظاهرة على آخره).

                                </span>
                            </SmallCard2>
                            <br></br>
                            <SmallCard4>
                            <span style={{ color: 'green' }}>
                            <br></br>- إذا جاءَ المفعولُ لأجله مجرّداً من ال ومن الإضافة، فينصبُ غالباً (مثال: جئْتُ إلى المدرسة
طلباً للعلم ).
<br></br>- أما إذا جاءَ معرّفاً بال فيكونُ مجروراً بحرف جر ، (مثال: وقفتُ للاحترام).
<br></br>- أما إذا جاءَ مضافاً فيجوزُ نصبُهُ أو جرُّهُ بحرف جر ) مثال: سافرت ابتغاء العلم. أو: سافرْتُ
لابتغاء العلم. ).
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
