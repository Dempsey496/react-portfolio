import React, { Component } from "react";
import projects from "../projects.json";

class Projects extends Component {
  componentDidMount() {
    projects.map((project) => {
      return console.log(project);
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            {projects.map((project) => (
              <div className="col-6" style={{padding: "10px"}}>
                <div className="card">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{ width: "300px", height: "200px" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                    <a href={project.link} className="btn btn-primary">
                      Check Out This Project
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default Projects;
