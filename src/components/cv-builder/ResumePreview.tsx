"use client";

import { ResumeData } from '@/types/resume';

export default function ResumePreview({ data }: { data: ResumeData }) {
  return (
    <div 
      className="resume-a4-page"
      style={{ 
        width: '210mm', 
        minHeight: '297mm', 
        background: 'white', 
        color: '#1e293b', // Slate 800 - dark readable text for print
        padding: '20mm',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
        margin: '0 auto',
        fontFamily: 'serif', // Professional feel for print
        lineHeight: 1.5,
        position: 'relative'
      }}
    >
      <style jsx global>{`
        @media print {
          @page { size: A4; margin: 0mm; }
          body { background: white; margin: 0; }
          .resume-a4-page {
            box-shadow: none !important;
            margin: 0 !important;
            width: 100% !important;
            height: 100% !important;
          }
          /* Hide everything else */
          nav, aside, .no-print { display: none !important; }
        }
      `}</style>

      {/* HEADER */}
      <header style={{ borderBottom: '2px solid #000', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h1 style={{ 
          fontSize: '28pt', 
          fontWeight: '700', 
          margin: 0, 
          lineHeight: 1.2,
          fontFamily: 'sans-serif' 
        }}>
          {data.profile.firstName || 'YOUR'} {data.profile.lastName || 'NAME'}
        </h1>
        <p style={{ 
          fontSize: '14pt', 
          color: '#475569', 
          marginTop: '0.25rem',
          fontFamily: 'sans-serif' 
        }}>
          {data.summary || 'Job Title / Professional Headline'}
        </p>
        
        <div style={{ 
          fontSize: '10pt', 
          marginTop: '0.75rem', 
          display: 'flex', 
          gap: '1rem', 
          color: '#64748b',
          flexWrap: 'wrap'
        }}>
          {data.profile.email && <span>📧 {data.profile.email}</span>}
          {data.profile.phone && <span>📱 {data.profile.phone}</span>}
          {data.profile.location && <span>📍 {data.profile.location}</span>}
        </div>
      </header>

      {/* EXPERIENCE */}
      <section style={{ marginBottom: '2rem' }}>
        <h2 style={{ 
          fontSize: '14pt', 
          fontFamily: 'sans-serif', 
          textTransform: 'uppercase', 
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '0.25rem',
          marginBottom: '1rem',
          letterSpacing: '0.05em'
        }}>
          Experience
        </h2>

        {data.experience.length === 0 && (
          <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>Add experience in the editor...</p>
        )}

        {data.experience.map(exp => (
          <div key={exp.id} style={{ marginBottom: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
               <h3 style={{ fontSize: '12pt', fontWeight: 'bold', margin: 0 }}>{exp.jobTitle}</h3>
               <span style={{ fontSize: '10pt', color: '#64748b' }}>
                 {exp.startDate} — {exp.endDate || 'Present'}
               </span>
            </div>
            <div style={{ fontSize: '11pt', fontWeight: '500', color: '#475569' }}>
              {exp.companyName}
            </div>
            <div style={{ fontSize: '10pt', marginTop: '0.5rem', whiteSpace: 'pre-wrap' }}>
              {exp.description}
            </div>
          </div>
        ))}
      </section>

       {/* EDUCATION */}
       <section>
        <h2 style={{ 
          fontSize: '14pt', 
          fontFamily: 'sans-serif', 
          textTransform: 'uppercase', 
          borderBottom: '1px solid #e2e8f0',
          paddingBottom: '0.25rem',
          marginBottom: '1rem',
          letterSpacing: '0.05em'
        }}>
          Education
        </h2>
        {/* Placeholder if empty */}
        {data.education.length === 0 && (
          <p style={{ color: '#94a3b8', fontStyle: 'italic' }}>Add education in the editor...</p>
        )}
      </section>
    </div>
  );
}
