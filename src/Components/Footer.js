import { Instagram, LinkedIn } from "@mui/icons-material";
import React from "react";
import '../styles/Footer.css';

function Footer(){
    return (
        <div className="footer">
            <div className="socialMedia">
                <LinkedIn/>
                <Instagram/>
            </div>
            <p>&copy; 2022 aditya@portfolio</p>

        </div>
    )
}

export default Footer;
