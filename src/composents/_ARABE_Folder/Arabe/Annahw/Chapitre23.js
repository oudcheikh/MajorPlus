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
                <FormulaTextF> التوكيدُ اللفظي </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>1 - لَا لَا أَقُولُ الْكَذِبَ
                        <br></br>2 - أقدِّرُ الطَّالبَ الطَّالب المجد
                        <br></br>3 - أقدِّرُ أقدِّرُ الطَّالب المجد.
                        <br></br>4 - يُكافأُ المجد، يُكافة المجد
                        <br></br>5- لا لا أبوحُ بالسر
                        <br></br>6- المُثَابَرَةَ الْمُثَابَرِةَ
                        <br></br>7- حَضَرَ حَضَرَ الغَائِبُ.
                        <br></br>8- لا حول ولا قوة إلا بالله لا حول ولا قوة إلا بالله
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
                                إذا تأملنا الأمثلة السابقة ( المثابرة المثابرة - حضر حضـر - لالا . .. ) نجد ألفاظها مكررة
                                فكلمة (لآلا) تفيد تأكيد النفي، وكلمة ( المثابرة) في المثال: المُتَابَرَةَ المُثابرة، وردت مكررة
                                وهي اسم، وكلمة (حضر) في المثال (حضَرَ حضَرَ الغَائِبُ)، وهي فعل مكرر،
                            </SmallCard3>

                            <br></br>
                            <SmallCard2>
                                ولذلك يسمى كل لفظ من الألفاظ المكررة في الأمثلة السابقة ونحوها توكيدا لفظيا، لأنـه لـم
                                يحصل إلا بتكرار اللفظ وإعادته اسما كان أو فعلا، أو حرفا أو جملة.
                            </SmallCard2>
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
                                <br></br>  ما التوكيد اللفظي؟
                                <br></br>بم يحدث التوكيد اللفظي؟
                            </span>
                            <br></br>

                            <SmallCard2>
                                <span style={{ color: 'green' }}>

                                    1 - يكون التوكيد اللفظي بإعادة اللفظ ـ اسما كان: المثابرة المثابرة، أم فعلا: تفوق تفوق المثابرة،
                                    أم حرفا: لا لا أكذب، أم جملة: اجتهد اجتهد.
                                </span>
                            </SmallCard2>

                            <br></br>
                            
                            <br></br>
                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                2 - التوكيد يتبع المؤكد في إعرابه.
<br></br>3 - توكيدُ الضّمائر المتصلة:
يتم توكيدها:
<br></br>- بتكرار الكلمة التي اتصل بها الضَّمِيرُ.
مثل: هذا كتابي كتابي اتّصلَ الضَّميرُ (الياء) بالاسم كتابي فكُرَّرَ الاسم لتوكيد الضمير، أو يتمّ
توكيده بضمير رفع منفصل سواءً كانَ الضّمير المتصلُ المؤكَّدُ مرفوعاً أو منصوباً أو مجروراً.

                                </span>
                            </SmallCard3>
                            <br></br>
                            <strong> أمثلة:</strong>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>

                               
<br></br>سرنا نحن. نحن: توكيد للضمير (نا) في سرنا وهو ضمير رفع.
<br></br>كافأتني أنا. أنا: توكيد للضمير (الياء) في كافأتني، وهو ضمير نصبٍ.
<br></br>- كتابي أنا أنا : توكيد للضمير (الياء) في كتابي وهو ضمير جرّ، وكلٌّ من هذه الضمائرِ أُكْدَ بضمير رفع.
                                </span>
                            </SmallCard4>
                            <br></br>
                            

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
