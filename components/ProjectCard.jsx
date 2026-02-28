import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group bg-bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300"
        >
            {/* Gradient Header */}
            <div className="h-48 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent relative flex items-center justify-center">
                <div className="text-6xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors duration-300 select-none">
                    {project.title.charAt(0)}
                </div>
                <div className="absolute top-4 right-4 text-xs font-medium text-text-secondary bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-full">
                    {project.year}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <h3 className="text-lg font-semibold text-text group-hover:text-primary transition-colors duration-200">
                    {project.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                    {project.description}
                </p>

                {/* Features (if present) */}
                {project.features && (
                    <ul className="mt-3 space-y-1">
                        {project.features.slice(0, 3).map((feature, i) => (
                            <li
                                key={i}
                                className="text-xs text-text-secondary flex items-start gap-1.5"
                            >
                                <span className="text-primary mt-0.5">▸</span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                )}

                {/* Tech Stack */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2.5 py-1 text-xs font-medium text-primary bg-primary/5 rounded-full"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="mt-5 flex items-center gap-3 pt-4 border-t border-border">
                    <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                        <FaGithub size={16} />
                        Code
                    </a>
                    <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-sm font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                    >
                        <FaExternalLinkAlt size={14} />
                        Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
}
