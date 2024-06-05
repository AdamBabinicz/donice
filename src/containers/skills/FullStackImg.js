import React, { Component } from "react";
import img from "../../assests/images/3.jpg";

export default class FullStackImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}
