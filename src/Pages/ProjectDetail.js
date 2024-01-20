import { GitHub } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetail.css"
import Title from 'react-vanilla-tilt'

const ProjectDetail = () => {
    const { id } = useParams();
    const project = ProjectList[id]
    console.log("proe ",project)

    return (
        <div className="projectDetail">
            <div className="upper_section">
                <div className="project_des_section">
                    <div className="project_des_section_1">
                        <p className="p_name">{project.name}</p>
                        <p className="p_desc">{project.desc}</p>
                        <div className="btns_1_2">
                            <div className="live_link_btn">View Project</div>
                            <div className="git_repo_btn">View on Github</div>
                        </div>
                    </div>
                </div>
                <div className="project_img">
                    <Title className="titl titl_tag">
                        <img className="p_d_img" src={project.pic} />
                    </Title>
                </div>
            </div>
            <div className="lower_section">
                <p className="lower_section_lets_talk">
                    Let's talk about the project
                </p>
                <p className="lower_section_lets_talk_1" style={{color:"#b8c1ec",width:"70%",textAlign:"center"}}>{project.significance}</p>
                <p className="lower_section_lets_talk">What <span style={{color:"pink"}}>Technologies</span> are used?</p>
                <div className="l_s_t_i_icons" style={{color:"rgb(184, 193, 236)"}}>
                    {project.skills.map((item,index)=>
                        <p key={index} className="tech_tags">{item}</p>)}
                </div>

            </div>

        </div>
    )
}
export default ProjectDetail