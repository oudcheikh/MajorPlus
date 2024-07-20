import React from 'react';
import './Button.css';  // Importez vos styles CSS
import { FormulaText } from '../Styles/MajorStyles';
import { useNavigate } from 'react-router-dom';


  function Button({ClassTitre, title,status, onClick, className,path ,chapitre}) {
  const navigate=useNavigate()
  
  
    const press=()=>{
      console.log("hyy")
    }
  

    const handleClick = (path) => {

      navigate(path);
      console.log(path)
    };
 
    
    return(
  <div>
    <button 
  className={`${className} ${status}` } 
  onClick={() => status === 'inProgress' && handleClick(path)}
  disabled={status === 'locked'}

  >
 </button>
<span className={ClassTitre}><FormulaText><strong>{chapitre}</strong></FormulaText> </span> 
 
  </div>
  
);
  }
export default Button;
