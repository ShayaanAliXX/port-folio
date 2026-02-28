import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-border bg-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-sm text-text-secondary">
                        © {year}{" "}
                        <span className="font-medium text-text">{personalInfo.name}</span>.
                        All rights reserved.
                    </div>

                    <div className="flex items-center gap-4">
                        <a
                            href={personalInfo.social.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-light hover:text-primary transition-colors duration-200"
                            aria-label="GitHub"
                        >
                            <FaGithub size={18} />
                        </a>
                        <a
                            href={personalInfo.social.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-text-light hover:text-primary transition-colors duration-200"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={18} />
                        </a>
                    </div>

                    <div className="text-xs text-text-light flex items-center gap-1">
                        Built with <FaHeart size={10} className="text-red-400" /> by Shayan
                    </div>
                </div>
            </div>
        </footer>
    );
}
