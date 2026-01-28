"use client";

import { useAdmin } from '@/context/AdminContext';
import VerificationQueue from '@/components/admin/VerificationQueue';

export default function AdminDashboardPage() {
  const { requests } = useAdmin();
  const pendingCount = requests.filter(r => r.status === 'PENDING').length;
  const verifiedCount = requests.filter(r => r.status === 'APPROVED').length;

  return (
    <div>
       <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-6)' }}>Admin Overview</h1>

       {/* STATS */}
       <div style={{ display: 'flex', gap: 'var(--s-6)', marginBottom: 'var(--s-8)' }}>
         <div style={{ 
           flex: 1, 
           background: '#1e293b', 
           padding: 'var(--s-6)', 
           borderRadius: 'var(--r-lg)',
           border: '1px solid #334155'
         }}>
           <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: 'var(--s-2)' }}>Pending Verifications</div>
           <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#f59e0b' }}>{pendingCount}</div>
         </div>
         
         <div style={{ 
           flex: 1, 
           background: '#1e293b', 
           padding: 'var(--s-6)', 
           borderRadius: 'var(--r-lg)',
           border: '1px solid #334155'
         }}>
           <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: 'var(--s-2)' }}>Verified Employers</div>
           <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#10b981' }}>{verifiedCount}</div>
         </div>

         <div style={{ 
           flex: 1, 
           background: '#1e293b', 
           padding: 'var(--s-6)', 
           borderRadius: 'var(--r-lg)',
           border: '1px solid #334155'
         }}>
           <div style={{ color: '#94a3b8', fontSize: '0.875rem', marginBottom: 'var(--s-2)' }}>Flagged Jobs</div>
           <div style={{ fontSize: '2.5rem', fontWeight: 700, color: '#ef4444' }}>0</div>
         </div>
       </div>

       {/* QUICK QUEUE */}
       <section>
         <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)' }}>Priority Queue</h2>
         <VerificationQueue />
       </section>
    </div>
  );
}
