'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaCog, FaWrench, FaThermometerHalf, FaCar, FaIndustry, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

const ProductsPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name');

    // Product data
    const products = [
        {
            id: 1,
            name: 'DGTW Hydrox Brazing Solutions',
            category: 'brazing',
            slug: 'dgtw-hydrox-brazing-solutions',
            price: 'Contact for Quote',
            description: 'High-quality brazing solutions for industrial applications with superior quality and reliability.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['High Temperature Resistance', 'Corrosion Resistant', 'Industrial Grade'],
            inStock: true
        },
        {
            id: 2,
            name: 'EPS Machinery Spare Parts',
            category: 'eps',
            slug: 'eps-machinery-spare-parts',
            price: 'Contact for Quote',
            description: 'Precision-engineered spare parts for EPS machinery ensuring optimal performance.',
            image: 'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['Precision Engineering', 'Durable Materials', 'Easy Installation'],
            inStock: true
        },
        {
            id: 3,
            name: 'HVAC System Components',
            category: 'hvac',
            slug: 'hvac-system-components',
            price: 'Contact for Quote',
            description: 'Complete range of HVAC components for residential and commercial applications.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['Energy Efficient', 'Quiet Operation', 'Long Lasting'],
            inStock: true
        },
        {
            id: 4,
            name: 'Automotive Spare Parts',
            category: 'automobile',
            slug: 'automotive-spare-parts',
            price: 'Contact for Quote',
            description: 'High-quality automotive components for various vehicle types and models.',
            image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['OEM Quality', 'Wide Compatibility', 'Reliable Performance'],
            inStock: true
        },
        {
            id: 5,
            name: 'Industrial Couplings',
            category: 'couplings',
            slug: 'industrial-couplings',
            price: 'Contact for Quote',
            description: 'Heavy-duty couplings for industrial machinery and equipment.',
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['Heavy Duty', 'Flexible Design', 'Easy Maintenance'],
            inStock: true
        },
        {
            id: 6,
            name: 'Pipe Clamps & Fittings',
            category: 'fittings',
            slug: 'pipe-clamps-fittings',
            price: 'Contact for Quote',
            description: 'Secure pipe clamps and fittings for various industrial applications.',
            image: 'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
            features: ['Secure Fastening', 'Corrosion Resistant', 'Multiple Sizes'],
            inStock: true
        }
    ];

    const categories = [
        { id: 'all', name: 'All Products', icon: FaSearch, color: 'from-blue-500 to-purple-600' },
        { id: 'brazing', name: 'DGTW Hydrox Brazing', icon: FaCog, color: 'from-blue-500 to-cyan-600' },
        { id: 'eps', name: 'EPS Machinery Parts', icon: FaWrench, color: 'from-green-500 to-emerald-600' },
        { id: 'hvac', name: 'HVAC Solutions', icon: FaThermometerHalf, color: 'from-orange-500 to-red-600' },
        { id: 'automobile', name: 'Automobile Parts', icon: FaCar, color: 'from-purple-500 to-pink-600' },
        { id: 'couplings', name: 'Industrial Couplings', icon: FaIndustry, color: 'from-indigo-500 to-purple-600' },
        { id: 'fittings', name: 'Pipe Fittings', icon: FaWrench, color: 'from-teal-500 to-cyan-600' }
    ];

    // Filter and sort products
    const filteredProducts = products
        .filter(product => {
            const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                product.description.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
            return matchesSearch && matchesCategory;
        })
        .sort((a, b) => {
            switch (sortBy) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'category':
                    return a.category.localeCompare(b.category);
                default:
                    return 0;
            }
        });

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <section className="bg-white py-20 border-b-[0.5px] border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center text-black"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">
                            Our Products
                        </h1>
                        <p className="text-xl md:text-2xl text-black/90 max-w-3xl mx-auto">
                            Discover our comprehensive range of high-quality products designed to meet the diverse needs of industries across India.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filters and Search */}
            <section className="py-8 bg-white ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <motion.button
                                    key={category.id}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.id
                                            ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        }`}
                                >
                                    <category.icon size={16} />
                                    <span>{category.name}</span>
                                </motion.button>
                            ))}
                        </div>

                        {/* Search Bar */}
                        <div className="relative flex-1 min-w-[250px]">
                            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search products..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                            />
                        </div>

                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="name">Sort by Name</option>
                            <option value="category">Sort by Category</option>
                        </select>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="pb-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <p className="text-gray-600">
                            Showing {filteredProducts.length} of {products.length} products
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${selectedCategory}-${searchTerm}-${sortBy}`}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        >
                            {filteredProducts.map((product, index) => (
                                <motion.div
                                    key={product.id}
                                    initial={{ opacity: 0, y: 30 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
                                >
                                    {/* Product Image */}
                                    <div className="relative h-48 bg-gray-200">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                        />
                                        <div className="absolute top-4 right-4">
                                            <span className="px-3 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {categories.find(cat => cat.id === product.category)?.name}
                                            </span>
                                        </div>
                                        {product.inStock && (
                                            <div className="absolute top-4 left-4">
                                                <span className="px-3 py-1 bg-green-500 text-white text-xs font-medium rounded-full">
                                                    In Stock
                                                </span>
                                            </div>
                                        )}
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

                                        {/* Price and CTA */}
                                        <div className="flex items-center justify-between">
                                            <span className="text-lg font-semibold text-gray-900">
                                                {product.price}
                                            </span>
                                            <Link href={`/products/${product.slug}`}>
                                                <motion.button
                                                    whileHover={{ scale: 1.05 }}
                                                    whileTap={{ scale: 0.95 }}
                                                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-200"
                                                >
                                                    <span>View Details</span>
                                                    <FaArrowRight size={14} />
                                                </motion.button>
                                            </Link>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </AnimatePresence>

                    {/* No Results */}
                    {filteredProducts.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="text-center py-12"
                        >
                            <div className="text-gray-400 text-6xl mb-4">🔍</div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
                            <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Can't Find What You're Looking For?
                    </h2>
                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                        We offer custom solutions and can help you find the right products for your specific needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-green-600 to-orange-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-200"
                        >
                            Contact Us
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
                        >
                            Request Quote
                        </motion.button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductsPage;
