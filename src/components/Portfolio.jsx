import React from 'react';
import Slider from "../components/Slider";
import pic1 from "../assets/images/FlamingoSPA-SHOT.png";
import pic2 from "../assets/images/ERNESTEstates-SHOT.png";
import pic3 from "../assets/images/BabyNameGen-SHOT.png"


const images = [
   pic1,pic2,pic3
  
];
const portLinks =[
    "https://benny-dav.github.io/FlamingoSPAandSalon/",
    "https://benny-dav.github.io/real-estate/",
    "https://benny-dav.github.io/BabyNameGenerator/"
];
const portTexts =[
    "Website for Flamingo SPA and Salon.",
    "Website for Real Estate Company.",
    "Web App that generates random baby names based on specified gender."
];
const Portfolio = () => {
    return (
        <section className="h-[100vh] mb-[3em]">
            <h2 className="text-[2em] font-bold text-center">My Portfolio</h2>

            <div>
                <Slider images={images} links={portLinks} descriptions={portTexts} />
               
            </div>

        </section>
    )
}
export default Portfolio;