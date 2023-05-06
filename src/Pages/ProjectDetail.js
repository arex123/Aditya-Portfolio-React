import { GitHub } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetail.css"
const ProjectDetail = () =>{
    const {id} = useParams();
    const project = ProjectList[id]

    return (
        <div className="projectDetail" style={{marginBottom:'40px'}}>
            <h1>{project.name}</h1>
            <img src={project.image} onClick={()=>{ if(project.project_link!="")window.open(project.project_link) }}/>
            <p>
                <b>Skills:</b>{project.skills}
            </p>
            <GitHub sx={{ color:'white',fontSize:50 ,"&:hover": { color: "#986dff"} }} onClick={()=>{window.open(project.github_link)}}/>
        </div>
    )
}
export default ProjectDetail