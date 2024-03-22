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
                <FormulaTextF>المفعولُ المُطلق </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br> 1 - يَشْرَبُ الطَّفْلُ اللَّبَنَ شُرْبًا.
                        <br></br>2 - خَطَفَ القِطُّ الفَأْرَ خَطْفًا.
                        <br></br>3 - رَكَضَ إبرأهِيمُ رَكْضًا.
                        <br></br>4 - أَحْسَنْتُ إِلَى الْفَقِيرِ
                        <br></br>5 - جَرَى أَحْمَدُ جَرْيًا سَرِيعًا.
                        <br></br>6 - وَثَبَ الْجُنْدِيُّ وَثَبَ الْأَسَدِ.
                        <br></br>7 - ضَرَبَ الرَجَلُ الْحَيَّةَ صَرْيَتَيْنِ.
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
                                إذا نظرنا إلى الكلمات التي كتب تحتها خط ،(شُرْبًا، خَطْفًا، رَكْضًا، إِحْسَانًا، سَرِيعًا،
                                وَثْبَ، ضَرْبَتَيْنِ) وجدناها أسماء منصوبة بالفتحة أو ما ينوب عنها كاليـاء فـي (ضربتين)
                                ولاحظنا أن كل اسم منها أخذ من الفعل الذي قبله، مع مطابقته له في لفظه وعدد حروفه،
                                وعند بحثنا في معناها نلاحط أنها أضافت إلى الجمل معني جديدا
                            </SmallCard3>

                            <br></br>
                            <SmallCard2>
                                فكلمـة (شربا) في
                                المثال الأول أضافت إلى الجملة معنى جديداً لأنها زادت الخبــر قـوة، والجملة (خطـف
                                القط الفأر خطفـا أقـوى في المعنى من ( خطف القط الفأر ) وهكذا
                            </SmallCard2>
                            <br></br>
                            <SmallCard4>
                                وعند مقارنتنـــا
                                لفعـل (شــرب) بالاســم الـذي بعـده (شربا) نستفيد أن الاسم موافق للفعـل فـي لفظــه وعـــدد
                                حروفه، فكلمـة (وثـب الأســد) في المثال السادس قـد بيـنـت نـوع الفعل، والكلمة (ضربتين)
                                فــي المـثــال الســابـع قــد بيـــت عـدد وقوع الفعل. ووردت منصوبة بالياء نيابة عن الفتحة.
                            </SmallCard4>
                            <br></br>
                            <SmallCard>
                                ومن هذا نعلم أن كل اسم يجيء بعد الفعل من لفظه لتأكيده أو لبيان نوعه أو عدده يسمى ( مفعولا
                                مطلقا)
                            </SmallCard>

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
                                <br></br>  - ما المفعول المطلق؟
                                <br></br>- ما أنواعه؟
                            </span>
                            <br></br>

                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    المفعول المطلق مصدر منصوبٌ يُذكرُ بعدَ فعِلِهِ لتوكيدِهِ أَوْ بيان عددِهِ أَوْ نوعِهِ.                               </span>
                            </SmallCard>
                            <strong>أنواعه:</strong>
                            <br></br>
                            <SmallCard>
                                توكيد الفعل نجح الطَّالبُ نجاحاً، نجاحاً : مفعول مطلق منصوب وعلامة نصبه الفتحة الظاهرة
                                على آخره.
                            </SmallCard>
                            <br>
                            </br>
                            <SmallCard2>
                                <br></br>    2-بيانُ نوعِهِ : وثبتُ وثبة الغزال، (وثبة: مفعولٌ مُطلقٌ منصوب وعلامة نصبه الفتحة الظاهرة).
                                <br></br>3- بيانُ عددِهِ: درْتُ حول الحديقة دورتين، ( دورتين مفعول مطلق منصوب وعلامة نصبه الياء
                                نيابة عن الفتحة في المثنى).
                            </SmallCard2>
                            <br>
                            </br>
                            <SmallCard4>
                                قد يأتي المفعول المطلقُ بعد اسم فاعل من جنسِهِ: أنتَ محسنٌ إلى الفقراء إحساناً، إحساناً: مفعول
                                مطلق منصوب وعلامة نصبه الفتحة الظاهرة على آخرِهِ.
                                أو بعد اسم المفعول : الطَّالبُ المجد محبوب حباً كثيراً ، حبّاً مفعولٌ مُطلق منصوبٌ وعلامة نصبِهِ
                                الفتحة الظاهرةُ.
                                أو بعد المصدر : أعجبت باحسانك إلى الفقراء إحساناً كثيراً، إحساناً: مفعول مطلق منصوبٌ
                                وعلامة نصبه الفتحة الظاهرية
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
