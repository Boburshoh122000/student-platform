"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { AdminProvider } from '@/context/AdminContext';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  
  const navItems = [
    { label: 'Dashboard', href: '/admin/dashboard', icon: '📊' },
    { label: 'Verification Queue', href: '/admin/verification', icon: '🛡️' },
    { label: 'Scam Reports', href: '/admin/reports', icon: '🚨' }, // Not implemented yet
    { label: 'Settings', href: '/admin/settings', icon: '⚙️' },
  ];

  return (
    <AdminProvider>
      <div style={{ display: 'flex', minHeight: '100vh', background: '#0f172a', color: 'white' }}>
        {/* SIDEBAR */}
        <aside style={{
          width: '250px',
          borderRight: '1px solid #1e293b',
          padding: 'var(--s-6)',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div style={{ marginBottom: 'var(--s-8)', fontSize: '1.25rem', fontWeight: 700, color: '#38bdf8' }}>
            CareerOS <span style={{ color: '#94a3b8', fontSize: '0.8rem' }}>ADMIN</span>
          </div>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-2)' }}>
            {navItems.map(item => {
              const isActive = pathname === item.href;
              return (
                 <Link 
                   key={item.href} 
                   href={item.href}
                   style={{
                     display: 'flex',
                     alignItems: 'center',
                     gap: 'var(--s-3)',
                     padding: 'var(--s-2) var(--s-4)',
                     borderRadius: 'var(--r-md)',
                     background: isActive ? '#1e293b' : 'transparent',
                   color: isActive ? '#38bdf8' : '#94a3b8',
                   textDecoration: 'none',
                   transition: 'all 0.2s'
                 }}
               >
                 <span>{item.icon}</span>
                 {item.label}
               </Link>
            );
          })}
        </nav>

        <div style={{ marginTop: 'auto', paddingTop: 'var(--s-6)', borderTop: '1px solid #1e293b' }}>
          <Link href="/" style={{ color: '#64748b', textDecoration: 'none', fontSize: '0.875rem' }}>
            ← Back to App
          </Link>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main style={{ flex: 1, padding: 'var(--s-8)', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
    </AdminProvider>
  );
}
