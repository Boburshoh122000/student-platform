"use client";

import { useState } from 'react';
import JobCard from '@/components/market/JobCard';
import { Job } from '@/types/job';

export default function JobFeedInternal({ initialJobs }: { initialJobs: Job[] }) {
  const [filterRemote, setFilterRemote] = useState(false);
  const [search, setSearch] = useState("");

  const filteredJobs = initialJobs.filter(job => {
    if (filterRemote && !job.location.toLowerCase().includes('remote')) return false;
    if (search && !job.title.toLowerCase().includes(search.toLowerCase()) && !job.company.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div style={{ padding: 'var(--s-8)', maxWidth: '1200px', margin: '0 auto' }}>
      <header style={{ marginBottom: 'var(--s-10)' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: 'var(--s-2)', background: 'linear-gradient(to right, white, #94A3B8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Job Discovery
        </h1>
        <p style={{ color: 'var(--c-text-minor)', fontSize: '1.1rem' }}>
          Verified opportunities for students in Central Asia.
        </p>

        {/* CONTROLS */}
        <div style={{ 
            marginTop: 'var(--s-8)', 
            display: 'flex', 
            gap: 'var(--s-4)', 
            background: 'rgba(30, 41, 59, 0.4)', 
            padding: '8px', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,255,255,0.05)',
            alignItems: 'center',
            maxWidth: '600px'
        }}>
           {/* Fake Search */}
           <div style={{ flex: 1, position: 'relative' }}>
              <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', opacity: 0.5 }}>🔍</span>
              <input 
                 type="text" 
                 placeholder="Search by role or company..."
                 value={search}
                 onChange={(e) => setSearch(e.target.value)}
                 style={{
                     width: '100%',
                     background: 'transparent',
                     border: 'none',
                     color: 'white',
                     padding: '12px 12px 12px 40px',
                     outline: 'none',
                     fontSize: '0.95rem'
                 }}
              />
           </div>

           {/* Filter Divider */}
           <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)' }}></div>

           <label style={{ 
             display: 'flex', 
             alignItems: 'center', 
             gap: 'var(--s-2)', 
             cursor: 'pointer',
             padding: '8px 16px',
             background: filterRemote ? 'rgba(59, 130, 246, 0.2)' : 'transparent',
             color: filterRemote ? '#60A5FA' : 'var(--c-text-minor)',
             borderRadius: '12px',
             transition: 'all 0.2s',
             fontWeight: 500
           }}>
             <input 
               type="checkbox" 
               checked={filterRemote} 
               onChange={e => setFilterRemote(e.target.checked)} 
               style={{ display: 'none' }}
             />
             <span style={{ fontSize: '1.1rem' }}>🌍</span> Remote
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
