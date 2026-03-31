import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TrustedBy = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const companies = [
        "MERIDIAN GLOBAL",
        "ARCHITECTURE INC",
        "VISIONARY GROUP",
        "DESIGN STUDIO",
        "CREATIVE MINDS"
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-24 bg-surface-container-low border-y border-slate-100">
            <div className="container mx-auto px-8">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="font-label text-xs tracking-[0.2em] uppercase text-on-secondary-container text-center mb-12"
                >
                    Architecting success for global leaders
                </motion.p>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="flex flex-wrap justify-center items-center gap-16"
                >
                    {companies.map((company, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="px-6 py-3"
                        >
                            <span className="font-headline text-xl font-semibold text-[#0F4C81]/60 hover:text-[#0F4C81] transition-colors duration-300">
                                {company}
                            </span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default TrustedBy;