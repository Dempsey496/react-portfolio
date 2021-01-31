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
              <div className="col-6" style={{ padding: "10px" }}>
                <div className="card text-white bg-secondary">
                  <img
                    src={project.image}
                    className="card-img-top"
                    alt={project.title}
                    style={{
                      margin: "auto",
                      width: "300px",
                      height: "200px",
                      borderRadius: "50%",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
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
