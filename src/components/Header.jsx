import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import myHeroMobile from "../assets/images/myHeroMobile.png";
import myHeroBg from "../assets/images/myHeroBg.png"
const Header = () => {
    return (
        <div id="#home" className="relative lg:px-[15%] h-[100vh] lg:w-full lg:h-[95vh] mt-0 header max-w-full overflow-x-hidden lg:grid lg:grid-cols-2 grid grid-cols-1 overflow-y-hidden lg:bg-gradient-to-r from-[rgb(247,170,160)] via-white to-white">
            <Navbar />
            {/* Mobile Image */}
            <div className="lg:hidden h-[30%] mt-[2%]">
                <img 
                    src={myHeroMobile} 
                    alt="Benedicta Davour" 
                    className="w-full h-auto object-cover"
                />
            </div>
            {/* Header Content */}
            <div className="lg:h-[70%] lg:mt-[5%] ml-auto mr-auto w-[90%] lg:w-full lg:pt-[25%] text-center lg:text-left animate-fade-in">
                <h1 className="text-[2.5em] lg:text-[3em] font-bold leading-tight">
                    Hi! I'm Bened<span className="text-[#DC143C]">i</span>cta Davour
                </h1>
                <h2 className="text-[1.5em] lg:text-[2em] font-medium mt-2">Web Developer</h2>
                <p className="mt-4 text-[1em] leading-relaxed">
                    I have a background in Computer Science and Engineering, and am currently focused on Frontend Web Development. I love to code all day everyday, creating aesthetic and functional websites and web applications. 
                </p>
                <div id="header-btns" className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8 lg:w-[70%] justify-center lg:justify-start">
                    <a  target="_blank"
                        href="../assets/Benedicta Edinam Ami Davour Resume.pdf"
                        download="Benedicta Davour Resume.pdf"
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
            <div className="hidden lg:block bg-top-center bg-no-repeat bg-cover" style={{backgroundImage:`url(${myHeroBg})`}}>

            </div>
        </div>
    );
}

export default Header;