
import React, { useRef, useState, useEffect } from "react";

import { useNavigate } from 'react-router-dom';

import '../../Periode4/progressBar/SegmentedProgressBar.css'
import SegmentedProgressBar from '../../Periode4/progressBar/ProgressBar';
import styled from 'styled-components';
import { Box } from '@mui/material';

import P3A5_2 from "./P3A5-2";
import Bend from "./Bend";
import "./bend.css";
import useSound from "use-sound";
import correctSound from "../../../sounds/correct.mp3";
import incorrectSound from "../../../sounds/incorrect.mp3";
import QCMC14 from './QCMC14';
import { ContinueButton, Maron_NumberDisplay } from '../../../Styles/MajorStyles';

import {
  SectionContainer, ImageContainer, BodyText, Container, Card,StyledBox,
  Title, Subtitle, FormulaBox, FormulaText, Container_Progress_Bar, SectionContainer2, FormulaBox2,
  SwipeContainer2, Swipe_Section,
} from '../../../Styles/MajorStyles';
import Acceuil from "../../../_ReusableComponents/Accueil";
const BandeBox = styled.div`
  width: 150px;
  height: 20px;
  border: 4px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: #ffeb3b;
`;

const FractionBande = styled.div`
  flex: 1;
  box-sizing: border-box;
  background-color: ${(props) => (props.isActive ? "#FFC107" : "#E1F5FE")};
  border: ${(props) =>
    props.isActive ? "2px dashed #FF5722" : "2px dashed #B3E5FC"};
  transition: background-color 0.4s, transform 0.3s;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  font-family: "Comic Sans MS", sans-serif;
  margin-right: 5px;

  &:hover {
    transform: scale(1.05);
  }

  &:last-child {
    margin-right: 0;
  }
`;

const SymbContainers = styled.div`
  margin-right: 10px;
`;

const DescContainers = styled.div`
  margin-right: 30px;
  margin-top: 15px;
`;

