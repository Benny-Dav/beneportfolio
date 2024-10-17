
import { S } from "../constants";


const Skills = () => {
    return (
        <section id="skills-section" className="h-[100vh]">
            <div id="skills-flex" className="h-[80%] w-[70%]  ml-auto mr-auto flex justify-content align-center">
                <div id="skills-txt" className="w-[40%] mt-[10%] h-[100%]">
                    <h1 className="text-[2em] font-bold mb-[0.6em]">My Web Developer Skillset Includes...</h1>
                    <p>I use a combination of these effective and up-to-date tools and technologies to create the best bespoke website for my clients.</p>
                </div>
                <div id="skills-cards" className="w-[60%] ml-[10%] h-[100%] grid grid-cols-2">
                    {
                        S.SKILLS.map((skill, index) => {
                            return (
                                <div key={index} className="border shadow-lg h-[80%] w-[100%] flex flex-col">
                                    <span className="h-[80%] w-[100%] p-[10%]">


                                        <img className="h-[100%] ml-[17%] " src={skill.icon} alt={skill.text} />

                                    </span>
                                    <h3 className="text-center font-bold">{skill.text}</h3>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}
export default Skills;