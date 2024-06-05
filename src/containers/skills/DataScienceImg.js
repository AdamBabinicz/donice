import React, { Component } from "react";
import img from "../../assests/images/5.webp";

export default class DataScienceImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}
