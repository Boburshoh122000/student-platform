import Link from 'next/link';
import React from 'react';

export default function LoginPage() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#020617',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background Glows */}
      <div style={{ position: 'absolute', top: '20%', left: '30%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.8 }}></div>
      <div style={{ position: 'absolute', bottom: '20%', right: '30%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(16,185,129,0.1) 0%, transparent 70%)', filter: 'blur(40px)', opacity: 0.8 }}></div>

      <div style={{
        width: '100%',
        maxWidth: '420px',
        padding: '32px',
        background: 'rgba(30, 41, 59, 0.4)',
        backdropFilter: 'blur(16px)',
        borderRadius: '24px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
      }}>
        <div style={{ marginBottom: '24px' }}>
            <div style={{ fontSize: '1.5rem', fontWeight: 700, fontFamily: 'var(--font-outfit)', color: 'white' }}>
                Career<span style={{ color: '#3b82f6' }}>OS</span>
            </div>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginTop: '8px' }}>
                Welcome back. Choose your role.
            </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link href="/jobs" style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            padding: '16px',
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1) 0%, rgba(59, 130, 246, 0.05) 100%)',
            border: '1px solid rgba(59, 130, 246, 0.2)',
            color: '#60a5fa',
            borderRadius: '16px',
            textDecoration: 'none',
            fontWeight: 600,
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <span style={{ fontSize: '1.25rem' }}>🎓</span> 
            <span>Continue as Student</span>
          </Link>

          <Link href="/employers" style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
            gap: '12px',
             padding: '16px',
             background: 'rgba(255, 255, 255, 0.03)',
             border: '1px solid rgba(255, 255, 255, 0.08)',
             color: '#cbd5e1',
             borderRadius: '16px',
             textDecoration: 'none',
             fontWeight: 500,
             transition: 'background 0.2s'
          }}>
            <span style={{ fontSize: '1.25rem' }}>💼</span>
            <span>Continue as Employer</span>
          </Link>

          <Link href="/admin/dashboard" style={{
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
            gap: '12px',
             padding: '16px',
             background: 'rgba(255, 255, 255, 0.03)',
             border: '1px solid rgba(255, 255, 255, 0.08)',
             color: '#cbd5e1',
             borderRadius: '16px',
             textDecoration: 'none',
             fontWeight: 500,
             transition: 'background 0.2s'
          }}>
            <span style={{ fontSize: '1.25rem' }}>🛡️</span>
            <span>Continue as Admin</span>
          </Link>
        </div>

        <div style={{ marginTop: '32px', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
           <Link href="/" style={{ color: '#64748b', fontSize: '0.875rem', textDecoration: 'none', transition: 'color 0.2s' }}>
              ← Back to Home
           </Link>
        </div>
      </div>
    </div>
  );
}
