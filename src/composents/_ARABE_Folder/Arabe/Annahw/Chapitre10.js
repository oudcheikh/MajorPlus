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
                <FormulaTextF>كان وأخواتها </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>

                    <strong>بات</strong> الجو حارا، <strong>وظلَّ</strong> <strong>وكَانَ</strong>الغبار ثائرًا ، <strong>فَأَمْسَت</strong> الناسُ قلقةً، ليس لها صبرٌ ، <strong>وكَانَ</strong> الفصلُ صيفًا، وفجأة
تكوّنت مزْنُ بِيضُ، ما  <strong>بَرِحَ </strong>الرعد بها قاصفا، و ما <strong>انْفَكَ</strong> البرقُ لامعًا، و ما <strong>فَتِئَتْ </strong>  الريحُ شديدةً  حتى  
<strong>صَارَ  </strong> الجو باردا فنزل المطر وارتوت الأرض، <strong>فَأَصْبَحَ</strong> الحيُّ ،مرتاحًا، <strong>وَمَازَالَ</strong> السرورُ مخامرًا.


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
                            <SmallCard3>ألاحظ أن الأفعال التي خطّ تحتها في النص السابق وهي (بات، طـل، أمسى، ليس، كان،
ما برح، ما انفك، ما فتئ، صار، أصبح، ما زال دخلت على جمل اسمية مؤلفة من مبتدإ
وخبر، وبعد دخول هذه الأفعال صار المبتدأ اسما لها، والخبر خبرا لهـا منصوبا بالفتح،
                            </SmallCard3>
                            <br></br>

                            <SmallCard4>
                            وقد سميت كان وأخواتها بالنواسخ لأنها تدخل على المبتدأ والخبر فتنسخهما، وسميت بالأفعال
الناقصة لأن معناها لا يتم باسمها وحده ولو أخذنا المضارع من هذه الأفعال مثل: (يكون
الطقس جميلا)، والأمر مثل: (كن متقنا لعملك، فإننا نلاحظ أنها تعمل في المضارع والأمر
عملها في الماضي فترفع الاسم وتنصب الخبر ا ما كان منها خاليا من مضارع وأمر.
                            </SmallCard4>

                            <br></br>
                            <SmallCard>
                            ونلاحظ كذلك أن الأفعال (برح، انفك ، فتئ لا تعمل عمل كان إلا بعد حرف نفي كما في النص
(ما برح، ما انفك، ما فتئ).
                            </SmallCard>

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
                            - علام تدخل كان وأخواتها؟
<br></br>- ما التغيير الذي تحدثه في المبتدإ والخبر؟
<br></br>- لم سميت بالأفعال الناسخة؟
<br></br>- لم سميت بالأفعال الناقصة؟
                            </span>
                            <br></br> <br></br>
<SmallCard4>
<span style={{ color: 'green' }}>
<br></br>- كان وأخواتها أفعال ناسخة، تدخل على المبتدإ والخبر فترفع المبتدأ، ويسمى اسما لها، وتَنْصِبُ
الخبر ويدعى خبرا لها كان البرد قارسا.
<br></br>- من أخوات كان ،بات أصبح، ظل صار، أمسى، أضحى ،ليس، ماانفك، مافتئ، مازال.
<br></br>- يعمل المضارع والأمر من كان وأخواتها - إن وُجِدا - عمل الماضي، مثل: سيكون الصيف حارا
<br></br>- كن ابن من شئت
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
