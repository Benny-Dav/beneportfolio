import React from 'react';
import proj1 from "../assets/images/BarkBox.png";
import proj2 from "../assets/images/oceanViewHotel.png";

const projects = [
    {
        image: proj2,
        title: "Hotel Management System",
        description: "Hotel Website with Online Booking System and Concierge Services Request,and Admin Dashboard for booking and room management.",
        path: "https://hotelsample1ovh.netlify.app/",
        tags:["Room Booking", "Hotel Management", "Admin Dashboard"]
    },
    {
        image: proj1,
        title: "BarkBoxGh",
        description: "An appointment booking app for dog owners to find and book appointments with vets and other dog professionals.",
        path: "https://barkboxgh.netlify.app/",
        tags: ["Appointment Booking", "Dashboard"]
    }
    

];

const Portfolio = () => {

    return (
        <section id="portfolio" className="min-h-screen lg:px-[8%] px-8 py-12">
            <h3 className="text-4xl lg:text-4xl font-bold leading-tight text-center mb-8">My Top Projects</h3>

            {/* <div className='grid lg:grid-cols-2 grid-rows-auto gap-x-[5%] gap-y-[5%] border'>
                {projects.map((project,index)=>(
                    <div key={index}>
                        <img src={project.image} alt="" />
                        <p>{project.description}</p>
                        <a href={project.path} target="_blank" rel="noopener noreferrer" className='text-[#DC143C]'>Visit </a>
                    </div>
                ))
                } */}

            <div className='space-y-8'>
                {/* project card */}
                {projects.map((project, index) => (
                    <div key={index} 
                    onClick={()=>window.open(project.path,"_blank")}
                    className='rounded-xl border-2 border-black hover:border-[#DC143C] flex flex-col lg:flex-row p-4 cursor-pointer'>
                        {/* image */}
                        <div className='rounded-xl h-80 w-full lg:w-[60%]'>
                            <img src={project.image} alt="" className=' object-cover object-left h-full rounded-xl' />
                        </div>



                        <div className='flex flex-col  lg:px-6 mt-4'>
                            {/*tags */}
                            <div className='flex gap-4 text-white mb-8 '>
                                {project.tags.map((tag,index)=>(
                                    <p key={index} className='border p-2 font-semibold bg-[#DC143C] rounded-xl'>{tag}</p>
                                ))}

                            </div>
                            {/* text */}
                            <div>
                                <h3 className='text-2xl font-bold mb-2'>{project.title}</h3>
                                <p>{project.description}</p>
                            </div>

                        </div>

                    </div>
                ))}

            </div>
        </section>
    );
}

export default Portfolio;
