"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: '🚀 Job Market', href: '/jobs' },
  { label: '📋 Tracker', href: '/tracker' },
  { label: '📝 Resume Builder', href: '/resume/builder' },
  { label: '✍️ Cover Letter', href: '/resume/cover-letter' },
  { label: '🧠 Learning', href: '/learning' },
  { label: '🌍 Community', href: '/community' },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--c-bg-page)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '240px', 
        borderRight: '1px solid var(--c-border)', 
        background: 'var(--c-bg-card)',
        padding: 'var(--s-6)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh'
      }}>
        <div style={{ marginBottom: 'var(--s-8)' }}>
             <Link href="/" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text-primary)' }}>
                    Career<span style={{ color: 'var(--c-primary)' }}>OS</span>
                </span>
             </Link>
             <div style={{ fontSize: '0.75rem', color: 'var(--c-text-minor)', marginTop: '4px' }}>Student Dashboard</div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-2)', flex: 1 }}>
          {NAV_ITEMS.map(item => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href} 
                href={item.href}
                style={{
                  display: 'block',
                  padding: 'var(--s-3) var(--s-4)',
                  borderRadius: 'var(--r-md)',
                  color: isActive ? 'var(--c-primary)' : 'var(--c-text-minor)',
                  background: isActive ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: 'var(--s-4)' }}>
           <Link href="/login" style={{ fontSize: '0.85rem', color: 'var(--c-text-minor)', textDecoration: 'none' }}>
              ← Sign Out
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
