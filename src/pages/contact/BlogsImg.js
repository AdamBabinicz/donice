import React, { Component } from "react";
import img from "../../assests/images/6.jpg";

export default class BlogsImg extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}
