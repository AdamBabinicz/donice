import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  height: 630px;

  @media (max-width: 768px) {
    height: max-content;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: 400px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const Title = styled.h3`
  margin-top: 10px;
  text-align: center;
`;

const Description = styled.p`
  color: #666;
`;

const PhotoCard = ({ photo, theme }) => {
  return (
    <CardContainer>
      <Image src={photo.image} alt={photo.name} />
      <Title style={{ color: theme.text }}>{photo.name}</Title>
      <Description style={{ color: theme.secondaryText }}>
        {photo.description}
      </Description>
    </CardContainer>
  );
};

export default PhotoCard;
