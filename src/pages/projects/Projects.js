import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Button from "../../components/button/Button";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-awesome-reveal";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import PhotoAlbum from "../../components/photo/PhotoAlbum";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showMoreProjects: false,
    };
    // Utwórz referencję do TransitionGroup
    this.transitionGroupRef = React.createRef();
  }

  toggleShowMoreProjects = () => {
    this.setState((prevState) => ({
      showMoreProjects: !prevState.showMoreProjects,
    }));
  };

  render() {
    const { showMoreProjects } = this.state;
    const theme = this.props.theme;

    const projectsToShow = showMoreProjects
      ? ProjectsData.data
      : ProjectsData.data.slice(0, 3);

    return (
      <div className="projects-main">
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                <ProjectsImg theme={theme} />
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {/* Użyj TransitionGroup z użyciem referencji */}
          <TransitionGroup component={null} ref={this.transitionGroupRef}>
            {projectsToShow.map((project, index) => (
              <CSSTransition
                key={index}
                timeout={500}
                classNames="project"
                nodeRef={this.transitionGroupRef}
              >
                <div className="project-wrapper">
                  <PhotoAlbum photos={[project]} theme={theme} />
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
        <Button
          text={showMoreProjects ? "Mniej projektów" : "Więcej projektów"}
          className="project-button"
          onClick={this.toggleShowMoreProjects}
          theme={theme}
        />
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
