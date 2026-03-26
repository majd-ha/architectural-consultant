import React from 'react';
import { motion } from 'framer-motion';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();

    // دالة مساعدة للتحقق من الرابط النشط
    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md"
        >
            <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                <Link to={"/"} className="text-2xl font-['Noto_Serif'] font-black text-[#0F4C81] dark:text-blue-400">
                    Architectural Consultant
                </Link>
                <div className="hidden md:flex gap-10">
                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/services')
                                ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/services"
                    >
                        Services
                    </Link>

                    {/* Case Studies Link */}
                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/case')
                                ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/case"
                    >
                        Case Studies
                    </Link>

                    {/* About Link */}
                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/about')
                                ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/about"
                    >
                        About
                    </Link>

                    {/* Contact Link */}
                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/contact')
                                ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                                : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/contact"
                    >
                        Contact
                    </Link>
                </div>
                <button className="bg-[#0F4C81] text-white px-6 py-3 rounded-lg font-label uppercase tracking-widest text-xs font-bold scale-95 active:scale-90 transition-transform duration-200 hover:bg-[#00268f]">
                    Book Consultation
                </button>
            </nav>
        </motion.header>
    );
};

export default Navbar;