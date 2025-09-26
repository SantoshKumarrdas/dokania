'use client';

import Link from 'next/link';
import RequireAdmin from '@/components/auth/RequireAdmin';
import { usePathname } from 'next/navigation';

export default function AdminLayout({ children }) {
    const pathname = usePathname();
    const nav = [
        { href: '/admin/products', label: 'Products' },
        { href: '/admin/clients', label: 'Clients' },
        { href: '/admin/testimonials', label: 'Testimonials' },
        { href: '/admin/contacts', label: 'Contact Messages' },
    ];
    return (
        <RequireAdmin>
            <div className="min-h-screen bg-gray-50 flex">
                <aside className="w-64 bg-white border-r">
                    <div className="p-4 font-bold text-lg">Admin</div>
                    <nav className="space-y-1 p-2">
                        {nav.map((n) => (
                            <Link key={n.href} href={n.href} className={`block px-3 py-2 rounded ${pathname.startsWith(n.href) ? 'bg-green-100 text-green-800' : 'hover:bg-gray-100'}`}>
                                {n.label}
                            </Link>
                        ))}
                    </nav>
                </aside>
                <main className="flex-1 p-6">
                    {children}
                </main>
            </div>
        </RequireAdmin>
    );
}


