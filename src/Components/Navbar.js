import { Reorder } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css'
import {ReactComponent as Underline} from './../assets/Underline.svg'

function Navbar() {

    const [expand, setExpand] = useState(false)
    const location = useLocation();
    useEffect(() => {
        setExpand(false);
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
        boxShadow:isScroll?"0 1px 50px rgba(0,0,0,.4)":""
    }

    const shadow = {
    }
    
    const logoSize = {
        // transform:isScroll?"scale(.7)":"scale(1)"
        fontSize: isScroll ? "60px" : "70px",
    }
    const fontSize = {
        transform: isScroll ? "scale(.98)" : "scale(1)"
    }

    const titleTopMargin = {
        marginTop: isScroll ? "-15px" : "0px"
    }

    const underline = {
        top:isScroll?"40px":"48px"
    }

    return (
        <div className="navbar" style={navcss} id={expand ? "open" : "close"}>
            <div className="Ad_title" style={titleTopMargin}>
                <span style={logoSize}>AD</span>
            </div>
            <div className="toggleButton">
                <button onClick={() => {
                    setExpand((prev) => !prev)
                }}>
                    <Reorder />
                </button>
            </div>
            <div className="links" >
                <Link to="/"><a style={fontSize} href="#">Home
                    <div className="underline_image underline_image_home" style={underline}>
                       
                        <Underline />
                    
                    </div>
                </a>
                </Link>
                <Link to="/"><a style={fontSize} href="#">Explore
                    <div className="underline_image underline_image_home" style={underline}>
                       
                        {/* <Underline /> */}
                    
                    </div>
                </a>
                </Link>
                <Link to="/projects"><a style={fontSize} href="#">Projects
                <div className="underline_image underline_image_project" style={underline}>
                       
                        <Underline />
                    
                    </div>
                </a></Link>
                <Link to="/experience"><a style={fontSize} href="#">Experience
                <div className="underline_image underline_image_experience" style={underline}>
                       
                        <Underline />
                    
                    </div></a></Link>
                <Link to="https://drive.google.com/file/d/1E8s0l2J44NVFXpImNclk2gdugsyCTtqT/view?usp=share_link" target="_blank"><a style={fontSize} href="#">Resume
                <div className="underline_image underline_image_resume" style={underline}>
                       
                        <Underline />
                    
                    </div>
                </a></Link>
            </div>
        </div>
    )

}
export default Navbar