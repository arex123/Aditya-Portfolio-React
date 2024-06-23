import React from "react";
import { useNavigate } from "react-router-dom";
import Title from "react-vanilla-tilt";
import '../styles/experience.css'
const ProjectItem = (props) => {
  const navigate = useNavigate();
  return (
    // <div className="projectItem">
      <Title className="titl tilt_card">
        <div className="project_card project_card1">
          <img
            className="piimg"
            src={props.image}
            onClick={() => {
              navigate("/project/" + props.id);
            }}
          />
        </div>
      </Title>
    // </div>
  );
};
export default ProjectItem;
