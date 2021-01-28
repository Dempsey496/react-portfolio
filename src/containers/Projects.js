import React, { Component } from 'react';
import projects from '../projects.json';


class Projects extends Component {
    componentDidMount() {
        console.log(projects[0].image)
    };
    render() {
        return (
            <h1>This is my ProjectsPage</h1>
        );
    }
}

export default Projects;