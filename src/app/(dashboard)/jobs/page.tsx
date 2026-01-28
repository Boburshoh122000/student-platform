"use client";

import { useState } from 'react';
import { MOCK_JOBS } from '@/lib/mock-jobs';
import JobCard from '@/components/market/JobCard';

export default function JobFeedPage() {
  const [filterRemote, setFilterRemote] = useState(false);

  const filteredJobs = MOCK_JOBS.filter(job => {
    if (filterRemote && !job.location.toLowerCase().includes('remote')) return false;
    return true;
  });

  return (
    <div style={{ padding: 'var(--s-8)', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--s-8)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>Job Discovery</h1>
        <p style={{ color: 'var(--c-text-minor)' }}>
          Verified opportunities for students in Central Asia.
        </p>

        {/* Simple Filter Bar */}
        <div style={{ marginTop: 'var(--s-6)', display: 'flex', gap: 'var(--s-4)' }}>
           <label style={{ 
             display: 'flex', 
             alignItems: 'center', 
             gap: 'var(--s-2)', 
             cursor: 'pointer',
             padding: 'var(--s-2) var(--s-4)',
             background: filterRemote ? 'var(--c-trust-blue)' : 'var(--c-bg-card)',
             color: filterRemote ? 'white' : 'var(--c-text-minor)',
             borderRadius: 'var(--r-full)',
             border: '1px solid var(--c-border)'
           }}>
             <input 
               type="checkbox" 
               checked={filterRemote} 
               onChange={e => setFilterRemote(e.target.checked)} 
               style={{ display: 'none' }}
             />
             🌍 Remote Only
           </label>
        </div>
      </header>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        gap: 'var(--s-6)' 
      }}>
        {filteredJobs.length > 0 ? (
           filteredJobs.map(job => (
             <JobCard key={job.id} job={job} />
           ))
        ) : (
          <p style={{ color: 'var(--c-text-minor)' }}>No jobs found matching your filters.</p>
        )}
      </div>
    </div>
  );
}
