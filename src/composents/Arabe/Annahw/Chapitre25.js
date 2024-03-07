import React, { useState } from 'react';

import Audio from "../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from '../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF>النعت الحقيقي </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        يَا بُنَيَّ إِذَا أَرْهَقَكَ العَمَلُ المُتَوَاصَلُ ، وأَتْعَبَتْكَ المُطَالَعَةُ الدَّائِمَةُ ولأحَظْتَ أَنَّكَ فِي حَاجَةٍ تَامَّةٍ
                        إِلَى الرَّاحِةِ فَاخْرُجْ لَهَا، وَسِرْ بِجَانِبِ بُسْتَانٍ صَغِيرِ أَرْضُهُ مَفْرُوشَةُ بِالْبِرْسِيمِ الْأَخْضَر و
                        اسْتَنْشَقِ الهَواءَ الطَّلْقَ، فَتَمَتَّعْ بِنَسِيمِهِ الفاتر وهَوَائِهِ النّقِي وَ مَناظِرِهِ الجَذَّابَةِ، حَتَّى تَمْلَأَ نَفْسَكَ
                        سَعَادَةً وَابْتِهَاجًا
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

                            <SmallCard3>
                                تأمل الكلمات التي كتب تحتها خط: المُتَوَاصَلُ - تَامَّة الأَخْصَرِ الطَّلْقَ - الفاتِرِ الجَذَابَةِ)،
                                تجـد أنـهـا أسـماء تدل على صفات أو نعوت، لأن كل كلمة منها تصف اسما قبلها وتوضحه.
                                فالعمل وصفناه بالمتواصل، والمطالعة وصفناها بالدائمة، وهكذا الحال في باقي الأمثلة.
                            </SmallCard3>

                            <br></br>
                            <SmallCard4>
                                إن الاسم السابق للنعت يسمى بالمنعوت أو الموصوف.

                                وإذا تأملنا كل نعت أو صفة من ناحية شكلها وجدناها توافق منعوتهـا فـي رفعه ونصبــه،وجره،
                                فكلمة (المتواصل) مرفوعة لأنها وصفت اسما قبلها مرفوعا هو: (العمل)، والكلمة
                                ( تامة) مجرورة لأنها وصفت اسما مجرورا، وهو (في حاجة)، والكلمة (الطلق) منصوبة
                                لأنها وصفت اسما منصوبا هو: الهواء
                            </SmallCard4>
                            <br></br>
                            <SmallCard4>
                                ومن هذا نعلم أن كل لفظ يدل على صفة لاسم قبله يسمى نعتا حقيقيا، ويسمى الاسم منعوتا.
                                يوافق النعت المنعوت في إعرابه، وفي تعريفه وتنكيره، وفي تذكيره وتأنيثه، وإفراده وتثنيته
                                وجمعه، وقد يكون النعت مفردا، وقد يكون جملة بشرط أن يكون المنعوت نكرة، مثل جاء
                                رجل يركض.

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
                                <br></br>- ما النعت الحقيقي؟
                                <br></br>-النعت تابع لماذا؟
                            </span>
                            <br></br>

                            <SmallCard2>
                                <span style={{ color: 'blue' }}>
                                    <br></br>  - النَّعْتُ الحقيقي لفظ يدل على صفة في نفس الموصوف. مثال: أقدِّرُ الطَّالب المجد.
                                    ويطابق النّعتُ المنعوت في الحالات التالية:
                                </span>
                            </SmallCard2>
                            <SmallCard4>
                                <br></br>1- في حركة الإعراب: يكون مرفوعاً أو منصوباً أو مجروراً بحسب موضع المنعوت من
                                الإعراب.
                                <br></br>2- في التعريف أو التنكير : فإذا جاءَ المنعوتُ نكرةً كانَ النّعتُ نكرة و ذلك مثل قوله تعالى: ﴿ وَلَعَ
                                مومِنُ خَيْرٌ مِّن مُّشْرِكٍ وَلَوَ أَعْجَبَكُمْ .
                                وإذا جاءَ معرفةً كانَ النّعث معرفةً، مثال: (المسلمُ القويُّ أحبّ إلى الله من المسلم الضعيف).
                            </SmallCard4>
                            <br></br>
                            <SmallCard4>
                                <br></br>-3 في الإفرادِ أو التثنية أو الجمع : فإذا جاءَ المنعوتُ مفرداً جاءَ النّعتُ مفرداً، مثله، مثال: ( حسن،تلميذ عاقل)، وإذا جاءَ المنعوت مثنى جاءَ النّعتُ مثنى مثال: هذان) ولدان صادقان) وإذا جاءَ
                                المنعوتُ جمعاً جاءَ النّعتُ جمعا مثال:( تحيط بمنزلنا الأشجار الباسقاتُ).
                            </SmallCard4>
                            <br></br>
                            <SmallCard4>
                                <br></br>4- في التذكير أو التأنيثِ: فإذا جاءَ المنعوت مذكراً جاء النّعتُ مذكراً . مثال: (هذا ولد عاقل).
                                وإذا جاءَ المنعوتُ مؤنَّثاً جَاءَ النَّعتُ مؤنَّثاً. مثال: (جاءت البنت المهذبة).
                                <br></br>5 - يكون النعت مفردا أو جملة: فإذا كان النعت جملة كان المنعوت نكرة. مثل: جاء رجل يركض
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
