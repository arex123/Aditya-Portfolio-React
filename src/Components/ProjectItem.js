import React from "react";
import { useNavigate } from "react-router-dom";
import Title from 'react-vanilla-tilt'

const ProjectItem=(props)=>{
    const navigate = useNavigate()
    return (
        <div className="projectItem" onClick={()=>{
            navigate('/project/'+props.id)
        }}>
            {/* <div style={{backgroundImage:`url(${pic})`}} className="bgImage" ></div> */}
          <Title className="titl"><div className='project_card project_card1'><img className="piimg" src={props.image}/></div></Title>

        </div>
    )
} 
export default ProjectItem