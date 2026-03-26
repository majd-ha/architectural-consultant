import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [credentialsRef, credentialsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [methodologyRef, methodologyInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [featuredRef, featuredInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ctaRef, ctaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-32 bg-background text-on-background font-body">
            {/* Hero & Personal Story Section */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0 }}
                animate={heroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="px-8 md:px-24 mb-32 max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-12 gap-12 items-end">
                    <div className="col-span-12 md:col-span-7">
                        <motion.span
                            initial={{ width: 0 }}
                            animate={heroInView ? { width: 64 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="inline-block h-[3px] w-16 bg-[#0F4C81] mb-8"
                        ></motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="font-headline text-5xl md:text-7xl leading-tight tracking-tight text-[#0F4C81] mb-12"
                        >
                            Designing the <br /><span className="italic text-secondary">blueprint</span> of leadership.
                        </motion.h1>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="space-y-8 max-w-xl"
                        >
                            <p className="text-body text-xl text-on-surface-variant leading-relaxed">
                                I didn't start my career in a boardroom. I started it in an architectural studio, obsessed with how structural integrity dictates the longevity of a space. Over two decades, I realized that organizations operate under the same laws of physics.
                            </p>
                            <p className="text-body text-lg text-on-surface-variant leading-relaxed">
                                My journey from a Lead Architect at a Fortune 500 firm to a dedicated Leadership Coach was driven by a single observation: most executive strategies fail not because of a lack of vision, but because of a weak foundation. I do what I do because I believe every high-impact leader deserves a framework that is as aesthetically sound as it is structurally unbreakable.
                            </p>
                        </motion.div>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={heroInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="col-span-12 md:col-span-5 relative group editorial-float overflow-hidden"
                    >
                        <img
                            alt="Professional headshot"
                            className="w-full aspect-[4/5] object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-500"
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=1000&fit=crop"
                        />
                        <div className="absolute bottom-6 left-6 text-white bg-[#0F4C81]/90 backdrop-blur-sm p-6 rounded-sm border-l-4 border-[#0F4C81]-container">
                            <p className="font-headline text-lg italic">"Structure is the essence of freedom."</p>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Credentials & Experience (Bento Style) */}
            <motion.section
                ref={credentialsRef}
                initial={{ opacity: 0, y: 50 }}
                animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-surface-container py-32 px-8 md:px-24"
            >
                <div className="max-w-7xl mx-auto">
                    <h2 className="font-label text-xs tracking-[0.2em] uppercase text-[#0F4C81] font-bold mb-16">
                        Expertise &amp; Heritage
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="bg-white p-12 flex flex-col justify-between shadow-sm border border-slate-100 rounded-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div>
                                <span className="font-headline text-6xl text-[#0F4C81] font-bold block mb-4">20+</span>
                                <p className="font-label text-xs tracking-widest uppercase text-secondary font-bold">Years in Practice</p>
                            </div>
                            <p className="text-body text-on-surface-variant mt-8">
                                Navigating the complexities of global corporate restructuring across three continents.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white p-12 flex flex-col justify-between shadow-sm border border-slate-100 rounded-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div>
                                <span className="material-symbols-outlined text-4xl text-[#0F4C81] mb-6">school</span>
                                <h3 className="font-headline text-2xl text-[#0F4C81] font-bold mb-4">Academic Depth</h3>
                            </div>
                            <ul className="space-y-4 text-body text-on-surface-variant">
                                <li className="flex items-start gap-2"><span className="text-[#0F4C81]">•</span> M.A. Organizational Psychology, INSEAD</li>
                                <li className="flex items-start gap-2"><span className="text-[#0F4C81]">•</span> Professional Certified Coach (PCC), ICF</li>
                                <li className="flex items-start gap-2"><span className="text-[#0F4C81]">•</span> B.Arch, Rhode Island School of Design</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={credentialsInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white p-12 flex flex-col justify-between shadow-sm border border-slate-100 rounded-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div>
                                <span className="material-symbols-outlined text-4xl text-[#0F4C81] mb-6">corporate_fare</span>
                                <h3 className="font-headline text-2xl text-[#0F4C81] font-bold mb-4">Corporate Tenure</h3>
                            </div>
                            <p className="text-body text-on-surface-variant leading-relaxed">
                                Former Senior VP of Strategy at Gensler. Managed a portfolio of $200M+ while mentoring the next generation of design executives.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            {/* Methodology (Asymmetric Editorial) */}
            <motion.section
                ref={methodologyRef}
                initial={{ opacity: 0 }}
                animate={methodologyInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6 }}
                className="py-32 px-8 md:px-24 overflow-hidden max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-12 gap-12 items-center">
                    <div className="col-span-12 md:col-span-5 order-2 md:order-1">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={methodologyInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="relative editorial-float overflow-hidden rounded-sm border border-slate-200"
                        >
                            <img
                                alt="Modern architecture"
                                className="w-full aspect-[16/9] md:aspect-square object-cover"
                                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=800&fit=crop"
                            />
                        </motion.div>
                    </div>
                    <div className="col-span-12 md:col-span-7 md:pl-16 order-1 md:order-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            animate={methodologyInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="font-headline text-4xl md:text-5xl text-[#0F4C81] mb-12"
                        >
                            The Structural <span className="italic text-secondary">Integrity</span> Framework
                        </motion.h2>
                        <div className="space-y-12">
                            {[
                                { number: "01", title: "Foundation Assessment", desc: "Identifying the core values and belief systems that currently support your decision-making architecture." },
                                { number: "02", title: "Stress Testing", desc: "Putting your leadership style under simulation to find where the cracks appear during high-pressure cycles." },
                                { number: "03", title: "Refined Rebuild", desc: "Implementing bespoke rituals and strategic communication paths that foster long-term resilience." }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 30 }}
                                    animate={methodologyInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                                    className="flex gap-8 group"
                                >
                                    <span className="text-[#0F4C81] font-headline text-3xl opacity-30">{item.number}</span>
                                    <div>
                                        <h4 className="font-headline text-xl text-[#0F4C81] font-bold mb-2">{item.title}</h4>
                                        <p className="text-body text-on-surface-variant">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Featured In (Minimalist Row) */}
            <motion.section
                ref={featuredRef}
                initial={{ opacity: 0, y: 30 }}
                animate={featuredInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="border-y border-slate-200 py-16"
            >
                <div className="px-8 md:px-24">
                    <p className="font-label text-[10px] tracking-[0.3em] uppercase text-center text-secondary font-bold mb-10">
                        Insights shared within
                    </p>
                    <div className="flex flex-wrap justify-center md:justify-between items-center gap-12 opacity-40 hover:opacity-100 transition-all duration-500">
                        <span className="font-serif font-bold text-2xl tracking-tighter text-on-surface">FORBES</span>
                        <span className="font-serif italic font-bold text-2xl text-on-surface">Vogue Business</span>
                        <span className="font-sans font-extrabold text-2xl tracking-tight text-on-surface">AD</span>
                        <span className="font-serif font-medium text-2xl text-on-surface">The Wall Street Journal.</span>
                        <span className="font-sans font-light text-2xl tracking-widest uppercase text-on-surface">Monocle</span>
                    </div>
                </div>
            </motion.section>

            {/* CTA Section */}
            <motion.section
                ref={ctaRef}
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-32 px-8 md:px-24 text-center"
            >
                <div className="max-w-3xl mx-auto">
                    <h2 className="font-headline text-5xl text-[#0F4C81] mb-8">Ready to curate your legacy?</h2>
                    <p className="text-body text-lg text-on-surface-variant mb-12 leading-relaxed">
                        I only take on five select long-term consulting clients per quarter to ensure the highest level of structural attention and bespoke strategy development.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button className="bg-[#0F4C81] text-white px-10 py-4 rounded-sm font-medium text-lg tracking-tight hover:bg-[#00268f] transition-colors shadow-lg shadow-blue-900/10">
                            Work With Me
                        </button>
                        <button className="text-[#0F4C81] px-10 py-4 rounded-sm font-medium text-lg tracking-tight border border-[#0F4C81] hover:bg-slate-50 transition-all">
                            View Service Deck
                        </button>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default About;