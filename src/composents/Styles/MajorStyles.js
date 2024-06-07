// MajorStyles.js
import styled from 'styled-components';
import { Box } from '@mui/material';



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

export const ImageContainer = styled.div`
    flex: 0 0 auto;
    width: 150px;
    margin-right: 20px;

    img {
        width: 100%;
        height: auto;
    }
`;

export const Card = styled.div`
  background-color: white;
  width : 97%;
  padding: 5px;
  border-radius: 60px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #E1F5FE;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }
  
`;

export const SmallCard = styled.div`
  all: unset;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fafafa;
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

  export const SmallCard2 = styled.div`
  all: unset;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 100px;
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


  export const SmallCard3 = styled.div`
  all: unset;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 170px;
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

  export const SmallCard4 = styled.div`
  all: unset;
  border-radius: 8px;
  border: 1px solid #eee;
  background-color: #fafafa;
  height: 190px;
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


export const BodyText = styled.p`
padding: 10px 20px;
align-items: center;
font-size: 1em;  // Increased font size for emphasis
font-family: 'Comic Sans MS', sans-serif;
`;

export const Title = styled.h1`
    font-family: "Roboto", sans-serif;
    font-size: 28px;
    font-weight: bold;
    color: #222;

    @media (max-width: 480px) {
        font-size: 24px;
    }
`;

export const SkipIcon = styled.span`
    position: absolute;
    right: 10px;
    top: 240px; 
    cursor: pointer;
    font-size: 24px;
    color: #888;
    &:hover {
        color: #666;
    }
`;

export const Subtitle = styled.h2`
    font-family: "Roboto", sans-serif;
    font-size: 20px;
    color: #444;

    @media (max-width: 480px) {
        font-size: 18px;
    }
`;

export const FormulaBox = styled.div`
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    margin-top: 20px;
    background-color: white;
`;

export const FormulaText = styled.p`
padding: 10px 20px;
align-items: center;
font-size: 1.2em;  // Increased font size for emphasis
font-family: 'Comic Sans MS', sans-serif;
`;

export const FormulaText1 = styled.p`
padding: 10px 20px;
align-items: center;
font-size: 0.9em;  // Increased font size for emphasis
font-family: 'Comic Sans MS', sans-serif;
`;

export const ContinueButton = styled.button`
  background-color: #0056b3; /* Green background */
  border: 1px solid #ddd;
  margin : 10px;
  border-radius: 20px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: calc(100% - 10px); /* Adjusts the width to account for the margins */
  margin-bottom: 20px; /* This adds a margin below each full-width card */
  color: white;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;

  &:hover {
    background-color: #0056b3; /* Darker green shade for hover effect */
  }
`;


export const Separator = styled.div`  
    height: 1px;
    background-color: #ddd; /* couleur de votre choix pour la barre de séparation */
    margin: 20px 0; /* marges pour espacer la barre des sections */
`;

export const StyledText = styled.p`
  padding: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
  font-family: "Comic Sans MS", sans-serif;
  &:hover {
    transform: scale(1.05);
  }`;

  export const Canvas = styled.div`
  height: 50vh;
  width : 40vh;
  background-color: ${(props) => (props.isActive ? '#FFC107' : '#E1F5FE')}; // Jaune pour actif, bleu clair sinon
  border: 1px solid #B0BEC5; // Ajout d'une bordure gris bleuâtre
  position: relative;
  cursor: pointer; // Changement de curseur pour indiquer une zone interactive

  &:hover {
    box-shadow: 0px 0px 20px rgba(255, 255, 255, 0.5); // Lumière brillante lors du survol
  }

  @media (max-width: 768px) {
    height: 60vh;
  }
`;

export const TriangleContainer = styled.div`
  display: block;
  align-items: center;
  justify-content: center;
  width: 120%;  // Increasing the width
  height: 150%; // Setting a new height value
  margin-top: 100px;
  margin-left: 0px;
`;




export const StyledText1 = styled.p`
    padding: 0px 20px;
    display: flex;
    justify-content: center;
    font-size: 1em;
    font-family: 'Comic Sans MS', sans-serif;
    &:hover {
        transform: scale(1.05);
    }
`;
export const VerifieButton = styled.button`
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
export const ResetButton = styled.button`
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

export const BandeBox = styled.div`
  width: 300px;
  height: 300px;
  border: 2px solid #4caf50;
  display: flex;
  overflow: hidden;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
  background-color: white;
`;

