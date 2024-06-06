import React from "react";
import "./SocialMedia.css";
import { socialMediaLinks } from "../../portfolio";
import styled from "styled-components";

const IconWrapper = styled.span`
  i {
    background: ${(props) => props.backgroundcolor};
  }
  &:hover i {
    background: ${({ theme }) => theme.text};
    transition: 0.3s ease-in;
    color: ${({ theme }) => theme.body};
  }
`;

export default function socialMedia(props) {
  return (
    <div className="social-media-div">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index} // Używamy indeksu jako klucza
          href={link.link}
          className={`icon-button`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconWrapper {...link} {...props}>
            <i className={`fab ${link.fontawesomeicon}`}></i>
          </IconWrapper>
          {/* <span></span> */}
        </a>
      ))}
    </div>
  );
}
