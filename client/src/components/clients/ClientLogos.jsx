'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaIndustry, FaCar, FaThermometerHalf, FaCog, FaSearch, FaFilter } from 'react-icons/fa';

const ClientLogos = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('all');

    const clients = [
        {
            id: 1,
            name: 'Thermal Solutions India',
            industry: 'HVAC',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Leading HVAC solutions provider',
            location: 'Mumbai, Maharashtra',
            partnership: '5+ years',
            products: ['DGTW Hydrox Brazing', 'HVAC Components'],
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 2,
            name: 'EPS Manufacturing Co.',
            industry: 'EPS',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Premium EPS packaging solutions',
            location: 'Pune, Maharashtra',
            partnership: '3+ years',
            products: ['EPS Machinery Parts', 'Industrial Couplings'],
            icon: FaCog,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 3,
            name: 'AutoTech Industries',
            industry: 'Automotive',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Automotive component manufacturer',
            location: 'Chennai, Tamil Nadu',
            partnership: '4+ years',
            products: ['Automotive Spare Parts', 'Industrial Couplings'],
            icon: FaCar,
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 4,
            name: 'Industrial Solutions Ltd.',
            industry: 'Industrial',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Heavy industrial equipment manufacturer',
            location: 'Bangalore, Karnataka',
            partnership: '6+ years',
            products: ['Industrial Couplings', 'HVAC Components'],
            icon: FaIndustry,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 5,
            name: 'Cooling Systems India',
            industry: 'HVAC',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Commercial cooling solutions',
            location: 'Delhi, NCR',
            partnership: '2+ years',
            products: ['HVAC Components', 'DGTW Hydrox Brazing'],
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 6,
            name: 'Precision Engineering Co.',
            industry: 'Industrial',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Precision manufacturing specialist',
            location: 'Ahmedabad, Gujarat',
            partnership: '3+ years',
            products: ['Industrial Couplings', 'EPS Machinery Parts'],
            icon: FaIndustry,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 7,
            name: 'Packaging Solutions Ltd.',
            industry: 'EPS',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'EPS packaging and insulation',
            location: 'Hyderabad, Telangana',
            partnership: '4+ years',
            products: ['EPS Machinery Parts', 'Industrial Couplings'],
            icon: FaCog,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 8,
            name: 'Vehicle Components Inc.',
            industry: 'Automotive',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Automotive spare parts supplier',
            location: 'Kolkata, West Bengal',
            partnership: '2+ years',
            products: ['Automotive Spare Parts', 'HVAC Components'],
            icon: FaCar,
            color: 'from-orange-500 to-red-500'
        },
        {
            id: 9,
            name: 'Climate Control Systems',
            industry: 'HVAC',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Residential and commercial HVAC',
            location: 'Kochi, Kerala',
            partnership: '3+ years',
            products: ['HVAC Components', 'DGTW Hydrox Brazing'],
            icon: FaThermometerHalf,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 10,
            name: 'Heavy Machinery Corp.',
            industry: 'Industrial',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Heavy machinery and equipment',
            location: 'Indore, Madhya Pradesh',
            partnership: '5+ years',
            products: ['Industrial Couplings', 'Automotive Spare Parts'],
            icon: FaIndustry,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 11,
            name: 'EPS Insulation Co.',
            industry: 'EPS',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'EPS insulation and packaging',
            location: 'Jaipur, Rajasthan',
            partnership: '2+ years',
            products: ['EPS Machinery Parts', 'Industrial Couplings'],
            icon: FaCog,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 12,
            name: 'Auto Parts Direct',
            industry: 'Automotive',
            logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80',
            description: 'Direct automotive parts supplier',
            location: 'Chandigarh, Punjab',
            partnership: '1+ years',
            products: ['Automotive Spare Parts', 'HVAC Components'],
            icon: FaCar,
            color: 'from-orange-500 to-red-500'
        }
    ];

    const industries = [
        { id: 'all', name: 'All Industries', icon: FaBuilding, count: clients.length },
        { id: 'HVAC', name: 'HVAC', icon: FaThermometerHalf, count: clients.filter(c => c.industry === 'HVAC').length },
        { id: 'EPS', name: 'EPS', icon: FaCog, count: clients.filter(c => c.industry === 'EPS').length },
        { id: 'Automotive', name: 'Automotive', icon: FaCar, count: clients.filter(c => c.industry === 'Automotive').length },
        { id: 'Industrial', name: 'Industrial', icon: FaIndustry, count: clients.filter(c => c.industry === 'Industrial').length }
    ];

    const filteredClients = clients.filter(client => {
        const matchesSearch = client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            client.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesIndustry = selectedIndustry === 'all' || client.industry === selectedIndustry;
        return matchesSearch && matchesIndustry;
    });

    return (
        <div className="max-w-7xl mx-auto">
            {/* <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-center mb-12"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Our Trusted Clients
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    We're proud to serve leading companies across various industries with our high-quality products and exceptional service.
                </p>
            </motion.div> */}

            {/* Search and Filter */}
            <div className="mb-8">
                <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                    {/* Search Bar */}
                    <div className="relative flex-1 max-w-md">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search clients..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Industry Filter */}
                    <div className="flex flex-wrap gap-2">
                        {industries.map((industry) => (
                            <motion.button
                                key={industry.id}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setSelectedIndustry(industry.id)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 ${selectedIndustry === industry.id
                                        ? 'bg-gradient-to-r from-green-600 to-orange-500 text-white shadow-lg'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                            >
                                <industry.icon size={16} />
                                <span>{industry.name}</span>
                                <span className={`px-2 py-1 rounded-full text-xs ${selectedIndustry === industry.id
                                        ? 'bg-white/20 text-white'
                                        : 'bg-gray-200 text-gray-600'
                                    }`}>
                                    {industry.count}
                                </span>
                            </motion.button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Results Count */}
            <div className="mb-6">
                <p className="text-gray-600">
                    Showing {filteredClients.length} of {clients.length} clients
                </p>
            </div>

            {/* Clients Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredClients.map((client, index) => (
                    <motion.div
                        key={client.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        whileHover={{ y: -5 }}
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 group"
                    >
                        {/* Client Logo */}
                        <div className="relative mb-4">
                            <div className="w-20 h-20 mx-auto bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>
                            <div className={`absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r ${client.color} rounded-full flex items-center justify-center`}>
                                <client.icon className="text-white text-sm" />
                            </div>
                        </div>

                        {/* Client Info */}
                        <div className="text-center">
                            <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                                {client.name}
                            </h3>
                            <p className="text-gray-600 text-sm mb-2">
                                {client.description}
                            </p>
                            <p className="text-gray-500 text-xs mb-3">
                                {client.location}
                            </p>

                            {/* Partnership Duration */}
                            <div className="flex items-center justify-center space-x-2 mb-4">
                                <div className={`w-2 h-2 bg-gradient-to-r ${client.color} rounded-full`}></div>
                                <span className="text-xs text-gray-600">
                                    Partnership: {client.partnership}
                                </span>
                            </div>

                            {/* Products */}
                            <div className="space-y-1">
                                <p className="text-xs font-medium text-gray-700">Products Used:</p>
                                <div className="flex flex-wrap gap-1 justify-center">
                                    {client.products.map((product, productIndex) => (
                                        <span
                                            key={productIndex}
                                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                                        >
                                            {product}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* No Results */}
            {filteredClients.length === 0 && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center py-12"
                >
                    <div className="text-gray-400 text-6xl mb-4">🔍</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">No clients found</h3>
                    <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
                </motion.div>
            )}

            {/* Client Statistics */}
            
        </div>
    );
};

export default ClientLogos;
