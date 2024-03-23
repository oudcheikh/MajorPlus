import React, { useState } from 'react';

import {
    Container, SectionContainer, ImageContainer, Card, BodyText,
    Title
} from '../../../../../Styles/MajorStyles';

// App Component
const PhraseInterrogative = () => {
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
            <Title> La phrase interrogative </Title>

            {showSections[0] && (
                <><SectionContainer>

                    <Card>

                        <BodyText>
                            <p>
                                LA PHRASE INTERROGATIVE: elle sert à poser des questions. Elle se
                                termine par un point d’interrogation.

                            </p>

                        </BodyText>
                    </Card>
                    <ImageContainer>
                        <img src={"/images/Français/grammaire/types des phrases/phInterrogative/interrogation.png"} alt="Teacher" />
                    </ImageContainer>
                </SectionContainer>



                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/horloge.jpg"} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>
                                    <h4>Exemple 1:</h4>  Combien de temps cela va-t-il prendre ?
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>

                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/freres.jpg"} alt="freres.jpg" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 2:</h4> Combien de frères et sœurs as-tu?
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/plat.avif"} alt="plat.avif" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 3:</h4>  Quel est ton plat préféré?
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/retard.jpg"} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 4:</h4> Pourquoi es-tu en retard?
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/couleur.jpg"} alt="Teacher" />
                        </ImageContainer>
                        <Card>

                            <BodyText>
                                <p>

                                    <h4>Exemple 5:</h4> Quelle est ta couleur préférée?
                                </p>

                            </BodyText>
                        </Card>

                    </SectionContainer>

                    <SectionContainer>
                        
                        <Card>

                            <BodyText>
                                <h3>Retenir: </h3>
                                <p>

                                    IL existe plusieurs façons d’interroger.<br></br>
                                    <strong>1 .Pour poser une question, quand on peut répondre par oui ou non, on
                                    utilise :</strong><br></br>
                                    <strong>-l' intonation ( à l’ oral )  </strong> <br></br>
                                    Ex :vous avez des chemises ?  Tu es élève ? <br></br>
                                   <strong>-La formule "est-ce que " </strong><br></br>  
                                    Ex : Est-ce que vous avez des chemises ?  Est-ce
                                    que tu es élève ?-l’ inversion du sujet  <br></br>        
                                    Ex : Avez-vous des chemises ?   Es-tu élève ?<br></br>
                                    <strong>2. Pour poser une question, quand la réponse est une information, on
                                    utilise les mots interrogatifs</strong><br></br>
                                    (qui, combien, pourquoi, où, comment, qu’est-ce que…)
                                </p>

                            </BodyText>
                        </Card>
                        <ImageContainer>
                            <img src={"/images/Français/grammaire/types des phrases/phInterrogative/retenir.jpg"} alt="retenir" />
                        </ImageContainer>
                    </SectionContainer>
                </>
            )}
        </Container>
    );
}



export default PhraseInterrogative;

