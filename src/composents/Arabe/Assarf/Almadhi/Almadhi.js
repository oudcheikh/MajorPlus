import React, { useState } from 'react';
import C1A1 from './C1A1';

import compte from '../images/compte.PNG';
import ref from '../images/ref.avif';

import '../../../Styles/MajorStyles.css'
// Import des styles
import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import verbsData from './data.json'

const C1 = () => {
    const [section, setSection] = useState(0);
 // Recherche du verbe dans le fichier JSON
 const verbData = verbsData.find(item => item.verb === "عد");
    return (
        <Container>
            <SectionContainer>
                <ImageContainer>
                    <img src={ref} alt="Teacher" />
                </ImageContainer>
                <Card>
                    <BodyText>
                       
                      <strong style={{ color: 'blue' }}>الماضي:</strong>  هو كلمة تدل على معنى معين وعمل حدث في الزمن الماضي وانتهى.

  <br></br>مثال: أكل زيد التفاحة، نجحت الطالبة، سافر أخي.
                       
                    </BodyText>
                </Card>
            </SectionContainer>



            {section >= 1 && (
                <div>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={compte} alt="compte" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل عد في الماضي
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
                    <br></br>
                    <br></br>
                </div>
            )}
            
            {/* {section >= 2 && (
                <div>
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

                    <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1  />
                        </div>
                        <div className="separator"></div> 
                    </div>
                </div>
            )}
            {section >= 3 && (
                <div>
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

                    <div style={{ marginBottom: '50px', width: '100%', height:'100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 />
                        </div>
                        <div className="separator"></div> </div>
                </div>
            )}

            */}

            {section < 3 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
