'use client';

import React, { useState } from 'react';
import { productApi } from '@/apis/api';
import { useRouter } from 'next/navigation';
import ImageUploader from '@/components/common/ImageUploader';

export default function CreateProductPage() {
    const router = useRouter();
    const [form, setForm] = useState({ name: '', slug: '', category: '', priceLabel: 'Contact for Quote', description: '', longDescription: '', images: '', inStock: true });
    const [imageUrls, setImageUrls] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const onSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        try {
            const payload = {
                ...form,
                images: [
                    ...imageUrls,
                    ...(form.images ? form.images.split(',').map(s => s.trim()) : [])
                ],
                features: [],
                specifications: {},
                applications: [],
            };
            await productApi.create(payload);
            alert('Created');
            router.push('/admin/products');
        } catch (e) {
            setError(e.message || 'Failed to create');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Create Product</h1>
            <form onSubmit={onSubmit} className="space-y-3 max-w-2xl">
                {error && <div className="text-red-600">{error}</div>}
                <input name="name" value={form.name} onChange={onChange} placeholder="Name" className="w-full border p-2 rounded" required />
                <input name="slug" value={form.slug} onChange={onChange} placeholder="Slug" className="w-full border p-2 rounded" required />
                <input name="category" value={form.category} onChange={onChange} placeholder="Category" className="w-full border p-2 rounded" required />
                <input name="priceLabel" value={form.priceLabel} onChange={onChange} placeholder="Price Label" className="w-full border p-2 rounded" />
                <textarea name="description" value={form.description} onChange={onChange} placeholder="Short description" className="w-full border p-2 rounded" required />
                <textarea name="longDescription" value={form.longDescription} onChange={onChange} placeholder="Long description" className="w-full border p-2 rounded" />
                <select name="inStock" value={form.inStock ? 'true' : 'false'} onChange={(e) => setForm({ ...form, inStock: e.target.value === 'true' })} className="w-full border p-2 rounded">
                    <option value="true">In Stock</option>
                    <option value="false">Out of Stock</option>
                </select>
                <div className="space-y-2">
                    <ImageUploader scope="product" onUploaded={(url) => setImageUrls(prev => [...prev, url])} />
                    {imageUrls.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                            {imageUrls.map((u, i) => (
                                <img key={i} src={u} alt="uploaded" className="w-16 h-16 object-cover rounded" />
                            ))}
                        </div>
                    )}
                    <input name="images" value={form.images} onChange={onChange} placeholder="Additional image URLs (comma separated)" className="w-full border p-2 rounded" />
                </div>
                <button disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading ? 'Saving...' : 'Create'}</button>
            </form>
        </div>
    );
}


