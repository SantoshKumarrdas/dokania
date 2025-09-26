import React from 'react';
import HeroSection from '@/components/home/HeroSection';
import ProductsSection from '@/components/home/ProductsSection';
import AboutSection from '@/components/home/AboutSection';
import CTASection from '@/components/home/CTASection';

const HomePage = () => {
    return (
        <div className="min-h-screen">
            <HeroSection />
            <ProductsSection />
            <AboutSection />
            <CTASection />
        </div>
    );
};

export default HomePage;
