import { GitHub } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetail.css"
const ProjectDetail = () =>{
    const {id} = useParams();
    const project = ProjectList[id]

    return (
        <div className="projectDetail">
            <h1>{project.name}</h1>
            <img src={project.image}/>
            <p>
                <b>Skills:</b>{project.skills}
            </p>
            <GitHub/>
        </div>
    )
}
export default ProjectDetail