import { motion } from "framer-motion";

export default function SectionHeading({ title, subtitle }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
        >
            <h2 className="text-3xl sm:text-4xl font-bold text-text">{title}</h2>
            {subtitle && (
                <p className="mt-3 text-text-secondary max-w-xl mx-auto">{subtitle}</p>
            )}
            <div className="mt-4 mx-auto w-16 h-1 bg-gradient-to-r from-primary to-primary-light rounded-full" />
        </motion.div>
    );
}
