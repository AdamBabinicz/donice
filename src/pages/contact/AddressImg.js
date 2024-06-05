import React, { Component } from "react";
import styled from "styled-components";
import logoLight from "../../assests/images/logo.png";
import logoDark from "../../assests/images/logo1.png";

const Img = styled.img`
  width: 300px; // przykładowa szerokość
`;
export default class AddressImg extends Component {
  render() {
    const { theme } = this.props;
    const isDarkTheme = theme.body === "#000000";
    const imgSrc = isDarkTheme ? logoDark : logoLight;

    // const theme = this.props.theme;
    return <Img src={imgSrc} alt="..." />;
  }
}
