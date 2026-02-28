import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { technicalSkills, softSkills } from "../data/skills";

function SkillBadge({ skill, index }) {
    const Icon = skill.icon;
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.03 }}
            className="group flex items-center gap-2.5 px-4 py-3 bg-bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-200"
        >
            <Icon
                size={20}
                style={{ color: skill.color || "var(--color-primary)" }}
                className="shrink-0"
            />
            <span className="text-sm font-medium text-text group-hover:text-primary transition-colors duration-200">
                {skill.name}
            </span>
        </motion.div>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Skills & Technologies"
                    subtitle="Tools and technologies I work with"
                />

                {/* Technical Skills */}
                <div className="mb-12">
                    <h3 className="text-lg font-semibold text-text mb-5 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-primary rounded-full" />
                        Technical Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                        {technicalSkills.map((skill, i) => (
                            <SkillBadge key={skill.name} skill={skill} index={i} />
                        ))}
                    </div>
                </div>

                {/* Soft Skills */}
                <div>
                    <h3 className="text-lg font-semibold text-text mb-5 flex items-center gap-2">
                        <span className="w-8 h-0.5 bg-primary rounded-full" />
                        Soft Skills
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                        {softSkills.map((skill, i) => (
                            <SkillBadge key={skill.name} skill={skill} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
