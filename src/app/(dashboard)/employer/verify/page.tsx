"use client";

import { useState } from 'react';

export default function EmployerVerificationPage() {
  const [status, setStatus] = useState<'IDLE' | 'SUBMITTING' | 'SUCCESS'>('IDLE');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('SUBMITTING');
    // Simulate API call
    setTimeout(() => {
      setStatus('SUCCESS');
    }, 1500);
  };

  if (status === 'SUCCESS') {
    return (
      <div style={{ padding: 'var(--s-8)', textAlign: 'center', maxWidth: '600px', margin: '0 auto' }}>
        <h1 style={{ color: '#10B981', fontSize: '4rem', marginBottom: 'var(--s-4)' }}>✅</h1>
        <h2>Verification Submitted!</h2>
        <p style={{ color: 'var(--c-text-minor)', marginTop: 'var(--s-4)' }}>
          Our trust & safety team will review your documents within 24 hours. 
          You will receive an email once your &quot;Verified Badge&quot; is active.
        </p>
        <button 
          onClick={() => setStatus('IDLE')}
          style={{ 
            marginTop: 'var(--s-8)',
            color: 'var(--c-trust-blue)', 
            textDecoration: 'underline' 
          }}
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 'var(--s-8)', maxWidth: '600px', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--s-8)' }}>
        <h1 style={{ marginBottom: 'var(--s-2)' }}>Get Verified</h1>
        <p style={{ color: 'var(--c-text-minor)' }}>
          Unlock trusted access to student data by verifying your organization identity.
        </p>
      </header>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
        
        {/* Company Info */}
        <div>
          <label style={{ display: 'block', marginBottom: 'var(--s-2)' }}>Company Name</label>
          <input required type="text" placeholder="e.g. Acme Corp" style={{
            width: '100%', padding: 'var(--s-2)', 
            background: 'var(--c-bg-card)', border: '1px solid var(--c-border)', color: 'white'
          }}/>
        </div>

        <div>
           <label style={{ display: 'block', marginBottom: 'var(--s-2)' }}>Official Website</label>
           <input required type="url" placeholder="https://" style={{
             width: '100%', padding: 'var(--s-2)', 
             background: 'var(--c-bg-card)', border: '1px solid var(--c-border)', color: 'white'
           }}/>
        </div>

        <div>
           <label style={{ display: 'block', marginBottom: 'var(--s-2)' }}>Registration Number (INN)</label>
           <input required type="text" placeholder="Tax ID / Reg Number" style={{
             width: '100%', padding: 'var(--s-2)', 
             background: 'var(--c-bg-card)', border: '1px solid var(--c-border)', color: 'white'
           }}/>
        </div>

        {/* Document Upload Simulation */}
        <div style={{ 
          border: '2px dashed var(--c-border)', 
          padding: 'var(--s-8)', 
          textAlign: 'center', 
          borderRadius: 'var(--r-md)',
          cursor: 'pointer'
        }}>
           <span style={{ fontSize: '2rem' }}>📄</span>
           <p style={{ color: '#64748b' }}>Upload your &quot;INN&quot; or &quot;Registration Certificate&quot; to get the Verified Badge.</p>
           <small style={{ color: 'var(--c-text-minor)' }}>PDF or JPG (Max 5MB)</small>
        </div>

        <button 
          disabled={status === 'SUBMITTING'}
          style={{
            background: 'var(--c-trust-blue)',
            color: 'white',
            padding: 'var(--s-3)',
            borderRadius: 'var(--r-md)',
            fontWeight: 600,
            marginTop: 'var(--s-4)',
            opacity: status === 'SUBMITTING' ? 0.7 : 1
          }}
        >
          {status === 'SUBMITTING' ? 'Verifying...' : 'Submit for Review'}
        </button>

      </form>
    </div>
  );
}
