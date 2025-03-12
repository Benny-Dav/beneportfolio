import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const sections = ["home", "about", "experience", "skills", "portfolio", "contact"];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (e, section) => {
        e.preventDefault();
        document.getElementById(section).scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
        setIsOpen(false); // Close mobile menu on click
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "home";
            sections.forEach((section) => {
                const sectionElement = document.getElementById(section);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = section;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="lg:px-[5%] lg:h-[10%] h-[10vh] w-[90%] pr-[5%] flex justify-between lg:items-center p-4 lg:border shadow-md bg-white fixed top-0 lg:top-4 left-0 right-0 mx-auto lg:rounded-full z-40">
            <a href="#home">
                <h2 className="text-5xl font-extrabold text-black">
                    am<span className="text-[#DC143C]">i</span>
                </h2>
            </a>

            <button className="lg:hidden" onClick={toggleMenu}>
                <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-[1.5em]" />
            </button>

            {/* Desktop nav links */}
            <ul className="hidden lg:flex flex-col lg:flex-row justify-between items-center w-full lg:w-[40%] font-bold absolute lg:static top-[10%] bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-0">
                {sections.map((section) => (
                    <li key={section}>
                        <a
                            href={`#${section}`}
                            onClick={(e) => handleClick(e, section)}
                            className={activeSection === section ? "text-[#DC143C]" : "text-black"}
                        >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                        </a>
                    </li>
                ))}
            </ul>

            <ul className="hidden lg:flex justify-between items-center gap-4 w-[15%]">
                <a href="mailto:benedictadavour777@gmail.com">
                    <li><FontAwesomeIcon icon={faEnvelope} className="text-[1.2em]" /></li>
                </a>
                <a href="#contact" className="hidden lg:block">
                    <button className="lg:h-10 lg:w-32 lg:text-white lg:font-bold lg:bg-[#DC143C] rounded-full">
                        Hire Me
                    </button>
                </a>
            </ul>

            {/* Mobile nav menu */}
            {isOpen && (
                <>
                    {/* Dark overlay */}
                    <div className="fixed inset-0 z-40 bg-black opacity-50" onClick={() => setIsOpen(false)}></div>

                    {/* Mobile Menu */}
                    <div className="fixed top-0 left-0 w-[70%] h-[60%] bg-white z-50 transition-transform transform translate-x-0 shadow-md pt-8 font-bold flex flex-col overflow-y-auto gap-4">
                        {/* Logo */}
                        <a href="#home">
                            <h2 className="text-5xl font-extrabold text-black">
                                am<span className="text-[#DC143C]">i</span>
                            </h2>
                        </a>

                        {/* Mobile Navigation Links */}
                        {sections.map((section) => (
                            <div
                                key={section}
                                className={`text-xl px-4 py-2 border-b border-[#333] flex items-center h-16 ${
                                    activeSection === section ? "text-[#DC143C]" : "text-black"
                                }`}
                            >
                                <a href={`#${section}`} onClick={(e) => handleClick(e, section)}>
                                    {section.charAt(0).toUpperCase() + section.slice(1)}
                                </a>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
