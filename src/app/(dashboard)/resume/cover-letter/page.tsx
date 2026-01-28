"use client";

import React, { useState } from 'react';
import { generateCoverLetter } from '@/lib/ai-mock';

export default function CoverLetterPage() {
  const [formData, setFormData] = useState({
    jobTitle: '',
    company: '',
    description: '',
    tone: 'professional'
  });
  const [generatedLetter, setGeneratedLetter] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!formData.jobTitle || !formData.company) return;
    setLoading(true);
    const letter = await generateCoverLetter(formData.jobTitle, formData.company);
    setGeneratedLetter(letter);
    setLoading(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedLetter);
    alert('Copied to clipboard!');
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'var(--s-6)' }}>
      <header style={{ marginBottom: 'var(--s-8)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>Cover Letter Writer ✍️</h1>
        <p style={{ color: 'var(--c-text-minor)' }}>
            Paste the job description, and we'll write a tailored letter for you.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--s-8)' }}>
        
        {/* Input Form */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
            <div>
                <label style={{ display: 'block', marginBottom: 'var(--s-2)', fontWeight: 500 }}>Target Job Title</label>
                <input 
                    type="text" 
                    placeholder="e.g. UX Designer"
                    value={formData.jobTitle}
                    onChange={e => setFormData({...formData, jobTitle: e.target.value})}
                    style={{ width: '100%', padding: 'var(--s-3)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: 'var(--s-2)', fontWeight: 500 }}>Company Name</label>
                <input 
                    type="text" 
                    placeholder="e.g. Payme"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                    style={{ width: '100%', padding: 'var(--s-3)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                />
            </div>
            <div>
                <label style={{ display: 'block', marginBottom: 'var(--s-2)', fontWeight: 500 }}>Job Description (Optional)</label>
                <textarea 
                    placeholder="Paste the JD here to improve tailoring..."
                    value={formData.description}
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    style={{ width: '100%', minHeight: '150px', padding: 'var(--s-3)', borderRadius: 'var(--r-md)', border: '1px solid var(--c-border)' }}
                />
            </div>
            
            <button 
                onClick={handleGenerate}
                disabled={loading || !formData.jobTitle || !formData.company}
                style={{ 
                    padding: 'var(--s-4)', background: 'var(--c-primary)', color: 'white', 
                    border: 'none', borderRadius: 'var(--r-lg)', 
                    fontWeight: 600, cursor: 'pointer', opacity: loading ? 0.7 : 1
                }}
            >
                {loading ? 'Writing...' : 'Generate Letter 🪄'}
            </button>
        </div>

        {/* Output Preview */}
        <div style={{ background: 'var(--c-bg-card)', padding: 'var(--s-6)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-4)' }}>
                <h3 style={{ margin: 0 }}>Preview</h3>
                {generatedLetter && (
                    <button 
                        onClick={copyToClipboard}
                        style={{ padding: '6px 12px', background: 'var(--c-border)', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                        Copy Text
                    </button>
                )}
            </div>
            
            {generatedLetter ? (
                <div style={{ whiteSpace: 'pre-wrap', lineHeight: 1.6, fontFamily: 'var(--font-inter)' }}>
                    {generatedLetter}
                </div>
            ) : (
                <div style={{ color: 'var(--c-text-minor)', fontStyle: 'italic', textAlign: 'center', marginTop: 'var(--s-10)' }}>
                    Your generated letter will appear here.
                </div>
            )}
        </div>

      </div>
    </div>
  );
}
