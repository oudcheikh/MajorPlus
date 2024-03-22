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
                <FormulaTextF>العطف </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        الْخُلَفَاءُ الرَّاشِدُونَ أَبُو بَكْرٍ وَعُمَرُ فَعُثْمَان ثُمَّ عَلِيُّ أُولَئِكَ النَّاسُ، رَجَالٌ صَدَقُوا مَا عَاهَدوا الله
                        عليهِ، كَانُوا مُبَشِّرِينَ وَ مُنْذِرِينَ، بَلْ مُدَافِعِينَ عَنِ الحَقِّ، لا يخافون في الله لوْمَةَ لائم، لَكِنْ
                        قَدْ يَتَسَاءلُ الْبَعْضُ : أَبُو بَكْرٍ أَفْضَلُ أَمْ عُمَرُ ؟ عِلْمًا بِأَنَّ الصَّحَابَةَ كُلُّهُمْ فُضَلاءُ، فَلَنْ يَتَحَيَّرَ أو
                        يَتَرَدَّدَ أَحَدٌ فِي فَضْلِهِمْ وَلَا فِي حُبِّ الْمُسْلِمِينَ لَهُمْ.
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
                                إنك ترى في النص السابق الحروف التي وضع تحتها خط ( الواو ، الفاء، ثم، لكن، بل،أو، أم) وقد توسطت هذه الحروف بين اسمين مثل أبي بكر وعمر . . وفعليـن نحـو يتحيــر و يتردد، وتلاحظ أن ما بعد هذه الحروف تابع لما قبلها في الإعراب، كمـا فـي المثالين(أبوبكر وعمر فعثمان إلخ)
                            </SmallCard3>

                            <br></br>
                            <SmallCard4>
                                إننا نجد (الواو) ربط بين الاسمين السابقين، و(الفاء) وردت للترتيب والتعقيب ، و (ثم) أفادت الترتيب مع التراخي إلخ، مما سبق نجد أن العطـف هـو ربط بين شيئين في الكلام، ونجد أن حروف العطف ( الواو والفـاء إلخ)، قـد ربـطـت مـا بعـدهـا
                                بما قبلها في الإعراب وأنها هي أدوات العطف
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
                                <br></br> - ما العطف؟
                                <br></br>- ما أدوات العطف؟
                            </span>
                            <br></br>

                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                    <br></br> 1 ـ العطف تابع يتوسط بينه وبين متبوعه أحد الحروف الآتية: ( الواو، والفاء، ثم، لكن،
                                    بـل، لا، حتـى، أو، وأم)
                                    <br></br>2 - العطف تابع للمعطوف عليه في الإعراب: نَجَحَ محمّد ومريم.
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
