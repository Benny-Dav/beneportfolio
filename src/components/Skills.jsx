import { S } from "../constants";

const Skills = () => {
    return (
        <section id="skills-section" className="h-auto lg:h-[100vh] py-12 lg:py-16 bg-[#FFEFD5]">
            <div
                id="skills-flex"
                className="h-full w-[90%] lg:w-[80%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12"
            >
                {/* Skills Text Section */}
                <div id="skills-txt" className="w-full lg:w-[45%] text-center lg:text-left">
                    <h1 className="text-[1.8em] lg:text-[2.5em] font-bold text-[#333] mb-4 tracking-wide">
                        My Web Developer Skillset Includes...
                    </h1>
                    <p className="text-lg lg:text-xl text-[#666]">
                        I use a combination of these effective and up-to-date tools and technologies to create the best bespoke websites for my clients.
                    </p>
                </div>

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
