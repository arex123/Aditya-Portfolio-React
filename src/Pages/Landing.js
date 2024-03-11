import React, { Suspense, useEffect, useRef, useState } from "react";
import '../styles/Home.css'
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls} from "@react-three/drei";
// import Dragon from '../assets/Dragon'
import Earth from '../Earth'
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
import Cards from "../Components/Cards";
import CylinderSvg from '../assets/vectors/cylinder.svg'
import LShapeSvg from '../assets/vectors/l-vector.svg'
import SpinSvg from '../assets/vectors/circle-spin.svg'
import BoxedSvg from '../assets/vectors/boxes.svg'
import ConnectSvg from '../assets/vectors/contact.svg'
import Rocketsvg from '../assets/work.png'
import guyImg from '../assets/guy.png'

import P1 from '../assets/card_pic.webp'
import P2 from '../assets/vectors/project2_pic.webp'
import { Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import ProjectItem from "../Components/ProjectItem";
import res from '../assets/Aditya_Resume_2024.pdf'


const Landing = () => {
    const DefaultList = ProjectList.slice(0,4)
    const [PList, setPList] = useState(DefaultList)

    const ref = useRef(null)

    let links = ["https://www.linkedin.com/in/adityaprofile1/", "https://github.com/arex123"]

    function openLink(idx) {
        window.open(links[idx])
    }

    let default_project_list = [P1, P2, P2, P1]

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
                    {/* <LinkedIn style={{ "&:hover": { color: "green"} }} onClick={()=>openLink(0)}/>
                    <GitHub style={{ "&:hover": { color: "green"} }} onClick={()=>openLink(1)}/> */}
                    {/* <Email onClick={openLink(2)}/> */}

                </div>
                <div className="btn-km-res">
                    <div className="btn-km" onClick={scrollDown}>Know More</div>
                    <div className="btn-res" onClick={handleResume}>Download Resume</div>
                </div>
            </div>
            {/* <div className="dragon_cont">
                    <Canvas>
                        <ambientLight/>
                        <OrbitControls/>
                        <Suspense fallback={null}>
                             <Earth/> 
                        </Suspense>
                    </Canvas>
            </div> */}
        </div>

        <div className="screen_2">
            <div className="l_shape_svg">
                <img src={LShapeSvg} />
            </div>

            <div className="skills_info" ref={ref}>
                <div className="about_q1"><p></p> <p className="q1">What i Know?</p></div>

                <p className="skills_des">He creates elegant, logical web and mobile app solutions. In his hobby time, he designs.</p>
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
                <div className="about_q1"><p></p> <p className="q1">#2 What does he do? </p></div>

                <p className="skills_des">Currently Learning More Tech. Previously worked as a </p>
                <p className="skills_code"><span>Software Developer</span></p>
            </div>

            <div className="btn-km exp_btn"><Link to="/experience" className="exp_btn_tag"> View Past Experience</Link></div>
        </div>

        <div className="about_project">
            <div className="skills_info">
                <div className="about_q1"><p></p> <p className="q1">What i have built?</p></div>

                <p className="skills_des">Some awesome products for the awesome poeple.</p>
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
                    <div className="about_q1"><p></p> <p className="q1">Meet and Greet!</p><p></p></div>

                    <p className="skills_des connect_skills_des">Impressed Already? Schedule a call with him.</p>
                    <p className="skills_code connect_skills_code">Let’s grab a cup of coffee.</p>
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