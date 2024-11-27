import { S } from "../constants";

const Skills = () => {
    return (
        <section id="skills-section" className="h-auto lg:h-[100vh] py-12 lg:py-0 lg:overflow-y-hidden lg:px-[15%] px-[3%]">
            <div className="flex text-4xl text-center items-center justify-center font-bold lg:h-[10%] lg:mt-0 w-full bg-[#EE9C96] lg:mb-[1em] text-white rounded-xl shadow-md ">
                <h2>My Stacks</h2>
            </div>
            <div className="w-full lg:h-[15%] lg:w-full text-center pt-[2em] mb-[1em]">
                    
                    <p className="text-lg lg:text-xl text-[#666]">
                        I use a combination of these effective and up-to-date tools and technologies to create the best websites for my clients.
                    </p>
                </div>
            <div
                className="h-full w-[90%] mx-auto flex flex-col justify-between items-center gap-8 "
            >
                {/* Skills Text Section */}
                

                {/* Skills Cards Section */}
                <div id="skills-cards" className="w-full lg:w-[55%] grid grid-cols-2 gap-6 lg:gap-8">
                    {S.SKILLS.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="border rounded-lg shadow-lg bg-white transition-transform transform hover:scale-105 hover:shadow-2xl p-6 flex flex-col items-center justify-between"
                            >
                                <span className="flex items-center justify-center h-[70%] w-full mb-4">
                                    <img
                                        className="h-full max-h-[60px] lg:max-h-[80px] object-contain"
                                        src={skill.icon}
                                        alt={skill.text}
                                    />
                                </span>
                                <h3 className="text-center font-semibold text-lg lg:text-xl text-[#333]">{skill.text}</h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
