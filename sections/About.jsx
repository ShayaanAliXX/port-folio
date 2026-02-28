import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

export default function About() {
    return (
        <section id="about" className="py-20 bg-bg-alt">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="About Me"
                    subtitle="Get to know me and what drives my passion for technology"
                />

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <p className="text-text-secondary leading-relaxed text-base">
                            {personalInfo.about}
                        </p>
                        <p className="mt-4 text-text-secondary leading-relaxed text-base">
                            I&apos;m currently in my final semester pursuing a Diploma in
                            Computer Science and Engineering. I&apos;m eager to contribute to
                            real-world projects and continuously learn new technologies.
                        </p>
                    </motion.div>

                    {/* Highlights */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-3"
                    >
                        {personalInfo.highlights.map((item, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 p-3 rounded-xl bg-bg-card border border-border hover:border-primary/20 transition-colors duration-200"
                            >
                                <FaCheckCircle className="text-primary mt-0.5 shrink-0" />
                                <span className="text-sm text-text-secondary">{item}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
