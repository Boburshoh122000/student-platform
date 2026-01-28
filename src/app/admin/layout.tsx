"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f8fafc' }}>
      {/* Admin Sidebar */}
      <aside style={{ 
        width: '240px', 
        background: '#1e293b', 
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        padding: '20px'
      }}>
        <div style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '40px', color: '#60a5fa' }}>
            CareerOS <span style={{ color: 'white' }}>Admin</span>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <Link 
                href="/admin/dashboard" 
                style={{ 
                    color: pathname === '/admin/dashboard' ? 'white' : '#94a3b8', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    background: pathname === '/admin/dashboard' ? '#334155' : 'transparent',
                    fontWeight: 500
                }}
            >
                📊 Dashboard
            </Link>
            <Link 
                href="/admin/verification" 
                style={{ 
                    color: pathname === '/admin/verification' ? 'white' : '#94a3b8', 
                    textDecoration: 'none',
                    padding: '10px',
                    borderRadius: '8px',
                    background: pathname === '/admin/verification' ? '#334155' : 'transparent',
                    fontWeight: 500
                }}
            >
                ✅ Verification <span style={{ float: 'right', background: '#e11d48', borderRadius: '10px', padding: '0 6px', fontSize: '0.7rem' }}>3</span>
            </Link>
        </nav>

        <div style={{ marginTop: 'auto', borderTop: '1px solid #334155', paddingTop: '20px' }}>
            <Link href="/" style={{ color: '#94a3b8', textDecoration: 'none', fontSize: '0.9rem' }}>
                ← Back to App
            </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