export const circleStyle = {
  position: 'absolute',
  top: 0,
  left: '50%',
  transform: 'translateX(-50%)',
  width: '16px',
  height: '16px',
  backgroundColor: '#2193b0',
  borderRadius: '50%',
};

export const FormulaTextF = styled.p`
padding: 1px 3px;
align-items: center;
font-size: 1.5em; // Taille de police augmentée pour l'accentuation
font-family: 'Comic Sans MS', sans-serif;
`;

export const ProgressBarContainer = styled.div`
background-color: #f0f0f0; /* Couleur de fond de la barre de progression */
border-radius: 10px; /* Bord arrondi */
position: relative;
height: 20px; /* Hauteur de la barre de progression */
width: 100%; /* Largeur de la barre de progression */
max-width: 400px; /* Largeur maximale */
margin: 10px 0;
`;

export const ProgressBarFiller = styled.div`
background-color: #4caf50; /* Couleur de remplissage */
height: 100%;
border-radius: 8px; /* Bord arrondi pour le remplissage */
width: ${props => props.width}%; /* Largeur du remplissage basée sur la progression */
transition: width 0.5s ease-in-out; /* Transition douce pour l'animation de la barre */
`;








export const Container_Progress_Bar = styled.div`

margin:5px,


    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const StyledBox2 = styled.div`
padding-left: 2px;
padding-right:2px;
padding-top: 150px;
padding-bottom:2px;
    width: 100%;
    max-width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const SectionContainer2 = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const FormulaBox2 = styled.div`
    width: 80%;
    max-width: 600px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
`;



export const textStyle2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  color: #444;

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;




export const SwipeContainer2 = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scroll-snap-destination: 100%;
  width: 100%;
`;

export const Swipe_Section = styled.div`
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start;
  padding: 20px;
`;

export const imageStyle = {
  width: '90%', // L'image prendra 80% de la largeur de son parent
  height: 'auto', // La hauteur change automatiquement pour garder les proportions
  maxWidth: '90%', // Assure que l'image ne dépasse pas la largeur de la carte
  display: 'block', // Empêche l'image de prendre plus de place que nécessaire
  marginLeft: 'auto', // Marges automatiques à gauche pour centrer l'image
  marginRight: 'auto' // Marges automatiques à droite pour centrer l'image
};


export const StyledBox = styled(Box)({

});

export const NumberDisplay = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'FF7F50',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));


export const middle_Green_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: '#18d382f9',
  border: '3px dashed black',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const Green_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'green',
  border: '3px dashed black',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const Vert_Fancee_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'rgb(0, 255, 145)',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const Orange_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'orange',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

export const Beige_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'beige',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
export const NumberDisplay2 = styled(Box)(({ isActive }) => ({
    boxSizing: 'border-box',
    width: '100%',
    height: 'auto',
    margin: '20px auto',
    padding: '20px',
    backgroundColor: 'rgb(248, 248, 227)',
    border: '3px dashed #B3E5FC',
    transition: 'background-color 0.4s, transform 0.3s',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '1em',
    fontFamily: "'Comic Sans MS', sans-serif",
    '&:hover': {
        transform: 'scale(1.05)',
    },
}));
export const Pink_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'pink',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));
export const Bleu_ciel_NumberDisplay3 = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  // margin: '20px auto',
  padding: '5px',
  backgroundColor: '#B3E5FC',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));
export const Bleu_ciel_Bleu_ciel_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  margin: '20px auto',
  padding: '20px',
  backgroundColor: 'FF7F50',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));
export const Violet_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  // margin: '20px auto',
  padding: '5px',
  backgroundColor: ' rgb(205, 205, 241)',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));

export const Red_NumberDisplay = styled(Box)(({ isActive }) => ({
  boxSizing: 'border-box',
  width: '100%',
  height: 'auto',
  // margin: '20px auto',
  padding: '5px',
  backgroundColor: '#af5543',
  border: '3px dashed #B3E5FC',
  transition: 'background-color 0.4s, transform 0.3s',
  cursor: 'pointer',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontSize: '1em',
  fontFamily: "'Comic Sans MS', sans-serif",
  '&:hover': {
      transform: 'scale(1.05)',
  },
}));


export const imageStyle_Mot_Clé = {
  width: '40%', 
  height: 'auto', 
  maxWidth: '90%',
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto' 
};

export const imageStyle_Important = {
  width: '90%', 
  height: 'auto', 
  maxWidth: '90%',
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto' 
};

export const imageStyle_grand = {
  width: '100%', 
  height: '100%', 
  maxWidth: '90%',
  display: 'block', 
  marginLeft: 'auto', 
  marginRight: 'auto' 
};

