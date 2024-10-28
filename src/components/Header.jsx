import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <div id="home" className="h-[50vh] w-full mt-[20%] lg:h-[100vh] mt-0 header">
            <Navbar />
            <div id="header" className="h-[90%] w-full lg:w-[50%] pt-[10%] px-6 lg:px-0 lg:ml-[20%] text-center lg:text-left">
                <h1 className="text-[2em] lg:text-[3em] font-bold leading-tight">
                    Hi! I'm Bened<span className="text-[#DC143C]">i</span>cta Davour
                </h1>
                <h2 className="text-[1.5em] lg:text-[2em] font-medium mt-2">Web Developer</h2>
                <p className="mt-4 text-[1em] leading-relaxed">
                    I create beautiful, effective, and accessible websites for organizations and individuals to get their message out to the world.
                </p>
                <div id="header-btns" className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8 lg:w-[70%] justify-center lg:justify-start">
                    <a
                        href="../assets/CV Benedicta Davour.pdf"
                        download="BenedictaDavour-CV.pdf"
                        rel="noopener noreferrer"
                    >
                        <button className="h-12 w-full lg:w-32 rounded-sm bg-[#DC143C] text-white font-bold">
                            Download CV
                        </button>
                    </a>
                    
                    <a href="#contact-section">
                        <button className="h-12 w-full lg:w-32 rounded-sm text-white font-bold bg-black">
                            Hire Me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;
