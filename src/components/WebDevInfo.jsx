
import codingGif from "../assets/images/codingGif.gif";
const Webdev = () => {
    return (
        <section id="webdev-info"
            className="lg:px-[15%] h-[100vh] lg:h-[100vh] overflow-x-hidden overflow-y-hidden lg:pt-[5%]"
        >
            <div className="text-4xl text-center items-center justify-center font-bold lg:h-[10%] lg:mt-0 w-full bg-[#EE9C96] lg:mb-[1em] text-white rounded-xl shadow-md lg:flex hidden">
                <h2>What I Do</h2>
            </div>
        
            <div className="grid grid-rows-2 lg:grid-cols-2 lg:mx-auto lg:max-w-full gap-x-[5%]">
                {/* Image Div */}
            <div id="" className="w-full lg:h-[70%] bg-cover bg-center px-[10%]">
                {/* Image or background image for webdev-img */}
                <img src={codingGif} alt="" className=""/>
            </div>

            {/* Text Div */}
            <div id="hi-there-text" className="flex flex-col gap-y-4 w-full items-center lg:items-start text-center lg:text-left">
                <div className="w-[90%] lg:w-[80%] mt-8 lg:mt-[15%]">
                    <h2 className=" lg:block font-bold text-[1.6em] mb-4">
                        Need a Website?<br /> Let's Bring Your Vision to Life!
                    </h2>
                    <p className=" lg:block mb-4 text-base">
                    Whether you need a stunning portfolio to showcase your skills, an engaging landing page to highlight your product, or a professional website for your online store, I can turn your ideas into reality. Let's create a site that stands out and elevates your brand.
                    </p>
                    <a href="#contact">
                    <button className="lg:hidden h-12 w-full rounded-sm text-white font-medium bg-[#DC143C]">
                        Contact Me
                    </button>
                    </a>
                </div>
            </div>
            </div>
            
        </section>
    );
};

export default Webdev;
