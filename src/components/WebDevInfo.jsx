const Webdev = () => {
    return (
        <section id="webdev-info" className="h-[100vh] py-[3em] flex justify-between gap-4">
            <div id="hi-there" className="w-[50%] h-[80%], webdev-img">
                
            </div>
            <div id="hi-there-text" className="flex flex-col gap-y-2 w-[50%]">
                <div className=" w-[60%] mt-[15%] ml-[10%]">
                <h2 className="font-bold text-[1.6em] mb-[1em]">Need a Website?<br/> I can help you. </h2>
                <p className="mb-[1em]">If you're looking for a portfolio website to boost your professional image, a landing-page-website for your product or a website for your online store, I've got you covered.</p>
                <button className=" h-[3em] w-[8em] rounded-sm text-[white] font-medium bg-black">Contact Me</button>
                </div>
                
            </div>
        </section>
    );
}

export default Webdev;