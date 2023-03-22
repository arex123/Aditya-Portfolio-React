import { Reorder } from "@mui/icons-material";
import React,{useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar(){

    const [expand,setExpand]=useState(false)
    const location = useLocation();
    useEffect(()=>{
        setExpand(false);
    },[location])

    return (
        <div className="navbar" id={expand?"open":"close"}>
            <div className="toggleButton">
                <button onClick={()=>{
                    setExpand((prev)=>!prev)
                }}>
                    <Reorder/>
                </button>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/experience">Experience</Link>
                <Link to="https://drive.google.com/file/d/1E8s0l2J44NVFXpImNclk2gdugsyCTtqT/view?usp=share_link">Resume</Link>
            </div>
        </div>
    )

}
export default Navbar