import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Philosophy = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const items = [
        {
            icon: "clarify",
            title: "Strategic Clarity",
            description: "Eliminate the noise. We distill complex organizational visions into actionable, high-impact strategic roadmaps."
        },
        {
            icon: "settings_suggest",
            title: "Operational Excellence",
            description: "Structure follows strategy. We audit and rebuild internal systems to ensure your operational backbone is resilient."
        },
        {
            icon: "star_outline",
            title: "Leadership Mastery",
            description: "The ceiling of an organization is the leader's capability. We provide elite executive coaching to sharpen influence."
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
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section className="py-32 bg-gray-200 shadow-2xl">
            <div className="container mx-auto px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="mb-20"
                >
                    <h2 className="font-headline text-4xl font-bold tracking-tight mb-4 text-[#0F4C81]">The Philosophy</h2>
                    <p className="font-body text-on-surface-variant max-w-2xl">We don't just coach; we architect. Our methodology is built on three unbreakable pillars of corporate structural integrity.</p>
                </motion.div>
                <motion.div
                    ref={ref}
                    variants={containerVariants}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    className="grid grid-cols-1 md:grid-cols-3 gap-12"
                >
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="p-8 bg-gray-100 rounded-xl border border-transparent hover:border-primary/10 transition-all duration-500 editorial-float shadow-xl"
                        >
                            <span className="material-symbols-outlined text-4xl text-[#0F4C81] mb-8">{item.icon}</span>
                            <h3 className="font-headline text-2xl font-bold mb-4 float-content transition-all duration-300">{item.title}</h3>
                            <p className="font-body text-on-surface-variant leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Philosophy;