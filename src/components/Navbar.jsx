import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import MapLocation from "./MapLocation";
import ClickToCall from "./ClickToCall";



const Navbar = () => {
    return (
        <div id="Navbar" className="h-[10%] flex justify-between p-4 border shadow-md bg-[white] fixed top-0 left-0 right-0 z-10">
            <a href="#home"><h1 className="w-[7%] mr-[5%] text-[1.2em] font-extrabold">ami.</h1></a>
            <ul id="nav-ul" className="flex justify-between align-center w-[30%] font-bold">

                <li><a href="home">Home</a></li>
                <li><a href="#webdev-info">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#portfolio-section">Portfolio</a></li>
                <li><a href="#footer-section">Contact</a></li>

            </ul>
            <ul id="nav-icons" className="flex justify-between align-center gap-[5%] w-[15%] ">
                
                <a href="mailto:benedictadavour777@gmail.com"><li><FontAwesomeIcon icon={faEnvelope} className="text-[1.2em]" /></li></a>

                <MapLocation/>
            
                <ClickToCall/>

                
            </ul>
        </div>
    );
}

export default Navbar;
