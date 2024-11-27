import React from 'react';
import { Link } from 'react-router-dom';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
    return (
        <footer className="w-full h-[40vh] px-[15%] bg-[rgb(247,170,160)]">
            <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-3 gap-8">
                {/* About Section */}
                <div>
                    <h2 className="text-5xl font-extrabold mb-4 text-black">
                        am<span className="text-[#DC143C]">i</span>
                    </h2>
                    <p className="text-sm">
                        Building the future one website at a time.
                    </p>
                </div>


                {/* Contact Section */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
                    <ul className="space-y-2">
                        <li>📍 Osu Plot 7, Accra GHANA</li>
                        <li>📧 barkbox@gmail.com</li>
                        <li>📞 +233 595 742 231</li>
                    </ul>
                </div>

                {/* Social Media Links */}
                 
            </div>
        </footer>
    );
};

export default Footer;
