import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import download from "../assets/images/download.png";

const Experience = () => {
    const experiences = [
        {
            company: "Africon",
            role: "Frontend Engineer",
            period: "March 2025 - Present",
            stack: ["ReactJS", "NextJS", "UI/UX", "AI Integration"],
            description: [
                "Led the development of a comprehensive ",
                { text: "customer portal", isKey: true },
                " for streamlined travel management. Implemented an intelligent ",
                { text: "chatbot system", isKey: false },
                " for automated customer support and ",
                { text: "visa eligibility assessment", isKey: false },
                ". Engineered an ",
                { text: "AI-powered trip builder", isKey: false },
                " to enhance user experience and personalization."
            ],
            type: "full-time contract"
        },
        {
            company: "MEST Africa",
            role: "Web Dev Trainee",
            period: "Sep. 2024 - Nov. 2024",
            stack: ["HTML", "Tailwind", "JavaScript", "React"],
            description: [
                "After my National Service, I enrolled in this 3-month training program where I gained knowledge and experience as a ",
                { text: "frontend web developer", isKey: true },
                " in ",
                { text: "HTML", isKey: false },
                ", ",
                { text: "Tailwind", isKey: false },
                ", ",
                { text: "JavaScript", isKey: false },
                ", and ",
                { text: "React", isKey: false },
                ". I built many projects, including my ",
                { text: "vet appointment booking web app", isKey: false },
                "."
            ],
            type: "training"
        },
        {
            company: "CalBank",
            role: "Operations Officer (National Service)",
            period: "Nov. 2023 - July 2024",
            stack: ["Banking Operations", "Customer Service", "Transaction Processing"],
            description: [
                "I processed ",
                { text: "bank transactions", isKey: true },
                " for customers and branch activities, handled ",
                { text: "cash", isKey: false },
                ", accounted for all transactions by ",
                { text: "balancing daily", isKey: false },
                ", and promoted bank products and services by ",
                { text: "educating customers", isKey: false },
                "."
            ],
            type: "national service"
        },
        {
            company: "Toyota Ghana Company Limited",
            role: "IT Systems Administrator (Intern)",
            period: "Oct. 2022 - Dec. 2022 & May 2023",
            stack: ["IT Infrastructure", "System Administration", "Network Configuration"],
            description: [
                "I managed ",
                { text: "IT infrastructure", isKey: true },
                " and ensured ",
                { text: "system reliability", isKey: false },
                " through regular ",
                { text: "performance monitoring", isKey: false },
                " and ",
                { text: "troubleshooting", isKey: false },
                ". I also collaborated with ",
                { text: "telecom", isKey: false },
                " and ",
                { text: "CCTV installation", isKey: false },
                " personnel to configure devices on the premises."
            ],
            type: "internship"
        }
    ];

    return (
        <section id="experience" className="min-h-screen px-4 lg:px-[8%] py-12 relative">
            {/* Enhanced gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#DC143C]/5 via-white to-[#DC143C]/5"></div>
            
            <div className="max-w-6xl mx-auto relative">
                {/* Centered Header */}
                <motion.h3 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl lg:text-4xl font-bold text-center mb-12"
                >
                    My Work Experience
                </motion.h3>

                {/* Experience Cards */}
                <div className="space-y-6 mb-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 relative">
                                {/* Tech-inspired corner accents */}
                                <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#DC143C]/30"></div>
                                <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#DC143C]/30"></div>
                                <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#DC143C]/30"></div>
                                <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#DC143C]/30"></div>

                                {/* Header with accent color */}
                                <div className="p-4 lg:p-6 border-b border-gray-100 bg-gradient-to-r from-[#DC143C]/5 to-transparent">
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-2">
                                        <div>
                                            <h4 className="text-xl font-bold text-gray-800">{exp.role}</h4>
                                            <p className="text-[#DC143C] font-medium">{exp.company}</p>
                                        </div>
                                        <span className="text-sm text-gray-500">{exp.period}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4 lg:p-6">
                                    <div className="text-gray-600 mb-4">
                                        {exp.description.map((part, i) => (
                                            typeof part === 'string' ? (
                                                <span key={i}>{part}</span>
                                            ) : (
                                                <span 
                                                    key={i} 
                                                    className="highlight bg-[#DC143C]/10 text-[#DC143C] px-1 rounded min-w-[120px] inline-block"
                                                >
                                                    <TypeAnimation
                                                        sequence={[
                                                            part.text,
                                                            2000,
                                                            part.isKey ? "" : part.text,
                                                            1000,
                                                            part.isKey ? part.text : part.text,
                                                        ]}
                                                        wrapper="span"
                                                        speed={50}
                                                        cursor={false}
                                                    />
                                                </span>
                                            )
                                        ))}
                                    </div>
                                    
                                    {/* Stack Tags with enhanced styling */}
                                    <div className="flex flex-wrap gap-2">
                                        {exp.stack.map((skill, i) => (
                                            <span
                                                key={i}
                                                className="px-3 py-1 text-sm bg-[#DC143C]/5 text-[#DC143C] rounded-full border border-[#DC143C]/10 font-mono"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Code-style Footer with accent */}
                                    <div className="mt-4 pt-4 border-t border-gray-100">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span className="w-3 h-3 rounded-full bg-[#DC143C] animate-pulse"></span>
                                            <code className="font-mono">{exp.type}</code>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CV Button at bottom */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center"
                >
                    <button className="h-12 px-8 rounded-full font-bold flex items-center gap-2 border-2 border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white transition-all duration-300 mx-auto shadow-lg hover:shadow-xl bg-white">
                        <a
                            target="_blank"
                            href="/Benedicta Edinam Ami Davour Resume.pdf"
                            download="Benedicta_Davour_Resume.pdf"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                        >
                            Download CV
                            <img src={download} alt="Download icon" className="w-4 h-4" />
                        </a>
                    </button>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;
