import React, { useState } from "react";
import "../styles/Project.css"
import ProjectItem from "../Components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";
import Cards from "../Components/Cards";


const Project = () => {

    const [FilteredProject,setFilteredProject]=useState(ProjectList)
    const [currSel,setCurrSel] = useState("ALL")
    const handleFilter = (type)=>{
        setCurrSel(type)
        if(type=="ALL")
            setFilteredProject(ProjectList)
        else
            setFilteredProject(ProjectList.filter(item=>item.type==type))
        
    }

    return (
        <div className="projects">
            <div className="project_title_cont">
                <p className="project_section_title">Something that I have build</p>
                <p className="project_section_title_des">with love, expertise and pinch of magical ingredients</p>
            </div>
            <div className="tag_btns">
                <p className={`${currSel=="ALL"?"tagSelected":"unSelected"}`} onClick={()=>handleFilter("ALL")}>ALL</p>
                <p className={`${currSel=="DESIGNS"?"tagSelected":"unSelected"}`} onClick={()=>handleFilter("DESIGNS")}>DESIGNS</p>
                <p className={`${currSel=="WEB"?"tagSelected":"unSelected"}`} onClick={()=>handleFilter("WEB")}>WEB</p>
                <p className={`${currSel=="OTHER"?"tagSelected":"unSelected"}`} onClick={()=>handleFilter("OTHER")}>NON-WEB</p>
            </div>
            <div className="projectList">
                {
                    FilteredProject.map((project, key) => {
                        return <ProjectItem key={project.key} id={project.key} image={project.pic} />
                    })
                }


            </div>

        </div>
    )
}

export default Project;