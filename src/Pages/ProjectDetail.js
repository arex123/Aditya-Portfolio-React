import { GitHub } from "@mui/icons-material";
import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDetail.css"
import Title from 'react-vanilla-tilt'

const ProjectDetail = () => {
    const { id } = useParams();
    const project = ProjectList[id]

    return (
        <div className="projectDetail">
            <div className="upper_section">
                <div className="project_des_section">
                    <div className="project_des_section_1">
                        <p className="p_name">{ProjectList[0].name}</p>
                        <p className="p_desc">{ProjectList[0].desc}</p>
                        <div className="btns_1_2">
                            <div className="live_link_btn">View Project</div>
                            <div className="git_repo_btn">View on Github</div>
                        </div>
                    </div>
                </div>
                <div className="project_img">
                    <Title className="titl titl_tag">
                        <img className="p_d_img" src={ProjectList[0].pic} />
                    </Title>
                </div>
            </div>
            <div className="lower_section">
                <p className="lower_section_lets_talk">
                    Let's talk about the project
                </p>
                <p className="lower_section_lets_talk_1">Project significance</p>
                <p className="l_s_tech_used">What Technologies are used?</p>
                <div className="l_s_t_i_icons">
                    <img src="#" />
                    <img src="#" />
                    <img src="#" />
                </div>

            </div>

        </div>
    )
}
export default ProjectDetail