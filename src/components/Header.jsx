import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import myHeroImg from "../assets/images/myHeroImg.png"
import download from "../assets/images/download.png"
import { smoothScroll } from "../smoothScroll";
const Header = () => {
    
    return (
       <>
        <div id="#home" className="relative lg:px-[8%] lg:pt-10 h-[100vh] lg:w-full lg:h-auto mt-0 header max-w-full overflow-x-hidden lg:grid lg:grid-cols-2 grid grid-cols-1 overflow-y-hidden">
            <Navbar />
            {/* Mobile Image */}
            {/* <div className="lg:hidden h-[20%] mt-[2%]">
                <img 
                    src={myHeroMobile} 
                    alt="Benedicta Davour" 
                    className="w-full h-auto object-cover"
                />
            </div> */}

            {/* Header Content */}
            <div className="lg:h-40 mt-[5vh] lg:mt-[20%] pt-16 ml-auto mr-auto w-[90%] lg:w-full text-center animate-fade-in md:mt-[-6%]">
                <div>
                    <p className="text-center text-2xl mb-4"><span className="font-bold text-[#DC143C]">-</span>Hello</p>
                <h1 className="text-[2.5em] lg:text-[3em] font-bold leading-tight mb-2">
                    I'm Bened<span className="text-[#DC143C]">i</span>cta,
                </h1>
                <h1 className="text-[2em] lg:text-[3em]  leading-tight">
                    Frontend Engineer
                </h1>
                </div>

                {/* header buttons */}
            <div id="header-btns" className="flex flex-col lg:flex-row gap-4 mt-6 lg:mt-8 w-[90%] justify-center rounded-full py-2 mx-auto text-lg md:mb-[17%]">
                    <a  target="_blank"
                        href="/Benedicta Davour Professional CV.pdf"
                        download="Benedicta_Davour_Resume.pdf"
                        rel="noopener noreferrer"
                        className="w-full"
                    >
                        <button className="h-14 w-full lg:w-60 rounded-full  font-bold flex justify-center gap-2 items-center border-black border-2 ">
                            Download CV

                            <img src={download} alt="" className="object-cover"/>
                        </button>
                        
                    </a>
                    
                   
                    <div className="z-10">
                    <button onClick={(e)=>smoothScroll(e,"#contact")} className="h-14 w-full lg:w-60 text-white font-bold bg-[#DC143C] rounded-full mb-20 ">
                        Hire Me
                    </button>
                    </div>

                        
                    
                </div>
                {/* <p className="mt-4 text-[1em] leading-relaxed">
                    I have a background in Computer Science and Engineering, and am currently focused on Frontend Web Development. I love to code all day everyday, creating aesthetic and functional websites and web applications. 
                </p> */}
                
            </div>
            <div className="mt-[-33%] lg:mt-4 mx-auto">
                <img src={myHeroImg} alt="" className="" />
            </div>
            
            
         {/* keywords */}
        </div>
        {/* <div className="hidden lg:flex h-[10vh]top-0 justify-between items-center px-4 font-bold text-xl py-4 bg-[#EE9E97]">
            <img src={branch} alt="" className=""/>
            <p>Accessibility</p>
            <img src={branch} alt="" className=""/>
            <p>Responsive</p>
            <img src={branch} alt="" className=""/>
            <p>SEO</p>
            <img src={branch} alt="" className=""/>
            <p>User Experience</p>
            <img src={branch} alt="" className=""/>
            <p>Version Control</p>
            <img src={branch} alt="" className=""/>
            <p>Mobile First</p>
        </div> */}
       </>
    );
}

export default Header;
