"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGamification } from '@/context/GamificationContext';

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
  const { xp, level, streak } = useGamification();

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
        <div style={{ marginBottom: 'var(--s-6)' }}>
             <Link href="/" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '1.25rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--c-text-primary)' }}>
                    Career<span style={{ color: 'var(--c-primary)' }}>OS</span>
                </span>
             </Link>
             <div style={{ fontSize: '0.75rem', color: 'var(--c-text-minor)', marginTop: '4px' }}>Student Dashboard</div>
        </div>

        {/* GAMIFICATION WIDGET */}
        <div style={{ marginBottom: 'var(--s-6)', padding: 'var(--s-3)', background: 'var(--c-bg-main)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-2)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-primary)' }}>Level {level}</span>
                <span style={{ fontSize: '0.8rem', color: '#F59E0B' }}>🔥 {streak}</span>
            </div>
            <div style={{ height: '6px', width: '100%', background: '#e4e4e7', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(xp % 100)}%`, background: 'var(--c-growth-violet)', transition: 'width 0.5s ease' }} />
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--c-text-minor)', marginTop: '4px', textAlign: 'right' }}>
                {xp % 100} / 100 XP
            </div>
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
