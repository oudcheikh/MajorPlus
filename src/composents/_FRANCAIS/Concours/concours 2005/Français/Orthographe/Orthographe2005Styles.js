// Orthographe2005Styles.js
import styled from 'styled-components';

export const Container = styled.div`
    padding: 5px;
    max-width: 100%;
    margin: 0 auto;
`;

export const SectionContainer = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    margin-bottom: 20px;
    padding-bottom: 20px;
    border-bottom: 1px solid #e1e1e1;
`;

export const BodyText = styled.p`
padding: 10px 20px;
align-items: center;
font-size: 1em;
font-family: 'Comic Sans MS', sans-serif;
`;

export const FormulaTextF = styled.p`
padding: -10px 0px;
align-items: center;
font-size: 1.1em;
font-family: 'Comic Sans MS', sans-serif;
`;

export const ProgressBarContainer = styled.div`
background-color: #f0f0f0;
border-radius: 10px;
position: relative;
height: 20px;
width: 100%;
max-width: 400px;
margin: 10px 0;
`;

export const ProgressBarFiller = styled.div`
background-color: #4caf50;
height: 100%;
border-radius: 8px;
width: ${props => props.width}%;
transition: width 0.5s ease-in-out;
`;

export const Button = styled.button`
  background-color: #0056b3;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding: 10px;
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  &:hover {
    background-color: #004494;
  }
`;

export const Card = styled.div`
  background-color: white;
  width : 100%;
  padding: 10px;
  border-radius: 60px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
`;

// Ajout ou modification dans Orthographe2005Styles.js

export const PositionedButton = styled(Button)` // Assurez-vous que Button est le bouton stylisé que vous avez déjà défini
  position: fixed; // Reste fixe lors du défilement de la page
  bottom: 20px; // 20 pixels du bas
  right: 20px; // 20 pixels de droite
  margin-top: 0; // Pas de marge supérieure nécessaire pour le positionnement fixe
`;


export const SmallCard = styled.div`
  all: unset;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #8ceb8f;
  height: 60px;
    width: 98%;
  margin: 0 8px 16px;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  line-height: 24px;
  &:hover {
     box-shadow: 0px -5px 15px rgba(0, 0, 0, 0.15), 0px 5px 15px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
  `;
