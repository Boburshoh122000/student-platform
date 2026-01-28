import { Application } from '@/types/application';

export default function ApplicationCard({ 
  app, 
  onMove 
}: { 
  app: Application; 
  onMove: (status: Application['status']) => void; 
}) {
  return (
    <div style={{
      background: 'var(--c-bg-card)',
      border: '1px solid var(--c-border)',
      borderRadius: 'var(--r-md)',
      padding: 'var(--s-3)',
      marginBottom: 'var(--s-3)',
      boxShadow: '0 1px 2px rgba(0,0,0,0.1)'
    }}>
      <h4 style={{ margin: '0 0 var(--s-1) 0', fontSize: '1rem' }}>{app.jobTitle}</h4>
      <p style={{ fontSize: '0.875rem', color: 'var(--c-text-minor)', margin: 0 }}>
        {app.companyName}
      </p>
      
      <div style={{ 
        marginTop: 'var(--s-3)', 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        fontSize: '0.75rem',
        color: 'var(--c-text-minor)'
      }}>
        <span>{app.appliedAt}</span>
        
        {/* Simple mover for MVP instead of DnD */}
        <select 
          value={app.status}
          onChange={(e) => onMove(e.target.value as Application['status'])}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid var(--c-border)',
            color: 'white',
            borderRadius: '4px',
            fontSize: '0.75rem'
          }}
        >
          <option value="SAVED">Saved</option>
          <option value="APPLIED">Applied</option>
          <option value="INTERVIEW">Interview</option>
          <option value="OFFER">Offer</option>
          <option value="REJECTED">Rejected</option>
        </select>
      </div>
    </div>
  );
}
