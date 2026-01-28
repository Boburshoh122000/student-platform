"use client";

import { Job } from '@/types/job';
import { useRouter } from 'next/navigation';

export default function TailoringModal({ 
  job, 
  onClose,
  onQuickApply 
}: { 
  job: Job; 
  onClose: () => void;
  onQuickApply: () => void;
}) {
  const router = useRouter();

  const handleTailor = () => {
    // Navigate to builder with job context (simulated)
    router.push(`/resume/builder?jobId=${job.id}&company=${encodeURIComponent(job.company)}`);
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.7)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(5px)'
    }}>
      <div style={{
        background: 'var(--c-bg-card)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-lg)',
        padding: 'var(--s-6)',
        width: '90%',
        maxWidth: '500px',
        boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
      }}>
        <h2 style={{ marginBottom: 'var(--s-4)', fontSize: '1.5rem' }}>Apply to {job.company}?</h2>
        <p style={{ color: 'var(--c-text-minor)', marginBottom: 'var(--s-6)' }}>
          Wait! You have a <strong>{job.matchScore}% match</strong>. 
          Tailoring your CV could increase this to <strong>{Math.min(100, job.matchScore + 15)}%</strong>.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
          <button 
            onClick={handleTailor}
            style={{
              background: 'var(--c-growth-violet)',
              color: 'white',
              padding: 'var(--s-3)',
              borderRadius: 'var(--r-md)',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem'
            }}
          >
            ✨ Tailor CV & Apply (Recommended)
          </button>
          
          <button 
            onClick={onQuickApply}
            style={{
              background: 'transparent',
              border: '1px solid var(--c-border)',
              color: 'var(--c-text-minor)',
              padding: 'var(--s-3)',
              borderRadius: 'var(--r-md)',
              fontWeight: 500
            }}
          >
            Just Quick Apply (Low Match)
          </button>

          <button 
            onClick={onClose}
            style={{
              marginTop: 'var(--s-2)',
              background: 'transparent',
              color: 'var(--c-text-minor)',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline'
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
