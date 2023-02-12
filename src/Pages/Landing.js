import { GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../styles/Home.css'

const Landing = ()=>{

    let links = ["https://www.linkedin.com/in/adityaprofile1/","https://github.com/arex123"]

    function openLink(idx){
        window.open(links[idx])
    }

    return <div className="home">
        <div className="about">
            <h2>Hi, I am Aditya</h2>
            <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
                <LinkedIn style={{ "&:hover": { color: "green"} }} onClick={()=>openLink(0)}/>
                <GitHub style={{ "&:hover": { color: "green"} }} onClick={()=>openLink(1)}/>
                {/* <Email onClick={openLink(2)}/> */}
            </div>
        </div>
        <div className="skills">
            <h1>skills</h1>
            <ol className="list">
                <li className="item">
                    <h2>Front-End</h2>
                    <span>
                        Html, Css, Javascript, Reactjs, Material UI, Bootstrap
                    </span>
                </li>
                <li className="item">
                    <h2>Back-End</h2>
                    <span>
                        Nodejs, ExpressJS, Mongodb
                    </span>
                    
                </li>
                <li className="item">
                    <h2>Languages</h2>
                    <span>
                        Javascript, Java, Go
                    </span>
                    
                </li>

            </ol>

        </div>

        
    </div>
}

export default Landing;