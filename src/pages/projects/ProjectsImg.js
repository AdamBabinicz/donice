import React, { Component } from "react";
import styled from "styled-components";
import img from "../../assests/images/1.webp";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    max-width: 50%;
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const TextContainer = styled.div`
  flex: 1;
`;

export default class ProjectsImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <Container>
        <Image src={img} alt="Project" />
        <TextContainer>
          <h2 style={{ color: theme.text }}>Projekty termodonic</h2>
          <p style={{ color: theme.secondaryText }}>
            Nasze termodonice są trwałe i&nbsp;lekkie. Ponadto mają dowolne
            wymiary i&nbsp;kolory.
          </p>
        </TextContainer>
      </Container>
    );
  }
}
