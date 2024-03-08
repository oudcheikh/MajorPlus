import React, { useState } from 'react';
import C1A1 from './C1A1';

import teacherImage from '../../../Images/Prof1.png';
import ordre from '../images/ordre.PNG';

import '../../../Styles/MajorStyles.css'
// Import des styles
import {
    FormulaTextF, Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton,SmallCard
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import verbsData from './data.json'

const C1 = () => {
    const verbData = verbsData.find(item => item.verb === "مال");
    const [section, setSection] = useState(0);

    return (
        <Container>
            <Card>
                <br></br>
               
                <br></br>
                <ImageContainer>
                        <img src={ordre} alt="Teacher" />
                    </ImageContainer> 
                <SectionContainer>

                    <SmallCard>

                        <BodyText>
                            <span className='arabic-text'>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <strong  style={{ color: 'blue' }}>الأمر أو  فعل الأمر </strong>: (بالصيغة) في علم النحو هو أحد أقسام الفعل الثلاثة. والأمر: طلب الفعل على وجه التكليف والإلزام بشيء لم يكن حاصلاَ قبل الطلب، ويبنى فعل الأمر على ما يجزم به مضارعه.
                               
                                </div>
                            </span>
                        </BodyText>
                    </SmallCard>
                   
                </SectionContainer>
            </Card>


            {section >= 1 && (

                <div>
                     <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={teacherImage} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل عد في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <C1A1 verbData={verbData} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}

          
            {section <1 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
