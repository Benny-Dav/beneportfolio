import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-[#E5E7EB] bg-white px-5 md:px-8">
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-10 sm:grid-cols-2 lg:grid-cols-3">
                <div>
                    <h2 className="mb-4 text-4xl font-extrabold text-[#111111]">
                        am<span className="text-[#DC143C]">i</span>
                    </h2>
                    <p className="max-w-xs text-sm leading-6 text-[#4B5563]">
                        Building business-focused web products, AI tools, booking
                        workflows, ecommerce flows, and dashboards.
                    </p>
                </div>

                <div>
                    <h2 className="mb-4 text-lg font-bold">Contact</h2>
                    <ul className="space-y-3 text-sm text-[#4B5563]">
                        <li>Accra, Ghana</li>
                        <li>
                            <a className="hover:text-[#DC143C]" href="mailto:benedictadavour777@gmail.com">
                                benedictadavour777@gmail.com
                            </a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h2 className="mb-4 text-lg font-bold">Links</h2>
                    <div className="flex space-x-3">
                        <a
                            href="https://www.linkedin.com/in/eba-davour"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#111111] transition hover:border-[#DC143C] hover:text-[#DC143C]"
                            aria-label="LinkedIn"
                        >
                            <Linkedin size={18} />
                        </a>
                        <a
                            href="https://github.com/Benny-Dav"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#111111] transition hover:border-[#DC143C] hover:text-[#DC143C]"
                            aria-label="GitHub"
                        >
                            <Github size={18} />
                        </a>
                        <a
                            href="mailto:benedictadavour777@gmail.com"
                            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#E5E7EB] text-[#111111] transition hover:border-[#DC143C] hover:text-[#DC143C]"
                            aria-label="Email"
                        >
                            <Mail size={18} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[#E5E7EB] py-4 text-center">
                <p className="text-xs text-[#6B7280]">
                    &copy; 2024-{currentYear} Benedicta Davour. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
