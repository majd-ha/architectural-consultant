import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CaseStudies = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [gridRef, gridInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [deepDiveRef, deepDiveInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [testimonialsRef, testimonialsInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ctaRef, ctaInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <main className="pt-32 bg-background">
            {/* Hero Header */}
            <motion.header
                ref={heroRef}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="px-8 mb-24 max-w-7xl mx-auto"
            >
                <span className="font-label uppercase tracking-[0.2em] text-[#0F4C81] mb-4 block text-sm">
                    Our Portfolio
                </span>
                <h1 className="text-6xl md:text-8xl font-headline font-bold tracking-tighter text-[#0F4C81] leading-none max-w-4xl">
                    Measured impact. Architected growth.
                </h1>
            </motion.header>

            {/* Bento Grid Case Studies */}
            <section className="px-8 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 mb-40">
                {/* Large Featured Card */}
                <motion.div
                    ref={gridRef}
                    initial={{ opacity: 0, y: 50 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="md:col-span-8 group overflow-hidden bg-white border border-slate-100 rounded-md editorial-float"
                >
                    <div className="aspect-[16/9] overflow-hidden relative">
                        <img
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            alt="Modern minimalist office interior with floor to ceiling windows showing a city skyline at dusk with deep blue tones"
                            src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1200&h=675&fit=crop"
                        />
                        <div className="absolute inset-0 bg-[#0F4C81]/10 mix-blend-multiply"></div>
                    </div>
                    <div className="p-12">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="material-symbols-outlined text-[#0F4C81]">corporate_fare</span>
                            <span className="font-label uppercase tracking-widest text-sm text-secondary">Vanguard Systems</span>
                        </div>
                        <h3 className="text-4xl font-headline font-bold mb-6 group-hover:-translate-y-2 transition-transform duration-300">
                            Scaling a SaaS Giant by 200% in 12 Months
                        </h3>
                        <p className="text-lg text-slate-600 max-w-2xl mb-8">
                            How we restructured the enterprise architecture for a global fintech provider to support hyper-growth while reducing operational overhead by 40%.
                        </p>
                        <a className="inline-block font-label uppercase tracking-widest text-sm border-b-2 border-[#0F4C81] pb-1 hover:text-[#0F4C81] transition-all cursor-pointer" href="#">
                            View Full Blueprint
                        </a>
                    </div>
                </motion.div>

                {/* Small Card 1 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="md:col-span-4 bg-[#0F4C81] text-white p-10 flex flex-col justify-between rounded-md group hover:bg-[#0F4C81]/95 transition-colors duration-300"
                >
                    <div>
                        <div className="mb-8 opacity-80">
                            <span className="material-symbols-outlined text-3xl">analytics</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4">Precision Retail Logistics</h3>
                        <p className="text-white/80">
                            Optimizing supply chain routes for a luxury fashion house, resulting in a 15% reduction in carbon footprint and $2M annual savings.
                        </p>
                    </div>
                    <div className="mt-12">
                        <span className="font-label text-xs tracking-[0.15em] text-white/60 block mb-2">METRIC</span>
                        <span className="text-4xl font-headline font-bold">15% Net Yield</span>
                    </div>
                </motion.div>

                {/* Small Card 2 */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="md:col-span-4 bg-surface-container-low p-10 flex flex-col justify-between rounded-md group hover:bg-white border border-transparent hover:border-slate-200 transition-all duration-300"
                >
                    <div>
                        <div className="mb-8 opacity-60">
                            <span className="material-symbols-outlined text-3xl text-[#0F4C81]">account_balance</span>
                        </div>
                        <h3 className="text-2xl font-headline font-bold mb-4 text-on-surface">Banking Cultural Shift</h3>
                        <p className="text-slate-600">
                            A top-down digital transformation for a legacy private bank, modernizing the client interface and internal reporting protocols.
                        </p>
                    </div>
                    <div className="mt-12">
                        <span className="font-label text-xs tracking-[0.15em] text-[#0F4C81] block mb-2">METRIC</span>
                        <span className="text-4xl font-headline font-bold text-on-surface">98% Retention</span>
                    </div>
                </motion.div>

                {/* Medium Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={gridInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="md:col-span-8 bg-white border border-slate-100 rounded-md flex flex-col md:flex-row overflow-hidden group"
                >
                    <div className="md:w-1/2 p-12 flex flex-col justify-center">
                        <span className="material-symbols-outlined text-[#0F4C81] mb-4">eco</span>
                        <h3 className="text-3xl font-headline font-bold mb-6">Sustainable Urban Development</h3>
                        <p className="text-slate-600 mb-8">
                            Redefining city living through architecturally integrated green spaces and smart energy grids for a metropolitan district.
                        </p>
                        <button className="w-fit text-[#0F4C81] border-b-2 border-[#0F4C81] font-label uppercase text-xs tracking-widest pb-1 hover:text-[#0F4C81]/80 transition-colors">
                            Explore Project
                        </button>
                    </div>
                    <div className="md:w-1/2 overflow-hidden relative min-h-[300px]">
                        <img
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                            alt="Modern architectural structure with reflective glass and steel against a clear sky"
                            src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop"
                        />
                    </div>
                </motion.div>
            </section>

            {/* Deep Dive Section */}
            <motion.section
                ref={deepDiveRef}
                initial={{ opacity: 0, y: 30 }}
                animate={deepDiveInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="bg-[#0F4C81] py-40 text-white"
            >
                <div className="max-w-7xl mx-auto px-8">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
                        <div className="md:col-span-5">
                            <span className="font-label uppercase tracking-[0.2em] text-blue-300 mb-8 block">
                                In-Depth Analysis
                            </span>
                            <h2 className="text-5xl font-headline font-bold mb-12">The Zenith Portfolio Restructure</h2>
                            <div className="space-y-16">
                                <div>
                                    <h4 className="font-label uppercase tracking-widest text-sm mb-4 border-b border-white/20 pb-2 text-blue-300">
                                        The Challenge
                                    </h4>
                                    <p className="text-white/80 leading-relaxed">
                                        Zenith Capital faced fragmented legacy systems and an aging infrastructure that prevented real-time data synthesis across four continents.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-label uppercase tracking-widest text-sm mb-4 border-b border-white/20 pb-2 text-blue-300">
                                        The Solution
                                    </h4>
                                    <p className="text-white/80 leading-relaxed">
                                        We implemented a bespoke 'Curated Cloud' mesh, integrating disparate data streams into a unified executive dashboard with AI-driven predictive modeling.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-7 bg-white p-12 rounded-md shadow-xl text-on-surface">
                            <h4 className="font-label uppercase tracking-widest text-sm mb-12 text-center text-[#0F4C81]">
                                Operational Impact Metrics
                            </h4>
                            <div className="grid grid-cols-2 gap-12">
                                <div className="text-center">
                                    <span className="block text-6xl font-headline font-bold text-[#0F4C81] mb-2">240%</span>
                                    <span className="font-label uppercase tracking-widest text-xs text-secondary">
                                        Data Processing Speed
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-6xl font-headline font-bold text-[#0F4C81] mb-2">-$1.4M</span>
                                    <span className="font-label uppercase tracking-widest text-xs text-secondary">
                                        Quarterly Overhead
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-6xl font-headline font-bold text-[#0F4C81] mb-2">12ms</span>
                                    <span className="font-label uppercase tracking-widest text-xs text-secondary">
                                        Average Latency
                                    </span>
                                </div>
                                <div className="text-center">
                                    <span className="block text-6xl font-headline font-bold text-[#0F4C81] mb-2">99.9%</span>
                                    <span className="font-label uppercase tracking-widest text-xs text-secondary">
                                        System Uptime
                                    </span>
                                </div>
                            </div>
                            <div className="mt-16 h-48 w-full bg-slate-50 rounded flex items-end justify-between px-8 py-4">
                                <div className="w-8 bg-slate-300 h-1/4"></div>
                                <div className="w-8 bg-slate-300 h-2/5"></div>
                                <div className="w-8 bg-slate-300 h-1/2"></div>
                                <div className="w-8 bg-[#0F4C81] h-4/5"></div>
                                <div className="w-8 bg-[#0F4C81] h-full"></div>
                            </div>
                            <p className="mt-8 text-center text-secondary italic">
                                Fig 1.2: Efficiency scaling post-implementation vs historical baseline.
                            </p>
                        </div>
                    </div>
                </div>
            </motion.section>

            {/* Testimonials */}
            <motion.section
                ref={testimonialsRef}
                initial={{ opacity: 0 }}
                animate={testimonialsInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5 }}
                className="py-40 px-8 max-w-7xl mx-auto"
            >
                <h2 className="text-4xl font-headline font-bold text-center mb-24 text-[#0F4C81]">
                    Executive Testimony
                </h2>
                <div className="flex flex-col md:flex-row gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex-1 bg-white p-12 rounded-md border-l-4 border-[#0F4C81] shadow-sm"
                    >
                        <span className="material-symbols-outlined text-4xl text-[#0F4C81]/20 mb-6">format_quote</span>
                        <p className="text-xl font-headline italic mb-8 leading-relaxed text-on-surface">
                            "The Architectural Curator didn't just provide a strategy; they provided a blueprint for our next decade of operations. The results were immediate and indisputable."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-400">person</span>
                            </div>
                            <div>
                                <span className="block font-bold text-on-surface">Marcus Thorne</span>
                                <span className="font-label text-xs uppercase tracking-widest text-secondary">CEO, Zenith Capital</span>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={testimonialsInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex-1 bg-white p-12 rounded-md border-l-4 border-[#0F4C81] shadow-sm"
                    >
                        <span className="material-symbols-outlined text-4xl text-[#0F4C81]/20 mb-6">format_quote</span>
                        <p className="text-xl font-headline italic mb-8 leading-relaxed text-on-surface">
                            "They possess a rare ability to bridge the gap between high-level architectural vision and granular operational execution. A transformative partnership."
                        </p>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full overflow-hidden bg-slate-200 flex items-center justify-center">
                                <span className="material-symbols-outlined text-slate-400">person</span>
                            </div>
                            <div>
                                <span className="block font-bold text-on-surface">Elena Rodriguez</span>
                                <span className="font-label text-xs uppercase tracking-widest text-secondary">COO, Global Retail Collective</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </motion.section>

            {/* Final CTA */}
            <motion.section
                ref={ctaRef}
                initial={{ opacity: 0, y: 30 }}
                animate={ctaInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="py-40 bg-[#f1f4f6]"
            >
                <div className="max-w-4xl mx-auto text-center px-8">
                    <h2 className="text-5xl md:text-7xl font-headline font-bold mb-12 tracking-tight text-[#0F4C81]">
                        Your Success Story Starts Here
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                        <button className="bg-[#0F4C81] text-white px-12 py-5 rounded-sm font-label uppercase tracking-widest text-sm font-bold hover:bg-[#00268f] transition-colors shadow-lg">
                            Let's Talk
                        </button>
                        <a className="text-[#0F4C81] border-b-2 border-[#0F4C81]/30 pb-1 font-label uppercase tracking-widest text-sm hover:border-[#0F4C81] transition-colors cursor-pointer" href="#">
                            Download Methodology
                        </a>
                    </div>
                </div>
            </motion.section>
        </main>
    );
};

export default CaseStudies;