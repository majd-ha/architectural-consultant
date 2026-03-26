import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer className="w-full bg-[#f1f4f6] dark:bg-slate-800 rounded-none">
            <div className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center border-t border-slate-200 dark:border-slate-700">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="font-['Noto_Serif'] font-bold text-lg text-[#0F4C81] dark:text-blue-400"
                >
                    The Architectural Consultant
                </motion.div>
                <div className="flex gap-8 my-6 md:my-0">
                    {['LinkedIn', 'Email', 'Privacy Policy', 'Terms of Service'].map((item, index) => (
                        <motion.a
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="font-['Manrope'] text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-[#0F4C81] transition-all opacity-80 hover:opacity-100"
                            href="#"
                        >
                            {item}
                        </motion.a>
                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="font-['Manrope'] text-sm tracking-wide text-slate-500 dark:text-slate-400 opacity-80"
                >
                    © {new Date().getFullYear()} Architectural Consultant. All rights reserved.
                </motion.div>
            </div>
        </footer>
    );
};

export default Footer;