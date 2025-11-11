import { Reorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'
import { ReactComponent as Underline } from './../assets/Underline.svg'

function Navbar() {

    const [expand, setExpand] = useState(false)
    const location = useLocation();
    const [currUnder, setUnderline] = useState(1);

    useEffect(() => {
        setExpand(false);
        let pos = location.pathname;
        if (pos.includes("projects")) {
            setUnderline(3)
        } else if (pos.includes("experience")) {
            setUnderline(4)
        } else if (pos.includes("resume")) {
            setUnderline(5)
        } else {
            setUnderline(1)
        }
    }, [location])

    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {

        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScroll(true)
            } else { setIsScroll(false) }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, [])


    const navcss = {
        height: isScroll ? "5rem" : "6rem",
        boxShadow: isScroll ? "0 1px 50px rgba(0,0,0,.4)" : ""
    }


    const logoSize = {
        // transform:isScroll?"scale(.7)":"scale(1)"
        fontSize: isScroll ? "60px" : "70px",
    }
    const fontSize = {
        transform: isScroll ? "scale(.98)" : "scale(1)"
    }

    const titleTopMargin = {
        // marginTop: isScroll ? "-15px" : "0px"
    }

    const underline = {
        top: isScroll ? "40px" : "48px"
    }

    return (
        <div className="navbar" style={navcss}>
            <div className="Ad_title" style={titleTopMargin}>
                <Link to="/">  <span style={logoSize}>AD</span></Link>
            </div>
            <div className="toggleButton">
                <button onClick={() => {
                    setExpand((prev) => !prev)
                }}>
                    <Reorder />
                </button>
            </div>
            <div className={expand ? "openContainer" : "closeContainer"}>
            <div id={expand ? "open" : "close"}>
                <div className="Ad_title_sidebar" style={titleTopMargin}>
                     <span >AD</span>
                </div>
                <div className="sideBarIntro">
                    Hi, I am Aditya
                    <div>Thank you for visiting</div>
                </div>

                <div className="sideBarLinks">
                    <Link to="/">Home</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/experience">Experience</Link>
                    <Link to="/resume">Resume</Link>
                </div>



            </div>
            </div>
            <div className="links" >
                <Link to="/" style={fontSize}>Home
                    <div className={`underline_image underline_image_home ${currUnder === 1 ? "showLine" : "dontShow"}`} style={underline}>

                        <Underline />

                    </div>
                </Link>
                {/* <a style={fontSize} href="#explore">Explore
                    <div className={`underline_image underline_image_home ${currUnder==1?"showLine":"dontShow"}`} style={underline}>
                       
                    
                    </div>
                </a> */}

                <Link to="/projects" style={fontSize}>Projects
                    <div className={`underline_image underline_image_project ${currUnder === 3 ? "showLine" : "dontShow"}`} style={underline}>

                        <Underline />

                    </div>
                </Link>
                <Link to="/experience" style={fontSize}>Experience
                    <div className={`underline_image underline_image_experience ${currUnder === 4 ? "showLine" : "dontShow"}`} style={underline}>

                        <Underline />

                    </div></Link>

                <Link to="/resume" style={fontSize}>Resume
                    <div className={`underline_image underline_image_resume ${currUnder === 5 ? "showLine" : "dontShow"}`} style={underline}>

                        <Underline />

                    </div>
                </Link>
            </div>
        </div>
    )

}
export default Navbar