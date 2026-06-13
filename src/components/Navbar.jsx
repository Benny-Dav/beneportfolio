import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Button from "./ui/Button";

const sections = [
    { id: "home", label: "Home" },
    { id: "outcomes", label: "Outcomes" },
    { id: "case-studies", label: "Case Studies" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "hire-me", label: "Contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleClick = (e, section) => {
        e.preventDefault();
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        setActiveSection(section);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            let currentSection = "home";
            sections.forEach(({ id }) => {
                const sectionElement = document.getElementById(id);
                if (sectionElement) {
                    const rect = sectionElement.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        currentSection = id;
                    }
                }
            });
            setActiveSection(currentSection);
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
        <header className="fixed top-0 z-[80] h-16 w-full border-b border-[#E5E7EB] bg-white md:h-[72px]">
            <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-5 md:px-8">
                <a href="#home" onClick={(e) => handleClick(e, "home")} className="text-4xl font-extrabold text-[#111111]">
                    am<span className="text-[#DC143C]">i</span>
                </a>

                <div className="hidden items-center gap-7 md:flex">
                    {sections.map((section) => (
                        <a
                            key={section.id}
                            href={`#${section.id}`}
                            onClick={(e) => handleClick(e, section.id)}
                            className={`text-sm font-bold transition-colors ${
                                activeSection === section.id ? "text-[#DC143C]" : "text-[#4B5563] hover:text-[#111111]"
                            }`}
                        >
                            {section.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:block">
                    <Button href="#hire-me" onClick={(e) => handleClick(e, "hire-me")} className="h-10 px-4">
                        Hire Me
                    </Button>
                </div>

                <button
                    className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E5E7EB] md:hidden"
                    onClick={toggleMenu}
                    aria-label="Open navigation menu"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

        </header>

            {isOpen && (
                <div className="fixed inset-x-0 bottom-0 top-16 z-[70] overflow-y-auto bg-white px-5 py-6 shadow-2xl md:hidden">
                    <div className="flex flex-col gap-2">
                        {sections.map((section) => (
                            <a
                                key={section.id}
                                href={`#${section.id}`}
                                onClick={(e) => handleClick(e, section.id)}
                                className={`rounded-lg border border-[#E5E7EB] px-4 py-4 text-lg font-bold ${
                                    activeSection === section.id ? "bg-[#FDECEF] text-[#DC143C]" : "text-[#111111]"
                                }`}
                            >
                                {section.label}
                            </a>
                        ))}
                    </div>
                    <div className="mt-5 grid gap-3">
                        <Button href="/Benedicta_Davour_Professional_Resume.pdf" variant="secondary">
                            Resume
                        </Button>
                        <Button href="#hire-me" onClick={(e) => handleClick(e, "hire-me")}>
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
