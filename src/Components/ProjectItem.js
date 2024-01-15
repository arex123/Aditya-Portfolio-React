import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectItem=({pic,name,id})=>{
    const navigate = useNavigate()
    return (
        <div className="projectItem" onClick={()=>{
            navigate('/project/'+id)
        }}>
            <div style={{backgroundImage:`url(${pic})`}} className="bgImage" ></div>
            {/* <h1 style={{color:"white"}}>{name}</h1> */}
        </div>
    )
} 
export default ProjectItem