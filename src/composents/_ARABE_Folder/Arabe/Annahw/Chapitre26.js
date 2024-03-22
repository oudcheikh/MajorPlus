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
                <FormulaTextF>النعت السببي </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - جَاءَ التَّلْمِيذُ  <strong>الْمُهَذِّبُ </strong> أبوه.
                        <br></br>2 - حَضَرَتِ البنت <strong>الْمُتَعَلَّمَةُ</strong> أُمُّهَا.
                        <br></br>3 - اسْتَيْقَظْتُ مِنْ نَوْمِي فِي لَيْلَةٍ <strong>شَدِيدٍ</strong> بَرْدُهَا.
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
                                تأمل الكلمات التي كتب تحتها خط (الْمُهَذَّبُ الْمُتَعَلِمَةُ، شَدِيدٍ) تجد أن كلا منها صفة لـمـا
                                بعده، وذلك لارتباطه به، فالأب في المثال الأول له ارتباط وثيق بالتلميذ، ولذلك السبب قيـل
                                عن صفة الأب إنها صفة التلميذ، وهكذا في المثال الثاني وكلمة ( شديد)
                            </SmallCard3>

                            <br></br>
                            <SmallCard4>
                                في المثال الثالث
                                صفة لاسم له ارتباط بالمنعوت وهو البرد، وإذا ورد النعت صفة لاسم له ارتباط بالمنعوت
                                يسمى ( نعتا سببيا) وإذا نظرنا إلى النعوت في جميع الأمثلة وجدنا أن كل نعت منها يطابق
                                منعوته في رفعه ونصبـه وجـرّه، وفي تعريفه، وتنكيره، ولاحظنا أن كل نعـت جــاء مفردا
                                وموافقـا لمـا بعـده في التذكير والتأنيث.
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
                                <br></br> - ما النعت السببي؟
                                <br></br>- كيف يكون؟
                            </span>
                            <br></br>

                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                  <br></br>  1 - النعت السببي هو ما دل على صفة اسم له ارتباط بالمنعوت جاءنا معلم حسن خلقه.
                                   <br></br> 2 - يكون النعت مطابقا لمنعوته في الإعراب، وفي التعريف والتنكير.
                                   <br></br> 3 - النعت السببي يأتي مفردا ويراعي ما بعده في تذكيره وتأنيثه: رأيت تلميذا نظيفة دفاتره
                                </span>
                            </SmallCard3>

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
