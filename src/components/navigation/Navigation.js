import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { FaBars, FaTimes } from "react-icons/fa";
import logoDark from "../../assests/images/logo.png";
import logoLight from "../../assests/images/logo1.png";

const slideIn = keyframes`
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
`;

const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  margin-bottom: 6rem;
`;

const Navigation = styled.ul`
  display: ${({ isopen }) => (isopen ? "flex" : "none")};
  flex-direction: column;
  align-items: center; /* Wyśrodkuj linki poziomo */
  justify-content: center; /* Wyśrodkuj linki pionowo */
  list-style-type: none;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.body};
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  z-index: 999;
  animation: ${slideIn} 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    position: static;
    width: auto;
    height: auto;
    box-shadow: none;
    animation: none;
    justify-content: flex-end; /* Linki poziome po prawej stronie */
    padding-top: 2rem; /* Zwiększony padding od góry */
  }
`;

const NavigationItem = styled.li`
  margin: 1rem 0;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    padding: 0.3rem 1rem;
    transition: color 0.25s linear;
    border-radius: 0.1rem;

    &:hover {
      color: ${({ theme }) => theme.body};
      background: ${({ theme }) => theme.text};
    }

    &.active {
      color: ${({ theme }) => theme.body};
      background: ${({ theme }) => theme.text};
    }
  }

  @media (min-width: 768px) {
    margin: 0 1rem;
  }
`;

const HamburgerIcon = styled(FaBars)`
  display: ${({ isopen }) => (isopen ? "none" : "block")};
  font-size: 1.5rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const CloseIcon = styled(FaTimes)`
  display: ${({ isopen }) => (isopen ? "block" : "none")};
  font-size: 1.5rem;
  cursor: pointer;
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 1000;

  @media (min-width: 768px) {
    display: none;
  }
`;

const NavigationComponent = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const logo = theme.body === "#000000" ? logoLight : logoDark;

  return (
    <>
      <NavigationContainer>
        <HamburgerIcon isopen={isOpen ? 1 : 0} onClick={toggleMenu} />
        <CloseIcon isopen={isOpen ? 1 : 0} onClick={closeMenu} />
        <Navigation isopen={isOpen ? 1 : 0} theme={theme}>
          <NavLink to="/" tag={Link} className="logo">
            <span className="logo-name" style={{ color: theme.text }}>
              <img src={logo} alt="..." />
            </span>
          </NavLink>
          <NavigationItem>
            <NavLink to="/" exact activeClassName="active" onClick={closeMenu}>
              Start
            </NavLink>
          </NavigationItem>
          {/* <NavigationItem>
            <NavLink
              to="/experience"
              activeClassName="active"
              onClick={closeMenu}
            >
              Experience
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink
              to="/education"
              activeClassName="active"
              onClick={closeMenu}
            >
              Education
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink
              to="/opensource"
              activeClassName="active"
              onClick={closeMenu}
            >
              Open Source
            </NavLink>
          </NavigationItem> */}
          <NavigationItem>
            <NavLink to="/contact" activeClassName="active" onClick={closeMenu}>
              Kontakt
            </NavLink>
          </NavigationItem>
          <NavigationItem>
            <NavLink
              to="/projects"
              activeClassName="active"
              onClick={closeMenu}
            >
              Fotodonice
            </NavLink>
          </NavigationItem>
        </Navigation>
      </NavigationContainer>
    </>
  );
};

export default NavigationComponent;
