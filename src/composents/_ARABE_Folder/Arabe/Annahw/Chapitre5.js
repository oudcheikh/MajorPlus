import React, { useState } from 'react';
import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard3
} from '../../../Styles/MajorStyles';
import '../arabe.css'

const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >


            <button className="continue-button" >
                <FormulaTextF> بناء فعل الأمر       </FormulaTextF>
            </button>
            <br></br><br></br>



            <br></br>
            <Card >


                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <br></br>
                    <Card>

                        <br></br> 1 - <strong>نَظّف</strong> جسمك.<br></br>
                        2 - <strong>قُل</strong> الحق ولو على نفسك.  <br></br>
                        3 <strong>أحسن</strong> كما أحسن الله إليك. <br></br>
                        4 - <strong>هَذَّبْنَ</strong> أولادكن. <br></br>
                        5 -  <strong>تَجَنَّبْنَ</strong>المزاح.<br></br>
                        6 - <strong>أجدْنَ</strong> حفظ دروسكن.<br></br>
                        7 - <strong>انْهَضَنْ</strong> إلى العمل.<br></br>
                        8 - <strong>احْفَظَنَّ</strong> درسك.<br></br>
                        9 -  <strong>اسْمَعَنْ</strong>نصح المخلص.<br></br>
                        10-  <strong>أَحْسِنَّ</strong>إلى الناس.<br></br>
                        11 - <strong>احفظنَّ</strong> عهد الصديق.<br></br>
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

                    <Card>
                        <br></br>


                        <FormulaText dir="rtl">

                        <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>
                            <br></br>
                            <SmallCard3>
                                فعل الأمر مبني، وعندما نتأمل الأمثلة من (1) إلى (11) نلاحظ أنه قد يبنى على السكون كما
                                في الأمثلة: (1، 2، 3) حيث نجد أن الأفعال التي خُطَّ تحتها (نَفْ، قُلْ، أَحْسِنْ) لم يتصل
                                بها ضمير، وأن أواخرها ساكنة، فنستنتج أن هذا النوع من أفعال الأمر يبنى على السكون.

                            </SmallCard3>
                            <br></br>

                            <SmallCard>
                                ونلاحظ كذلك أن الأمثلة ( 4، 5، 6) تشتمل على أفعال أمر اتصلت بآخرها نون الإناث: (هَذَّبْنَ،
                                تجنين، أجدن).
                            </SmallCard>
                            <br>
                            </br>
                            <SmallCard3>
                                كما نجد أفعال ألأمر المخطوط تحتها في الأمثلة (7، 8، 9، 10، 11) قد اتصلت
                                بهـا نـون التوكيد الخفيفة في (7، 9)، والثقيلة في ( 8 ، 1110) فبنيـت علـى الفتـح
                                في الحالتين.
                            </SmallCard3>

                            <br></br>



                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>


                    </Card>
                    <br></br>

                </div>
            )}
            {
                section >= 2 && <div>
                    <Card>
                        <FormulaText dir="rtl">
                            <SmallCard>
                                <span style={{ color: 'blue' }} className='arabic-text'>
                                    <br></br>متى يبنى فعل الأمر على السكون؟
                                    <br></br> متى يبنى فعل الأمر على الفتح؟
                                </span>
                            </SmallCard>
                            <br></br>
                            <SmallCard>
                                <span style={{ color: 'green' }} className='arabic-text'>
                                    يبنى فعل الأمر على السكون إذا كان آخره صحيحا أو اتصلت به نون الإناث، ويبني على الفتح
                                    إذا اتصلت به نون التوكيد.
                                </span>
                            </SmallCard>
                        </FormulaText>
                    </Card>
                </div>

            }
            {
                section >= 3 && <div>

                    <br></br>

                    <Card>
                        <FormulaText dir='rtl'>
                            <SmallCard>
                                <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                            </SmallCard>
                            <br></br>
                            <Card>
                                1 - <strong>اخْشَ</strong> رَبَّكَ تفز برضاه.<br></br>
                                2 -  <strong>تَحَرَّ</strong>الصدق في كل قول يصدر منك.<br></br>
                                3 - قال تعالى: ادْعُ إِلَى سَبِيلِ رَبِّكَ بِالْحِكْمَةِ وَالْمَوْعِظَةِ الْحَسَنَةِ ﴾ سورة النحل. 125
                                <br></br>4 - <strong>أكْتُبَا</strong> في دفتريكما و <strong>احفظا</strong> درسيكما.<br></br>
                                5 - أيها الأولاد  <strong>اقْرَؤُوا </strong><strong>وَاكْتُبُوا </strong>، و  <strong> اعْبُدُوا</strong> ربكم.<br></br>
                                6 - أكْتُبي في دفترك خلاصة .<br></br>
                                <br></br>
                            </Card>
                            <br>
                            </br>

                            <span style={{ color: 'red' }}>ألاحظ وأستنتج:</span>

                            <br></br>
                            <SmallCard3 className='arabic-text'>
                                ألاحظ أن أفعال الأمر التي خط تليف الأمثلة ( 2 ) ممثلة الآخر بحرف (1، 2، 3)
                                علة محذوف في فعل الأمر وثابت في الماضي و المضارع إذ نقول: اخــر
                                تَحَرّ بحذف حرف العلة، وبناء الفعل على
                                الأمر، ونقول في الماضي
                                منها خشي، تحرى( وفي المضارع يخشى، يتحرى) بثبوت حرف العلة
                            </SmallCard3>

                            <br></br>
                            <SmallCard3>

                                نلاحظ
                                كذلك أن فعل الأمر : ادْعُ مبني على حذف الواو، فالماضي منــه (دعا) والمضارع
                                منه (يدعو) بثبوت حـرف الـعلـة: (الواو) فهذه الأفعال إذن أفعال معتلة الأواخـــر
                                نستنتج مما تقدم أن فعل الأمر يبنى على حذف حرف العلة إذا كان معتل الآخر
                            </SmallCard3>

                            <br></br>

                            <SmallCard3>
                                ونلاحظ كذلك
                                أن الأفعال التي خُط تحتها في الأمثلة (4، 5، 6) تبنى على حذف حرف النون في الفعل مثل
                                (اكتبا)، وذلك لاتصاله بألف الاثنين، وفي الفعل ( اكتبوا ) لاتصاله بواو الجماعة، وفي الفعل
                                (اكتبي) لاتصاله بياء المخاطبة، لأن من هذه الأفعال ( تكتبان، تكتبون، تكتبين)
                            </SmallCard3>
<br></br>
                            <SmallCard3>
                                ونستنتج من ذلك
                                أن فعل الأمر يبني على حذف النون إذا اتصل بألف الاثنين، أو (واو) الجماعة، أو ياء المخاطبة.
                            </SmallCard3>

                            <br></br>
                            <SmallCard>
                                <span style={{ color: 'blue' }} className='arabic-text'>
                                متى يبنى فعل الأمر على حذف حرف العلة؟<br></br>
متى يبنى فعل الأمر على حذف النون؟
                                </span>
                            </SmallCard>

                            <br></br>
<SmallCard3>
<span style={{ color: 'green' }} className='arabic-text'>
يبنى فعل الأمر على حذف حرف العلة إذا كان معتل الآخر مثل: (اخش)، ويبني على حذف النون
إذا اتصل به ألف الاثنين، مثل: (اسمعا)، أو اتصلت به ياء المخاطبة نحو:(اسمعي)، أو اتصل به
واو الجماعة نحو: (اسمعوا).
</span>
</SmallCard3>
                        </FormulaText>
                    </Card>
                </div>
            }
            {section < 4 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
