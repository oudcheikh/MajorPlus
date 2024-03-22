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
                <FormulaTextF> التوكيد المعنوي </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        فِي حَلْقَةِ تَوْزِيعِ الحَوافز حَضَرَ وزِيرُ التَّهْذِيبِ <strong>نَفْسُهُ </strong>، ومَعَهُ مُدِيرُ التعليمِ <strong>عَيْنُهُ </strong>، يُشْرِفُ
                        على النّظامِ، وجاءَ المسؤولان كِلاَهُمَا لِتَكْرِيمِ الطَّلابِ المُجْتَهِدينَ ، وأَحْرَزَ النَّاجِحُونَ <strong>جَمِيعُهُمْ </strong>
                        إِعْجَابَ المُشْرِفِينَ، وَمَضَى الوَقْتُ <strong>كُلُّهُ </strong> دُونَ أن يُسَجِلَ حَادِتٌ، وَقَدْ هَنَّا الوَزِيرُ المُتَفَوقَيْنِ
                        الْأَوَّلَيْنِ <strong>كَلَيْهما </strong>، والناجحين  <strong>عامَّتَهُمْ </strong>وتمنــى لـهـم راحة سعيدةً، وَمَزيدا من التقدم.
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
                                إن كل كلمة من الكلمات التي كتب بخط تحتها، قد أكدت معنى سبقها فكلمة ( نفسه) أكدت أن الذي
                                حضر الحفل هو وزير التهذيب وليس غيره، كما قد يظن السامع ، وكلمة (عينه) قد أكدت أن المشرف
                                على النظام هو المدير ذاته، وليس نائبا عنه، وهكذا الأمر في باقي الأمثلة التي كتب تحتها خط.
                            </SmallCard3>

                            <br></br>
                            <SmallCard4>
                                إن كل كلمة من الكلمات التالية : ( نفس عين ،كل ،جميع كلا، كلتا، عامة)
                                تسمى توكيدا لدفع ما قد يتوهمه السامع، والاسم السابق للتوكيد يسمى بالمؤكد،
                                ويتبع التوكيد المؤكد في إعرابه وفي إفراده وتثنيته وجمعـه، وتذكيره وتأنيثه،
                                وتشتمل ألفاظ التوكيد على ضمير يعود على المؤكـ كالهاء في (نفسـه) و(عينـه).
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
                           <br></br> متى يسمى التوكيد توكيدا معنويا؟
<br></br>ما ألفاظه؟
                            </span>
                            <br></br>

                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                             <br></br>   1 - التوكيد المعنوي يأتي لدفع ما قد يظنه السامع مما ليس مقصودا.

<br></br>2 - يتمُّ بذكر ألفاظ معيّنةٍ بعد الاسم لتوكيده، وهي: نفس - عين - ذات - جميع - كلّ - عامة - كلا
وكلتا المضافتان إلى الضمير، على أن تحتوي هذهِ الأسماء على ضمائر تعودُ على الاسمِ المؤكِّدِ
وتطابقه في التذكير أو التأنيثِ، والإفرادِ أو التثنية أو الجمع.
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
