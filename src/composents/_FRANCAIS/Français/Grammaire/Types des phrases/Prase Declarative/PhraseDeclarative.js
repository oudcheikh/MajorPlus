import React, { useState } from 'react';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title, Subtitle, FormulaBox, FormulaText, ContinueButton
} from '../../../../../Styles/MajorStyles';

// App Component
const PhraseDeclarative = () => {
    const [section, setSection] = useState(0);
    const [showSections, setShowSections] = useState([true, true, true, true, true, true, true]);

    const toggleSection = (index) => {
        const updatedShowSections = [...showSections];
        updatedShowSections[index] = !updatedShowSections[index];
        setShowSections(updatedShowSections);
    };

    const [showP2A21, setShowP2A21] = useState(false);




    return (
        <Container>
            <Title> La phrase Déclarative </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                La phrase Déclarative :elle sert à énoncer quelque chose, un fait, une opinion.
                                Elle sert aussi à décrire, à raconter. Elle se termine par un point.
                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/declarative.PNG"} alt="declarative" />
                    </ImageContainer>
                </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/stylo.jpg"} alt="stylo.jpg" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 1 :</h4>
                                <p> J’ai perdu mon stylo.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/soleil.png"} alt="soleil.png" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 2:</h4>
                                <p> Le soleil se lève à l'est. </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/fini.jpg"} alt="fini" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 3 :</h4>
                                <p>Elle a fini son travail.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/sale.jpg"} alt="sale" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 4:</h4>
                                <p> Cette homme est sale .
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>


                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/PHDeclarative/horrible.jpg"} alt="horrible" />
                        </ImageContainer>
                        <Card>

                            <BodyText>

                                <h4>Exemple 5 :</h4>
                                <p> Ce film est horrible.
                                </p>
                            </BodyText>
                        </Card>
                    </SectionContainer>
                </>
            )}
        </Container>
    );
}



export default PhraseDeclarative;