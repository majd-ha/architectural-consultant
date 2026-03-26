import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
    const [heroRef, heroInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formRef, formInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [calendarRef, calendarInView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [selectedDate, setSelectedDate] = useState(6);
    const [selectedTime, setSelectedTime] = useState('01:00 PM');

    const days = [28, 29, 30, 31, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
    const timeSlots = ['09:00 AM', '11:30 AM', '01:00 PM', '03:45 PM', '05:00 PM'];

    return (
        <main className="pt-32 pb-24 bg-surface text-on-surface mb-40">
            {/* Hero Section */}
            <motion.section
                ref={heroRef}
                initial={{ opacity: 0, y: 30 }}
                animate={heroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="px-8 max-w-7xl mx-auto mb-20"
            >
                <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-12 md:col-span-7">
                        <span className="font-label text-xs uppercase tracking-[0.2em] text-[#0F4C81] mb-4 block font-semibold">
                            Get in Touch
                        </span>
                        <h1 className="text-6xl md:text-8xl font-headline tracking-tighter leading-none mb-8 text-slate-900">
                            Let's define your space.
                        </h1>
                        <p className="text-xl md:text-2xl font-body text-on-surface-variant max-w-xl leading-relaxed">
                            Architecture is more than just building; it's an editorial process. We curate environments for the visionary.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Main Content Canvas */}
            <section className="px-8 max-w-7xl mx-auto grid grid-cols-12 gap-12 pb-8">
                {/* Left: Contact Form */}
                <div className="col-span-12 md:col-span-5 space-y-16">
                    <motion.div
                        ref={formRef}
                        initial={{ opacity: 0, x: -30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white p-10 rounded-lg shadow-sm border border-slate-100"
                    >
                        <h2 className="text-3xl font-headline mb-8 text-slate-900">General Inquiries</h2>
                        <form className="space-y-10">
                            <div className="group relative">
                                <label className="font-label text-[10px] uppercase tracking-widest text-outline absolute -top-5 left-0 transition-all group-focus-within:text-[#0F4C81]">
                                    Full Name
                                </label>
                                <input
                                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-[#0F4C81] font-body placeholder:text-outline-variant/50 transition-colors"
                                    placeholder="Your Name"
                                    type="text"
                                />
                            </div>
                            <div className="group relative">
                                <label className="font-label text-[10px] uppercase tracking-widest text-outline absolute -top-5 left-0 transition-all group-focus-within:text-[#0F4C81]">
                                    Email Address
                                </label>
                                <input
                                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-[#0F4C81] font-body placeholder:text-outline-variant/50 transition-colors"
                                    placeholder="email@company.com"
                                    type="email"
                                />
                            </div>
                            <div className="group relative">
                                <label className="font-label text-[10px] uppercase tracking-widest text-outline absolute -top-5 left-0 transition-all group-focus-within:text-[#0F4C81]">
                                    Organization
                                </label>
                                <input
                                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-[#0F4C81] font-body placeholder:text-outline-variant/50 transition-colors"
                                    placeholder="Company Name"
                                    type="text"
                                />
                            </div>
                            <div className="group relative">
                                <label className="font-label text-[10px] uppercase tracking-widest text-outline absolute -top-5 left-0 transition-all group-focus-within:text-[#0F4C81]">
                                    Message
                                </label>
                                <textarea
                                    className="w-full bg-transparent border-0 border-b border-outline-variant py-3 px-0 focus:ring-0 focus:border-[#0F4C81] font-body placeholder:text-outline-variant/50 transition-colors resize-none"
                                    placeholder="Briefly describe your project intent..."
                                    rows="4"
                                ></textarea>
                            </div>
                            <button
                                className="w-full bg-[#0F4C81] text-white py-4 px-8 rounded-sm font-label text-sm uppercase tracking-[0.2em] hover:bg-[#00268f] transition-all flex justify-between items-center group"
                                type="submit"
                            >
                                Send Message
                                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                            </button>
                        </form>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={formInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-4 font-bold">
                                Availability
                            </h3>
                            <p className="font-body text-on-surface">
                                Typical response time: <span className="text-[#0F4C81] font-medium">Within 24 business hours.</span>
                            </p>
                        </div>
                        <div>
                            <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-4 font-bold">
                                Studio Location
                            </h3>
                            <p className="font-body text-on-surface">Global practice. Hubs in London and New York.</p>
                            <div className="mt-6 h-48 w-full bg-[#0F4C81]-container rounded-sm overflow-hidden relative border border-slate-200">
                                <img
                                    className="w-full h-full object-cover opacity-40 mix-blend-multiply"
                                    alt="Monochrome architectural sketch style map of urban city grid with minimalist lines and soft blue tones"
                                    src="https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800&h=400&fit=crop"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-3 h-3 bg-[#0F4C81] rounded-full animate-ping"></div>
                                    <div className="w-2 h-2 bg-[#0F4C81] rounded-full absolute"></div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Right: Scheduler & Socials */}
                <div className="col-span-12 md:col-span-7">
                    <motion.div
                        ref={calendarRef}
                        initial={{ opacity: 0, x: 30 }}
                        animate={calendarInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="bg-white border border-slate-200 rounded-lg overflow-hidden flex flex-col h-full min-h-[700px] shadow-sm"
                    >
                        <div className="p-8 border-b border-slate-100 bg-[#0F4C81]-container flex justify-between items-center">
                            <div>
                                <h2 className="text-2xl font-headline text-[#0F4C81]">Initial Strategy Session</h2>
                                <p className="font-body text-sm text-on-surface-variant">45 min • Virtual or In-Person</p>
                            </div>
                            <span className="material-symbols-outlined text-[#0F4C81] text-3xl">calendar_today</span>
                        </div>
                        <div className="flex-1 p-8 grid grid-cols-1 md:grid-cols-2 gap-8 bg-white">
                            {/* Calendar Mockup */}
                            <div className="space-y-4">
                                <div className="flex items-center justify-between font-label text-xs uppercase tracking-widest mb-2 text-slate-900 font-bold">
                                    <span>September 2024</span>
                                    <div className="flex gap-4">
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#0F4C81] transition-colors">chevron_left</span>
                                        <span className="material-symbols-outlined cursor-pointer hover:text-[#0F4C81] transition-colors">chevron_right</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-7 gap-2 text-center text-[10px] font-label text-outline mb-2">
                                    <span>MON</span><span>TUE</span><span>WED</span><span>THU</span><span>FRI</span><span>SAT</span><span>SUN</span>
                                </div>
                                <div className="grid grid-cols-7 gap-2">
                                    {days.map((day, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setSelectedDate(day)}
                                            className={`h-10 flex items-center justify-center text-xs font-body cursor-pointer transition-colors rounded-sm
                        ${selectedDate === day
                                                    ? 'bg-[#0F4C81] text-white shadow-md font-bold'
                                                    : 'hover:bg-[#0F4C81]-container'
                                                }
                        ${day < 1 ? 'text-slate-300' : ''}
                      `}
                                        >
                                            {day}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Slots Mockup */}
                            <div className="space-y-4">
                                <span className="font-label text-xs uppercase tracking-widest text-outline block mb-4 font-bold">
                                    Available Slots (GMT)
                                </span>
                                <div className="space-y-3">
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className={`w-full py-4 border transition-colors text-sm font-body rounded-sm
                        ${selectedTime === time
                                                    ? 'border-2 border-[#0F4C81] bg-[#0F4C81]-container font-bold text-[#0F4C81]'
                                                    : 'border-outline-variant hover:border-[#0F4C81] hover:bg-[#0F4C81]-container'
                                                }
                      `}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="p-8 bg-[#0F4C81]-container border-t border-slate-100">
                            <button className="w-full bg-[#0F4C81] text-white hover:text-white text-on-[#0F4C81] py-4 rounded-sm font-label text-sm uppercase tracking-widest hover:bg-[#00268f] transition-all shadow-lg">
                                Confirm Selection
                            </button>
                        </div>
                    </motion.div>

                    {/* Connect / Socials */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={calendarInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="mt-6 pt-16 border-t border-slate-200"
                    >
                        <h3 className="font-label text-xs uppercase tracking-[0.2em] text-outline mb-10 font-bold">
                            Editorial Channels
                        </h3>
                        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <a className="group flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-lg hover:border-[#0F4C81] transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#0F4C81] transition-colors">work</span>
                                <div>
                                    <p className="font-label text-xs uppercase tracking-widest text-slate-900 font-bold">LinkedIn</p>
                                    <p className="text-sm font-body text-on-surface-variant">Professional Network</p>
                                </div>
                            </a>
                            <a className="group flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-lg hover:border-[#0F4C81] transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#0F4C81] transition-colors">alternate_email</span>
                                <div>
                                    <p className="font-label text-xs uppercase tracking-widest text-slate-900 font-bold">Twitter / X</p>
                                    <p className="text-sm font-body text-on-surface-variant">Industry Insights</p>
                                </div>
                            </a>
                            <a className="group flex items-center gap-4 p-6 bg-white border border-slate-100 rounded-lg hover:border-[#0F4C81] transition-all shadow-sm" href="#">
                                <span className="material-symbols-outlined text-2xl text-slate-400 group-hover:text-[#0F4C81] transition-colors">photo_camera</span>
                                <div>
                                    <p className="font-label text-xs uppercase tracking-widest text-slate-900 font-bold">Instagram</p>
                                    <p className="text-sm font-body text-on-surface-variant">Visual Archives</p>
                                </div>
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
};

export default Contact;