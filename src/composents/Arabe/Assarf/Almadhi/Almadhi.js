import React, { useState } from 'react';
import C1A1 from './C1A1';


import ref from '../images/ref.avif';

import compte from '../../imges/compte.PNG';
import dire from '../../imges/dire.PNG';
import aime from '../../imges/aime.PNG';
import marche from '../../imges/marche.png';
import fidele from '../../imges/fidele.PNG';
import daaa from'../../imges/daaa.jpg'
import '../../../Styles/MajorStyles.css'
// Import des styles
import {
    Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, BodyText, Subtitle, ContinueButton
} from '../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct

import verbsData from './data.json'
import './style.css'
const C1 = () => {
    const [section, setSection] = useState(0);
 // Recherche du verbe dans le fichier JSON
 const mala = verbsData.find(item => item.verb === "مال");

 const Aadda = verbsData.find(item => item.verb === "عدَّ");
 
 const kaala = verbsData.find(item => item.verb === "قال");
 
 const maacha = verbsData.find(item => item.verb === "مشى");
 
 const waaffa = verbsData.find(item => item.verb === "وفى");
 
 const daa = verbsData.find(item => item.verb === "دعا");

    return (
        <Container>
             <div className='SS'>
                </div>
            <SectionContainer>
                <ImageContainer>
                    <img src={ref} alt="Teacher" />
                </ImageContainer>
                <Card>
                    <BodyText>
                       
                 <p className='arabic-text'>    <strong  style={{ color: 'blue' }}>الماضي:</strong>  هو كلمة تدل على معنى معين وعمل حدث في الزمن الماضي وانتهى.

  <br></br>مثال: أكل زيد التفاحة، نجحت الطالبة، سافر أخي.
  </p> 
                    </BodyText>
                </Card>
            </SectionContainer>



           
            {section >= 1 && (
                  <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={compte} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل عدَّ في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 verbData={Aadda} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}
{section >= 2 && (
                  <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={aime} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل مال في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 verbData={mala} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}


 {section >= 3 && (

                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={dire} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل قال في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                             <C1A1 verbData={kaala} /> 
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}


{section >= 4 && (
                  <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={marche} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل مشى في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 verbData={maacha} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}

{section >= 5 && (
                  <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={fidele} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل وفى في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 verbData={waaffa} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}

{section >= 6 && (
                  <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={daaa} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل دعا في الماضي
                            </BodyText>
                        </Card>
                    </SectionContainer>
                    <br></br>
                    <br></br>

                    <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <C1A1 verbData={daa} />
                        </div>
                        <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
                    </div>
                </div>
            )}

    {section < 6 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
