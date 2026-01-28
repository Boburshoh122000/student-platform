import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--c-bg-page)',
      padding: 'var(--s-4)'
    }}>
      <div style={{
        width: '100%',
        maxWidth: '400px',
        padding: 'var(--s-8)',
        background: 'var(--c-bg-card)',
        borderRadius: 'var(--r-lg)',
        border: '1px solid var(--c-border)',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)' }}>Sign In (MVP)</h1>
        <p style={{ color: 'var(--c-text-minor)', marginBottom: 'var(--s-6)' }}>
          Simulation Mode. Choose a persona to continue.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
          <Link href="/jobs" style={{
            display: 'block',
            padding: 'var(--s-3)',
            background: 'rgba(59, 130, 246, 0.1)',
            color: '#60a5fa',
            borderRadius: 'var(--r-md)',
            textDecoration: 'none',
            fontWeight: 500
          }}>
            🎓 Continue as Student
          </Link>

          <Link href="/employers" style={{
             display: 'block',
             padding: 'var(--s-3)',
             background: 'rgba(16, 185, 129, 0.1)',
             color: '#34d399',
             borderRadius: 'var(--r-md)',
             textDecoration: 'none',
             fontWeight: 500
          }}>
            💼 Continue as Employer
          </Link>

          <Link href="/admin/dashboard" style={{
             display: 'block',
             padding: 'var(--s-3)',
             background: 'rgba(239, 68, 68, 0.1)',
             color: '#f87171',
             borderRadius: 'var(--r-md)',
             textDecoration: 'none',
             fontWeight: 500
          }}>
            🛡️ Continue as Admin
          </Link>
        </div>

        <div style={{ marginTop: 'var(--s-6)', borderTop: '1px solid var(--c-border)', paddingTop: 'var(--s-4)' }}>
           <Link href="/" style={{ color: 'var(--c-text-minor)', fontSize: '0.875rem' }}>
              ← Back to Home
           </Link>
        </div>
      </div>
    </div>
  );
}
