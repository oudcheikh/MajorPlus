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
                <FormulaTextF>ظن وأخواتها </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 -  <strong>ظَنَنتُ </strong>الجو معتدلاً .
                        <br></br>2 - <strong>حسبتُ </strong> الجودَ خَيْرَ تجارةٍ.
                        <br></br>3 - <strong>يزعم </strong> الجاهل كثرة المال شرفًا.
                        <br></br> 4 -  <strong>يخال </strong>الطاغية البطش عظمةً.
                        <br></br>5 -  <strong>يجعل </strong>الظلم الناس ثائرين
                        <br></br>6 -  <strong>رأيت </strong>الصلح خيرًا.
                        <br></br> 7 - <strong>علمت </strong> العلم نورًا.
                        <br></br>8 - <strong>وجدت </strong> الفراغ مفسدة.
                        <br></br> 9 - <strong>ألفيت </strong> الجواب صحيحًا.
                        <br></br> 10 -  <strong>درى </strong>الجنود محمدا شجاعا.
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
                            <SmallCard2>
                                عندما نتأمل الكلمات التي خط تحتها نلاحظ أنها أفعال، وأن كل فعل منها رفع فاعلا ونصب
                                مفعولين أصلهما ( مبتدأ وخبر) قبل دخول الفعل عليهما.
                            </SmallCard2>
                            <br></br>

                            <SmallCard4>
                                فالجملة ( ظَنَنتُ الجوَّ معتدلاً) والجمل
                                التي بعدها  ( 2، 3، 4، 5، 6، 7، 8، 9، 10 )تتركب من مبتدإ وخبر كانا مرفوعين، قبل دخول
                                أفعال القلوب (ظن وأخواتها عليهما فمثلا الجملة (ظَنَنتُ الجوّ معتدلاً ) كانت قبل دخول (ظنّ)
                                عليها تضم مبتدأ و خبرا مرفوعين هما (الجو معتدل) وبدخول فعل (ظنّ) على المبتدأ والخبر
                                نصبتهما مفعولين لها المبتدأ (الجو) أصبح مفعولا أول، والخبر (معتدل) مفعولا ثانيا.

                            </SmallCard4>

                            <br></br>
                            <SmallCard2>

                                والجملة (يزعم الجاهل كثرة المالِ شرفًا أصلها قبل دخول (يزعم ) : كثرة المال شر، أي مبتدأ
                                وخبره وقد نصبها فعل ( يزعم) مفعولين( كثرة) مفعول أول و (شرف) مفعول ثان، وهكذا في
                                سائر الجمل الواردة في الأمثلة.
                            </SmallCard2>

                            <br></br>


                            <SmallCard3>
                                ونستنتج مما تقدم أن ( ظنّ وأخواتها) إذا دخلت على المبتدأ والخبر تنصبهما مفعولين لها فيصبح
                                المبتدأ مفعولا أول، والخبر مفعولا ثانيا ونلاحظ كذلك أن المضارع والأمر من هذه الأفعال
                                يعملان عمل الماضي.
                            </SmallCard3>
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
                                <br></br>- ما الأفعال التي تنصب مفعولين أصلهما مبتدأ وخبر؟
                                <br></br>- هل يعمل المضارع والأمر - من هذه الأفعال - عمل الماضي؟
                            </span>
                            <br></br> <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                               <br></br> 1 - ظن وأخواتها أفعال متعدية تدخل على المبتدأ والخبر فتنصبهما مفعولين لها، فيصبح المبتدأ
مفعولا أول والخبر مفعولا ثانيا.
<br></br>2 - من أخوات ظنّ ( حسب زعم خال، عد، هب، رأى، وجد، ألفى، درى. . . . . . )
<br></br>3 - المضارع والأمر من هذه الأفعال يعملان عمل الماضي.
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
