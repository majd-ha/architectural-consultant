import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Services = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            title: "Executive Coaching",
            subtitle: "Leadership",
            description: "Refine your leadership presence and navigate the complexities of high-stakes decision making. Our executive sessions are designed for senior leaders who demand precision and clarity in their professional evolution.",
            features: [
                "Visionary Leadership Development",
                "Emotional Intelligence Audits",
                "High-Stakes Communication Mastery"
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDUuiqa-0BtdBoXo_sHcOESsqtYQeYsNhvhuU_Xz0ohLJl-wC3QbnIf5rtzPhqQziG_GBCusSpk1_9dp7suzdCYgNwpLl1PQK0FQr1ouRGxv3TIIXZa7NJbhY3Hn4DEaZJ8jkhOgpJiZz87YdeERbfTc0iDOYny3Yn358P5OCS26L7z6oXnQHtuXHP7uKeHXCxZUGZI_jRWDAcgnoCSHTo8ul6X7_oOWqjQPkNGG_gTugMn1O6mWDsViDYm6npG2T7yBH4QFW_cz6g",
            imageSide: "right"
        },
        {
            title: "Growth Strategy",
            subtitle: "Scalability",
            description: "Transform market challenges into architectural opportunities. We dismantle traditional bottlenecks and rebuild your business model on foundations of sustainable, high-velocity growth.",
            features: [
                "Market Position Analysis",
                "Revenue Stream Optimization",
                "Operations Blueprinting"
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjoszgRxKw4D1SZOp8yLR6aJITB-CNAVGPirNc6u0AWODhdyQR0QcQXqxP17pWrt7ndt3tyJUALtyMzU7JwHtdZTRBO0vDTfgMLG-srEAoxm7YBDlK-spE2h0pMqvB00F2E63Og9lkPaCgkAvyr2XRe-ERznNDOa8ufcV2G3iU2uDUofSc4eMIBYgFBfU-ZDl-2GNoZaEBujlkWmA6JdKb8gO0XBrb_So_FLdMU__h6S8ar6eJZOrxp2w2N3dX9I3uBN_zNi6kSck",
            imageSide: "left",
            hasBg: true
        },
        {
            title: "Team Dynamics",
            subtitle: "Culture",
            description: "Architecture is a collaborative art. We optimize how your teams interact, align, and execute. By fostering a culture of high-trust accountability, we turn disparate talents into a unified force.",
            features: [
                "Conflict Resolution Frameworks",
                "Inter-Departmental Synergy",
                "Culture-as-a-Product Strategy"
            ],
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBoov3eFgCCJDRHjkpl1RQyACFmMUQswlFJD-SV6heBfToGZPWqz5o93s35z9NmHYP9OoPpvIdCr9GQEh39Q5w9XlFYWZJXBh60QMCjj0De5ecge8mW3RhyBGHN2WQQUr9SQm4nxPypYywocxmxQvyB6KWJgmv7gXgxTH6kPuDZ2xsuvYimqdNP9xS3TmdCTqdyUBJjgcbv9cge6e7Htjk9xPCzXmo-c5emxGHMEWvh_WOJffurh0S4p2aIa_iw_J5s7t0DgrCVLnM",
            imageSide: "right"
        }
    ];

    return (
        <main className="pt-32">
            {/* Hero Section */}
            <motion.header
                ref={heroRef}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="px-8 md:px-24 mb-32"
            >
                <div className="max-w-4xl">
                    <p className="font-label text-xs uppercase tracking-[0.2em] text-secondary mb-6 font-bold">
                        Expertise &amp; Guidance
                    </p>
                    <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-primary leading-[1.1] text-[#0F4C81]">
                        Strategic Coaching for Every Stage of Growth
                    </h1>
                    <div className="w-12 h-1 bg-secondary mt-12"></div>
                </div>
            </motion.header>

            {/* Services Grid */}
            <section className="space-y-48 mb-48">
                {services.map((service, index) => (
                    <ServiceCard
                        key={index}
                        service={service}
                        index={index}
                    />
                ))}
            </section>

            {/* Pricing / Inquiry Section */}
            <PricingSection />

            {/* FAQ Section */}
            <FAQSection />
        </main>
    );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1 }
    };

    const contentVariants = {
        hidden: { opacity: 0, x: service.imageSide === 'right' ? -30 : 30 },
        visible: { opacity: 1, x: 0 }
    };

    const orderClass = service.imageSide === 'right'
        ? "order-2 md:order-1"
        : "order-2 md:order-2";
    const imageOrderClass = service.imageSide === 'right'
        ? "order-1 md:order-2"
        : "order-1 md:order-1";
    const imageColClass = service.imageSide === 'right'
        ? "col-span-12 md:col-span-6 md:col-start-7"
        : "col-span-12 md:col-span-6";
    const contentColClass = service.imageSide === 'right'
        ? "col-span-12 md:col-span-5"
        : "col-span-12 md:col-span-5 md:col-start-8";

    return (
        <motion.div
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`grid grid-cols-12 gap-8 px-8 md:px-24 items-center ${service.hasBg ? 'bg-surface-container-low py-32 border-y border-slate-100' : ''
                }`}
        >
            {/* Content */}
            <motion.div
                variants={contentVariants}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={`col-span-12 ${contentColClass} ${orderClass}`}
            >
                <p className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 font-semibold">
                    {service.subtitle}
                </p>
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-8 text-[#0F4C81]">
                    {service.title}
                </h2>
                <p className="text-on-surface-variant body-lg mb-8 leading-relaxed">
                    {service.description}
                </p>
                <ul className="space-y-4 mb-10">
                    {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                            <span className="material-symbols-outlined text-secondary text-sm">
                                check_circle
                            </span>
                            <span className="text-on-surface font-medium">{feature}</span>
                        </li>
                    ))}
                </ul>
                <a
                    className="inline-block font-bold border-b-2 border-primary text-primary pb-1 hover:bg-primary/5 transition-colors cursor-pointer"
                    href="#"
                >
                    Learn More
                </a>
            </motion.div>

            {/* Image */}
            <motion.div
                variants={imageVariants}
                transition={{ duration: 0.7, delay: 0.3 }}
                className={`col-span-12 ${imageColClass} ${imageOrderClass} editorial-float overflow-hidden rounded-md shadow-xl border border-slate-100`}
            >
                <img
                    className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-600"
                    alt={service.title}
                    src={service.image}
                />
            </motion.div>
        </motion.div>
    );
};

