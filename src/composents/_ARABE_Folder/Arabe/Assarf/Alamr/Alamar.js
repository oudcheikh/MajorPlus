import React, { useState } from 'react';
import C1A1 from './C1A1';

// import pray from '../imges/daaa.jpg';
// import ordre from '../imges/ordre.PNG';
// import compte from '../imges/compte.PNG';
// import dire from '../imges/dire.PNG';
// import aime from '../imges/aime.PNG';
// import marche from '../imges/marche.png';
// import fidele from '../imges/fidele.PNG';
// import resist from '../imges/resist.PNG';
// import ss from '../imges/ss.PNG';
// import v from '../imges/joue1.PNG';
// import c from '../imges/elleecrit.PNG';
// import e from '../imges/entreA.PNG';
// import ll from '../imges/prendre.PNG';
// import admiise from '../imges/admiseee.PNG';
// import jet from '../imges/jette.PNG';
// import pleuure from '../imges/pleuure.PNG';
// import lireimg from '../imges/lire.PNG';
// import cooule from '../imges/secooule.PNG';
// import open from '../imges/open.PNG';
// import rent from '../imges/rentre.PNG';
// import maladeimg from '../imges/malade.PNG';
// import arriveImg from '../imges/arrive.PNG';


import '../../../../Styles/MajorStyles.css'
// Import des styles
import {
    FormulaTextF, Container, SectionContainer, ImageContainer, FormulaText, Card, FormulaBox, SmallCard2, BodyText, Subtitle, ContinueButton, SmallCard
} from '../../../../Styles/MajorStyles'; // Assurez-vous que le chemin est correct
import verbsData from './data.json'
import './style.css'



const C1 = () => {

    const malade = verbsData.find(item => item.verb === "مَرِضَ");
    const rentre = verbsData.find(item => item.verb === "عَادَ");
    const pleure = verbsData.find(item => item.verb === "بَكَى");
    const ouvre = verbsData.find(item => item.verb === "فَتَحَ");
    const secoule = verbsData.find(item => item.verb === "سَكَبَ");
    const lire = verbsData.find(item => item.verb === "قرأَ");
    const prendre = verbsData.find(item => item.verb === "لَبِسَ");
    const jette = verbsData.find(item => item.verb === "رَمَى");
    const admis = verbsData.find(item => item.verb === "نَجَحَ");
    const entre = verbsData.find(item => item.verb === "دخل");
    const sallam = verbsData.find(item => item.verb === "سَلّمَ");
    const mala = verbsData.find(item => item.verb === "مال");
    const Aadda = verbsData.find(item => item.verb === "عدَّ");
    const kaala = verbsData.find(item => item.verb === "قال");
    const maacha = verbsData.find(item => item.verb === "مشى");
    const waaffa = verbsData.find(item => item.verb === "وفى");
    const daa = verbsData.find(item => item.verb === "دعا");
    const resistance = verbsData.find(item => item.verb === "قاوم");
    const joue = verbsData.find(item => item.verb === "لعب");
    const ecrit = verbsData.find(item => item.verb === "كتب");
    const arrive = verbsData.find(item => item.verb === "دَنَا");




    const [section, setSection] = useState(0);

    return (
        <Container>

            <div className='VV'>
            </div>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/ordre.PNG"} alt="ordre" />
                </ImageContainer>
                <Card>
                    <BodyText>

                        <p className='arabic-text'> <strong style={{ color: 'blue' }} >الأمر أو  فعل الأمر (بالصيغة)في علم النحو </strong>:   هو أحد أقسام الفعل الثلاثة. والأمر: طلب الفعل على وجه التكليف والإلزام بشيء لم يكن حاصلاَ قبل الطلب، ويبنى فعل الأمر على ما يجزم به مضارعه.
                        </p>

                    </BodyText>
                </Card>
            </SectionContainer>




           
            
            {section >= 1 && (
                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer style={{ width: '100px' }}>
                            <img src={"images/arabe/assarfImages/compte.PNG"} alt="compte" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل عدَّ في الأمر  


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
            {section >= 3 && (
                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/arabe/assarfImages/aime.PNG"} alt="aime" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل مال في  الأمر 
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


            {section >= 4 && (

                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/arabe/assarfImages/dire.PNG"} alt="dire" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل قال في  الأمر 
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


            {section >= 5 && (
                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/arabe/assarfImages/marche.PNG"} alt="Enseignant" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل مشى في  الأمر 

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

            {section >= 6 && (
                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/arabe/assarfImages/fidele.PNG"} alt="fidele" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل وفّى في  الأمر 
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

            {section >= 7 && (
                <div>
                    <br></br>
                    <SectionContainer>
                        <ImageContainer>
                            <img src={"images/arabe/assarfImages/daaa.jpg"} alt="pray" />
                        </ImageContainer>
                        <Card>
                            <BodyText>
                                اتعلم كيف اصرف فعل دعا في  الأمر 
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

{section >= 8 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/resist.PNG"} alt="resistance" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل قاوم في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={resistance} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

    {section >= 9 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/joue1.PNG"} alt="joue" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل لعِبَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={joue} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

    {section >= 10 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/elleecrit.PNG"} alt="Ecrit" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل كَتَبَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={ecrit} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

{section >= 11 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/ss.PNG"} alt="salut" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل سَلّمَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={sallam} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

    {section >= 12 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/entreA.PNG"} alt="entre" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل دخل في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={entre} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

    {section >= 13 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/prendre.PNG"} alt="prendre" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل لَبِسَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={prendre} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}


    {section >= 14 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/admiseee.PNG"} alt="admise" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل نَجَحَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={admis} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}


    {section >= 15 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/jette.PNG"} alt="jette" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل رَمَى في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={jette} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}
    {section >= 16 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/lire.PNG"} alt="lire" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل قرأَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={lire} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

{section >= 17 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"/images/arabe/assarfImages/secooule.PNG"} alt="se coule" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل سَكَبَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={secoule} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}


    {section >= 18 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/open.PNG"} alt="Ecrit" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل فَتَحَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={ouvre} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}


    {section >= 19 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/pleuure.PNG"} alt="Ecrit" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل بَكَى في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={pleure} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}


    {section >= 20 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/rentre.PNG"} alt="Ecrit" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل عَادَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={rentre} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}



    {section >= 21 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"images/arabe/assarfImages/malade.PNG"} alt="malade" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل مَرِضَ في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={malade} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

{section >= 22 && (
        <div>
            <br></br>
            <SectionContainer>
                <ImageContainer>
                    <img src={"/images/arabe/assarfImages/arrive.PNG"} alt="arrive" />
                </ImageContainer>
                <Card>
                    <BodyText>
                        اتعلم كيف اصرف فعل دَنَا في الأمر 

                    </BodyText>
                </Card>
            </SectionContainer>
            <br></br>
            <br></br>

            <div style={{ marginBottom: '50px', width: '100%', height: '100%' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <C1A1 verbData={arrive} />
                </div>
                <div className="separator"></div> {/* Ceci peut aussi être remplacé par un composant stylisé si nécessaire */}
            </div>
        </div>
    )}

            {section < 22 && (
                <ContinueButton onClick={() => setSection(section + 1)}>Continuer</ContinueButton>
            )}
        </Container>
    );
}

export default C1;
