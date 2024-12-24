import React from 'react';
import { Link } from "react-router-dom";
import Facebook from "../../assets/logo/Facebook";
import Instagram from "../../assets/logo/Instagram";
import Youtube from '../../assets/logo/YouTube';
import "./Footer.css";

const Footer: React.FC = () => {
    return ( 
        <footer className="footer-con">
            <div className="icons-social-media">
                <Link to="https://www.instagram.com">
                    <Instagram/>
                </Link>
                <Link to="https://www.youtube.com">
                    <Youtube/>
                </Link>
                <Link to="https://www.facebook.com">
                    <Facebook />
                </Link>
            </div>
        </footer>
    );
}

export default Footer;