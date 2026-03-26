import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-white">
            <div className="container mx-auto px-8 grid grid-cols-12 gap-8 items-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, x: -50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="col-span-12 lg:col-span-7 z-10"
                >
                    <div className="w-12 h-[2px] bg-tertiary-fixed-dim mb-8"></div>
                    <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[1.1] mb-8 text-primary">
                        Empowering Visionary <br /> Leaders to Scale <br /> <span className="italic font-normal text-secondary">Sustainably.</span>
                    </h1>
                    <p className="font-body text-lg text-on-surface-variant max-w-xl mb-12 leading-relaxed">
                        Bespoke architectural strategy for modern enterprises. We transition high-growth organizations from operational friction to architectural excellence through curated leadership frameworks.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-6">
                        <button className="bg-primary text-on-primary px-10 py-5 rounded-lg font-label uppercase tracking-widest text-sm font-bold shadow-lg shadow-primary/20 transition-all hover:bg-on-primary-container">
                            Book a Strategy Call
                        </button>
                        <button className="border-b-2 border-primary/20 px-2 py-5 font-label uppercase tracking-widest text-sm font-bold hover:text-primary hover:border-primary transition-all">
                            View Case Studies
                        </button>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-12 lg:col-span-5 relative mt-12 lg:mt-0"
                >
                    <div className="aspect-[4/5] overflow-hidden rounded-xl shadow-2xl relative z-0">
                        <img alt="Professional consultant in architectural setting" className="w-full h-full object-cover transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDixFGWvRkzEp_OvDiGfb09tvRvskC0CKuT0ehBfEOqIiTaPJzXRn3ap4t4jDF8HY_okThaLa-SVDUPS08-rN5mu51o1C5ktdflfvrmZmVjfzT1SSc1oQMxTdeiwixYhMGTW7LXxodRw8fdTq7XNmBcD7B4F-8fSBGF1_mHszdHqNUPlp6FvMuoMH8kLlD3FxlZzfSgGRmykbhwBvnnmSmRcCfCv_w7dS_5cQ9GRb8kkpEPxu1OtO2r3uhXnEdWEQooZKv2UET_5n4" />
                        <div className="absolute inset-0 bg-primary/5"></div>
                    </div>
                    <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-2xl rounded-lg hidden md:block z-20 border border-slate-100">
                        <p className="font-headline text-3xl italic text-primary">"Precision in every pivot."</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;