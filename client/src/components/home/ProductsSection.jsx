'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCog, FaWrench, FaThermometerHalf, FaCar, FaArrowRight, FaSearch } from 'react-icons/fa';
import Link from 'next/link';

const ProductsSection = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const productCategories = [
        {
            id: 'all',
            name: 'All Products',
            icon: FaSearch,
            color: 'from-blue-500 to-purple-600'
        },
        {
            id: 'brazing',
            name: 'DGTW Hydrox Brazing',
            icon: FaCog,
            color: 'from-blue-500 to-cyan-600',
            description: 'High-quality brazing solutions for industrial applications'
        },
        {
            id: 'eps',
            name: 'EPS Machinery Parts',
            icon: FaWrench,
            color: 'from-green-500 to-emerald-600',
            description: 'Precision-engineered spare parts for EPS machinery'
        },
        {
            id: 'hvac',
            name: 'HVAC Solutions',
            icon: FaThermometerHalf,
            color: 'from-orange-500 to-red-600',
            description: 'Complete HVAC system components and solutions'
        },
        {
            id: 'automobile',
            name: 'Automobile Parts',
            icon: FaCar,
            color: 'from-purple-500 to-pink-600',
            description: 'Reliable automotive components and spare parts'
        }
    ];

    const products = [
        {
            id: 1,
            name: 'DGTW Hydrox Brazing Solutions',
            category: 'brazing',
            image: '/api/placeholder/400/300',
            description: 'Premium brazing solutions for industrial applications with superior quality and reliability.',
            features: ['High Temperature Resistance', 'Corrosion Resistant', 'Industrial Grade']
        },
        {
            id: 2,
            name: 'EPS Machinery Spare Parts',
            category: 'eps',
            image: '/api/placeholder/400/300',
            description: 'Precision-engineered spare parts for EPS machinery ensuring optimal performance.',
            features: ['Precision Engineering', 'Durable Materials', 'Easy Installation']
        },
        {
            id: 3,
            name: 'HVAC System Components',
            category: 'hvac',
            image: '/api/placeholder/400/300',
            description: 'Complete range of HVAC components for residential and commercial applications.',
            features: ['Energy Efficient', 'Quiet Operation', 'Long Lasting']
        },
        {
            id: 4,
            name: 'Automotive Spare Parts',
            category: 'automobile',
            image: '/api/placeholder/400/300',
            description: 'High-quality automotive components for various vehicle types and models.',
            features: ['OEM Quality', 'Wide Compatibility', 'Reliable Performance']
        },
        {
            id: 5,
            name: 'Industrial Couplings',
            category: 'brazing',
            image: '/api/placeholder/400/300',
            description: 'Heavy-duty couplings for industrial machinery and equipment.',
            features: ['Heavy Duty', 'Flexible Design', 'Easy Maintenance']
        },
        {
            id: 6,
            name: 'Pipe Clamps & Fittings',
            category: 'eps',
            image: '/api/placeholder/400/300',
            description: 'Secure pipe clamps and fittings for various industrial applications.',
            features: ['Secure Fastening', 'Corrosion Resistant', 'Multiple Sizes']
        }
    ];

    const filteredProducts = activeCategory === 'all'
        ? products
        : products.filter(product => product.category === activeCategory);

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-orange-500">Products</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover our comprehensive range of high-quality products designed to meet the diverse needs of industries across India.
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {productCategories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-200 ${activeCategory === category.id
                                ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                }`}
                        >
                            <category.icon size={18} />
                            <span>{category.name}</span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="wait">
                        {filteredProducts.slice(0, 3).map((product, index) => (
                            <motion.div
                                key={product.id}
                                layout
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                            >
                                {/* Product Image */}
                                <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-orange-500 rounded-full flex items-center justify-center">
                                        <span className="text-white font-bold text-xl">DTS</span>
                                    </div>
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                            {productCategories.find(cat => cat.id === product.category)?.name}
                                        </span>
                                    </div>
                                </div>

                                {/* Product Content */}
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {product.description}
                                    </p>

                                    {/* Features */}
                                    <div className="space-y-2 mb-6">
                                        {product.features.map((feature, featureIndex) => (
                                            <div key={featureIndex} className="flex items-center space-x-2">
                                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                                <span className="text-sm text-gray-600">{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Button */}
                                    <Link href="/products">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="w-full flex items-center justify-center space-x-2 py-3 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                                        >
                                            <span>Learn More</span>
                                            <FaArrowRight size={14} />
                                        </motion.button>
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Products CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center mt-12"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 border-2 border-green-600 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-all duration-200"
                    >
                        View All Products
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductsSection;
