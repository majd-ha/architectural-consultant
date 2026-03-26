import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Hero from '../components/Hero';
import TrustedBy from '../components/TrustedBy';
import Philosophy from '../components/Philosophy';
import FeaturedServices from '../components/FeaturedServices';
import Testimonial from '../components/Testimonial';
import CTA from '../components/CTA';

const Home = () => {
    return (
        <main>
            <Hero />
            <TrustedBy />
            <Philosophy />
            <FeaturedServices />
            <Testimonial />
            <CTA />
        </main>
    );
};

export default Home;