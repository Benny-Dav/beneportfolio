import { S } from "../constants";

const Skills = () => {
    return (
        <section id="skills-section" className="h-auto lg:h-[100vh] py-12 lg:py-0">
            <div
                id="skills-flex"
                className="h-full w-[90%] lg:w-[70%] mx-auto flex flex-col lg:flex-row justify-between items-center gap-8"
            >
                {/* Skills Text Section */}
                <div id="skills-txt" className="w-full lg:w-[40%] mt-8 lg:mt-[10%] h-auto lg:h-full text-center lg:text-left">
                    <h1 className="text-[1.8em] lg:text-[2em] font-bold mb-4">
                        My Web Developer Skillset Includes...
                    </h1>
                    <p className="text-base">
                        I use a combination of these effective and up-to-date tools and technologies to create the best bespoke website for my clients.
                    </p>
                </div>

                {/* Skills Cards Section */}
                <div id="skills-cards" className="w-full lg:w-[60%] h-auto lg:h-full grid grid-cols-2 gap-4 lg:gap-6">
                    {S.SKILLS.map((skill, index) => {
                        return (
                            <div
                                key={index}
                                className="border shadow-lg h-[140px] lg:h-[200px] flex flex-col items-center p-4"
                            >
                                <span className="flex items-center justify-center h-[70%] w-full mb-2">
                                    <img
                                        className="h-full max-h-[60px] lg:max-h-[80px]"
                                        src={skill.icon}
                                        alt={skill.text}
                                    />
                                </span>
                                <h3 className="text-center font-bold text-sm lg:text-base">
                                    {skill.text}
                                </h3>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Skills;
