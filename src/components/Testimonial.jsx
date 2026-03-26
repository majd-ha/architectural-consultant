import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Testimonial = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-32 bg-primary text-on-primary">
            <div className="container mx-auto px-8 max-w-5xl text-center">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <span className="material-symbols-outlined text-6xl text-primary-container/40 mb-12">format_quote</span>
                    <blockquote className="font-headline text-3xl md:text-5xl font-light italic leading-snug mb-12">
                        "Working with The Architectural Curator wasn't just a business decision; it was a cultural transformation. They rebuilt our foundation while we were still flying the plane."
                    </blockquote>
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border-2 border-primary-container">
                            <img alt="Julian Vane-Tempest" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD3vaNhslRII8CRCe7lcC4V7xY2LPRurWJgoXr9HC8wVIg8gpm9_4cYASuKS7RHOuz6A5D3DRfVO3ax6PGaqowI3LW3orzYqlEMZ9q9dEOzNz5eHX1DZK0ZGZ3JQyplwZgpWuk2OvzmuCmi7ucZjxn5jOVWQ589uTLVE0Lwh-Fw5VFfYq8ToZj4rOE3JDKQD9iUiTlM_TF7OxfSFtIsyRdhkBWbUGlMb1Bs89os5MFfjQTXsXtWqCdCKGyo7SnDTsIdc5wgzcI7Yzc" />
                        </div>
                        <cite className="not-italic font-label uppercase tracking-widest text-sm font-bold">Julian Vane-Tempest</cite>
                        <p className="font-body text-xs text-primary-container/80 mt-1">CEO, Meridian Global Holdings</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonial;