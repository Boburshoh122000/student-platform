"use client";

import React from 'react';
import Link from 'next/link';

export default function Header({ title, user }: { title: string, user?: any }) {
  return (
    <header style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 'var(--s-6) var(--s-8)',
      background: 'rgba(15, 23, 42, 0.8)', // Glassmorphic
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid var(--c-border)',
      position: 'sticky',
      top: 0,
      zIndex: 10
    }}>
      {/* Page Title */}
      <h1 style={{ fontSize: '1.5rem', margin: 0 }}>{title}</h1>

      {/* Right Side: Search & Auth */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-4)' }}>
        {/* Search Bar */}
        <div style={{ position: 'relative' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
          <input 
            type="text" 
            placeholder="Search..." 
            style={{
              padding: '8px 12px 8px 36px',
              borderRadius: 'var(--r-full)',
              background: 'var(--c-bg-card)',
              border: '1px solid var(--c-border)',
              color: 'var(--c-text-major)',
              outline: 'none',
              fontSize: '0.9rem',
              width: '200px',
              transition: 'width 0.2s'
            }}
          />
        </div>

        {/* Divider */}
        <div style={{ width: '1px', height: '24px', background: 'var(--c-border)' }}></div>

        {/* Dynamic Auth Section */}
        {user ? (
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '0.9rem', color: 'var(--c-text-minor)' }}>
                    {user.name}
                </span>
                <Link 
                    href="/api/auth/signout" 
                    style={{ 
                        fontSize: '0.8rem', 
                        color: '#EF4444', 
                        border: '1px solid rgba(239, 68, 68, 0.2)',
                        padding: '4px 10px',
                        borderRadius: '6px'
                    }}
                >
                    Log Out
                </Link>
            </div>
        ) : (
            <>
                <Link href="/login" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--c-text-minor)' }}>
                    Log In
                </Link>
                <Link 
                    href="/signup" 
                    style={{ 
                        padding: '8px 16px', 
                        background: 'var(--c-trust-blue)', 
                        color: 'white', 
                        borderRadius: 'var(--r-full)', 
                        fontSize: '0.9rem', 
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}
                >
                    Sign Up
                </Link>
            </>
        )}
      </div>
    </header>
  );
}
