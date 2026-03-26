import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FeaturedServices = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-32 bg-surface-container">
            <div className="container mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div
                        initial={{ opacity: 0, y: 30 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="max-w-xl"
                    >
                        <h2 className="font-headline text-5xl font-bold tracking-tighter mb-6 text-primary">Curated Engagements</h2>
                        <p className="font-body text-on-surface-variant">Selected services designed for organizations at various stages of their architectural evolution.</p>
                    </div>
                    <motion.a
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="font-label uppercase tracking-widest text-sm font-bold border-b-2 border-primary/30 pb-1 text-primary hover:border-primary transition-colors cursor-pointer"
                        href="#"
                    >
                        View All Services
                    </motion.a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Service 1 */}
                    <div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg group border border-slate-200 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <img
                                alt="Corporate architecture"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=600&fit=crop"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <span className="font-label text-xs tracking-widest text-primary font-bold mb-3 block">FOR ENTERPRISES</span>
                            <h4 className="font-headline text-2xl font-bold mb-4 text-primary">Organizational Restructuring</h4>
                            <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                                Full-scale redesign of your company's hierarchy and workflow architecture for maximum efficiency.
                            </p>
                            <button className="inline-flex items-center gap-2 font-label text-xs uppercase font-bold tracking-widest text-primary hover:text-primary/80 transition-colors group">
                                Explore Service
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>

                    {/* Service 2 */}
                    <div
                        initial={{ opacity: 0, y: 50 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="bg-white rounded-xl overflow-hidden shadow-lg group border border-slate-200 hover:shadow-2xl transition-all duration-500"
                    >
                        <div className="relative h-72 overflow-hidden">
                            <img
                                alt="Growth Strategy"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        </div>
                        <div className="p-8">
                            <span className="font-label text-xs tracking-widest text-primary font-bold mb-3 block">FOR FOUNDERS</span>
                            <h4 className="font-headline text-2xl font-bold mb-4 text-primary">Growth Strategy Design</h4>
                            <p className="font-body text-on-surface-variant mb-6 leading-relaxed">
                                Architectural blueprints for scaling your business from 7 to 9 figures without losing core identity.
                            </p>
                            <button className="inline-flex items-center gap-2 font-label text-xs uppercase font-bold tracking-widest text-primary hover:text-primary/80 transition-colors group">
                                Explore Service
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedServices;