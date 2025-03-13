import download from "../assets/images/download.png"
const AboutMe = () => {
    return (
        <section id="about"
            className="h-[100vh] w-full flex flex-col lg:flex-row lg:justify-between px-6 lg:px-[8%] py-8 lg:pt-[10%] md:mb-[15%]"
        >
            <div className="w-[80%] h-[30%] md:h-[50%] md:w-[40%] lg:h-[90%] mx-auto mb-8">
                <div className="bg-[#dc143c] text-right rounded-lg w-[80%] mx-auto h-full">
                    <p className="text-white text-xl rotate-90
                 ml-[-95%]">BENEDICTA DAVOUR</p>
                    <h1 className="text-white text-[120px] lg:text-[230px] font-extrabold mr-[-5%] ">
                        1+
                    </h1>
                    <p className="text-white font-bold text-lg mt-[-2em]">Years of Experience</p>

                </div>
            </div>

            <div className="mb-4 flex flex-col gap-4">
                <p className=" text-2xl mb-4 lg:mb-0 md:text-center"><span className="font-bold text-[#DC143C]">-</span>About Me</p>
                <h3 className="text-[2.5em] lg:text-4xl font-bold leading-tight md:text-center">Who is Benedicta <br></br> Davour?</h3>
                <p className="md:w-[80%] md:mx-auto md:mb-4">
                    I am a impact driven frontend developer with an eye for detail, aesthetic and functionality. My main goal is to create the best solution to digitalise your world, business or portfolio.
                </p>

                <div className="flex justify-between items-center mb-8 lg:mb-2 lg:w-[50%] md:w-[50%] md:mx-auto">
                    <div>
                        <h3 className="font-semibold text-5xl">10+</h3>
                        <h4>Projects Completed</h4>
                    </div>

                    <div>
                        <h3 className="font-semibold text-5xl">3+</h3>
                        <h4>Industries Covered</h4>
                    </div>
                </div>

                {/* download btn */}
                <div className="">

                    <button className="h-14 w-[50%] mx-auto lg:w-[30%] lg:mx-0 lg:px-4 px-2 rounded-full font-bold flex justify-center gap-2 items-center border-black border-2 ">
                        <a target="_blank"
                            href="/Benedicta Edinam Ami Davour Resume.pdf"
                            download="Benedicta_Davour_Resume.pdf"
                            rel="noopener noreferrer"
                            className="w-full"
                        >
                            Download CV
                        </a>
                        <img src={download} alt="" className="object-cover " />
                    </button>


                </div>
            </div>


        </section>
    );
};

export default AboutMe;
