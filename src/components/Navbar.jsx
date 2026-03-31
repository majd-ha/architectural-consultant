import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

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

                {/* Logo */}
                <Link to={"/"} className="text-2xl font-['Noto_Serif'] font-black text-[#0F4C81] dark:text-blue-400">
                    <img src="/cons.png" alt="" className='w-24 h-24 rounded-2xl object-cover' />
                </Link>

                {/* Desktop Menu */}
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

                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/case')
                            ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/case"
                    >
                        Case Studies
                    </Link>

                    <Link
                        className={`font-['Noto_Serif'] font-medium transition-colors duration-200 pb-1 ${isActive('/about')
                            ? 'border-b-2 border-[#0F4C81] text-[#0F4C81] font-bold'
                            : 'text-slate-600 dark:text-slate-400 hover:text-[#0F4C81]'
                            }`}
                        to="/about"
                    >
                        About
                    </Link>

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

                {/* Button (desktop only) */}
                <button className="hidden md:block bg-[#0F4C81] text-white px-6 py-3 rounded-lg font-label uppercase tracking-widest text-xs font-bold scale-95 active:scale-90 transition-transform duration-200 hover:bg-[#00268f]">
                    Book Consultation
                </button>

                {/* Mobile Menu Button */}
                <div className="hidden max-sm:block">
                    <button onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden px-8 pb-6 flex flex-col gap-6 bg-white dark:bg-slate-900">
                    <Link onClick={() => setIsOpen(false)} to="/services">Services</Link>
                    <Link onClick={() => setIsOpen(false)} to="/case">Case Studies</Link>
                    <Link onClick={() => setIsOpen(false)} to="/about">About</Link>
                    <Link onClick={() => setIsOpen(false)} to="/contact">Contact</Link>

                    <button className="bg-[#0F4C81] text-white px-6 py-3 rounded-lg font-label uppercase tracking-widest text-xs font-bold">
                        Book Consultation
                    </button>
                </div>
            )}
        </motion.header>
    );
};

export default Navbar;