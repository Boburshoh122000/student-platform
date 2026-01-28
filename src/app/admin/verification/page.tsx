"use client";

import { useState } from 'react';

type RequestStatus = 'pending' | 'approved' | 'rejected';

interface VerificationRequest {
  id: string;
  companyName: string;
  industry: string;
  requestDate: string;
  documents: string[];
  status: RequestStatus;
}

const MOCK_REQUESTS: VerificationRequest[] = [
  {
    id: '1',
    companyName: 'TechCorp Solutions',
    industry: 'Fintech',
    requestDate: '2025-05-12',
    documents: ['License.pdf', 'TaxRecord.pdf'],
    status: 'pending'
  },
  {
    id: '2',
    companyName: 'FastBucks Crypto',
    industry: 'Crypto',
    requestDate: '2025-05-12',
    documents: ['ID.jpg'],
    status: 'pending'
  },
  {
    id: '3',
    companyName: 'EduStart Academy',
    industry: 'Education',
    requestDate: '2025-05-11',
    documents: ['Cert.pdf'],
    status: 'pending'
  }
];

export default function VerificationPage() {
  const [requests, setRequests] = useState(MOCK_REQUESTS);

  const handleAction = (id: string, action: 'approve' | 'reject') => {
    setRequests(prev => prev.map(req => 
        req.id === id ? { ...req, status: action === 'approve' ? 'approved' : 'rejected' } : req
    ));
    // In a real app, this would update the backend "isVerified" status
  };

  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '8px', color: '#0f172a' }}>Verification Queue</h1>
      <p style={{ color: '#64748b', marginBottom: '32px' }}>Review document submissions from new employers.</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {requests.map(req => {
            if (req.status !== 'pending') return null; // Hide processed for now
            
            return (
                <div key={req.id} style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: '4px solid #3b82f6' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                        <div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '4px' }}>{req.companyName}</h3>
                            <div style={{ color: '#64748b' }}>{req.industry} • Requested {req.requestDate}</div>
                        </div>
                        <div style={{ display: 'flex', gap: '8px' }}>
                             {req.documents.map(doc => (
                                 <div key={doc} style={{ padding: '4px 12px', background: '#f1f5f9', borderRadius: '6px', fontSize: '0.8rem', color: '#475569' }}>
                                     📎 {doc}
                                 </div>
                             ))}
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button 
                            onClick={() => handleAction(req.id, 'approve')}
                            style={{ 
                                padding: '10px 24px', background: '#10b981', color: 'white', 
                                border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' 
                            }}
                        >
                            Approve & Verify
                        </button>
                        <button 
                            onClick={() => handleAction(req.id, 'reject')}
                            style={{ 
                                padding: '10px 24px', background: '#ef4444', color: 'white', 
                                border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' 
                            }}
                        >
                            Reject
                        </button>
                    </div>
                </div>
            );
        })}

        {requests.every(r => r.status !== 'pending') && (
            <div style={{ textAlign: 'center', padding: '40px', color: '#64748b' }}>
                🎉 All caught up! No pending verifications.
            </div>
        )}
      </div>
    </div>
  );
}
