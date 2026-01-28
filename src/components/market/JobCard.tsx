import { useState } from 'react';
import { Job } from '@/types/job';
import { useGamification } from '@/context/GamificationContext';
import { useApplications } from '@/context/ApplicationContext';
import TailoringModal from '@/components/tracker/TailoringModal';

export default function JobCard({ job }: { job: Job }) {
  const { applications, addApplication } = useApplications();
  const { addXP } = useGamification();
  const [showModal, setShowModal] = useState(false);

  const existingApp = applications.find(a => a.jobId === job.id);
  const isHighMatch = job.matchScore >= 80;

  const handleApplyClick = () => {
    if (existingApp) return; // Already applied
    setShowModal(true);
  };

  const executeApply = () => {
    addApplication(job.id, job.title, job.company, job.location);
    addXP(50); // Gamification Reward
    setShowModal(false);
  };

  return (
    <>
      <div style={{
        background: 'var(--c-bg-card)',
        border: '1px solid var(--c-border)',
        borderRadius: 'var(--r-lg)',
        padding: 'var(--s-6)',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--s-4)',
        position: 'relative',
        transition: 'transform 0.1s ease',
        cursor: 'pointer'
      }}>
        {/* HEADER: Title + Verification */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div>
             <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
                <h3 style={{ fontSize: '1.25rem', margin: 0 }}>{job.title}</h3>
                {job.isVerified && (
                  <span title="Verified Employer" style={{ color: '#F59E0B', fontSize: '1rem' }}>
                     ✅ 
                  </span>
                )}
             </div>
             
             <p style={{ color: 'var(--c-text-minor)', marginTop: 'var(--s-1)' }}>
               {job.company} • {job.location}
             </p>
          </div>
          
          {/* Match Score Badge */}
          <div style={{
            background: isHighMatch ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
            color: isHighMatch ? '#10B981' : '#EF4444',
            padding: 'var(--s-1) var(--s-3)',
            borderRadius: 'var(--r-full)',
            fontWeight: 600,
            fontSize: '0.875rem'
          }}>
            {job.matchScore}% Match
          </div>
        </div>

        {/* DETAILS: Tags & Salary */}
        <div style={{ display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap' }}>
          <span style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: 'var(--c-trust-blue)', 
            padding: '2px 8px', 
            borderRadius: '4px', 
            fontSize: '0.8rem' 
          }}>
            {job.type}
          </span>
          {job.salaryRange && (
            <span style={{ 
               background: 'rgba(255, 255, 255, 0.05)', 
               color: 'var(--c-text-minor)', 
               padding: '2px 8px', 
               borderRadius: '4px', 
               fontSize: '0.8rem' 
            }}>
              💰 {job.salaryRange}
            </span>
          )}
        </div>

        {/* FOOTER: Actions & Warnings */}
        <div style={{ 
          marginTop: 'auto', 
          paddingTop: 'var(--s-4)', 
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <small style={{ color: 'var(--c-text-minor)' }}>Posted {job.postedAt}</small>
          
          {job.scamRisk !== 'LOW' && (
             <span style={{ color: 'var(--c-scam-red)', fontWeight: 'bold', fontSize: '0.8rem' }}>
               ⚠️ Risk: {job.scamRisk}
             </span>
          )}
          
          <button 
            onClick={handleApplyClick}
            disabled={!!existingApp}
            style={{
              background: existingApp ? 'transparent' : 'var(--c-trust-blue)',
              color: existingApp ? 'var(--c-text-minor)' : 'white',
              border: existingApp ? '1px solid var(--c-border)' : 'none',
              padding: 'var(--s-2) var(--s-4)',
              borderRadius: 'var(--r-md)',
              fontWeight: 600,
              cursor: existingApp ? 'default' : 'pointer'
            }}
          >
            {existingApp ? `Applied (${existingApp.status})` : 'Apply'}
          </button>
        </div>
      </div>

      {/* MODAL */}
      {showModal && (
        <TailoringModal 
          job={job}
          onClose={() => setShowModal(false)}
          onQuickApply={executeApply}
        />
      )}
    </>
  );
}
