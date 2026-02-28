import { motion } from "framer-motion";
import { FaArrowDown, FaEnvelope } from "react-icons/fa";
import { personalInfo } from "../data/personalInfo";

export default function Hero() {
    return (
        <section
            id="home"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(37,99,235,0.08),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(37,99,235,0.05),transparent_50%)]" />

            {/* Grid Pattern */}
            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(37,99,235,1) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,1) 1px, transparent 1px)",
                    backgroundSize: "60px 60px",
                }}
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 bg-primary/5 border border-primary/10 rounded-full text-sm text-primary font-medium">
                        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        Available for opportunities
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text leading-tight tracking-tight">
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                            {personalInfo.name.split(" ").slice(1).join(" ")}
                        </span>
                    </h1>

                    <p className="mt-4 text-lg sm:text-xl md:text-2xl font-medium text-text-secondary">
                        {personalInfo.title}
                    </p>

                    <p className="mt-4 text-base sm:text-lg text-text-light max-w-2xl mx-auto leading-relaxed">
                        {personalInfo.tagline}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group flex items-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-xl hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                        View Projects
                        <FaArrowDown
                            size={14}
                            className="group-hover:translate-y-0.5 transition-transform"
                        />
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 px-6 py-3 bg-white text-text font-medium rounded-xl border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 hover:-translate-y-0.5"
                    >
                        <FaEnvelope size={14} className="text-primary" />
                        Contact Me
                    </a>
                </motion.div>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 border-2 border-text-light/30 rounded-full flex justify-center">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="w-1.5 h-1.5 bg-primary rounded-full mt-2"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
