import React from 'react';
import Slider from "../components/Slider";
import pic1 from "../assets/images/FlamingoSPA-SHOT.png";
import pic2 from "../assets/images/ERNESTEstates-SHOT.png";
import pic3 from "../assets/images/BabyNameGen-SHOT.png";

const images = [
    {
        image: pic1,
        description: "Website for Flamingo SPA and Salon.",
        path: "https://benny-dav.github.io/FlamingoSPAandSalon/"
    },
    {
        image: pic2,
        description: "Website for Real Estate Company.",
        path: "https://benny-dav.github.io/real-estate/"
    },
    {
        image: pic3,
        description: "Web App that generates random baby names by gender.",
        path: "https://benny-dav.github.io/BabyNameGenerator/"
    },
];

const Portfolio = () => {
    return (
        <section id="portfolio-section" className="lg:h-[100vh] mb-[5%]">
            <h2 id="portfolio-h2" className="text-[2em] lg:text-[2.5em] font-bold text-center mb-6">
                My Portfolio
            </h2>

            <div id="slider-area" className="w-full lg:ml-auto lg:mr-auto lg:h-[60%]">
                <Slider images={images} />
            </div>
        </section>
    );
}

export default Portfolio;
