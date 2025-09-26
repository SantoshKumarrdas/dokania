'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { productApi } from '@/apis/api';

export default function AdminProductsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [page, setPage] = useState(1);
    const [pages, setPages] = useState(1);

    const load = async (p = 1) => {
        setLoading(true);
        setError('');
        try {
            const data = await productApi.list({ page: p, limit: 10 });
            setItems(data.products);
            setPages(data.pagination.pages);
            setPage(data.pagination.page);
        } catch (e) {
            setError(e.message || 'Failed to load products');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(1); }, []);

    const onDelete = async (id) => {
        if (!confirm('Delete this product?')) return;
        try {
            await productApi.remove(id);
            await load(page);
            alert('Deleted');
        } catch (e) {
            alert(e.message || 'Delete failed');
        }
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold">Products</h1>
                <Link href="/admin/products/create" className="px-3 py-2 bg-green-600 text-white rounded">New Product</Link>
            </div>
            {loading && <div>Loading…</div>}
            {error && <div className="text-red-600">{error}</div>}
            {!loading && !error && (
                <div className="overflow-auto border rounded">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Category</th>
                                <th className="p-2">Price Label</th>
                                <th className="p-2">Status</th>
                                <th className="p-2">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((p) => (
                                <tr key={p._id} className="border-t">
                                    <td className="p-2">{p.name}</td>
                                    <td className="p-2">{p.category}</td>
                                    <td className="p-2">{p.priceLabel || 'Contact for Quote'}</td>
                                    <td className="p-2">{p.inStock ? 'In Stock' : 'Out of Stock'}</td>
                                    <td className="p-2 space-x-2">
                                        <Link href={`/admin/products/${p._id}/edit`} className="px-2 py-1 border rounded">Edit</Link>
                                        <button onClick={() => onDelete(p._id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <div className="flex items-center gap-2 mt-4">
                <button disabled={page <= 1} onClick={() => load(page - 1)} className="px-3 py-1 border rounded disabled:opacity-50">Prev</button>
                <div>Page {page} / {pages}</div>
                <button disabled={page >= pages} onClick={() => load(page + 1)} className="px-3 py-1 border rounded disabled:opacity-50">Next</button>
            </div>
        </div>
    );
}


