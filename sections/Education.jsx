import { motion } from "framer-motion";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { education } from "../data/education";

export default function Education() {
    return (
        <section id="education" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Education"
                    subtitle="My academic journey"
                />

                <div className="relative max-w-2xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-border" />

                    <div className="space-y-8">
                        {education.map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="relative pl-12 md:pl-16"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3.5 h-3.5 bg-primary rounded-full border-[3px] border-white shadow-sm shadow-primary/20" />

                                <div className="p-5 bg-bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-md transition-all duration-200">
                                    <div className="flex items-start justify-between gap-3 flex-wrap">
                                        <div className="flex items-center gap-2">
                                            <FaGraduationCap className="text-primary shrink-0" size={18} />
                                            <h3 className="font-semibold text-text">{item.degree}</h3>
                                        </div>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-full shrink-0">
                                            <FaCalendarAlt size={10} />
                                            {item.period}
                                        </span>
                                    </div>
                                    <p className="mt-1.5 text-sm text-text-secondary">
                                        {item.institution}
                                    </p>
                                    <p className="mt-1 text-xs text-text-light">
                                        {item.description}
                                    </p>
                                    <div className="mt-2 inline-flex px-2.5 py-0.5 text-xs font-medium text-primary-dark bg-primary/10 rounded-full">
                                        {item.status}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
