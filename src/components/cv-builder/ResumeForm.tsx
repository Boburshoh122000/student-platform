"use client";

import { ResumeData, ResumeExperience } from '@/types/resume';
import React, { useState, useEffect } from 'react';
import { calculateATSScore, rewriteContent, ATSResult } from '@/lib/ai-mock';

export default function ResumeForm({ 
  data, 
  onChange,
  onGenerate 
}: { 
  data: ResumeData; 
  onChange: (d: ResumeData) => void; 
  onGenerate: () => void;
}) {
  const [atsResult, setAtsResult] = useState<ATSResult>({ score: 0, issues: [], tips: [] });
  const [isRewriting, setIsRewriting] = useState(false);

  // Recalculate ATS score on change
  useEffect(() => {
    setAtsResult(calculateATSScore(data));
  }, [data]);

  const handleRewriteSummary = async () => {
    if (!data.summary) return;
    setIsRewriting(true);
    const newText = await rewriteContent(data.summary);
    onChange({ ...data, summary: newText });
    setIsRewriting(false);
  };

  const updateProfile = (field: keyof typeof data.profile, value: string) => {
    onChange({ ...data, profile: { ...data.profile, [field]: value } });
  };

  const addExperience = () => {
    const newExp: ResumeExperience = {
      id: crypto.randomUUID(),
      companyName: '',
      jobTitle: '',
      startDate: '',
      endDate: '',
      city: '',
      description: ''
    };
    onChange({ ...data, experience: [...data.experience, newExp] });
  };

  const updateExperience = (id: string, field: keyof ResumeExperience, value: string) => {
    const updated = data.experience.map(exp => 
      exp.id === id ? { ...exp, [field]: value } : exp
    );
    onChange({ ...data, experience: updated });
  };

  const removeExperience = (id: string) => {
    onChange({ ...data, experience: data.experience.filter(e => e.id !== id) });
  };

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--s-6)' }}>
      {/* Main Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>
        
        {/* Contact Info */}
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)', display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
            👤 Personal Info
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-4)' }}>
            <div>
              <label style={{ display: 'block', marginBottom: 'var(--s-1)', fontSize: '0.9rem', fontWeight: 500 }}>First Name</label>
              <input
                type="text"
                value={data.profile.firstName}
                onChange={(e) => updateProfile('firstName', e.target.value)}
                style={{ width: '100%', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                placeholder="Sanjar"
              />
            </div>
            <div>
               <label style={{ display: 'block', marginBottom: 'var(--s-1)', fontSize: '0.9rem', fontWeight: 500 }}>Last Name</label>
               <input
                 type="text"
                 value={data.profile.lastName}
                 onChange={(e) => updateProfile('lastName', e.target.value)}
                 style={{ width: '100%', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                 placeholder="Karimov"
               />
            </div>
            <div>
               <label style={{ display: 'block', marginBottom: 'var(--s-1)', fontSize: '0.9rem', fontWeight: 500 }}>Email</label>
               <input
                 type="email"
                 value={data.profile.email}
                 onChange={(e) => updateProfile('email', e.target.value)}
                 style={{ width: '100%', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                 placeholder="sanjar@example.com"
               />
            </div>
            <div>
               <label style={{ display: 'block', marginBottom: 'var(--s-1)', fontSize: '0.9rem', fontWeight: 500 }}>Phone</label>
               <input
                 type="text"
                 value={data.profile.phone}
                 onChange={(e) => updateProfile('phone', e.target.value)}
                 style={{ width: '100%', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                 placeholder="+998 90 123 45 67"
               />
            </div>
            <div style={{ gridColumn: 'span 2' }}>
               <label style={{ display: 'block', marginBottom: 'var(--s-1)', fontSize: '0.9rem', fontWeight: 500 }}>LinkedIn / Portfolio</label>
               <input
                 type="text"
                 value={data.profile.linkedinUrl || ''}
                 onChange={(e) => updateProfile('linkedinUrl', e.target.value)}
                 style={{ width: '100%', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                 placeholder="linkedin.com/in/sanjar"
               />
            </div>
          </div>
        </section>

        {/* Summary */}
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-4)' }}>
             <h2 style={{ fontSize: '1.5rem' }}>📝 Summary</h2>
             <button 
               onClick={handleRewriteSummary}
               disabled={isRewriting || !data.summary}
               style={{ 
                 fontSize: '0.8rem', padding: '4px 12px', borderRadius: '20px', 
                 background: 'linear-gradient(90deg, #8b5cf6, #ec4899)', color: 'white',
                 border: 'none', cursor: 'pointer', opacity: isRewriting ? 0.7 : 1
               }}
             >
               {isRewriting ? '✨ Rewriting...' : '✨ Magic Rewrite'}
             </button>
          </div>
          <textarea
            value={data.summary}
            onChange={(e) => onChange({ ...data, summary: e.target.value })}
            style={{ width: '100%', minHeight: '100px', padding: 'var(--s-3)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)', lineHeight: 1.5 }}
            placeholder="Experienced developer with a passion for clean code..."
          />
        </section>

        {/* Experience */}
        <section>
          <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)' }}>💼 Experience</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
            {data.experience.map((exp, idx) => (
              <div key={exp.id} style={{ padding: 'var(--s-4)', background: 'var(--c-bg-page)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
                 <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 'var(--s-3)' }}>
                    <h4 style={{ margin: 0 }}>Position #{idx + 1}</h4>
                    <button onClick={() => removeExperience(exp.id)} style={{ color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer' }}>Remove</button>
                 </div>
                 <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-3)', marginBottom: 'var(--s-3)' }}>
                    <input 
                      placeholder="Role (e.g. Jr. Designer)" 
                      value={exp.jobTitle} 
                      onChange={(e) => updateExperience(exp.id, 'jobTitle', e.target.value)}
                      style={{ padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                    />
                    <input 
                      placeholder="Company" 
                      value={exp.companyName} 
                      onChange={(e) => updateExperience(exp.id, 'companyName', e.target.value)}
                      style={{ padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                    />
                 </div>
                 <textarea 
                    placeholder="Describe your achievements..." 
                    value={exp.description} 
                    onChange={(e) => updateExperience(exp.id, 'description', e.target.value)}
                    style={{ width: '100%', minHeight: '80px', padding: 'var(--s-2)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                 />
              </div>
            ))}
            <button 
              onClick={addExperience}
              style={{ padding: 'var(--s-3)', border: '1px dashed var(--c-border)', background: 'transparent', borderRadius: 'var(--r-lg)', cursor: 'pointer', color: 'var(--c-text-minor)' }}
            >
              + Add Position
            </button>
          </div>
        </section>

        <section>
            <button 
                onClick={onGenerate}
                style={{ 
                    width: '100%',
                    padding: 'var(--s-4)',
                    background: 'var(--c-primary)',
                    color: 'white',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    borderRadius: 'var(--r-lg)',
                    border: 'none',
                    cursor: 'pointer',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                }}
            >
                Download PDF Resume 📥
            </button>
        </section>
      </div>

      {/* Sidebar: ATS Intelligence */}
      <aside>
         <div style={{ position: 'sticky', top: 'var(--s-4)', padding: 'var(--s-6)', background: 'var(--c-bg-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: 'var(--s-4)', display: 'flex', alignItems: 'center', gap: 'var(--s-2)' }}>
                🤖 ATS Score
            </h3>
            
            <div style={{  textAlign: 'center', marginBottom: 'var(--s-6)' }}>
                <div style={{ 
                    fontSize: '3rem', fontWeight: 800, 
                    color: atsResult.score > 80 ? '#10B981' : atsResult.score > 50 ? '#F59E0B' : '#EF4444' 
                }}>
                    {atsResult.score}
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--c-text-minor)' }}>out of 100</div>
            </div>

            {atsResult.issues.length > 0 && (
                <div style={{ marginBottom: 'var(--s-6)' }}>
                    <h4 style={{ fontSize: '0.9rem', color: '#EF4444', marginBottom: 'var(--s-2)' }}>⚠️ Fix Critical Issues</h4>
                    <ul style={{ paddingLeft: 'var(--s-4)', fontSize: '0.85rem', color: 'var(--c-text-minor)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {atsResult.issues.map((issue, i) => (
                            <li key={i}>{issue}</li>
                        ))}
                    </ul>
                </div>
            )}

            {atsResult.tips.length > 0 && (
                <div>
                   <h4 style={{ fontSize: '0.9rem', color: '#3B82F6', marginBottom: 'var(--s-2)' }}>💡 Pro Tips</h4>
                   <ul style={{ paddingLeft: 'var(--s-4)', fontSize: '0.85rem', color: 'var(--c-text-minor)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {atsResult.tips.map((tip, i) => (
                            <li key={i}>{tip}</li>
                        ))}
                    </ul>
                </div>
            )}
         </div>
      </aside>
    </div>
  );
}
