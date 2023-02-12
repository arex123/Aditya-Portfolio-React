import { Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../styles/Footer.css';

function Footer(){
    function handleClick(){
        window.open("https://www.linkedin.com/in/adityaprofile1/");
    }
    return (
        <div className="footer">
            <div className="socialMedia">
                <LinkedIn onClick={handleClick}/>
            </div>
            <p>&copy; {new Date().getFullYear()} ad47kumar@gmail.com</p>

        </div>
    )
}

export default Footer;
