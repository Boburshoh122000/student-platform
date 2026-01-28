"use client";

import VerificationQueue from '@/components/admin/VerificationQueue';

export default function VerificationPage() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-6)' }}>Employer Verification</h1>
      <p style={{ color: '#94a3b8', marginBottom: 'var(--s-8)' }}>
        Review registration documents to verify employer identities. Approve only if INN matches.
      </p>
      
      <VerificationQueue />
    </div>
  );
}
