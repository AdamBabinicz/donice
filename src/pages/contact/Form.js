import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";
import { FaTimes } from "react-icons/fa";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FormContainer = styled.div`
  background: ${({ theme }) => theme.body};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  border-radius: 8px;
  width: 600px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Subtitle = styled.h3`
  margin: 20px 0 10px;
`;

const Input = styled.input`
  width: calc(50% - 10px);
  padding: 10px;
  margin: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: ${({ theme }) => theme.highlight};
  color: ${({ theme }) => theme.text};
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.body};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryText};
  }
`;

const CloseButton = styled(FaTimes)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`;

const Form = ({ onClose, theme }) => {
  const [formData, setFormData] = useState({
    name: "",
    postalCode: "",
    city: "",
    street: "",
    houseNumber: "",
    apartmentNumber: "",
    phone: "",
    email: "",
    length: "",
    width: "",
    height: "",
    color: "",
    quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          alert("Wiadomość wysłana!");
          onClose();
        },
        (error) => {
          alert("Wystąpił błąd. Proszę spróbować ponownie");
        }
      );
  };

  return (
    <Overlay>
      <FormContainer theme={theme}>
        <CloseButton onClick={onClose} theme={theme} />
        <Title>Formularz zamówienia</Title>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Imię i nazwisko"
            onChange={handleChange}
            required
          />

          <Subtitle>Dane adresowe</Subtitle>
          <Input
            type="text"
            name="postalCode"
            placeholder="Kod pocztowy"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="city"
            placeholder="Miasto"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="street"
            placeholder="Nazwa ulicy"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="houseNumber"
            placeholder="Nr domu"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="apartmentNumber"
            placeholder="Nr mieszkania"
            onChange={handleChange}
          />

          <Subtitle>Kontakt</Subtitle>
          <Input
            type="tel"
            name="phone"
            placeholder="Telefon"
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />

          <Subtitle>Wymiary i kolor donicy</Subtitle>
          <Input
            type="text"
            name="length"
            placeholder="Długość w cm"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="width"
            placeholder="Szerokość w cm"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="height"
            placeholder="Wysokość w cm"
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="color"
            placeholder="Kolor"
            onChange={handleChange}
            required
          />
          <Input
            type="number"
            name="quantity"
            placeholder="Ilość"
            onChange={handleChange}
            required
          />

          <Button type="submit" theme={theme}>
            Wyślij
          </Button>
        </form>
      </FormContainer>
    </Overlay>
  );
};

export default Form;
