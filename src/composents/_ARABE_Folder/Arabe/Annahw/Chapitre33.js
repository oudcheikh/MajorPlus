import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard2, SmallCard3, SmallCard4
} from '../../../Styles/MajorStyles';


const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF>  الاستثناء بغير وسوى </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - خَرَجَ التَّلَامِيذُ <strong>خَلَا </strong> سَعِيدًا ( أو سَعِيدٍ).
                        <br></br>2 - جَاءَ الْقَوْمُ <strong>عَدَا </strong> مُحَمَّدًا( أَوْ مُحَمَّدٍ).
                        <br></br>3 - تَعِبَ الْجُنودُ <strong>حَاشَا </strong> خَالِدًا ( أَوْ خَالِدٍ).
                        <br></br>
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
                                انظر الأمثلة التي كتبت  بخط مختلف (خَـلا، غذا، حاشا) تلاحظ أن كلا منها مخالف لـمـا
                                قبله في الحكم فهو ( مستثـى، فإذا تأملت أواخر الأسماء في الأمثلة الثلاثة وجدتها إمــا
                                منصوبة مثل (سعيدا) وإما مجرورة و (خلا سعيدٍ) فالنصب على أن خلا فعل ماض
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                والاسم الذي بعدها مفعول به والجر على أن (خلا) حرف جر ، والاسم الذي بعدها مجرور
                                بها، وكل ما قيل في (خلا) يقال في عدا وحاشا، فهما مثلها في العمل، وعند تقدم (ما)
                                على (خـلا وعــدا) يـنـصــب الاسـم بعدهمـا علـى أنـه مفعـول بـه لاغيـر، مثل: ألا كلُّ شيءٍ مـا
                                خلا الله باطل، قرأت الكتاب ما عدا صفحةً واحدةً، (حاشا) فلا تسبق ب (ما).
                            </SmallCard3>


                            <br></br>
                            <SmallCard4>
                                <br></br>    تذكير : للمستثنى بإلا ثلاثة أنواع:<br></br>
                                أ - كلام تام صحيح الأركان غير منفي، يجب الاسم الذي يأتي بعد إلا.<br></br>
                                ب - كلام تام صحيح الأركان منفي، يجوز نصب الاسم أو إعرابه بدلا .<br></br>
                                ج ـ إذا كان الكلام ناقصا ومنفيا، يعرب الاسم على . موقعه من الكلام، ويعرب الاسم<br></br>
                                الذي بعد غير وسوى على أنه مضاف إليه مجرور
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
                                <br></br> - ما أدوات الاستثناء؟
                                <br></br>- ما عمل خلا وعدا وحاشا؟

                            </span>
                            <br></br>
                            <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>

                                    1- يستثنى بخلا وعدا وحاشا ، فهي تنصب الأسماء بعدها مفاعيـل لـهـا علـى أنـهـا أفـعـال
                                    وتجرها على أنها أحرف جرّ. مثل: جاء القوم عدا محمدًا، أو عدا محمد.
                                    <br></br>2 - إذا سبقت (ما) خلا أو عدا وجب النصب: جاء التلاميذُ ما عدا محمدًا.                                </span>
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
