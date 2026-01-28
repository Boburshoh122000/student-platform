"use client";

import { useState } from 'react';
import { INITIAL_RESUME_STATE, ResumeData } from '@/types/resume';
import ResumeForm from '@/components/cv-builder/ResumeForm';
import ResumePreview from '@/components/cv-builder/ResumePreview';

export default function ResumeBuilderPage() {
  const [resumeData, setResumeData] = useState<ResumeData>(INITIAL_RESUME_STATE);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'minmax(600px, 55%) 1fr', 
      height: '100vh', 
      overflow: 'hidden', // Page itself doesn't scroll, panes do
      background: 'var(--c-bg-main)'
    }}>
      {/* LEFT: EDITOR (No-Print) */}
      <div className="no-print" style={{ 
        borderRight: '1px solid var(--c-border)', 
        height: '100vh', 
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column'
      }}>
        <header style={{ 
          padding: 'var(--s-4) var(--s-6)', 
          borderBottom: '1px solid var(--c-border)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'var(--c-bg-card)'
        }}>
          <h1 style={{ fontSize: '1.25rem' }}>CV Builder & AI Assistant</h1>
        </header>
        
        <ResumeForm data={resumeData} onChange={setResumeData} onGenerate={handlePrint} />
      </div>

      {/* RIGHT: PREVIEW (Print target) */}
      <div style={{ 
        background: '#52525b', // Neutral dark
        padding: 'var(--s-8)',
        height: '100vh',
        overflowY: 'auto',
        display: 'flex',
        justifyContent: 'center'
      }}>
        <div style={{ transform: 'scale(0.8)', transformOrigin: 'top center' }}>
           <ResumePreview data={resumeData} />
        </div>
      </div>
    </div>
  );
}
