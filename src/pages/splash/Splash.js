import React, { Component } from "react";
import "./Splash.css";
import { Navigate } from "react-router-dom";
import LoaderLogo from "../../components/Loader/LoaderLogo.js";

function AnimatedSplash(props) {
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundcolor: props.theme.text }}>
        <LoaderLogo id="logo" theme={props.theme} />
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Navigate: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ Navigate: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.Navigate ? (
      <Navigate to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
