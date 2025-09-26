'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTrophy, FaChartLine, FaCog, FaThermometerHalf, FaCar, FaIndustry, FaArrowRight, FaCheckCircle, FaClock, FaUsers, FaBuilding, FaQuoteLeft  } from 'react-icons/fa';

const SuccessStories = () => {
    const [selectedStory, setSelectedStory] = useState(0);

    const successStories = [
        {
            id: 1,
            title: 'Thermal Solutions India - HVAC Efficiency Revolution',
            client: 'Thermal Solutions India',
            industry: 'HVAC',
            duration: '6 months',
            challenge: 'High energy consumption and frequent equipment breakdowns in their HVAC systems, leading to increased operational costs and customer complaints.',
            solution: 'Implemented our DGTW Hydrox Brazing Solutions and high-quality HVAC components, along with comprehensive technical support and maintenance training.',
            results: [
                '40% reduction in energy consumption',
                '60% decrease in equipment downtime',
                '25% increase in customer satisfaction',
                '35% reduction in maintenance costs'
            ],
            metrics: {
                energySavings: '40%',
                downtimeReduction: '60%',
                costSavings: '35%',
                customerSatisfaction: '95%'
            },
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500',
            testimonial: 'Dokania Tech Solutions transformed our HVAC operations. The energy savings alone have paid for the investment within 8 months.',
            testimonialAuthor: 'Rajesh Kumar, Production Manager'
        },
        {
            id: 2,
            title: 'EPS Manufacturing Co. - Production Optimization',
            client: 'EPS Manufacturing Co.',
            industry: 'EPS',
            duration: '4 months',
            challenge: 'Frequent breakdowns of EPS machinery causing production delays and quality issues, resulting in missed delivery deadlines and customer dissatisfaction.',
            solution: 'Provided precision-engineered EPS machinery spare parts and industrial couplings, along with predictive maintenance strategies and operator training.',
            results: [
                '99% equipment uptime achieved',
                '30% increase in production output',
                '50% reduction in maintenance costs',
                'Zero quality defects in 6 months'
            ],
            metrics: {
                uptime: '99%',
                productionIncrease: '30%',
                costReduction: '50%',
                qualityDefects: '0%'
            },
            image: 'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            icon: FaCog,
            color: 'from-green-500 to-emerald-500',
            testimonial: 'The precision and quality of Dokania\'s parts are unmatched. Our production efficiency has never been better.',
            testimonialAuthor: 'Priya Sharma, Operations Director'
        },
        {
            id: 3,
            title: 'AutoTech Industries - Automotive Excellence',
            client: 'AutoTech Industries',
            industry: 'Automotive',
            duration: '8 months',
            challenge: 'Inconsistent quality of automotive spare parts leading to warranty claims and customer complaints, affecting brand reputation and profitability.',
            solution: 'Supplied high-quality automotive spare parts with strict quality control, implemented just-in-time delivery system, and provided technical support.',
            results: [
                '95% reduction in warranty claims',
                '40% improvement in product quality',
                '25% increase in customer retention',
                '20% growth in market share'
            ],
            metrics: {
                warrantyReduction: '95%',
                qualityImprovement: '40%',
                customerRetention: '25%',
                marketShareGrowth: '20%'
            },
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            icon: FaCar,
            color: 'from-orange-500 to-red-500',
            testimonial: 'Dokania\'s automotive parts have elevated our product quality and customer satisfaction to new heights.',
            testimonialAuthor: 'Amit Patel, Technical Head'
        },
        {
            id: 4,
            title: 'Industrial Solutions Ltd. - Heavy Machinery Reliability',
            client: 'Industrial Solutions Ltd.',
            industry: 'Industrial',
            duration: '12 months',
            challenge: 'Frequent failures of industrial couplings causing production stoppages and safety concerns in heavy machinery operations.',
            solution: 'Provided heavy-duty industrial couplings with advanced materials and design, implemented condition monitoring systems, and conducted safety training.',
            results: [
                '80% reduction in coupling failures',
                '45% increase in machinery reliability',
                '60% improvement in safety record',
                '30% reduction in operational costs'
            ],
            metrics: {
                failureReduction: '80%',
                reliabilityIncrease: '45%',
                safetyImprovement: '60%',
                costReduction: '30%'
            },
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            icon: FaIndustry,
            color: 'from-purple-500 to-pink-500',
            testimonial: 'The reliability and safety improvements achieved with Dokania\'s solutions have been remarkable.',
            testimonialAuthor: 'Sunita Reddy, Plant Manager'
        }
    ];

    const industryIcons = {
        HVAC: FaThermometerHalf,
        EPS: FaCog,
        Automotive: FaCar,
        Industrial: FaIndustry
    };

    const industryColors = {
        HVAC: 'from-blue-500 to-cyan-500',
        EPS: 'from-green-500 to-emerald-500',
        Automotive: 'from-orange-500 to-red-500',
        Industrial: 'from-purple-500 to-pink-500'
    };

    const currentStory = successStories[selectedStory];

    return (
        <div className="max-w-7xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Success Stories
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Discover how we've helped our clients achieve remarkable results and transform their operations.
                </p>
            </motion.div>

            {/* Story Navigation */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {successStories.map((story, index) => (
                    <motion.button
                        key={story.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedStory(index)}
                        className={`flex items-center space-x-3 px-6 py-3 rounded-lg font-medium transition-all duration-200 ${selectedStory === index
                                ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                    >
                        <story.icon size={18} />
                        <span className="hidden sm:block">{story.client}</span>
                        <span className="sm:hidden">{story.industry}</span>
                    </motion.button>
                ))}
            </div>

            {/* Main Story Display */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={selectedStory}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white rounded-2xl shadow-xl overflow-hidden"
                >
                    {/* Story Header */}
                    <div className="relative h-64 md:h-80">
                        <img
                            src={currentStory.image}
                            alt={currentStory.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className={`w-12 h-12 bg-gradient-to-r ${currentStory.color} rounded-full flex items-center justify-center`}>
                                    <currentStory.icon className="text-white text-xl" />
                                </div>
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                                        {currentStory.title}
                                    </h3>
                                    <p className="text-white/90 text-lg">
                                        {currentStory.client} • {currentStory.industry} • {currentStory.duration}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Story Content */}
                    <div className="p-8">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                            {/* Left Column - Challenge & Solution */}
                            <div className="space-y-6">
                                {/* Challenge */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                        <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                                            <span className="text-red-600 font-bold">!</span>
                                        </div>
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {currentStory.challenge}
                                    </p>
                                </div>

                                {/* Solution */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center">
                                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                            <FaCog className="text-blue-600" />
                                        </div>
                                        Our Solution
                                    </h4>
                                    <p className="text-gray-700 leading-relaxed">
                                        {currentStory.solution}
                                    </p>
                                </div>

                                {/* Testimonial */}
                                <div className="bg-gray-50 rounded-lg p-6">
                                    <div className="flex items-start space-x-3">
                                        <FaQuoteLeft className="text-gray-400 text-xl mt-1" />
                                        <div>
                                            <p className="text-gray-700 italic mb-3">
                                                "{currentStory.testimonial}"
                                            </p>
                                            <p className="text-gray-600 font-medium">
                                                — {currentStory.testimonialAuthor}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Column - Results & Metrics */}
                            <div className="space-y-6">
                                {/* Key Results */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                                            <FaTrophy className="text-green-600" />
                                        </div>
                                        Key Results
                                    </h4>
                                    <div className="space-y-3">
                                        {currentStory.results.map((result, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="flex items-center space-x-3"
                                            >
                                                <FaCheckCircle className="text-green-500 flex-shrink-0" />
                                                <span className="text-gray-700">{result}</span>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                {/* Metrics Grid */}
                                <div>
                                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                                            <FaChartLine className="text-purple-600" />
                                        </div>
                                        Impact Metrics
                                    </h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {Object.entries(currentStory.metrics).map(([key, value], index) => (
                                            <motion.div
                                                key={key}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 text-center"
                                            >
                                                <div className={`text-2xl font-bold bg-gradient-to-r ${currentStory.color} bg-clip-text text-transparent`}>
                                                    {value}
                                                </div>
                                                <div className="text-sm text-gray-600 capitalize">
                                                    {key.replace(/([A-Z])/g, ' $1').trim()}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* All Stories Grid */}
            <div className="mt-16">
                <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
                    All Success Stories
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {successStories.map((story, index) => (
                        <motion.div
                            key={story.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            onClick={() => setSelectedStory(index)}
                            className={`bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer border-2 ${index === selectedStory
                                    ? 'border-green-500'
                                    : 'border-gray-100 hover:border-gray-200'
                                }`}
                        >
                            {/* Story Image */}
                            <div className="relative h-48">
                                <img
                                    src={story.image}
                                    alt={story.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute top-4 left-4">
                                    <div className={`w-10 h-10 bg-gradient-to-r ${story.color} rounded-full flex items-center justify-center`}>
                                        <story.icon className="text-white" />
                                    </div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-white/90 text-gray-700 text-xs font-medium rounded-full">
                                        {story.industry}
                                    </span>
                                </div>
                            </div>

                            {/* Story Content */}
                            <div className="p-6">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                    {story.title}
                                </h4>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {story.challenge}
                                </p>

                                {/* Key Metrics */}
                                <div className="grid grid-cols-2 gap-2 mb-4">
                                    {Object.entries(story.metrics).slice(0, 2).map(([key, value]) => (
                                        <div key={key} className="text-center">
                                            <div className={`text-lg font-bold bg-gradient-to-r ${story.color} bg-clip-text text-transparent`}>
                                                {value}
                                            </div>
                                            <div className="text-xs text-gray-500 capitalize">
                                                {key.replace(/([A-Z])/g, ' $1').trim()}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Duration and Client */}
                                <div className="flex items-center justify-between text-sm text-gray-500">
                                    <div className="flex items-center space-x-1">
                                        <FaClock size={12} />
                                        <span>{story.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-1">
                                        <FaBuilding size={12} />
                                        <span>{story.client}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-gradient-to-r from-green-600 to-orange-500 rounded-2xl p-8 text-center text-white">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">
                        Ready to Create Your Success Story?
                    </h3>
                    <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
                        Join our growing list of satisfied clients and experience the difference our solutions can make for your business.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="/contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                        >
                            Start Your Journey
                        </motion.a>
                        <motion.a
                            href="/products"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-200"
                        >
                            Explore Solutions
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default SuccessStories;
