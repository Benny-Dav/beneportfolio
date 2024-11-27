import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MapLocation from "./MapLocation";
import ClickToCall from "./ClickToCall";
import { useState } from "react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="Navbar" className="lg:px-[15%] lg:h-[10%] w-full pr-[5%] flex justify-between lg:items-center p-4 lg:border shadow-md bg-white fixed top-0 left-0 right-0 z-10">
            {/* Logo */}
            <a href="#home">
            <h2 className="text-5xl font-extrabold mb-4 text-black">
                        am<span className="text-[#DC143C]">i</span>
                    </h2>
            </a>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden -[50%]" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[1.5em]" />
            </button>

            {/* Navigation Links - Hidden on mobile and visible on desktop */}
            <ul
                id="nav-ul"
                className={`${
                    isOpen ? "flex" : "hidden"
                } lg:flex flex-col lg:flex-row justify-between items-center w-full lg:w-[50%] font-bold absolute lg:static top-[10%] bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-0`}
            >
                <li><a href="#home">Home</a></li>
                <li><a href="#webdev-info">About</a></li>
                <li><a href="#skills-section">Skills</a></li>
                <li><a href="#works">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>

            {/* Icons - Hidden on mobile and visible on desktop */}
            <ul
                id="nav-icons"
                className="hidden lg:flex justify-between items-center gap-4 w-[15%]"
            >
                <a href="mailto:benedictadavour777@gmail.com">
                    <li><FontAwesomeIcon icon={faEnvelope} className="text-[1.2em]" /></li>
                </a>

                <MapLocation />

                <ClickToCall />
            </ul>

            {/* Close Button (Only visible when menu is open) */}
            {isOpen && (
                <button
                    className="lg:hidden absolute top-4 right-4 z-20"
                    onClick={toggleMenu}
                >
                    <FontAwesomeIcon icon={faTimes} className="text-[1.5em]" />
                </button>
            )}
        </div>
    );
};

export default Navbar;
