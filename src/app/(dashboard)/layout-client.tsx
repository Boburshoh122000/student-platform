"use client";
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useGamification } from '@/context/GamificationContext';
import Header from '@/components/layout/Header';

const NAV_ITEMS = [
  { label: '🚀 Job Market', href: '/jobs' },
  { label: '📋 Tracker', href: '/tracker' },
  { label: '📝 Resume Builder', href: '/resume/builder' },
  { label: '✍️ Cover Letter', href: '/resume/cover-letter' },
  { label: '🧠 Learning', href: '/learning' },
  { label: '🌍 Community', href: '/community' },
];

export default function DashboardLayoutClient({ children, user }: { children: React.ReactNode, user?: any }) {
  const pathname = usePathname();
  const { xp, level, streak } = useGamification();

  // Infer title from path for MVP
  const getTitle = () => {
    if (pathname === '/jobs') return 'Job Market';
    if (pathname === '/tracker') return 'Application Tracker';
    if (pathname.includes('resume')) return 'AI Resume Tools';
    if (pathname === '/learning') return 'Learning Roadmap';
    if (pathname === '/community') return 'Community';
    return 'Dashboard';
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--c-bg-page)' }}>
      {/* Sidebar */}
      <aside style={{ 
        width: '260px', 
        borderRight: '1px solid var(--c-border)', 
        background: 'var(--c-bg-card)',
        padding: 'var(--s-6)',
        display: 'flex',
        flexDirection: 'column',
        position: 'sticky',
        top: 0,
        height: '100vh',
        zIndex: 20
      }}>
        <div style={{ marginBottom: 'var(--s-8)', paddingLeft: 'var(--s-2)' }}>
             <Link href="/" style={{ textDecoration: 'none' }}>
                <span style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--c-text-major)' }}>
                    Career<span style={{ color: 'var(--c-trust-blue)' }}>OS</span>
                </span>
             </Link>
             <div style={{ fontSize: '0.75rem', color: 'var(--c-text-minor)', marginTop: '4px', letterSpacing: '0.05em', textTransform: 'uppercase', fontWeight: 600 }}>Student Edition</div>
        </div>

        {/* GAMIFICATION WIDGET */}
        <div style={{ marginBottom: 'var(--s-6)', padding: 'var(--s-4)', background: 'rgba(255,255,255,0.03)', borderRadius: 'var(--r-lg)', border: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-2)' }}>
                <span style={{ fontWeight: 700, fontSize: '0.9rem', color: 'var(--c-text-major)' }}>Lvl {level} Apprentice</span>
                <span style={{ fontSize: '0.8rem', color: '#F59E0B' }}>🔥 {streak}</span>
            </div>
            <div style={{ height: '8px', width: '100%', background: 'rgba(255,255,255,0.1)', borderRadius: '4px', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: `${(xp % 100)}%`, background: 'linear-gradient(90deg, var(--c-trust-blue), var(--c-growth-violet))', transition: 'width 0.5s ease', boxShadow: '0 0 10px rgba(124, 58, 237, 0.5)' }} />
            </div>
            <div style={{ fontSize: '0.7rem', color: 'var(--c-text-minor)', marginTop: '6px', textAlign: 'right' }}>
                {xp % 100} / 100 XP to Level {level + 1}
            </div>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: 1 }}>
          {NAV_ITEMS.map(item => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link 
                key={item.href} 
                href={item.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  borderRadius: '12px',
                  color: isActive ? 'white' : 'var(--c-text-minor)',
                  background: isActive ? 'var(--c-trust-blue)' : 'transparent',
                  fontWeight: isActive ? 600 : 500,
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                  fontSize: '0.95rem'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Mini Profile */}
        <div style={{ borderTop: '1px solid var(--c-border)', paddingTop: 'var(--s-6)', marginTop: 'var(--s-4)' }}>
           <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'linear-gradient(135deg, #3B82F6, #8B5CF6)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                  {user?.name?.[0] || 'G'}
              </div>
              <div style={{ flex: 1 }}>
                 <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{user?.name || 'Guest User'}</div>
                 <div style={{ fontSize: '0.75rem', color: 'var(--c-text-minor)' }}>{user?.email || 'Sign In for Access'}</div>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
        <Header title={getTitle()} user={user} />
        <div style={{ padding: 'var(--s-8)', maxWidth: '1200px', margin: '0 auto', width: '100%' }}>
           {children}
        </div>
      </main>
    </div>
  );
}
