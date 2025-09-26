'use client';

import React, { useEffect, useState } from 'react';
import { api } from '@/apis/api';

export default function AdminContactsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        (async () => {
            setLoading(true);
            setError('');
            try {
                const res = await api.get('/contact');
                setItems(res.data.messages || []);
            } catch (e) {
                setError(e.message || 'Failed to load messages');
            } finally {
                setLoading(false);
            }
        })();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Contact Messages</h1>
            {loading && <div>Loading…</div>}
            {error && <div className="text-red-600">{error}</div>}
            {!loading && !error && (
                <div className="overflow-auto border rounded">
                    <table className="min-w-full text-sm">
                        <thead>
                            <tr className="bg-gray-100 text-left">
                                <th className="p-2">Name</th>
                                <th className="p-2">Email</th>
                                <th className="p-2">Subject</th>
                                <th className="p-2">Message</th>
                                <th className="p-2">Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((m) => (
                                <tr key={m._id} className="border-t">
                                    <td className="p-2">{m.name}</td>
                                    <td className="p-2">{m.email}</td>
                                    <td className="p-2">{m.subject}</td>
                                    <td className="p-2 max-w-xl truncate" title={m.message}>{m.message}</td>
                                    <td className="p-2">{new Date(m.createdAt).toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}