// Pricing Section Component
const PricingSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="bg-[#0F4C81] py-32 text-on-primary"
        >
            <div className="px-8 md:px-24 text-center max-w-4xl mx-auto text-white">
                <h2 className="font-headline text-4xl md:text-5xl font-bold mb-8">
                    Ready to Refine Your Future?
                </h2>
                <p className="text-blue-100 text-xl mb-12 opacity-90">
                    Our engagements are as bespoke as the strategies we create. Whether you require a single surgical session or long-term partnership, we build to your specifications.
                </p>
                <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                    <div className="bg-white/10 border border-white/20 p-8 rounded-sm w-full md:w-auto backdrop-blur-sm">
                        <p className="text-xs uppercase tracking-widest text-blue-200 mb-2 font-bold">
                            Individual Sessions
                        </p>
                        <p className="text-3xl font-headline font-bold">Starting at $1,200</p>
                    </div>
                    <div className="hidden md:block h-12 w-px bg-white/20"></div>
                    <button className="bg-white text-[#0F4C81] px-10 py-5 rounded-sm font-bold text-lg hover:bg-blue-50 transition-all active:scale-95 w-full md:w-auto shadow-lg">
                        Inquire for Custom Quote
                    </button>
                </div>
            </div>
        </motion.section>
    );
};

// FAQ Section Component
const FAQSection = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const faqs = [
        {
            question: "How long does a typical engagement last?",
            answer: "Strategic blueprints usually span 3 to 6 months, while executive coaching often transitions into an ongoing advisory role to maintain momentum."
        },
        {
            question: "Is coaching available remotely?",
            answer: "Yes. While we value in-person chemistry for team retreats, our executive and strategy sessions are optimized for secure, high-definition digital presence."
        },
        {
            question: "Do you work with non-architectural firms?",
            answer: "Our methodology is rooted in architectural principles of structure and design, making it highly effective for any service-based industry that values premium positioning."
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <motion.section
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="py-32 px-8 md:px-24"
        >
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row gap-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="md:w-1/3"
                    >
                        <h2 className="font-headline text-3xl font-bold mb-4 text-primary">
                            Common Questions
                        </h2>
                        <p className="text-on-surface-variant font-medium">
                            Understanding our process and how we ensure your firm's success.
                        </p>
                    </motion.div>
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="md:w-2/3 space-y-12"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="font-headline text-xl font-bold mb-3 text-primary">
                                    {faq.question}
                                </h3>
                                <p className="text-on-surface-variant leading-relaxed">
                                    {faq.answer}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Services;