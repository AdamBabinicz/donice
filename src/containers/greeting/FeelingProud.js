import React, { Component } from "react";
import img from "../../assests/images/1.jpg";

class FeelingProud extends Component {
  render() {
    const theme = this.props.theme;
    return <img src={img} alt="..." />;
  }
}

export default FeelingProud;
