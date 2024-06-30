import React, { Suspense, useEffect, useRef, useState } from "react";
import '../styles/Home.css'
import { ReactComponent as Traingle } from '../assets/vectors/triangle.svg'
import { ReactComponent as Elipse } from '../assets/vectors/ellipse.svg'
import Exp from '../assets/skills/express.svg'
import Mong from '../assets/skills/mongodb.svg'
import Fig from '../assets/skills/figma.svg'
import GitSvg from '../assets/skills/git.svg'
import HtmlSvg from '../assets/skills/html.svg'
import ReactSvg from '../assets/skills/react.svg'
import NodeSvg from '../assets/skills/node.svg'
import JSSvg from '../assets/skills/js.svg'
import CylinderSvg from '../assets/vectors/cylinder.svg'
import LShapeSvg from '../assets/vectors/l-vector.svg'
import SpinSvg from '../assets/vectors/circle-spin.svg'
import BoxedSvg from '../assets/vectors/boxes.svg'
import ConnectSvg from '../assets/vectors/contact.svg'
import Rocketsvg from '../assets/work.png'
import guyImg from '../assets/bob.png'

import { Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../Components/ProjectItem";
import res from '../assets/Aditya_Resume_2024.pdf'
import app from "../firebase";
import {getDatabase,ref as rr,set,push} from 'firebase/database'

const Landing = () => {

    const saveData = (data)=>{
        const screen_resolution = JSON.stringify(window.screen.availHeight+ " h&&w "+window.screen.availWidth)
        const db = getDatabase(app)
        const newRef = push(rr(db,"details/"+data))
        set(newRef,{
            visits:data,
            screen:screen_resolution
        }).then(()=>{
            // console.log("success")
        }).catch((error)=>{
            // console.log("failed")
        })
    }

    useEffect(() => {

        let portVD = localStorage.getItem('portVistData')
        if(portVD){
            // console.log("present: ",portVD)
            const now = new Date(); 
            const formattedDate = now.toLocaleDateString();
            const hour = now.getHours();
            let fhpv = JSON.stringify(formattedDate+"&"+hour)
            if(portVD!==fhpv){
                localStorage.removeItem('portVistData');
                localStorage.setItem('portVistData',fhpv);
                saveData(fhpv)
            }
            // console.log("gg ",formattedDate+"&"+hour)
        }else{
            const now = new Date(); 
            const formattedDate = now.toLocaleDateString();
            const hour = now.getHours();
            let fhpv = JSON.stringify(formattedDate+"&"+hour)
            // console.log("gg ",formattedDate+"&"+hour)
            localStorage.setItem('portVistData',fhpv);
            saveData(fhpv)
        }
      }, []);
    const DefaultList = ProjectList.slice(0,4)
    const [PList, setPList] = useState(DefaultList)

    const ref = useRef(null)

    let links = ["https://www.linkedin.com/in/adityaprofile1/", "https://github.com/arex123"]

    function openLink(idx) {
        window.open(links[idx])
    }

    const scrollDown = () => {
        window.scroll({
            top: ref.current.offsetTop + 1000,
            behavior: 'smooth'
        })
    }

    const handleResume = ()=>{
        // window.open("https://drive.google.com/file/d/1juA4LmR7ztZ_Ig5iI408GbiA2UTBj2NT/view?usp=drive_link",'_blank')
        window.open(res,'_blank')
    }

    const handleEmailClick = () => {
        window.location.href = 'mailto:aditya.connect0@gmail.com';
      };

    
    return <div className="home">
        <div className="elipse_cont">
            <img className="guyimg" src={guyImg} alt="guy" />
            <Elipse className="elipse_svg" />
        </div>
        <div className="cylinder_svg">
            <img src={CylinderSvg} />
        </div>
        <div className="screen_1">
            <div className="about">
                <div className="about_q1"><p></p> <p className="q1">Who am i?</p></div>
                <h2>I am Aditya
                    <div>
                        <Traingle className="traingle_svg" />
                    </div>
                </h2>
                <div className="prompt">
                    <p>A software developer with a passion for learning and creating Softwares.</p>
                    

                </div>
                <div className="btn-km-res">
                    <div className="btn-km" onClick={scrollDown}>Know More</div>
                    <div className="btn-res" onClick={handleResume}>Download Resume</div>
                </div>
            </div>
           
        </div>

        <div className="screen_2">
            <div className="l_shape_svg">
                <img src={LShapeSvg} />
            </div>

            <div className="skills_info" ref={ref}>
                <div className="about_q1"><p></p> <p className="q1">What i Know?</p></div>

                <p className="skills_des">He crafts refined, coherent web and mobile app solutions. During his leisure hours, he indulges in design pursuits</p>
                <p className="skills_code">Think.<span> Code.</span> Debug.</p>

            </div>
            <div className="skills_icons">


                <div className="skills_icons_cont">
                    <div>  <img className="skill_svgs svg_node" src={NodeSvg} /></div>
                    <div>  <img className="skill_svgs svg_react" src={ReactSvg} /></div>
                    <div>  <img className="skill_svgs svg_html" src={HtmlSvg} /></div>
                    <div>  <img className="skill_svgs svg_js" src={JSSvg} /></div>
                    <div>  <img className="skill_svgs svg_exp" src={Exp} /></div>
                    <div>  <img className="skill_svgs svg_mong" src={Mong} /></div>
                    <div>  <img className="skill_svgs svg_git" src={GitSvg} /></div>
                    {/* <div>  <img className="skill_svgs svg_fig" src={Fig} /></div> */}
                </div>


            </div>
        </div>


        <div className="experice_section1">

            <img className="spinsvg" src={SpinSvg} />
            <img className="boxessvg" src={BoxedSvg} />
            <img className="rocketsvg" src={Rocketsvg} />
            <div className="skills_info connect_section">
                <div className="about_q1"><p></p> <p className="q1">#2 What do I do? </p></div>

                <p className="skills_des">Currently Learning More Tech. Previously worked as a </p>
                <p className="skills_code"><span>Software Developer</span></p>
            </div>

            <div className="btn-km exp_btn"><Link to="/experience" className="exp_btn_tag"> View Past Experience</Link></div>
        </div>

        <div className="about_project">
            <div className="skills_info">
                <div className="about_q1"><p></p> <p className="q1">What have I built?</p></div>

                <p className="skills_des">Crafts web projects, hones skills, enjoys design.</p>
                <p className="skills_code">Something he has <span> built.</span></p>
            </div>
            <div className="project_cards">
                {/* <div className="project_cards_cont">
                    {default_project_list.map((item, index) =>
                        <Cards key={index} pic={item} />
                    )}
                </div> */}

                <div className="projectList">
                    {
                        PList.map((project, key) => {
                            return <ProjectItem key={project.key} id={project.key} image={project.pic} />
                        })
                    }


                </div>
                <Link to="/projects"><div className="btn-km project_btn">View More Projects</div></Link>

            </div>

        </div>
        <div className="connect">
            <div className="connect_des">

                <div className="skills_info connect_section">
                    <div className="about_q1 meet_about_q1"><p></p> <p className="q1">Meet and Greet!</p><p></p></div>

                    <p className="skills_des connect_skills_des">Thanks for visiting my site.</p>
                    <p className="skills_code connect_skills_code">Contact Me through Email</p>
                </div>

                <div className="connect_icon">
                    <img src={ConnectSvg} />
                </div>

            </div>
            <div className="btn-km connect_btn" onClick={handleEmailClick}>Let's Connect</div>
        </div>

    </div>
}

export default Landing;