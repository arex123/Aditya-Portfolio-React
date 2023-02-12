import React from "react";
import "../styles/Project.css"
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
const Project = () =>{
    return (
    <div className="projects">
        <h1>My Projects</h1>
        <div className="projectList">
            {
                ProjectList.map((project)=>{
                    return <ProjectItem name={project.name} image={project.image}/>
                })
            }
            

        </div>
                
    </div>
    )
}

export default Project;