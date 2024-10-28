import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <section id="footer-section" className="h-auto lg:h-[30vh] bg-black py-4">
            <div className="flex flex-col lg:flex-row justify-between items-center w-[90%] mx-auto h-auto lg:h-[80%]">
                <div className="w-full lg:w-[30%] text-center">
                    <h2 className="text-[2em] lg:text-[3em] text-white font-extrabold mt-4">
                        am<span className="text-[#DC143C]">i</span>.
                    </h2>
                </div>
                <div id="footer-btns" className="w-full lg:w-[30%] flex flex-col lg:flex-row justify-center items-center mt-4 lg:mt-0">
                    <a href="../assets/CV Benedicta Davour.pdf" download="BenedictaDavour-CV.pdf" rel="noopener noreferrer">
                        <button className="mb-2 lg:mb-0 lg:mr-4 h-[3em] w-[8em] rounded-sm bg-white font-medium">
                            Download CV
                        </button>
                    </a>
                    <a href="#contact-section">
                        <button className="h-[3em] w-[8em] rounded-sm bg-white font-medium">
                            Hire Me
                        </button>
                    </a>
                </div>
                <div id="footer-icons" className="w-full lg:w-[30%] text-white text-center mt-4 lg:mt-0">
                    <h3 className="text-[1.5em] mb-2">Get in touch</h3>
                    <p className="flex items-center justify-center mb-1">
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        benedictadavour777@gmail.com
                    </p>
                    <p className="flex items-center justify-center mb-1">
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        0595742231
                    </p>
                    <p className="flex items-center justify-center mb-1">
                        <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
                        Osu, Accra
                    </p>
                </div>
            </div>
            <p className="text-center text-white mt-4">Copyright ©2024 All rights reserved | This website is made by Benny-Dav</p>
        </section>
    );
};

export default Footer;
