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
    if (existingApp) return; 
    setShowModal(true);
  };

  const executeApply = () => {
    addApplication(job.id, job.title, job.company, job.location);
    addXP(50);
    setShowModal(false);
  };

  return (
    <>
      <div 
        className="job-card"
        style={{
          background: 'rgba(30, 41, 59, 0.6)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--r-xl)',
          padding: 'var(--s-6)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--s-4)',
          position: 'relative',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          cursor: 'pointer',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        onMouseEnter={(e) => {
           e.currentTarget.style.transform = 'translateY(-4px)';
           e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)';
           e.currentTarget.style.borderColor = 'rgba(59, 130, 246, 0.4)';
        }}
        onMouseLeave={(e) => {
           e.currentTarget.style.transform = 'translateY(0)';
           e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
           e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
        }}
      >
        {/* HEADER */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', gap: 'var(--s-4)' }}>
             {/* Logo Placeholder */}
             <div style={{ 
                width: '48px', height: '48px', 
                borderRadius: '12px', 
                background: `linear-gradient(135deg, ${isHighMatch ? '#3B82F6' : '#64748B'}, #1E293B)`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.25rem', border: '1px solid rgba(255,255,255,0.1)'
             }}>
                {job.company.charAt(0)}
             </div>
             
             <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
                    <h3 style={{ fontSize: '1.25rem', margin: 0, fontWeight: 700 }}>{job.title}</h3>
                    {job.isVerified && <span title="Verified" style={{ fontSize: '1rem' }}>✅</span>}
                </div>
                <p style={{ color: 'var(--c-text-minor)', fontSize: '0.9rem', marginTop: '2px' }}>
                    {job.company}
                </p>
             </div>
          </div>
          
          <div style={{
            background: isHighMatch ? 'rgba(16, 185, 129, 0.1)' : 'rgba(255, 255, 255, 0.05)',
            color: isHighMatch ? '#34D399' : '#94A3B8',
            padding: '4px 12px',
            borderRadius: 'var(--r-full)',
            fontWeight: 600,
            fontSize: '0.875rem',
            border: `1px solid ${isHighMatch ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.05)'}`
          }}>
            {job.matchScore}% Match
          </div>
        </div>

        {/* METADATA PILLS */}
        <div style={{ display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap' }}>
            <span style={{ 
                background: 'rgba(255, 255, 255, 0.03)', 
                border: '1px solid rgba(255,255,255,0.05)',
                color: 'var(--c-text-minor)', 
                padding: '4px 10px', 
                borderRadius: '6px', 
                fontSize: '0.8rem' 
            }}>
                📍 {job.location}
            </span>
            <span style={{ 
                background: 'rgba(59, 130, 246, 0.1)', 
                border: '1px solid rgba(59, 130, 246, 0.2)',
                color: '#60A5FA', 
                padding: '4px 10px', 
                borderRadius: '6px', 
                fontSize: '0.8rem',
                fontWeight: 500
            }}>
                {job.type}
            </span>
            {job.salaryRange && (
                <span style={{ 
                    background: 'rgba(16, 185, 129, 0.1)', 
                    border: '1px solid rgba(16, 185, 129, 0.2)',
                    color: '#34D399', 
                    padding: '4px 10px', 
                    borderRadius: '6px', 
                    fontSize: '0.8rem',
                    fontWeight: 500
                }}>
                    {job.salaryRange}
                </span>
            )}
        </div>

        {/* FOOTER ACTION */}
        <div style={{ 
            marginTop: 'auto', 
            paddingTop: 'var(--s-4)', 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            borderTop: '1px solid rgba(255,255,255,0.05)'
        }}>
            <div style={{ display: 'flex', gap: 'var(--s-4)', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)' }}>{job.postedAt}</span>
                <button 
                    onClick={(e) => { e.stopPropagation(); alert('Reported'); }}
                    style={{ fontSize: '0.8rem', color: 'var(--c-text-muted)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                >
                    🚩 <span style={{ textDecoration: 'underline' }}>Report</span>
                </button>
            </div>

            <button 
                onClick={handleApplyClick}
                disabled={!!existingApp}
                style={{
                   background: existingApp ? 'rgba(255,255,255,0.05)' : 'linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)',
                   color: existingApp ? 'var(--c-text-muted)' : 'white',
                   padding: '10px 24px',
                   borderRadius: 'var(--r-full)',
                   fontWeight: 600,
                   fontSize: '0.9rem',
                   cursor: existingApp ? 'default' : 'pointer',
                   boxShadow: existingApp ? 'none' : '0 4px 12px rgba(59, 130, 246, 0.4)',
                   transition: 'opacity 0.2s',
                   border: existingApp ? '1px solid rgba(255,255,255,0.05)' : 'none'
                }}
            >
                {existingApp ? 'Applied' : 'Apply Now'}
            </button>
        </div>
      </div>

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