const VerifieButton = styled.button`
  border-radius: 5px;
  background-color: #45a05c;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const ResetButton = styled.button`
  border-radius: 5px;
  background-color: #007bff;
  margin: 15px 0;
  color: white;
  border: none;
  font-family: "Roboto", sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const P3A5 = () => {
  const [play] = useSound(correctSound);
  const [play1] = useSound(incorrectSound);
  const [opverify, setOpverify] = useState(false);
  const [showX, setShowX] = useState(false);
  const [selectedSymbol, setSelectedSymbol] = useState(">");
  const [questions, setQuestions] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [section, setSection] = useState(0);
  const [showSections, setShowSections] = useState([true,true,true,true,true]);

  const [scrollPosition, setScrollPosition] = useState(0);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);


  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [sectionsViewed, setSectionsViewed] = useState(0);
  const totalSections = 5; // Nombre total de sections

  const toggleSection = (index) => {
    const updatedShowSections = [...showSections];
    updatedShowSections[index] = !updatedShowSections[index];
    setShowSections(updatedShowSections);
  };

  const generateQuestion = () => {
    const newQuestions = [generatenewComparaison()];
    setQuestions(newQuestions);
    setShowCongratulations(false);

  };
  const generatenewComparaison = () => {
    const first = Math.floor(Math.random() * 12) + 1;
    const last = Math.floor(Math.random() * 12) + 1;
    return { first, last };
  };
  const VerifieSumbol = () => {
    const first = questions.reduce((sum, q) => sum + Math.floor(q.first), 0);
    const last = questions.reduce((sum, q) => sum + q.last, 0);
    if (selectedSymbol === ">" && first >= last) {
      setShowCongratulations(true);
      setOpverify(true);
      play();
    } else if (selectedSymbol === "<" && last > first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else if (selectedSymbol === "=" && last === first) {
      setShowCongratulations(true);
      setOpverify(true);
      play()
    } else {
      setShowCongratulations(false);
      setOpverify(false);
      play1();
      setShowX(true); // Show the "X" element
      setTimeout(() => {
        setShowX(false); // Hide the "X" element after 2 seconds
      }, 2000);
    }
  };
  const handleSymbolClick = (symbol) => {
    setSelectedSymbol(symbol);
  };

  useEffect(() => {
    generateQuestion(); // Call the function when the component mounts
  }, []);
  const [showP2A21, setShowP2A21] = useState(false);

  const reset = () => {
    if (opverify) {
      generateQuestion();
      setShowCongratulations(false);
      setOpverify(false); // Reset the verification status

    }
  };

  const verify = () => {
    VerifieSumbol();
  };

  const handleScroll = (event) => {
    const { scrollLeft } = event.target;
    setScrollPosition(scrollLeft);

    // Récupérer les positions de début de chaque section
    const sectionPositions = [
      0, // Position de début de la première section
      section1Ref.current.offsetWidth, // Position de début de la deuxième section
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth, // Position de début de la troisième section
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth, // Position de début de la troisième section
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth, //4
      section1Ref.current.offsetWidth + section2Ref.current.offsetWidth + section3Ref.current.offsetWidth + section4Ref.current.offsetWidth + section5Ref.current.offsetWidth, //5

    ];

    // Trouver la section actuelle en fonction de la position de défilement
    let currentSection = 0;
    for (let i = 0; i < sectionPositions.length; i++) {
      if (scrollLeft >= sectionPositions[i]) {
        currentSection = i;
      }
    }

    setSectionsViewed(currentSection + 1);
    setProgress(currentSection + 1)
  };

  return (


    <Container>
      <SegmentedProgressBar totalSegments={totalSections} currentSegment={progress} />
      <StyledBox>
        <SwipeContainer2 onScroll={handleScroll}>

          <Swipe_Section ref={section1Ref}>
            <SectionContainer2>
              <FormulaBox2>
              
<Acceuil titre={"Comparaison des fractions"} imgSrc={"/images/Math/periode2/comparaison.png"} altText={"la comparaison des fractions. "}> </Acceuil>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section2Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Concept clés </ContinueButton>

                <img src={"/images/Math/C/C11/divi.png"} alt="Teacher" />
                <FormulaText>Pour une comparaison équitable on doit faire attention a ces points:</FormulaText>
                < Maron_NumberDisplay>
                  <li>Si les dénominateurs sont égeaux , il suffit de comparer les numérateurs</li>
                </Maron_NumberDisplay>
                <br></br>
                < Maron_NumberDisplay>
                  <li>Si les dénominateurs ne sont pas égeaux , il faut trouver des fractions équivalentes avec le même dénominateur pour une comparaison précise.</li>
                </Maron_NumberDisplay>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section3Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton>Exemple </ContinueButton>
                <FormulaText><strong>Pour bien comprendre on vous propose cette structure </strong></FormulaText>
                <div>
                  <Bend />
                </div>
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section4Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Exercice </ContinueButton>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <ImageContainer>
                      <img src={"images/Images/inestine.png"} alt="Teacher" style={{ marginTop: "25px" }} />
                    </ImageContainer>
                  </div>
                  {!showP2A21 && (
                    <div>
                      <P3A5_2 />
                    </div>
                  )}

                </div>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section5Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> Exercice </ContinueButton>
                <SectionContainer>
                  <SymbContainers>
                    <FormulaBox
                      className="symbols"
                      onClick={() => handleSymbolClick(">")}
                    >
                      &#62;
                    </FormulaBox>
                    <FormulaBox
                      className="symbols"
                      onClick={() => handleSymbolClick("<")}
                    >
                      &#60;
                    </FormulaBox>
                    <FormulaBox
                      className="symbols"
                      onClick={() => handleSymbolClick("=")}
                    >
                      &#61;
                    </FormulaBox>
                  </SymbContainers>

                  <DescContainers>
                    <h3>sup</h3>
                    <h3 style={{ marginTop: "50px" }}>Inf</h3>
                    <h3 style={{ marginTop: "45px" }}>Egale</h3>
                  </DescContainers>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FormulaBox className="fractions">
                        <div class="frac">
                          {questions.map((q, index) => (
                            <span>{q.first}</span>
                          ))}
                          <span class="symbol">/</span>
                          <span class="bottom">12</span>
                        </div>
                      </FormulaBox>

                      <FormulaBox className="mainSymb">{selectedSymbol}</FormulaBox>

                      <FormulaBox className="fractions">
                        <div class="frac1">
                          {questions.map((q, index) => (
                            <span>{q.last}</span>
                          ))}
                          <span class="symbol">/</span>
                          <span class="bottom">12</span>
                        </div>
                      </FormulaBox>
                    </div>
                    <div>
                      <ResetButton variant="contained" type="submit" onClick={verify} style={{ marginRight: "25px" }} >
                        Verifier
                      </ResetButton>
                      {showX && <span>✖️</span>}
                      {showCongratulations && <span>✅</span>}
                      <VerifieButton style={{ marginLeft: "25px" }} onClick={reset}>
                        Reset
                      </VerifieButton>
                    </div>
                    {showCongratulations && (
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <div class="frac1">
                          {questions.map((q, index) => (
                            <span>{q.first}</span>
                          ))}
                          <span class="symbol">/</span>
                          <span class="bottom">12</span>

                          {questions.map((q, index) => (
                            <span>{q.last}</span>
                          ))}
                          <span class="symbol">/</span>
                          <span class="bottom">12</span>
                        </div>
                        {questions.map((q, index) => (
                          <div style={{ marginLeft: "2px" }}>
                            <BandeBox style={{ marginBottom: "2px" }}>

                              {[...Array(12)].map((_, index) => (
                                <FractionBande
                                  key={index}
                                  isActive={index < q.first}
                                  onClick={() => { }}>

                                </FractionBande>
                              ))}
                            </BandeBox>
                            <BandeBox>
                              {[...Array(12)].map((_, index) => (
                                <FractionBande
                                  key={index}
                                  isActive={index < q.last}
                                  onClick={() => { }}>

                                </FractionBande>
                              ))}
                            </BandeBox>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </SectionContainer>

              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>

          <Swipe_Section ref={section6Ref}>
            <SectionContainer2>
              <FormulaBox2>
                <ContinueButton> QCM </ContinueButton>
                <QCMC14 />
              </FormulaBox2>
            </SectionContainer2>
          </Swipe_Section>
        </SwipeContainer2>
      </StyledBox>

    </Container>
  );
};

export default P3A5;
