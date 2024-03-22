import React, { useState } from 'react';

import Audio from "../../../Audio1";
import {
    Container, FormulaText, Card, ContinueButton, SmallCard, FormulaTextF, SmallCard3, SmallCard2
} from  '../../../Styles/MajorStyles';

const C5 = () => {
    const [section, setSection] = useState(0);

    return (

        <Container >

            <button className="continue-button" >
                <FormulaTextF> المبتدأ والخبر
                </FormulaTextF>
            </button>
            <br></br>

            <Card >


                <FormulaText dir="rtl">
                    <SmallCard>
                        <h4 style={{ color: 'blue' }}>     أقرأ الأمثلة</h4>
                    </SmallCard>
                    <Card>

                        1 - الطهارة واجبة.
                        <br></br> 2 - الكتاب مفيد. <br></br>
                        3 - التلميذان مجتهدان.
                        <br></br>
                        4 - القضاة عادلون.<br></br>

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
                            <SmallCard3>
                                عند تأمل الأمثلة السابقة نلاحظ أنها جمل اسمية، وأن كل جملة منها تتألف من اسمين
                                مرفوعين الأول يسمى (مبتدأ) والثاني يسمى (خبرا) ؛ فكلمة (الطهارة) مبتدأ لأن الكلام ابتدأ
                                بها، وكلمة (واجبة) خبر فقد أخبرتنا عن المبتدإ واستفدنا بها فائدة تامة، وهكــذا فـي باقـي
                                الأمثلة

                            </SmallCard3>

                            <br></br>
                            <SmallCard3>
                                ففي الجملة (التلميذان (مجتهدان) التلميذان مبتدأ مرفوع وعلامة رفعه الألف لأنـه
                                مثنی، و (مجتهدان) خبر مرفوع بالألف لأنه مثنى، والقضاة عادلون) القضاة مبتدأ مرفوع
                                وعلامة رفعه الضمة الظاهرة على آخره، و (عادلون) خبر مرفوع بالواو لأنه جمع مذكر سالم.
                            </SmallCard3>


                            <br></br>
                            <SmallCard3>
                                وإذا تأملنا كل جملة من الجمل الواردة في الأمثلة تلاحظ أن الخبر في كل جملة قد ورد مطابقا للمبتدإ
                                في تذكيره وتأنيثه وفي إفراده وتثنيته وجمعه إذن اسم مرفوع تبدأ به الجملة الاسمية،
                                والخبر اسم مرفوع يكون جملة مفيدة مع المبتدإ، ونطلق على هذا النوع من الجمل الجملة الاسمية.
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

            {section >= 2 && (
                <div>
                <div dir="rtl">
                   
                        <Card>
                        <FormulaText>
                            <br></br>
                            <span style={{ color: 'red' }}>
                                - ما المبتدأ؟
                                <br></br>- كيف يكون المبتدأ؟
                                <br></br>- ما الخبر؟
                                <br></br>- كيف يكون الخبر؟
                                <br></br>بم نسمي هذا النمط من الجمل؟
                                <br></br>- فيم يطابق الخبر المبتدأ؟
                                <br></br>
                            </span>
                            <br>
                            </br>
                            <SmallCard2>
                                <span style={{ color: 'green' }}>
                                    <br></br>1 - المبتدأ اسم مرفوع يأتي في أول الجملة الاسمية غالبا، ويكون معرفة في أكثر حالاته.
                                    <br></br>2 - الخبر اسم مرفوع يُكَوّنُ مع المبتدإ جملة مفيدة مثل: الله واحد.
                                    
                                </span>
                            </SmallCard2>
                            <br></br>

                            <SmallCard3>
                                <span style={{ color: 'green' }}>
                                     
                                    <br></br>3 - الخبرموافق للمبتدإ في الإفراد والتثنية والجمع والتذكير والتأنيث: البنت مهذبة ـ العلم نور
                                    المثابران ناجحان - المثابرون ناجحون.
                                    <br></br>4 ـ الأصل في الخبر التأخير والتنكير و أن لا يتعدد وقد يتعدد مثل: التلاميذ مجتهدون مهذبون
                                    ناجحون.
                                </span>
                            </SmallCard3>
                            </FormulaText>
                        </Card>
                  
                </div>
                </div>
            )}



            {section < 2 && (
                <ContinueButton onClick={() => setSection(section + 1)}>التالي</ContinueButton>
            )}
        </Container>
    );
}

export default C5;
