import React from 'react';
import { motion } from 'framer-motion';
import download from "../assets/images/download.png";

const Experience = () => {
    return (
        <section id="experience" className='px-8 h-[80vh] lg:h-[100vh] w-full lg:flex lg:px-[8%] py-12'>
            <div>
                <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center lg:hidden">My Work Experience</h3>
            </div>
            <div className='w-[50%] lg:pt-20 lg:pl-12 hidden lg:block px-8'>
                <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center hidden lg:flex mb-8">
                    My Work Experience
                </h3>
                <p className='mb-8'>
                    I have had the pleasure of working with different companies across a variety of industries, and each role equipped me with skills and experiences I carry with me. <br />
                    I'm always interested in new adventures and challenges.
                </p>
                {/* Download CV Button */}
                <div>
                    <button className="h-14 w-[70%] mx-auto lg:w-[40%] lg:mx-0 lg:px-4 rounded-full font-bold flex justify-center gap-2 items-center border-black border-2">
                        <a target="_blank"
                            href="/Benedicta Edinam Ami Davour Resume.pdf"
                            download="Benedicta_Davour_Resume.pdf"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            Download CV
                        </a>
                        <img src={download} alt="Download icon" className="object-cover " />
                    </button>
                </div>
            </div>

            {/* Timeline */}
            <div className='flex flex-col justify-center items-center pt-8 lg:pt-0 w-full lg:w-[50%]'>
                {/** Work Experience Blocks */}
                {[
                    {
                        title: "Web Dev Trainee, MEST Africa",
                        date: "Sep. 2024 - Nov 2024",
                        description: "After my National Service, I enrolled in this 3-month training program where I gained knowledge and experience as a frontend web developer in HTML, Tailwind, JavaScript, and React. I built many projects, including my vet appointment booking web app.",
                        height: "h-40 lg:h-32",
                        delay: 1.8
                    },
                    {
                        title: "Operations Officer (National Service), CalBank",
                        date: "Nov. 2023 - July 2024",
                        description: "I processed bank transactions for customers and branch activities, handled cash, accounted for all transactions by balancing daily, and promoted bank products and services by educating customers.",
                        height: "h-32 lg:h-32",
                        delay: 1.2
                    },
                    {
                        title: "IT Systems Administrator (Intern), Toyota Ghana Company Limited",
                        date: "Oct. 2022 - Dec. 2022 & May 2023",
                        description: "I managed IT infrastructure and ensured system reliability through regular performance monitoring and troubleshooting. I also collaborated with telecom and CCTV installation personnel to configure devices on the premises.",
                        height: "h-24 lg:h-24",
                        delay: 0.6
                    }
                ].map((experience, index) => (
                    <motion.div 
                        key={index}
                        className='flex gap-2'
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.6, delay: experience.delay }}
                    >
                        <div className='flex'>
                            <div className='w-full'>
                                {/* Circle and Line */}
                                <div className='flex flex-col'>
                                    <div className='w-6 h-6 rounded-full border-2 border-black mb-2'></div>
                                    <div className={`ml-3 ${experience.height} border-l-2`}></div>
                                </div>
                            </div>
                        </div>

                        {/* Experience Details */}
                        <div className='h-full w-[80%] lg:w-[60%]'>
                            <h4 className='font-bold'>{experience.title}</h4>
                            <p className='font-bold text-[#DC143C]'>{experience.date}</p>
                            <p className='text-sm'>{experience.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}

export default Experience;
