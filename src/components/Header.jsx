import Navbar from "./Navbar";

const Header = () =>{
    return(
        <div  className="h-[100vh] , header">
            <Navbar/>
            <div id="header" className=" h-[90%] w-[50%] mt-[5%] pt-[10%] ml-[20%]">
                <h1 className="text-[3em] font-bold">Hi! I'm Bened<span className="text-[#DC143C]">i</span>cta Davour </h1>
                <h2 className="text-[3em] font-medium text-">Web Developer</h2>
                <p className="mt-[1em] text-[1em]">I create beautiful, effective and accessible websites for organizations and individuals to get their message out to the world.</p>
                <div id="header-btns" className="flex p-[2em] w-[70%] justify-between">
                    <a href="../assets/CV Benedicta Davour.pdf" download="BenedictaDavour-CV.pdf" rel="noopener noreferrer"><button className=" h-[3em] w-[8em] rounded-sm bg-[#DC143C] text-[white] font-bold bg-black" >Download CV</button></a>
                    <button className=" h-[3em] w-[8em] rounded-sm text-[white] font-bold bg-black">Hire Me</button>
                </div>
            </div>
        </div>
    );
}
export default Header;