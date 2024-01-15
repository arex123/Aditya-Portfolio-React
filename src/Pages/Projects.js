import React from "react";
import "../styles/Project.css"
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Cards from "../Components/Cards";

import P1 from '../assets/card_pic.webp'
import P2 from '../assets/vectors/project2_pic.webp'

const Project = () => {
    return (
        <div className="projects">
            <div className="project_title_cont">
                <p className="project_section_title">Something that I have build</p>
                <p className="project_section_title_des">with love, expertise and pinch of magical ingredients</p>
            </div>
            <div className="projectList">
                {
                    ProjectList.map((project, key) => {
                        return <ProjectItem id={key} name={project.name} image={project.pic} />
                    })
                }


            </div>

        </div>
    )
}

export default Project;