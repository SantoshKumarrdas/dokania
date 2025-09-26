'use client';

import React, { useEffect, useState } from 'react';
import { publicApi } from '@/apis/api';

export default function AdminTestimonialsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [author, setAuthor] = useState('');
    const [company, setCompany] = useState('');
    const [content, setContent] = useState('');
    const [rating, setRating] = useState(5);

    const load = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await publicApi.testimonials();
            setItems(data.testimonials);
        } catch (e) {
            setError(e.message || 'Failed to load');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const create = async () => {
        try {
            await publicApi.createTestimonial({ author, company, content, rating: Number(rating) });
            setAuthor(''); setCompany(''); setContent(''); setRating(5);
            await load();
            alert('Created');
        } catch (e) { alert(e.message || 'Create failed'); }
    };

    const update = async (id, body) => {
        try { await publicApi.updateTestimonial(id, body); await load(); alert('Updated'); } catch (e) { alert(e.message || 'Update failed'); }
    };
    const remove = async (id) => {
        if (!confirm('Delete this testimonial?')) return;
        try { await publicApi.deleteTestimonial(id); await load(); alert('Deleted'); } catch (e) { alert(e.message || 'Delete failed'); }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Testimonials</h1>
            {loading && <div>Loading…</div>}
            {error && <div className="text-red-600">{error}</div>}

            <div className="mb-4 space-x-2">
                <input value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" className="border p-2 rounded" />
                <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Company" className="border p-2 rounded" />
                <input value={rating} onChange={e => setRating(e.target.value)} type="number" min="1" max="5" placeholder="Rating" className="border p-2 rounded w-24" />
                <input value={content} onChange={e => setContent(e.target.value)} placeholder="Content" className="border p-2 rounded w-[400px]" />
                <button onClick={create} className="px-3 py-2 bg-green-600 text-white rounded">Add</button>
            </div>

            {!loading && !error && (
                <div className="space-y-3">
                    {items.map((t) => (
                        <div key={t._id} className="border rounded p-3">
                            <div className="font-semibold">{t.author} · {t.company} · {t.rating}/5</div>
                            <div className="text-sm text-gray-700">{t.content}</div>
                            <div className="mt-2 space-x-2">
                                <button onClick={() => update(t._id, { content: prompt('Content', t.content) || t.content })} className="px-2 py-1 border rounded">Edit</button>
                                <button onClick={() => remove(t._id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


