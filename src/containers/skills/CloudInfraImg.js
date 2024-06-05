import React, { Component } from "react";
import img from "../../assests/images/4.jpg";

export default class CloudInfraImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}
