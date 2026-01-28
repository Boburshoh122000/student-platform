"use client";

import { ResumeData, ResumeExperience } from '@/types/resume';
import React, { useState } from 'react';

// Simple lightweight Tabs
const TAB_KEYS = ['Personal', 'Experience', 'Education', 'Skills'];

export default function ResumeForm({ 
  data, 
  onChange 
}: { 
  data: ResumeData; 
  onChange: (d: ResumeData) => void; 
}) {
  const [activeTab, setActiveTab] = useState('Personal');

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
  }

  // Styles helpers
  const labelStyle = { 
    display: 'block', 
    color: 'var(--c-text-minor)', 
    fontSize: '0.875rem', 
    marginBottom: 'var(--s-1)' 
  };
  const inputStyle = { 
    width: '100%', 
    padding: 'var(--s-2)', 
    background: 'var(--c-bg-card)', 
    border: '1px solid var(--c-border)', 
    color: 'var(--c-text-major)',
    borderRadius: 'var(--r-sm)',
    fontSize: '1rem'
  };
  const sectionStyle = { display: 'flex', flexDirection: 'column' as const, gap: 'var(--s-4)' };

  return (
    <div style={{ padding: 'var(--s-6)', maxWidth: '600px', margin: '0 auto' }}>
      <h2 style={{ marginBottom: 'var(--s-6)' }}>Resume Data</h2>

      {/* TABS */}
      <div style={{ 
        display: 'flex', 
        gap: 'var(--s-2)', 
        borderBottom: '1px solid var(--c-border)', 
        marginBottom: 'var(--s-6)' 
      }}>
        {TAB_KEYS.map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            style={{
              padding: 'var(--s-2) var(--s-4)',
              borderBottom: activeTab === tab ? '2px solid var(--c-trust-blue)' : 'none',
              color: activeTab === tab ? 'var(--c-trust-blue)' : 'var(--c-text-minor)',
              fontWeight: activeTab === tab ? 600 : 400
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      {activeTab === 'Personal' && (
        <div style={sectionStyle}>
          <div>
            <label style={labelStyle}>First Name</label>
            <input 
              style={inputStyle} 
              value={data.profile.firstName} 
              onChange={e => updateProfile('firstName', e.target.value)} 
            />
          </div>
          <div>
            <label style={labelStyle}>Last Name</label>
            <input 
              style={inputStyle} 
              value={data.profile.lastName} 
              onChange={e => updateProfile('lastName', e.target.value)} 
            />
          </div>
          <div>
             <label style={labelStyle}>Job Title / Headline</label>
             <input 
               style={inputStyle} 
               placeholder="e.g. Junior Data Analyst"
               value={data.summary || ''} 
               onChange={e => onChange({...data, summary: e.target.value})} 
             />
          </div>
          <div>
            <label style={labelStyle}>Email</label>
            <input 
              style={inputStyle} 
              value={data.profile.email} 
              onChange={e => updateProfile('email', e.target.value)} 
            />
          </div>
          <div>
            <label style={labelStyle}>Phone</label>
            <input 
              style={inputStyle} 
              value={data.profile.phone} 
              onChange={e => updateProfile('phone', e.target.value)} 
            />
          </div>
          <div>
            <label style={labelStyle}>City, Country</label>
            <input 
              style={inputStyle} 
              value={data.profile.location} 
              onChange={e => updateProfile('location', e.target.value)} 
            />
          </div>
        </div>
      )}

      {activeTab === 'Experience' && (
        <div style={sectionStyle}>
          {data.experience.map((exp, idx) => (
            <div key={exp.id} style={{ 
              border: '1px solid var(--c-border)', 
              padding: 'var(--s-4)', 
              borderRadius: 'var(--r-md)',
              position: 'relative'
            }}>
               <button 
                onClick={() => removeExperience(exp.id)}
                style={{ position: 'absolute', top: 10, right: 10, color: 'var(--c-scam-red)' }}>
                 Remove
               </button>

               <div style={{ marginBottom: 'var(--s-3)' }}>
                 <label style={labelStyle}>Job Title</label>
                 <input 
                   style={inputStyle} 
                   value={exp.jobTitle} 
                   onChange={e => updateExperience(exp.id, 'jobTitle', e.target.value)} 
                 />
               </div>
               <div style={{ marginBottom: 'var(--s-3)' }}>
                 <label style={labelStyle}>Company</label>
                 <input 
                   style={inputStyle} 
                   value={exp.companyName} 
                   onChange={e => updateExperience(exp.id, 'companyName', e.target.value)} 
                 />
               </div>
               <div style={{ display: 'flex', gap: 'var(--s-2)', marginBottom: 'var(--s-3)' }}>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>Start Date</label>
                    <input style={inputStyle} type="month" value={exp.startDate} onChange={e => updateExperience(exp.id, 'startDate', e.target.value)} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={labelStyle}>End Date</label>
                    <input style={inputStyle} type="month" value={exp.endDate} onChange={e => updateExperience(exp.id, 'endDate', e.target.value)} />
                  </div>
               </div>
               <div>
                 <label style={labelStyle}>Description (Achievements)</label>
                 <textarea 
                   style={{...inputStyle, minHeight: '100px', resize: 'vertical'}} 
                   value={exp.description} 
                   onChange={e => updateExperience(exp.id, 'description', e.target.value)} 
                 />
               </div>
            </div>
          ))}
          <button 
            onClick={addExperience}
            style={{
              width: '100%',
              padding: 'var(--s-3)',
              border: '2px dashed var(--c-border)',
              borderRadius: 'var(--r-md)',
              color: 'var(--c-text-minor)',
              cursor: 'pointer'
            }}
          >
            + Add Position
          </button>
        </div>
      )}

      {/* Other tabs omitted for MVP brevity, but structure is identical */}
      {activeTab === 'Education' && (
          <p style={{ color: 'var(--c-text-minor)' }}>Education fields would go here (similar to Experience).</p>
      )}
      {activeTab === 'Skills' && (
          <p style={{ color: 'var(--c-text-minor)' }}>Skills tag input would go here.</p>
      )}
    </div>
  );
}
