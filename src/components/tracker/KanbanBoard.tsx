import { Application, KANBAN_COLUMNS } from '@/types/application';
import ApplicationCard from './ApplicationCard';

export default function KanbanBoard({ 
  applications, 
  onUpdateStatus 
}: { 
  applications: Application[]; 
  onUpdateStatus: (id: string, status: Application['status']) => void; 
}) {
  return (
    <div style={{ 
      display: 'flex', 
      gap: 'var(--s-4)', 
      overflowX: 'auto', 
      paddingBottom: 'var(--s-4)',
      minHeight: '60vh'
    }}>
      {KANBAN_COLUMNS.map(col => {
        const appsInCol = applications.filter(a => a.status === col.id);
        
        return (
          <div key={col.id} style={{ 
            flex: '0 0 280px',
            background: 'rgba(255,255,255,0.02)',
            borderRadius: 'var(--r-lg)',
            border: '1px solid var(--c-border)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Column Header */}
            <div style={{ 
              padding: 'var(--s-3)', 
              borderBottom: '1px solid var(--c-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
                <span style={{ width: 8, height: 8, borderRadius: '50%', background: col.color }} />
                {col.label}
              </span>
              <span style={{ 
                background: 'rgba(255,255,255,0.1)', 
                borderRadius: '12px', 
                padding: '2px 8px', 
                fontSize: '0.75rem' 
              }}>
                {appsInCol.length}
              </span>
            </div>

            {/* Column Body */}
            <div style={{ padding: 'var(--s-3)', flex: 1, overflowY: 'auto' }}>
              {appsInCol.map(app => (
                <ApplicationCard 
                  key={app.id} 
                  app={app} 
                  onMove={(newStatus) => onUpdateStatus(app.id, newStatus)} 
                />
              ))}
              {appsInCol.length === 0 && (
                <div style={{ 
                  textAlign: 'center', 
                  color: 'var(--c-text-minor)', 
                  fontSize: '0.8rem', 
                  marginTop: 'var(--s-4)',
                  fontStyle: 'italic'
                }}>
                  No items
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
