import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import BlogsImg from "./BlogsImg";
import AddressImg from "./AddressImg";
import { Fade } from "react-awesome-reveal";
import { FaTimes } from "react-icons/fa";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import Form from "./Form"; // Importowanie komponentu Form

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;
const addressSection = contactPageData.addressSection;
const phoneSection = contactPageData.phoneSection;

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPopUpOpen: false,
      isFormOpen: false, // Dodaj stan dla formularza
    };
  }

  togglePopUp = () => {
    this.setState((prevState) => ({
      isPopUpOpen: !prevState.isPopUpOpen,
    }));
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      isFormOpen: !prevState.isFormOpen, // Przełącz formularz
    }));
  };

  render() {
    const theme = this.props.theme;
    const { isPopUpOpen, isFormOpen } = this.state;

    return (
      <div className="contact-main">
        <div className="basic-contact">
          <Fade bottom duration={1000} distance="40px">
            <div className="contact-heading-div">
              <div className="contact-heading-img-div">
                <img
                  src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                  alt="..."
                />
              </div>
              <div className="contact-heading-text-div">
                <h2
                  className="contact-heading-text"
                  style={{ color: theme.text }}
                >
                  {ContactData["title"]}
                </h2>
                <p
                  className="contact-header-detail-text left margin subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {ContactData["description"]}
                </p>
                <SocialMedia theme={theme} />
                <div className="resume-btn-div">
                  <Button
                    text="Obejrzyj film"
                    onClick={this.togglePopUp}
                    theme={theme}
                  />
                </div>
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="blog-heading-div">
              <div className="blog-heading-text-div">
                <h2 className="blog-heading-text" style={{ color: theme.text }}>
                  {blogSection["title"]}
                </h2>
                <p
                  className="blog-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {blogSection["subtitle"]}
                </p>
                <div className="blogsite-btn-div">
                  <Button
                    text="Wypełnij formularz"
                    onClick={this.toggleForm} // Zaktualizuj kliknięcie przycisku
                    theme={theme}
                  />
                </div>
              </div>
              <div className="blog-heading-img-div">
                <BlogsImg theme={theme} />
              </div>
            </div>
          </Fade>
          <Fade bottom duration={1000} distance="40px">
            <div className="address-heading-div">
              <div className="contact-heading-img-div">
                <AddressImg theme={theme} />
              </div>
              <div className="address-heading-text-div">
                <h2
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {addressSection["title"]}
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {addressSection["subtitle"]}
                </p>
                <h2
                  className="address-heading-text"
                  style={{ color: theme.text }}
                >
                  {phoneSection["title"]}
                </h2>
                <p
                  className="contact-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {phoneSection["subtitle"]}
                </p>
                <div className="address-btn-div">
                  <a
                    href={addressSection.location_map_link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      text="Zobacz mapę w Google"
                      newTab={true}
                      theme={theme}
                    />
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        </div>
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
        {isPopUpOpen && (
          <div className="popup-overlay">
            <div className="popup-content">
              <button className="popup-close" onClick={this.togglePopUp}>
                <FaTimes />
              </button>
              <video controls>
                <source src={greeting.resumeLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        )}
        {isFormOpen && <Form onClose={this.toggleForm} />}{" "}
        {/* Dodaj formularz */}
      </div>
    );
  }
}

export default Contact;
