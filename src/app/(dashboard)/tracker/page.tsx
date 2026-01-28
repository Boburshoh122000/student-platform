"use client";

import KanbanBoard from '@/components/tracker/KanbanBoard';
import { useApplications } from '@/context/ApplicationContext';

export default function TrackerPage() {
  const { applications, updateStatus } = useApplications();

  return (
    <div style={{ padding: 'var(--s-8)', height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ marginBottom: 'var(--s-6)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>Application Tracker</h1>
        <p style={{ color: 'var(--c-text-minor)' }}>
          Visualize your job hunt status. Drag and drop (or select) to move stages.
        </p>
      </header>

      <div style={{ flex: 1, overflow: 'hidden' }}>
         <KanbanBoard applications={applications} onUpdateStatus={updateStatus} />
      </div>
    </div>
  );
}
