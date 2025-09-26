'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuoteLeft, FaQuoteRight, FaStar, FaChevronLeft, FaChevronRight, FaUser, FaBuilding, FaIndustry } from 'react-icons/fa';

const ClientTestimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Kumar',
            position: 'Production Manager',
            company: 'Thermal Solutions India',
            industry: 'HVAC',
            rating: 5,
            text: 'Dokania Tech Solutions has been our trusted partner for over 5 years. Their DGTW Hydrox Brazing Solutions have significantly improved our production efficiency and product quality. The technical support is exceptional.',
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            position: 'Operations Director',
            company: 'EPS Manufacturing Co.',
            industry: 'EPS',
            rating: 5,
            text: 'The EPS machinery spare parts from Dokania are of exceptional quality. Their precision engineering and timely delivery have helped us maintain 99% uptime. Highly recommended for any EPS manufacturing needs.',
            image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 3,
            name: 'Amit Patel',
            position: 'Technical Head',
            company: 'AutoTech Industries',
            industry: 'Automotive',
            rating: 5,
            text: 'We have been using Dokania\'s automotive spare parts for our production line. The quality is consistently excellent, and their customer service is outstanding. They understand our requirements perfectly.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 4,
            name: 'Sunita Reddy',
            position: 'Plant Manager',
            company: 'Industrial Solutions Ltd.',
            industry: 'Industrial',
            rating: 5,
            text: 'Dokania\'s industrial couplings have been a game-changer for our operations. The durability and performance are unmatched. Their team provides excellent technical guidance and support.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 5,
            name: 'Vikram Singh',
            position: 'CEO',
            company: 'Cooling Systems India',
            industry: 'HVAC',
            rating: 5,
            text: 'The HVAC components from Dokania have helped us deliver superior cooling solutions to our clients. Their quality standards and delivery commitments are exemplary. A reliable partner indeed.',
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        },
        {
            id: 6,
            name: 'Meera Joshi',
            position: 'Quality Manager',
            company: 'Precision Engineering Co.',
            industry: 'Industrial',
            rating: 5,
            text: 'Working with Dokania has been a pleasure. Their attention to detail and commitment to quality is evident in every product. The technical support team is knowledgeable and responsive.',
            image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
            companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
        }
    ];

    const industryIcons = {
        HVAC: FaIndustry,
        EPS: FaBuilding,
        Automotive: FaIndustry,
        Industrial: FaIndustry
    };

    const industryColors = {
        HVAC: 'from-blue-500 to-cyan-500',
        EPS: 'from-green-500 to-emerald-500',
        Automotive: 'from-orange-500 to-red-500',
        Industrial: 'from-purple-500 to-pink-500'
    };

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        setIsAutoPlaying(false);
    };

    const goToTestimonial = (index) => {
        setCurrentTestimonial(index);
        setIsAutoPlaying(false);
    };

    const currentTestimonialData = testimonials[currentTestimonial];
    const IndustryIcon = industryIcons[currentTestimonialData.industry];
    const industryColor = industryColors[currentTestimonialData.industry];

    return (
        <div className="max-w-6xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    What Our Clients Say
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Hear from our satisfied clients who have experienced the quality and reliability of our solutions.
                </p>
            </motion.div>

            {/* Main Testimonial */}
            <div className="relative">
                <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 opacity-5">
                        <FaQuoteLeft className="w-full h-full text-gray-400" />
                    </div>

                    {/* Quote Icon */}
                    <div className="absolute top-6 left-6">
                        <div className={`w-12 h-12 bg-gradient-to-r ${industryColor} rounded-full flex items-center justify-center`}>
                            <FaQuoteLeft className="text-white text-lg" />
                        </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="relative z-10">
                        {/* Rating */}
                        <div className="flex justify-center mb-6">
                            {[...Array(5)].map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={`text-yellow-400 text-xl ${i < currentTestimonialData.rating ? 'opacity-100' : 'opacity-30'
                                        }`}
                                />
                            ))}
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-xl md:text-2xl text-gray-700 text-center mb-8 leading-relaxed">
                            "{currentTestimonialData.text}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                            {/* Client Image */}
                            <div className="relative">
                                <img
                                    src={currentTestimonialData.image}
                                    alt={currentTestimonialData.name}
                                    className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                                />
                                <div className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${industryColor} rounded-full flex items-center justify-center`}>
                                    <IndustryIcon className="text-white text-sm" />
                                </div>
                            </div>

                            {/* Client Details */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {currentTestimonialData.name}
                                </h3>
                                <p className="text-gray-600 font-medium">
                                    {currentTestimonialData.position}
                                </p>
                                <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
                                    <img
                                        src={currentTestimonialData.companyLogo}
                                        alt={currentTestimonialData.company}
                                        className="w-6 h-6 rounded object-cover"
                                    />
                                    <span className="text-gray-500 font-medium">
                                        {currentTestimonialData.company}
                                    </span>
                                </div>
                                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium text-white bg-gradient-to-r ${industryColor} mt-2`}>
                                    <IndustryIcon className="mr-1" size={12} />
                                    {currentTestimonialData.industry}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Navigation Arrows */}
                <button
                    onClick={prevTestimonial}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 z-10"
                >
                    <FaChevronLeft className="text-gray-600" />
                </button>
                <button
                    onClick={nextTestimonial}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl transition-all duration-200 z-10"
                >
                    <FaChevronRight className="text-gray-600" />
                </button>
            </div>

            {/* Testimonial Dots */}
            <div className="flex justify-center space-x-2 mt-8">
                {testimonials.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToTestimonial(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentTestimonial
                                ? 'bg-gradient-to-r from-green-600 to-orange-500 w-8'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                    />
                ))}
            </div>

            {/* Auto-play Toggle */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${isAutoPlaying
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                >
                    <div className={`w-3 h-3 rounded-full ${isAutoPlaying ? 'bg-green-500' : 'bg-gray-400'}`} />
                    <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
                </button>
            </div>

            {/* All Testimonials Grid */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    All Testimonials
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            onClick={() => goToTestimonial(index)}
                            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 cursor-pointer border-2 ${index === currentTestimonial
                                    ? 'border-green-500'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            {/* Rating */}
                            <div className="flex mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`text-yellow-400 text-sm ${i < testimonial.rating ? 'opacity-100' : 'opacity-30'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <blockquote className="text-gray-700 mb-4 line-clamp-3">
                                "{testimonial.text}"
                            </blockquote>

                            {/* Client Info */}
                            <div className="flex items-center space-x-3">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="w-10 h-10 rounded-full object-cover"
                                />
                                <div className="flex-1">
                                    <h4 className="font-semibold text-gray-900 text-sm">
                                        {testimonial.name}
                                    </h4>
                                    <p className="text-gray-600 text-xs">
                                        {testimonial.position}
                                    </p>
                                </div>
                                <div className={`w-8 h-8 bg-gradient-to-r ${industryColors[testimonial.industry]} rounded-full flex items-center justify-center`}>
                                    <IndustryIcon className="text-white text-xs" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientTestimonials;
