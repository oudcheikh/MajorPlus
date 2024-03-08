import React, { useState } from 'react';
import C1A1 from './C1A1';

import teacherImage from '../../../Images/Prof1.png';
import Present from '../images/present.PNG';
import aime from'../images/aime.PNG'
import '../../../Styles/MajorStyles.css'
// Import des styles
import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import verbsData from './data.json'

const C1 = () => {
    const verbData = verbsData.find(item => item.verb === "مال");
    const [section, setSection] = useState(0);

    return (
        <Container>
            <SectionContainer>
                <ImageContainer>
                    <img src={Present} alt="Teacher" />
                </ImageContainer>
                <Card>
                    <BodyText>
                      
                          <strong style={{ color: 'blue' }}> الفعل المضارع  :</strong>هو الفعل الذي يدل على حدث يقع في الزمن الحاضر. ولا بد لكل فعل من فاعل سواء أكان ظاهرًا أو مستترًا.

<br></br>يبدأ الفعل المضارع بالأحرف الأربعة التالية: ن أ ت ي، والمجموعة في كلمة (نأتي)
                      
                    </BodyText>
                </Card>
            </SectionContainer>



            {section >= 1 && (
                <div>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={aime} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل "مال" في المضارع
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <C1A1 verbData={verbData} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}
            
          
           

            {section < 1 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
