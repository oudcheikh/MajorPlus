import React, { useState } from 'react';
import QCMC1 from './QCMC1';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard3, SmallCard4
} from '../../../Styles/MajorStyles';
import '../arabe.css'





const C3 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF>     بناء الفعل المضارع

                </FormulaTextF>
            </button>
            <br></br><br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>

                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>

                    </SmallCard>
                    <Card>

                        <br></br>
                        1 - الأمهات يُهَدّبْنَ أولادهن. <br></br>
                        2 - البناتُ يُشارِكْنَ الأولاد في التعلم. <br></br>
                        3- لَتَرْجِعَنَّ إلى البيت لتراجع أو لَتَفشَلُنَّ في الامتحان. <br></br>
                        4 - لَتُنْجِزَنَّ العمل أو لَتُعَاقَبَنَّ. <br></br><br></br>

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
                            <SmallCard4 className='arabic-text'>
                                نلاحظ عند تأمل الأمثلة أنها تشتمل على أفعال مضارعة، ونحن نعلم أن الفعل المضارع
                                كما قدمنا، ونلاحظ كذلك أن الفعل المضارع يبنى على السكون كمـا فــي المثالين
                                الأولين: ( يهذبن - يشاركن)، ويبني الفتح إذا اتصل بنون التوكيد الخفيفة أو الثقيلة،
                                مثل: ( لتجدن، لتنجزن، لترجعن).

                            </SmallCard4>
                            <br></br>


                            <SmallCard3 className='arabic-text'>
                                ونلاحظ أن نون التوكيد يُؤتى بها لتقوية الكلام، فإذا قلنا (لتنجزن العمل) فإن طلبنــا
                                إلى المخاطب أقوى من قولنا له ( انجز العمل) وهكذا فالمضارع معرب، ويبنى في
                                حالتين : ( على السكون إذا اتصل بنون النسوة، وعلى الفتح إذا اتصـل بنـــون التوكيد).
                            </SmallCard3>
                            <br>
                            </br>

                            <span style={{ color: 'blue' }} className='arabic-text'>
                                -علام يبنى المضارع؟
                                <br></br>- متى يبنى على السكون؟
                                <br></br> - ومتى يبنى على الفتح؟
                            </span>
<br></br><br></br>
                            <SmallCard>
                                <span style={{ color: 'green' }}>
                                    يبني المضارع على السكون إذا اتصل بنون الإناث مثل يكتبن ، ويبنى على الفتح إذا اتصل
                                    بنون التوكيد مثل: لتجدنَّ، ليعلمن.
                                </span>
                            </SmallCard>


                        </FormulaText>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Audio />
                        </div>



                    </Card>
                    <br></br>

                </div>
            )}


            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C3;
