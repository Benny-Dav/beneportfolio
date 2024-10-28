const Webdev = () => {
    return (
        <section
            id="webdev-info"
            className="h-auto lg:h-[100vh] py-12 flex flex-col lg:flex-row justify-between gap-8 items-center"
        >
            {/* Image Div */}
            <div id="hi-there" className="w-full lg:w-[50%] h-[50vh] lg:h-[80%] bg-cover bg-center webdev-img">
                {/* Image or background image for webdev-img */}
            </div>

            {/* Text Div */}
            <div id="hi-there-text" className="flex flex-col gap-y-4 w-full lg:w-[50%] items-center lg:items-start text-center lg:text-left">
                <div className="w-[90%] lg:w-[60%] mt-8 lg:mt-[15%]">
                    <h2 className="font-bold text-[1.5em] lg:text-[1.6em] mb-4">
                        Need a Website?<br /> I can help you.
                    </h2>
                    <p className="mb-4 text-base">
                        If you're looking for a portfolio website to boost your professional image, a landing-page-website for
                        your product, or a website for your online store, I've got you covered.
                    </p>
                    <button className="h-12 w-32 rounded-sm text-white font-medium bg-black">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Webdev;
