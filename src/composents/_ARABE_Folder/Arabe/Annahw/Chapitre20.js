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
                <FormulaTextF>التمييز </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - مزرعتنا كانت أول نشأتها هكتارا من الأرض ثم صارت بعد ذلك هكتارين.
                        <br></br>2 - واشترينا فيما بعد عشرة هكتارات وحفرنا بها ثلاث آبار
                        <br></br>3 - ثم زادت مساحتها زيادة كبيرة، فغرسنا منها أحد عشر هكتارا نخلا وتسعة وتسعين
                        هكتارا من خليط الأشجار المثمرة.
                        <br></br>4 ـ فهي الآن تحوي ألف شجرة من البرتقال، وألفي شجرة زيتون، ومائــة شــجـرة قـــاد،

                        ومائتي شجرة سدر، ونود أن تظل أحسن مزرعة.<br></br>
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



                            <SmallCard4>
                                <span style={{ color: 'blue' }}>
                                    <br></br>  1 - هل للعدد من واحد إلى اثنين تمييز؟

                                    <br></br>2 - ما تمييز الأعداد من ثلاثة إلى عشرة؟
                                    <br></br>3 - ما تمييز الأعداد من أحد عشر إلى تسع وتسعين؟
                                    <br></br>4 - ما تمييز الأعداد من مائة إلى ألف؟
                                    <br></br>5 - ما تمييز الأعداد في ما فوق الألف؟
                                </span>
                            </SmallCard4>

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

                            <br></br> <br></br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    التمييز اسم نكرة منصوبٌ يزيلُ الإبهام عن كلمة أو جملة قبله، مثال: اشتريْتُ (رطلا)
                                    عسلاً، فكلمة (عسلاً) بيّنت المقصود برطــلا.
                                    والتمييز نوعان:
                                </span>
                            </SmallCard2>
                            <br></br>
                            <strong>أ- تمييز المُفرد:</strong>
                            <SmallCard4>

                                : ويكونُ مميَّزه كلمةً مفردةً ملفوظةً قبله، ويأتي بعدَ:<br></br>

                                <br></br> -عددٍ : نجح عشرون طالباً.
                                <br></br> - وزن: اشتريت رطلا عسلاً
                                <br></br> - کیل: شربت لتراً حليباً.
                                <br></br>- مساحة: زرعتُ الأرض هكتاراً.
                                <br></br>- قياس: اشتريت قماشاً ذراعاً.

                            </SmallCard4>
                            <br></br>
                            <strong>ب- تمييز الجملة:</strong>
                            <SmallCard>
                                ويكونُ مميّزُه ملحوظاً من الجملة التي قبله دون ذكرهِ، ويكونُ إِمَّا مُحوَّلاً عن:
                                فاعل: حسُنَ أحمد خلقاً، أي: حسُنَ خَلقُ أحمد.

                            </SmallCard>
                            <br></br>

                            <SmallCard2>مفعول به: زرعْتُ الحديقة ورداً، أي: زرعْتُ ورد الحديقة.<br></br>
                                - مبتدا: أَنَا أَكْثَرُ مِنكَ مَالًا وَأَعَزُّ نَفَرًا , أي: مالي أكثر من مالك، ونفري أعزُّ من نفرك
                                </SmallCard2>
                                <br></br>
                                <strong>يكونُ التَّمييزُ :</strong>
                                <SmallCard2>
                               <br></br> -منصوباً: اشتريت رطلاً عسلاً.
<br></br>- مجروراً بمن: اشتريت رطلاً  من العسل
<br></br>
مجروراً بالإضافة : اشتريت رطل عسل.
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
