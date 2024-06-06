import React from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { contactInfo } from "../../portfolio";

export default function Contact() {
  return (
    <ThemeProvider theme={chosenTheme}>
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h2 className="heading contact-title">{contactInfo.title}</h2>
            <p className="subTitle contact-subtitle">{contactInfo.subtitle}</p>

            <div className="contact-text-div">
              <a className="contact-detail" href={"tel:" + contactInfo.number}>
                {contactInfo.number}
              </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>
          </div>
          <div className="contact-image-div">
            <img alt="..." src={require("../../assests/images/2.png")}></img>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
