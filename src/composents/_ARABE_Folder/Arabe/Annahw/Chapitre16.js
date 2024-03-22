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
                <FormulaTextF> اسم المفعول </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - الْبَابُ <strong>مَفْتُوحُ </strong> 
                        <br></br> 2 -اللَّبَنُ <strong>مَشْرُوبٌ </strong>  
                        <br></br>3 - الْمُذْنِبُ <strong>مُعَاقَبٌ </strong> 
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

                            <SmallCard4>
                                انظر الكلمات التي تحته خط في الأمثلة: (مَفْتُوحٌ، مَشْرُوبٌ ، مُعَاقَبٌ)، نلاحظ أن كلا منها
                                يدل على المفعول الذي وقع عليه الفعل المشار إليه فمفتوح تدل على باب وقع عليه الفتح
                                ومشروب تدل على لبن وقع عليه الشرب وهكذا في بقية الأمثلة.                            </SmallCard4>
                            <br></br>
                            <SmallCard4>
                                من أجل ما ذكر تسمى كل كلمة من هذه الكلمات، وما في حكمها ( اسم المفعول)، ويجيء
                                اسم المفعول على وزن مفعول إذا كان الفعل ثلاثيا، ويكون على وزن مضارعه مع إبدال
                                حرف المضارعة ميما مضمومة و فتح ما قبل الأخير إن كان الفعل غير ثلاثي.                            </SmallCard4>
                            <br></br>

                            <br></br>


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

                                <br></br> ما اسم المفعول؟
                                <br></br>- على أي صيغة يصاغ اسم المفعول من الثلاثي؟
                                <br></br>- ما صيغة اسم المفعول من الرباعي؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                    <br></br>   1 - اسم المفعول : اسم يدلّ على من وقع عليه فعل الفاعل.
                                    <br></br>2- يصاغ اسم المفعول من الثلاثي على وزن مفعول ومن غير الثلاثي على وزن اسم الفاعل
                                    منه إلا أن ما قبل الأخير منه يفتح.
                                </span>
                            </SmallCard3>
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
