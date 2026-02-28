import { useState, useEffect } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { personalInfo } from "../data/personalInfo";

const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = () => setIsOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <a
                        href="#home"
                        className="text-xl font-bold text-text tracking-tight hover:text-primary transition-colors"
                    >
                        {personalInfo.name.split(" ")[0]}
                        <span className="text-primary">.</span>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="px-3 py-2 text-sm font-medium text-text-secondary hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="ml-3 px-4 py-2 text-sm font-medium text-white bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md"
                        >
                            Hire Me
                        </a>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 pb-4" : "max-h-0"
                        }`}
                >
                    <div className="flex flex-col gap-1 pt-2">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={handleLinkClick}
                                className="px-3 py-2.5 text-sm font-medium text-text-secondary hover:text-primary rounded-lg hover:bg-primary/5 transition-all duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            onClick={handleLinkClick}
                            className="mt-2 px-4 py-2.5 text-sm font-medium text-white text-center bg-primary rounded-lg hover:bg-primary-dark transition-all duration-200"
                        >
                            Hire Me
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
