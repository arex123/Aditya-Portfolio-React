import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../styles/Home.css'

const Landing = ()=>{
    return <div className="home">
        <div className="about">
            <h2>Hi, I am Aditya</h2>
            <div className="prompt">
            <p>A software developer with a passion for learning and creating.</p>
                <LinkedIn/>
                <Email/>
                <GitHub/>
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