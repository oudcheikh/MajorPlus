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
                <FormulaTextF>  المنادي </FormulaTextF>
            </button>

            <br></br>
            <br></br>
            <Card >

                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>  أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>
                        <br></br>   1 - يَا إِبْرَاهِيمُ اجْتَهِدْ تَنْجَحْ
                        <br></br>2 - أَيَا جَبَلَيْ نُعْمَانَ بِاللَّهِ خَلِيَّـــــــــــا نَسِيمَ الصَّبَا يَخْلُصْ إِلَيَّ نَسِيمُهَا.
                        <br></br>3 - رَبَّنَا ارْحَمْنَا.
                        <br></br>4 - هيا محمد أقبل.
                        <br></br>5 - أَفَاطِمُ مَهْلاً بَعْضَ هَذَا التَّدَلُّو  وَإِنْ كُنْتِ قَدْ أَزْمَعْتِ صَرْمِي فَأَجْمِلي.
                        <br></br>6 - أَلَمْ تَسْمَعِي أَيْ دَعْدُ فِي رَوْنَقِ الضُّح
                        <br></br>7 - وَازَيْدَاهُ.
                        <br></br>8 - اللَّهُمَّ وَفَقْنا لِمَا فِيهِ الْخَيْرُ.
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

                            <SmallCard2>
                                عند طلبنا لإقبال شخص علينا أن نُنَاديه باسمه أو صفته بإحدى أدوات النداء وهي: (يا،أيا، هيا، أ، وَا، أي اللهم). ولكل أداة من الأدوات اختصاص
                            </SmallCard2>

                            <br></br>
                            <SmallCard4> ف (يــا) حرف نداء للقريب
                                والبعيد، و (أيـا) للمنادى البعيد، و (هيا) كذلك، و (أ) حرف نداء القريب، ومثلها (أي) و (وَا)
                                حرف نداء مختص بالندبة ( الاستغاثة) نحو (واكبـداه) و (اللهم) لفظ الجلالة منادي بأداة
                                محذوفة، عوض عنها بالميم المشددة، وأصله (يا الله وما ورد بعد هذه الأدوات من الأسماء
                                يسمّى ( المنادى) وتتعين (يا) في نداء اسم الله تعالى.</SmallCard4>
                            <br></br>
                            <SmallCard3>
                                ر عند النداء للاسم الذي فيه (ال) يؤتي بأيها للمذكر ، وأيتها للمؤنث، ويرفع الاسم الذي
                                يجيء بعدهما، مثل: يا أيها الرجل يَأَيُّهَا النَّفْسُ . وقد تحذف أداة النداء أحيانا كقوله تعالى
                                يُوسُفُ أَعْرِضْ عَنْ هَذَا رَبَّنَا لَا تُزِغْ قُلُوبَنَا .
                            </SmallCard3>
                            <br></br>
                            <SmallCard3>
                                والمنادي ينصب إذا كان مضافا مثل ( يا صاحب (الدار) ويا حارس البستان، أو كان شبيها
                                بالمضاف نحو يا لاهيا عن درسه، أو كان نكرة غير مقصودة مثل يا غافلا انتبه، و يبني
                                على ما يرفع به إذا كان نكرة مقصودة، مثل: يا رَجُلُ، أو كان علما مفردا مثل: يا سعد، يا
                                زهير.
                            </SmallCard3>

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
                                <br></br>- ما المنادي؟
                                <br></br>- ما أدوات النداء؟
                                <br></br>- كيف يعرب المنادي؟
                            </span>
                            <br></br>

                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    1 - المنادى اسمٌ يدلُّ على طلب المتكلّم من المخاطب الإقبال عليه، بواسطة حرفٍ من حروفِ
                                    النداء.
                                </span>
                            </SmallCard>

                            <br></br>


                            <SmallCard>
                                <span style={{ color: 'green' }}>

                                    2 - حروفُ النّداء، هي: ( يا أيا ، هيا، أ ، وَا، أي، اللهم).
                                </span>
                            </SmallCard>
                            <br></br>
                            <SmallCard4>
                                <span style={{ color: 'green' }}>
                                    3 - ويكون المنادى منصوبا إذا كان مضافا مثل: ( يا طالب العلم اعمل بجد، أوشبيها بالمضاف ،مثل:
                                    ( يا طالبا علما) ، أو نكرة غير مقصودة، مثل : ( يا غافلا ،انتبه ويبنى على ما يرفع به إذا كان
                                    نكرة مقصودة ، مثل (يا غافِلُ اخرج) (يامسلمون سووا صفوفكم أو علما مفردا، مثل: ( يا هند).
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
