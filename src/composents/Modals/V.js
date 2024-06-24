// App.js
import React, { useState } from 'react';
import ModalComponent from './ModalComponent';
import './Modal.css';


const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageSrc, setImageSrc] = useState(null);
  const [message, setMessage] = useState('');

  const handleResponse = (inputMessage) => {
    const lowerCaseMessage = inputMessage.toLowerCase();
    if (lowerCaseMessage.includes('oui')) {
      setImageSrc('/images/Modals/Congrats.gif');
      setMessage('Bravo ! C\'est la bonne réponse.');
    } else {
        setImageSrc('/images/Modals/triste.gif');
      setMessage('Désolé, ce n\'est pas la bonne réponse.');
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setMessage('')
  };

  return (
    <div>
      <h1>Questionnaire</h1>
      <button onClick={() => handleResponse('oui')}>Réponse Oui</button>
      <button onClick={() => handleResponse('non')}>Réponse Non</button>

      <ModalComponent
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        imageSrc={imageSrc}
        message={message}
      />
    </div>
  );
};

export default App;
