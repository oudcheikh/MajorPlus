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
                <FormulaTextF>كتابة الهمزة المتطرفة </FormulaTextF>
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
                        1 -  <strong>يَصْدَأُ </strong>الْحَدِيدُ فِي الرُّطُوبَةُ.
                        <br></br>2 -  <strong>التَّبَاطُؤ </strong> فِي الْعَمَلِ مِنَ الْكَسَلِ.
                        <br></br>3 -  <strong>مُلِئَ </strong>الْكِتَابُ عِلْمًا
                        <br></br>(ب)
                        <br></br>1- كُلُّ شَيْءٍ <strong>بِقَضَاءٍ </strong> وَقَدَرٍ.
                        <br></br>2 -ابْتَعِدْ عَنِ الْمَكَانِ <strong>الْمَوْبُوءِ</strong>.
                        <br></br>3 -  <strong>الْجَرِيءُ</strong> لا يُهَابُ <strong>الْعِبْءَ</strong> وَلا المَشقَّة.
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
                            <SmallCard>
                                الكلمات (يَصْدَأُ التَّبَاطُوْ، مُلِئَ) - المجموعة (أ) ـ التي خط تحتها ختمت بالهمزة: بألف، أو واو،
                                أوياء.
                            </SmallCard>
                            <br></br>
                            <SmallCard>أما الهمزة في كلمات المجموعة (ب) فلم تكتب على حرف، بل كتبت على السطر.</SmallCard>
                            <SmallCard>
                                <span style={{ color: 'blue' }}>
                                    ولمعرفة الطريقة الصحيحة لكتابة الهمزة المتطرفة في أية كلمة، نحدد حركة الحرف الذي
                                    قبل الهمزة فقط.
                                </span>
                            </SmallCard>

                            <br></br>
                            ما حركة الحرف الذي قبل الهمزة المتطرفة في كلمات المجموعة ( يَصْدَأُ التَّبَاطُوْ، مُلِئَ)؟ <br></br>

                            <SmallCard>
      <span style={{ color: 'green' }}>
                                    هي فتحة في الكلمة الأولى، وضمة في الثانية، وكسرة في الثالثة.  <br></br>
                                </span>
                            </SmallCard>
                            <br></br>

                            <SmallCard>لذا رسمت الهمزة المتطرفة في هذه الكلمات على حرف يناسب حركة الحرف الذي قبلها.</SmallCard>

                            <br></br>
                            <SmallCard3>
                                ففي كلمة (يَصْدَأُ) رسمت الهمزة المتطرفة على ألف، لأنها سبقت بحرف مفتوح، والفتحة يناسبه
                                الألف سواء كانت الهمزة مضمومة كما في (يَصْدَأُ) أم مفتوحة مثل: قَرَأَ، أم ساكنة مثل : اقْرَأْ.
                                وفي كلمة (التَّبَاطُؤُ) رسمت الهمزة المتطرفة على واو، لأنها سبقت بحرف مضموم، والضمة
                                يناسبها الواو.
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>وفي كلمة ( مُلِئَ) رسمت الهمزة المتطرفة على ياء ( غير منقوطة) ؛ لأنها سبقت بحرف مكسور،
                                والكسرة يناسبها الياء.
                                أما كلمات المجموعة (ب) وهي: شَيْءٌ، قَضَاءُ، الْمَوْبُوءُ الْجَرِيءُ.
                                فقد كتبت الهمزة فيها على السطر، لأنها لم تسبق بحرف مفتوح ولا مضموم ولا مكسور.
                            </SmallCard3>
                            <br></br>
                            <SmallCard4>
                                فبماذا سبقت الهمزة المتطرفة في كل كلمة منها إذن؟ إنه سكون حي، أو ميت ( حرف علة ممدود).
                                - الكلمتان (شيء، العبء) سبقت الهمزة فيهما ، بحرف ساكن والكلمات الثلاث الأخيرة منها
                                (قَضَاءِ، الْمَوْبُوءِ، الْجَرِيءُ) سبقت الهمزة فيها بحرف مد (ا، و، ي) والمد ساكن.
                                والسكون ليس له حرف يناسبه لتكتب الهمزة المتطرفة عليه، لهذا فإن الهمزة المتطرفة في كلمات
                                المجموعة (ب) كتبت على السطر.
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
                    <br></br>
                    <Card>

                        <FormulaText dir="rtl">


                            <br></br>
                            الهمزة المتطرفة (أي : الهمزة في آخر الكلمة) تكتب كما يأتي:

                            <SmallCard4>
                                <span style={{ color: 'green' }}>

<br></br>1 - على ألف إذا كان ما قبلها مفتوحا مثل - قرأ - يقرأ - اقرأ - سبأ - النبأ - المبتدأ .
<br></br>2 - على واو إذا كان ما قبلها مضموما مثل جرؤ - يجرؤ - اجرؤ - لؤلؤ .
<br></br>3 - على ياء إذا كان ما قبلها مكسورا مثل: ظمئ - يخطئ - التجئ - قارئ.
<br></br>4 - على السطر إذا كان ما قبلها ساكنا، أو كان حرف مد .مثل - المرء - العبء ـ بطء - مخبوء -
الجريء - السماء.
                                </span>
                            </SmallCard4>

                            <br></br>



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
