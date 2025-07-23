import React, { useState } from 'react';
import proj2 from "../assets/images/BarkBox.png";
import proj1 from "../assets/images/oceanViewHotel.png";
import proj3 from "../assets/images/payne.png";
import proj4 from "../assets/images/fc.png";

const projects = [
    {
        image: proj1,
        title: "Hotel Management System",
        description: "Hotel Website with Online Booking System and Concierge Services Request,and Admin Dashboard for booking and room management.",
        path: "https://hotelsample1ovh.netlify.app/",
        tags: ["Room Booking", "Hotel Management", "Admin Dashboard"],
        category: "Web Applications"
    },
    {
        image: proj2,
        title: "BarkBoxGh",
        description: "An appointment booking app for dog owners to find and book appointments with vets and other dog professionals.",
        path: "https://barkboxgh.netlify.app/",
        tags: ["Appointment Booking", "Dashboard"],
        category: "Web Applications"
    },
    {
        image: proj3,
        title: "PayneIV Photography",
            description: "A landing page website for a photographer to display their portfolio and allow users to schedule a session",
            path: "https://cerulean-sable-f1dd05.netlify.app/",
        tags: ["Session Scheduling", "Landing Page"],
        category: "Landing Pages"
    },
    {
        image: proj4,
        title: "Football Club Website",
            description: "A landing page website for a football club to give information about the club and allow young talents to register for the academy",
            path: "https://demoforfc.netlify.app/",
        tags: ["Landing Page"],
        category: "Landing Pages"
    },
];

const categories = ["All", "Landing Pages", "Web Applications"];

const Portfolio = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredProjects = projects.filter(project => 
        activeCategory === "All" || project.category === activeCategory
    );

    return (
        <section id="portfolio" className="min-h-screen lg:px-[8%] px-8 py-12">
            <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center mb-8">My Top Projects</h3>
            
            {/* Category Tabs */}
            <div className="flex justify-center gap-4 mb-12">
                {categories.map((category) => (
                    <button
                        key={category}
                        onClick={() => setActiveCategory(category)}
                        className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                            activeCategory === category
                                ? "bg-[#DC143C] text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className='space-y-8'>
                {filteredProjects.map((project, index) => (
                    <div key={index} 
                        onClick={() => window.open(project.path, "_blank")}
                        className='rounded-xl border-2 border-black hover:border-[#DC143C] flex flex-col lg:flex-row p-4 cursor-pointer transform transition-all duration-300 hover:scale-[1.02]'>
                        {/* image container with fixed aspect ratio */}
                        <div className='relative rounded-xl w-full lg:w-[40%] min-w-[300px]'>
                            <div className='aspect-[16/9] w-full'>
                                <img 
                                    src={project.image} 
                                    alt={project.title} 
                                    className='absolute inset-0 w-full h-full object-cover rounded-xl'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col lg:px-6 mt-4 lg:mt-0 lg:w-[60%]'>
                            {/*tags */}
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {project.tags.map((tag, index) => (
                                    <span 
                                        key={index} 
                                        className='inline-block px-3 py-1 text-sm font-semibold bg-[#DC143C] text-white rounded-lg whitespace-nowrap'
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            {/* text */}
                            <div>
                                <h3 className='text-2xl font-bold mb-3'>{project.title}</h3>
                                <p className='text-gray-700 leading-relaxed'>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}

                {filteredProjects.length === 0 && (
                    <div className="text-center py-12 text-gray-500">
                        No projects found in this category yet.
                    </div>
                )}
            </div>
        </section>
    );
}

export default Portfolio;
