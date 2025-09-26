'use client';

import React, { useEffect, useState } from 'react';
import { publicApi } from '@/apis/api';

export default function AdminClientsPage() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [name, setName] = useState('');
    const [logoUrl, setLogoUrl] = useState('');
    const [website, setWebsite] = useState('');

    const load = async () => {
        setLoading(true);
        setError('');
        try {
            const data = await publicApi.clients();
            setItems(data.clients);
        } catch (e) {
            setError(e.message || 'Failed to load');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => { load(); }, []);

    const create = async () => {
        try {
            await publicApi.createClient({ name, logoUrl, website });
            setName(''); setLogoUrl(''); setWebsite('');
            await load();
            alert('Created');
        } catch (e) { alert(e.message || 'Create failed'); }
    };

    const update = async (id, body) => {
        try { await publicApi.updateClient(id, body); await load(); alert('Updated'); } catch (e) { alert(e.message || 'Update failed'); }
    };
    const remove = async (id) => {
        if (!confirm('Delete this client?')) return;
        try { await publicApi.deleteClient(id); await load(); alert('Deleted'); } catch (e) { alert(e.message || 'Delete failed'); }
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Clients</h1>
            {loading && <div>Loading…</div>}
            {error && <div className="text-red-600">{error}</div>}

            <div className="mb-4 space-x-2">
                <input value={name} onChange={e => setName(e.target.value)} placeholder="Name" className="border p-2 rounded" />
                <input value={logoUrl} onChange={e => setLogoUrl(e.target.value)} placeholder="Logo URL" className="border p-2 rounded" />
                <input value={website} onChange={e => setWebsite(e.target.value)} placeholder="Website" className="border p-2 rounded" />
                <button onClick={create} className="px-3 py-2 bg-green-600 text-white rounded">Add</button>
            </div>

            {!loading && !error && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {items.map((c) => (
                        <div key={c._id} className="border rounded p-3 flex items-center gap-3">
                            <img src={c.logoUrl || 'https://via.placeholder.com/40'} alt="logo" className="w-10 h-10 object-cover rounded" />
                            <div className="flex-1">
                                <div className="font-semibold">{c.name}</div>
                                <div className="text-xs text-gray-600">{c.website}</div>
                            </div>
                            <button onClick={() => update(c._id, { name: prompt('Name', c.name) || c.name })} className="px-2 py-1 border rounded">Edit</button>
                            <button onClick={() => remove(c._id)} className="px-2 py-1 border rounded text-red-600">Delete</button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}


