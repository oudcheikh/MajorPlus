import React from 'react';
import { useNavigate } from 'react-router-dom';

function Exercice1({ index, onComplete }) {
  const navigate = useNavigate();

  const handleFinish = () => {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbb")
    console.log(index)

    if (onComplete) {
      onComplete(index); // Appelez onComplete avec l'index
    }
    navigate('/ProgressMap'); // Naviguez à l'endroit désiré après la complétion
  };

  return (
    <div>
      <h1>Exercice 1</h1>
      {/* Ajoutez le contenu de l'exercice ici */}
      <button onClick={handleFinish}>Terminer</button>
    </div>
  );
}

export default Exercice1;
