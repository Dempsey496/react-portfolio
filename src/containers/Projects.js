import React, { Component } from "react";
import projects from "../projects.json";
import Footer from "../components/Footer/Footer";

class Projects extends Component {
  componentDidMount() {
    projects.map((project) => {
      return console.log(project.title);
    });
  }
  render() {
    return (
      <>
        <h1>This is my ProjectsPage</h1>
        <Footer />
      </>
    );
  }
}

export default Projects;
