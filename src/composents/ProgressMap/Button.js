import React from 'react';
import './button.css'; 
import { FormulaText } from '../Styles/MajorStyles';
import { useNavigate } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

  function Button({ClassTitre, title,status, onClick, className,path ,chapitre}) {
  const navigate=useNavigate()

    const handleClick = (path) => {

      navigate(path);
      console.log(path)
    };

    const getEmoji = () => {
        switch (status) {
          case 'locked':
            return '🔒'; // Émoji pour verrouillé
          case 'completed':
            return '☑️'; // Émoji pour complété ☑️
          case 'inProgress':
            return ' ◻️'; // Pas d'émoji pour en cours
          default:
            return '';
        }
      };
    
    return(
  <div>


<div ontouchstart="">
  <div  className={`button3  ${className} ${status}`} >
   
    <button  onClick={() => status === 'inProgress' && handleClick(path)}
     disabled={status === 'locked'}
    > {getEmoji()} </button> 
  </div>
</div>
  


<span className={ClassTitre}><FormulaText><strong>{chapitre}</strong></FormulaText> </span> 
 
  </div>
  
);
  }
export default Button;
