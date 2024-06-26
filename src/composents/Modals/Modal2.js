import React from 'react';
import styled from 'styled-components';

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: white;
    border: none;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    cursor: pointer;
`;

const Modal = ({ show, handleClose, imgSrc, altText }) => {
    return (
        show ? (
            <ModalOverlay>
                <ModalContent>
                    <CloseButton onClick={handleClose}>X</CloseButton>
                   
                    <img src={imgSrc} alt="Result" style={{ width: '100%', height: 'auto', borderRadius: '10px' }} />
                    <p>{altText}</p>
                </ModalContent>
            </ModalOverlay>
        ) : null
    );
};

export default Modal;
