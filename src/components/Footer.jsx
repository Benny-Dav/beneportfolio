import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <section className="h-[30vh] bg-[black]">
            <div className="h-[80%] w-[80%] ml-[10%] flex justify-between align-center">
                <div className="w-[30%]">
                    <h2 className="text-[3em] text-[white] font-extrabold text-center mt-[10%]">am<span className="text-[#DC143C]">i</span>.</h2>
                    
                </div>
                <div className="w-[30%] h-[100%]">
                {/* <button className="mr-16 mt-[1em] h-[3em] w-[8em] rounded-sm bg-[white] font-medium ">Download CV</button> */}
                <a href="../assets/CV Benedicta Davour.pdf" download="BenedictaDavour-CV.pdf" rel="noopener noreferrer"><button className=" mr-16 mt-[1em] h-[3em] w-[8em] rounded-sm bg-[white] font-medium" >Download CV</button></a>
                <button className="mr-16 mt-[0.5em] h-[3em] w-[8em] rounded-sm bg-[white] font-medium ">Hire Me</button>
                
                </div>
                <div className="w-[30%] text-[white] py-[0.5em]">
                    <div className="mb-[0.5em]"><h3 className="text-[1.5em]">Get in touch</h3></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faEnvelope} className="mr-[1em]" />benedictadavour777@gmail.com</p></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faPhone} className="mr-[1em]" />0595742231</p></div>
                    <div className="mb-[0.5em]"><p><FontAwesomeIcon icon={faLocationDot} className="mr-[1em]" />Osu, Accra</p></div>
                </div>
            </div>
            <p className="text-center text-[white]">Copyright ©2024 All rights reserved | This website is made by Benny-Dav</p>
        </section>
    )
}
export default Footer;