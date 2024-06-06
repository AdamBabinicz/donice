import React from "react";
import { fontawesomeicon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import styled, { keyframes } from "styled-components";

// Keyframes for animations
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(-50px);
  }
  to {
    transform: translateY(0);
  }
`;

// Styled-components
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  animation: ${fadeIn} 0.5s forwards;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 10px;
  position: relative;
  width: 90%;
  max-width: 600px;
  max-height: 80%;
  min-height: 300px;
  overflow-y: auto;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  transform: translateY(-50px);
  animation: ${slideDown} 0.5s forwards;
  z-index: 1001;

  @media (min-width: 768px) {
    width: 80%;
    max-width: 800px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};

  &:focus {
    outline: none;
  }
`;

const Title = styled.h2`
  margin: 0;
  margin-bottom: 20px;
  text-align: center;
`;

const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 20px;
`;

const Text = styled.p`
  margin: 0;
`;

const Modal = ({ show, onClose, title, image, text, theme }) => {
  if (!show) {
    return null;
  }

  return (
    <ModalOverlay>
      <ModalContent theme={theme}>
        <CloseButton theme={theme} onClick={onClose}>
          <fontawesomeicon icon={faTimes} />
        </CloseButton>
        <Title>{title}</Title>
        {image && <Image src={image} alt="Modal" />}
        <Text>{text}</Text>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
