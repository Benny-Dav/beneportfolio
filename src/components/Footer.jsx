import React from 'react';
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import github  from "../assets/images/github.png";

const Footer = () => {
    return (
        <footer className="w-full bg-[#F7AAA0] text-[#333] px-[10%]">
            <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="text-4xl font-bold mb-4 text-black">
                        am<span className="text-[#DC143C]">i</span>
                    </h2>
                    <p className="text-sm leading-relaxed">
                        Building the future one website at a time.
                    </p>
                </div>

                {/* Contact Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
                    <ul className="space-y-2 text-sm">
                        <li>📍 Lapaz, Accra, GHANA</li>
                        <li>📧 benedictadavour777@gmail.com</li>
                        
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
                    <div className="flex space-x-4">
                       
                        {/* <a
                            href="#"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"
                            
                        >
                            <img src={instagram} alt="" />
                        </a> */}

                        <a
                            href="https://www.linkedin.com/in/eba-davour"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"
                            
                        >
                            <img src={linkedin} alt="" />
                        </a>
                        <a
                            href="https://github.com/Benny-Dav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition"
                            
                        >
                            <img src={github} alt="" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-300 mt-8 py-4 text-center">
                <p className="text-xs text-gray-700">&copy; 2024 am<span className="text-[#DC143C]">i</span>. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
