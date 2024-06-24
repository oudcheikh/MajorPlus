// ModalComponent.js
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Important pour l'accessibilité

const ModalComponent = ({ isOpen, onRequestClose, imageSrc, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Result Modal"
      className="modal"
      overlayClassName="overlay"
    >
      <div className="modal-content">
        <img src={imageSrc} alt="Result" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
        <p>{message}</p>
        <button onClick={onRequestClose}>Fermer</button>
      </div>
    </Modal>
  );
};

export default ModalComponent;
