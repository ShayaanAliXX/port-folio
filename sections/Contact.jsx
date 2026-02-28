import { useState } from "react";
import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
    FaPaperPlane,
} from "react-icons/fa";
import SectionHeading from "../components/SectionHeading";
import { personalInfo } from "../data/personalInfo";

const contactItems = [
    {
        icon: FaEnvelope,
        label: "Email",
        value: personalInfo.email,
        href: `mailto:${personalInfo.email}`,
    },
    {
        icon: FaPhone,
        label: "Phone",
        value: personalInfo.phone,
        href: `tel:${personalInfo.phone}`,
    },
    {
        icon: FaMapMarkerAlt,
        label: "Location",
        value: personalInfo.location,
        href: null,
    },
];

export default function Contact() {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const validate = () => {
        const errs = {};
        if (!form.name.trim()) errs.name = "Name is required";
        if (!form.email.trim()) errs.email = "Email is required";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
            errs.email = "Invalid email address";
        if (!form.message.trim()) errs.message = "Message is required";
        return errs;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const errs = validate();
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setSubmitted(true);
            setForm({ name: "", email: "", message: "" });
            setTimeout(() => setSubmitted(false), 4000);
        }
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (errors[e.target.name]) {
            setErrors({ ...errors, [e.target.name]: "" });
        }
    };

    return (
        <section id="contact" className="py-20 bg-bg-alt">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <SectionHeading
                    title="Get In Touch"
                    subtitle="Have a question or want to work together? Let's connect"
                />

                <div className="grid md:grid-cols-5 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="md:col-span-2 space-y-5"
                    >
                        {contactItems.map((item, i) => {
                            const Icon = item.icon;
                            const Wrapper = item.href ? "a" : "div";
                            return (
                                <Wrapper
                                    key={i}
                                    {...(item.href ? { href: item.href } : {})}
                                    className="flex items-center gap-4 p-4 bg-bg-card border border-border rounded-xl hover:border-primary/20 hover:shadow-md transition-all duration-200"
                                >
                                    <div className="w-10 h-10 flex items-center justify-center bg-primary/5 rounded-lg text-primary">
                                        <Icon size={18} />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-light font-medium uppercase tracking-wider">
                                            {item.label}
                                        </p>
                                        <p className="text-sm text-text font-medium">{item.value}</p>
                                    </div>
                                </Wrapper>
                            );
                        })}

                        {/* Socials */}
                        <div className="flex gap-3 pt-2">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-bg-card border border-border rounded-lg text-text-secondary hover:text-primary hover:border-primary/20 transition-all duration-200"
                            >
                                <FaGithub size={18} />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center bg-bg-card border border-border rounded-lg text-text-secondary hover:text-primary hover:border-primary/20 transition-all duration-200"
                            >
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        onSubmit={handleSubmit}
                        className="md:col-span-3 p-6 bg-bg-card border border-border rounded-2xl"
                        noValidate
                    >
                        {submitted && (
                            <div className="mb-5 p-3 bg-green-50 border border-green-200 text-green-700 text-sm rounded-lg font-medium">
                                ✓ Message sent successfully! I&apos;ll get back to you soon.
                            </div>
                        )}

                        <div className="space-y-4">
                            {/* Name */}
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-text mb-1.5"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={`w-full px-4 py-2.5 text-sm bg-bg border rounded-lg outline-none transition-all duration-200 placeholder:text-text-light focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.name ? "border-red-400" : "border-border"
                                        }`}
                                />
                                {errors.name && (
                                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                                )}
                            </div>

                            {/* Email */}
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-text mb-1.5"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="your@email.com"
                                    className={`w-full px-4 py-2.5 text-sm bg-bg border rounded-lg outline-none transition-all duration-200 placeholder:text-text-light focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.email ? "border-red-400" : "border-border"
                                        }`}
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium text-text mb-1.5"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your message..."
                                    rows={4}
                                    className={`w-full px-4 py-2.5 text-sm bg-bg border rounded-lg outline-none resize-none transition-all duration-200 placeholder:text-text-light focus:ring-2 focus:ring-primary/20 focus:border-primary ${errors.message ? "border-red-400" : "border-border"
                                        }`}
                                />
                                {errors.message && (
                                    <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30"
                            >
                                <FaPaperPlane size={14} />
                                Send Message
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}
