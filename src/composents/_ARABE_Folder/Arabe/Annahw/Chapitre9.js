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
                <FormulaTextF>أنواع الخبر
                </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>

                        <br></br> 1 - الكتاب مفيد.<br></br>
                        أ- الولد نجيب. <br></br>
                        ب - المصباح مضي. <br></br>
                        2 - المدرسة ساحتها نظيفة. <br></br>
                        أ- الزهر منظره جميل <br></br>
                        ب - المصباح ضوؤه منير . <br></br>

                        3 - الولد يقرأ الكتاب. <br></br>
                        أ- الرجلُ يركب الجمل. <br></br>
                        ب - الحصان يجر العربة. <br></br>
                        4 - التلاميذ أمام الحجرة. <br></br>
                        أ ـ العصفور فوق الشجرة. <br></br>
                        ب - المدير في المكتب <br></br>
                        ج - السّرجُ على الفرس. <br></br>


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

                                إذا نظرنا الاسم الواقع أول كل جملة من الجمل السابقة نلاحظ أنه مبتدأ، وعند تأملنا
                                لما بعد المبتدإ في كل جملة مما تتم الفائ به نلاحظ أنــه فــي الأمثلــة الأولــى جــاء
                                مفردا مرفوعا فالكلمات مفيد، نجيب،
                                عندما نحذف واحدا منها تبقى
                                جملتها ناقصة الفائدة، لأن المبتدأ لا تتم الفائدة به دون الخبر،
                            </SmallCard3>
                            <br></br>

                            <SmallCard>
                                فمثلا إذا قلنا الكتاب
                                واكتفينا بها، لم نستفد، وعندما نقول (الكتاب مفيد تخبرنا كلمة (مفيـد) بإفادة الكتاب.
                            </SmallCard>

                            <br></br>
                            <SmallCard4>
                                أما جمل المجموعة الثانية المدرسة ساحتها نظيفة - الزهر منظره جميل - المصباح
                                ضوؤه منير) فنلاحظ أنها تتكون من مبتدإ ،وخبر ، فالمدرسة مبتدأ، و (ساحتها نظيفة)
                                خبر، وهي جملة اسمية تمت بها الفائدة ساحة مبتدأ، ونظيفة خبر ، و (ها) ضمير رابط
                                لجملة الخبر مع المبتدإ، ولابد من الرابط عندما يكون الخبر جملة، فالولد اسم مرفوع
                                مبتدأ، خبره الجملة الفعلية (يقرأ الكتاب)
                            </SmallCard4>

                            <br></br>
                            <SmallCard>
                                وكذلك الحال بالنسبة للأمثلة في المجوعة
                                الثالثة حيث يأتي الخبر جملة اسمية.
                            </SmallCard>
                            <br></br>
                            <SmallCard4>
                                أما في المجموعة الرابعة: (التلاميذ أمام الحجرة
                                - العصفور فوق الشجرة - المدير في المكتب - السّرجُ على الفرس) فإننا نلاحظ أنهــا
                                تتركب من اسم مرفوع (مبتدأ) وشبه جملة ( أي ظرف، أوجار ومجرور) خبــرا، فالتلاميذ
                                (مبتدأ) و (أمام الحجرة) شبه جملة - ظرف مكان - خبر المبتدإ ومثلها (فوق الشجرة)، و
                                ( في المكتب). المدير (مبتدأ) و (في المكتب) جار ومجرور  شبه جملة خبر المبتدا.
                            </SmallCard4>
                            <br></br>
                            <SmallCard2>
                                ونستنتج مما سبق أن الخبر يكون اسما مفردا ويكون جملة اسمية أو فعلية أو شبه جملة
                                ( جارا و مجرورا أو ظرفا).
                            </SmallCard2>
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
                            - ما أنواع الخبر؟
<br></br>- ما الرابط بين المبتدأ والخبر إذا كان الخبر جملة؟
                            </span>
                            <br></br> <br></br>
<SmallCard2>
<span style={{ color: 'green' }}>
<br></br>1- الخبر جزء الجملة المكمل للفائدة . مع المبتدا.

<br></br>2 - قد يكون الخبر اسما، أو جملة اسمية أو جملة فعلية، أو شبه جملة ( ظرفا أو جارا ومجرورا)
<br></br>3 - إذا كان الخبر جملة لابد من ضمير يربطه بالمبتدإ.
</span>
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
