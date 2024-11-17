const Webdev = () => {
    return (
        <section
            id="webdev-info"
            className="lg:h-[100vh] lg:grid lg:grid-cols-2 lg:mx-auto max-w-full overflow-x-hidden"
        >
            {/* Image Div */}
            <div id="hi-there" className="w-full lg:h-[70%] bg-cover bg-center webdev-img ml-[20%]">
                {/* Image or background image for webdev-img */}
            </div>

            {/* Text Div */}
            <div id="hi-there-text" className="flex flex-col gap-y-4 w-full items-center lg:items-start text-center lg:text-left">
                <div className="w-[90%] lg:w-[60%] mt-8 lg:mt-[15%]">
                    <h2 className="hidden lg:block lg:font-bold lg:text-[1.6em] mb-4">
                        Need a Website?<br /> I can help you.
                    </h2>
                    <p className="hidden lg:block lg:mb-4 lg:text-base">
                        If you're looking for a portfolio website to boost your professional image, a landing-page-website for
                        your product, or a website for your online store, I've got you covered.
                    </p>
                    <button className="lg:h-12 lg:w-32 lg:rounded-sm lg:text-white lg:font-medium lg:bg-black">
                        Contact Me
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Webdev;
