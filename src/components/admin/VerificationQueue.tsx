"use client";

import { useAdmin } from '@/context/AdminContext';

export default function VerificationQueue() {
  const { requests, reviewRequest } = useAdmin();
  const pending = requests.filter(r => r.status === 'PENDING');

  if (pending.length === 0) {
    return (
      <div style={{ 
        padding: 'var(--s-8)', 
        textAlign: 'center', 
        background: 'rgba(255,255,255,0.02)', 
        borderRadius: 'var(--r-lg)',
        border: '1px dashed #334155'
      }}>
        <p style={{ color: '#94a3b8' }}>No pending verification requests. Good job!</p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
      {pending.map(req => (
        <div key={req.id} style={{ 
          background: '#1e293b', 
          border: '1px solid #334155', 
          borderRadius: 'var(--r-md)',
          padding: 'var(--s-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{req.companyName}</h3>
            <p style={{ color: '#94a3b8', margin: 'var(--s-2) 0' }}>INN: {req.regNumber}</p>
            <div style={{ fontSize: '0.875rem', color: '#64748b' }}>
              Submitted: {req.submittedAt}
            </div>
            <a href="#" style={{ color: '#38bdf8', fontSize: '0.875rem', marginTop: 'var(--s-2)', display: 'inline-block' }}>
              View Registration Cert.pdf
            </a>
          </div>

          <div style={{ display: 'flex', gap: 'var(--s-3)' }}>
            <button 
              onClick={() => reviewRequest(req.id, 'REJECTED')}
              style={{
                background: 'transparent',
                border: '1px solid #ef4444',
                color: '#ef4444',
                padding: 'var(--s-2) var(--s-4)',
                borderRadius: 'var(--r-md)',
                cursor: 'pointer'
              }}
            >
              Reject
            </button>
            <button 
              onClick={() => reviewRequest(req.id, 'APPROVED')}
              style={{
                background: '#10b981',
                border: 'none',
                color: 'white',
                padding: 'var(--s-2) var(--s-4)',
                borderRadius: 'var(--r-md)',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Approve
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
