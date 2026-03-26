import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const CTA = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-32 bg-white">
            <div className="container mx-auto px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="font-headline text-4xl font-bold mb-6 text-primary">Stay Informed on the <br /> <span className="italic font-normal text-secondary">Future of Leadership.</span></h2>
                        <p className="font-body text-on-surface-variant mb-10 leading-relaxed">
                            Receive our monthly "Architectural Insights" — a curated digest of corporate strategy, leadership mastery, and organizational design for the modern executive.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input className="flex-grow bg-transparent border-b border-slate-200 py-4 px-2 focus:border-primary focus:ring-0 transition-all font-body" placeholder="Enter your corporate email" type="email" />
                            <button className="bg-primary text-on-primary px-8 py-4 rounded-lg font-label uppercase tracking-widest text-xs font-bold hover:bg-on-primary-container transition-colors">
                                Subscribe
                            </button>
                        </form>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-primary-container/50 rounded-xl p-12 relative overflow-hidden border border-primary/5"
                    >
                        <div className="relative z-10">
                            <span className="font-label text-[10px] tracking-[0.3em] uppercase text-primary font-bold mb-4 block">New Resource</span>
                            <h3 className="font-headline text-2xl font-bold mb-6 text-on-primary-container">The 2024 Corporate Architecture Whitepaper</h3>
                            <p className="font-body text-sm text-on-surface-variant mb-8">An in-depth analysis of high-growth scaling friction and how to architect resilience in a volatile market.</p>
                            <a className="inline-flex items-center gap-2 font-label text-xs font-bold uppercase tracking-widest group text-primary" href="#">
                                Download Case Study
                                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                            </a>
                        </div>
                        <div className="absolute -right-10 -bottom-10 opacity-5 text-primary">
                            <span className="material-symbols-outlined text-[200px]">description</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default CTA;