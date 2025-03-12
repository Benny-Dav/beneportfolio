import { Stacks } from "../constants";
import Slider from "react-slick";

const Skills = () => {
    var settings = {
        arrows: false,  
        dots: false,
        infinite: true,
        speed: 5000,  // Slower, smoother transition
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, 
        centerMode: true, 
        centerPadding: "5%", // Adjust this to increase/decrease spacing
        pauseOnHover: false,
        cssEase: "linear",
        responsive:[
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1,
                    centerPadding:"5%"
                }
            }
        ]
    };

    return (
        <section id="skills" className="h-[70vh] lg:h-[100vh] lg:px-[8%] px-8 py-12 text-black">
            {/* heading */}
            <div className="text-center flex flex-col gap-4 mb-12">
                <h3 className="text-4xl lg:text-4xl font-bold leading-tight">My Skills</h3>
                <p className="text-lg">
                    I use a combination of these effective and up-to-date tools and technologies to create the best websites for my clients.
                </p>
            </div>

            {/* Slider */}
            <Slider {...settings} className=" lg:h-[80%]">
                {Stacks.SKILLS.map((skill, index) => (
                    <div key={skill.title} className=""> {/* Adds space between slides */}
                        <div className="w-60 rounded-full border-2 border-black shadow-lg flex flex-col items-center justify-center py-32 text-center hover:cursor-pointer hover:text-[#DC143C] hover:border-[#DC143C]">
                            <div className="w-16 h-16 flex items-center justify-center rounded-full mx-auto bg-white">
                                <img src={skill.icon} alt={skill.text} className="w-12 h-12" />
                            </div>
                            <h3 className="mt-3 text-lg font-bold">{skill.text}</h3>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
};

export default Skills;
