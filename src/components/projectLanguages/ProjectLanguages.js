import React, { Component } from "react";
import styled from "styled-components";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SoftwareSkillsMainDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const DevIconsLanguages = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
`;

const SoftwareSkillInlineLanguages = styled.li`
  margin: 0 10px;
  font-size: 2em;
`;

class ProjectLanguages extends Component {
  render() {
    return (
      <SoftwareSkillsMainDiv>
        <DevIconsLanguages>
          {this.props.logos.map((logo) => {
            return (
              <OverlayTrigger
                key={logo.name}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`}>
                    <strong>{logo.name}</strong>
                  </Tooltip>
                }
              >
                <SoftwareSkillInlineLanguages name={logo.skillName}>
                  <span
                    className="iconify"
                    data-icon={logo.iconifyClass}
                    data-inline="false"
                  ></span>
                </SoftwareSkillInlineLanguages>
              </OverlayTrigger>
            );
          })}
        </DevIconsLanguages>
      </SoftwareSkillsMainDiv>
    );
  }
}

export default ProjectLanguages;
