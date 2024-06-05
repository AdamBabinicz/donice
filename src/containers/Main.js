import React, { Component } from "react";
import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Navigation from "../components/navigation/Navigation";
import { FaAdjust } from "react-icons/fa";
import styled from "styled-components";

const ThemeToggle = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 1000;
  cursor: pointer;
`;

export default class Main extends Component {
  render() {
    const { theme, toggleTheme } = this.props;

    return (
      <div>
        <HashRouter basename="/">
          <ThemeToggle>
            <FaAdjust onClick={toggleTheme} size="1.5rem" />
          </ThemeToggle>
          <Navigation theme={theme} />
          <Routes>
            {settings.isSplash ? (
              <>
                <Route path="/" element={<Splash theme={theme} />} />
                <Route path="/home" element={<Home theme={theme} />} />
                <Route
                  path="/experience"
                  element={<Experience theme={theme} />}
                />
                <Route
                  path="/education"
                  element={<Education theme={theme} />}
                />
                <Route
                  path="/opensource"
                  element={<Opensource theme={theme} />}
                />
                <Route path="/contact" element={<Contact theme={theme} />} />
                <Route path="/splash" element={<Splash theme={theme} />} />
                <Route path="/projects" element={<Projects theme={theme} />} />
              </>
            ) : (
              <>
                <Route path="/" element={<Home theme={theme} />} />
                <Route path="/home" element={<Home theme={theme} />} />
                <Route
                  path="/experience"
                  element={<Experience theme={theme} />}
                />
                <Route
                  path="/education"
                  element={<Education theme={theme} />}
                />
                <Route
                  path="/opensource"
                  element={<Opensource theme={theme} />}
                />
                <Route path="/contact" element={<Contact theme={theme} />} />
                <Route path="/projects" element={<Projects theme={theme} />} />
              </>
            )}
          </Routes>
        </HashRouter>
      </div>
    );
  }
}
