import React from 'react';
import ProductDetail from '@/components/products/ProductDetail';
import { notFound } from 'next/navigation';

const products = [
    {
        id: 1,
        slug: 'dgtw-hydrox-brazing-solutions',
        name: 'DGTW Hydrox Brazing Solutions',
        category: 'brazing',
        price: 'Contact for Quote',
        description: 'High-quality brazing solutions for industrial applications with superior quality and reliability.',
        longDescription: 'Our DGTW Hydrox Brazing Solutions are engineered to meet the highest standards of industrial brazing applications. These solutions provide exceptional strength, durability, and resistance to high temperatures and corrosive environments.',
        features: [
            'High Temperature Resistance up to 1000°C',
            'Corrosion Resistant for harsh environments',
            'Industrial Grade quality assurance',
            'Easy application and handling',
            'Long-lasting performance',
            'Compatible with various base metals'
        ],
        specifications: {
            'Operating Temperature': 'Up to 1000°C',
            'Material': 'High-grade brazing alloy',
            'Application': 'Industrial brazing',
            'Packaging': 'Various sizes available',
            'Certification': 'ISO 9001 certified'
        },
        images: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        applications: ['Aerospace', 'Automotive', 'HVAC', 'Industrial Manufacturing'],
        inStock: true
    },
    {
        id: 2,
        slug: 'eps-machinery-spare-parts',
        name: 'EPS Machinery Spare Parts',
        category: 'eps',
        price: 'Contact for Quote',
        description: 'Precision-engineered spare parts for EPS machinery ensuring optimal performance.',
        longDescription: 'Our EPS Machinery Spare Parts are manufactured with precision engineering to ensure optimal performance and longevity. These parts are designed to meet the exact specifications of your EPS machinery.',
        features: [
            'Precision Engineering for exact fit',
            'Durable Materials for long life',
            'Easy Installation process',
            'OEM Quality standards',
            'Wide compatibility range',
            'Cost-effective solutions'
        ],
        specifications: {
            'Material': 'High-grade steel and alloys',
            'Tolerance': '±0.01mm precision',
            'Surface Treatment': 'Corrosion resistant coating',
            'Warranty': '12 months',
            'Certification': 'ISO 9001 certified'
        },
        images: [
            'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        applications: ['EPS Manufacturing', 'Packaging Industry', 'Construction', 'Automotive'],
        inStock: true
    },
    {
        id: 3,
        slug: 'hvac-system-components',
        name: 'HVAC System Components',
        category: 'hvac',
        price: 'Contact for Quote',
        description: 'Complete range of HVAC components for residential and commercial applications.',
        longDescription: 'Our HVAC System Components are designed to provide efficient heating, ventilation, and air conditioning solutions for both residential and commercial applications.',
        features: [
            'Energy Efficient design',
            'Quiet Operation technology',
            'Long Lasting durability',
            'Easy Maintenance access',
            'Environmentally friendly',
            'Smart control compatibility'
        ],
        specifications: {
            'Efficiency Rating': 'A+ Energy Rating',
            'Noise Level': '< 40dB',
            'Warranty': '5 years',
            'Installation': 'Professional required',
            'Certification': 'CE and ISO certified'
        },
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        applications: ['Residential HVAC', 'Commercial Buildings', 'Industrial Facilities', 'Data Centers'],
        inStock: true
    },
    {
        id: 4,
        slug: 'automotive-spare-parts',
        name: 'Automotive Spare Parts',
        category: 'automobile',
        price: 'Contact for Quote',
        description: 'High-quality automotive components for various vehicle types and models.',
        longDescription: 'Our Automotive Spare Parts are manufactured to meet the highest quality standards, ensuring reliable performance and durability for various vehicle types and models.',
        features: [
            'OEM Quality standards',
            'Wide Compatibility range',
            'Reliable Performance',
            'Easy Installation',
            'Long-lasting durability',
            'Cost-effective pricing'
        ],
        specifications: {
            'Quality': 'OEM Grade',
            'Compatibility': 'Multiple vehicle models',
            'Warranty': '2 years',
            'Material': 'High-grade alloys',
            'Certification': 'ISO/TS 16949 certified'
        },
        images: [
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        applications: ['Passenger Vehicles', 'Commercial Vehicles', 'Heavy Machinery', 'Industrial Equipment'],
        inStock: true
    },
    {
        id: 5,
        slug: 'industrial-couplings',
        name: 'Industrial Couplings',
        category: 'couplings',
        price: 'Contact for Quote',
        description: 'Heavy-duty couplings for industrial machinery and equipment.',
        longDescription: 'Our Industrial Couplings are designed for heavy-duty applications, providing reliable power transmission and connection for various industrial machinery and equipment.',
        features: [
            'Heavy Duty construction',
            'Flexible Design options',
            'Easy Maintenance access',
            'High Torque capacity',
            'Corrosion resistant',
            'Long service life'
        ],
        specifications: {
            'Torque Capacity': 'Up to 50,000 Nm',
            'Material': 'High-grade steel',
            'Temperature Range': '-40°C to +120°C',
            'Warranty': '3 years',
            'Certification': 'ISO 9001 certified'
        },
        images: [
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1565819443351-4b4b4b4b4b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
        ],
        applications: ['Industrial Machinery', 'Power Generation', 'Marine Applications', 'Mining Equipment'],
        inStock: true
    }
];

export async function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

export async function generateMetadata({ params }) {
    const product = products.find(p => p.slug === params.slug);

    if (!product) {
        return {
            title: 'Product Not Found',
        };
    }

    return {
        title: `${product.name} - Dokania Tech Solutions`,
        description: product.description,
    };
}

const ProductPage = ({ params }) => {
    const product = products.find(p => p.slug === params.slug);

    if (!product) {
        notFound();
    }

    return <ProductDetail product={product} />;
};

export default ProductPage;
