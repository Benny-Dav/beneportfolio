import React from 'react';
import proj1 from "../assets/images/BarkBox.png";
import proj2 from "../assets/images/BabyNameGen-SHOT.png";

const projects = [
    {
        image: proj1,
        description: "BarkBoxGh",
        path: "https://barkboxgh.netlify.app/"
    },
    {
        image: proj2,
        description: "Web App that generates random baby names by gender.",
        path: "https://benny-dav.github.io/BabyNameGenerator/"
    },
    // {
    //     image: proj3,
    //     description: "30 Days of Javascript",
    //     path: "https://benny-dav.github.io/BabyNameGenerator/"
    // }
];

const Portfolio = () => {
    return (
        <section id="works" className="lg:h-[100vh] pt-[5%] mb-[5%] lg:overflow-y-hidden lg:px-[15%] px-[3%] bg-[#ffffff]">
            <div className="text-4xl text-center items-center justify-center font-bold lg:h-[10%] lg:mt-0 w-full bg-[#EE9C96] mb-[1em] text-white rounded-xl shadow-md bg-">
                <h2>My Work</h2>
            </div>

            <div className='grid lg:grid-cols-2 grid-rows-auto gap-x-[5%] gap-y-[5%]'>
                {projects.map((project,index)=>(
                    <div key={index}>
                        <img src={project.image} alt="" />
                        <p>{project.description}</p>
                        <a to={project.path} target="_blank" rel="noopener noreferrer" className='text-[#DC143C]'>Visit </a>
                    </div>
                ))
                }
            </div>
        </section>
    );
}

export default Portfolio;
