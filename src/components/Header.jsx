import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import myHeroMobile from "../assets/images/myHeroMobile.png";

const Header = () => {
    return (
        <div id="home" className="px-[1em] h-[70vh] lg:w-full lg:h-[100vh] mt-0 header max-w-full overflow-x-hidden">
            <Navbar />
            {/* Mobile Image */}
            <div className="lg:hidden h-[50%] mt-[2%]">
                <img 
                    src={myHeroMobile} 
                    alt="Benedicta Davour" 
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Header Content */}
            <div id="header" className="lg:h-[90%] mt-[5%] w-full lg:w-[50%] pt-[5%] lg:px-0 lg:ml-[10%] text-center lg:text-left lg:mt-[3%]">
                <h1 className="text-[2.5em] lg:text-[3em] font-bold leading-tight">
                    Hi! I'm Bened<span className="text-[#DC143C]">i</span>cta Davour
                </h1>
                <h2 className="text-[1.5em] lg:text-[2em] font-medium mt-2">Web Developer</h2>
                <p className="mt-4 text-[1em] leading-relaxed">
                    I create beautiful, effective, and accessible websites for organizations and individuals to get their message out to the world.
                </p>
                <div id="header-btns" className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8 lg:w-[70%] justify-center lg:justify-start">
                    <a  target="_blank"
                        href="../assets/CV Benedicta Davour.pdf"
                        download="BenedictaDavour-CV.pdf"
                        rel="noopener noreferrer"
                    >
                        <button className="h-12 w-full lg:w-32 rounded-sm bg-[#DC143C] text-white font-bold">
                            Download CV
                        </button>
                    </a>
                    
                    <a href="#contact-section" className="hidden lg:block">
                        <button className="lg:h-12 lg:w-32 lg:rounded-sm lg:text-white lg:font-bold lg:bg-black">
                            Hire Me
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Header;