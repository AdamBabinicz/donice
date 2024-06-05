import React, { Component } from "react";
import img from "../../assests/images/2.jpg";

export default class DesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}
