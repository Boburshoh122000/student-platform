"use client";

import React, { createContext, useContext, useState } from 'react';

export interface VerificationRequest {
  id: string;
  companyName: string;
  regNumber: string;
  docUrl: string; // Fake URL for MVP
  submittedAt: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}

interface AdminContextType {
  requests: VerificationRequest[];
  reviewRequest: (id: string, decision: 'APPROVED' | 'REJECTED') => void;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

const MOCK_REQUESTS: VerificationRequest[] = [
  { 
    id: 'req_1', 
    companyName: 'TechStart Uzbekistan', 
    regNumber: '123456789', 
    docUrl: '#', 
    submittedAt: '2023-10-26', 
    status: 'PENDING' 
  },
  { 
    id: 'req_2', 
    companyName: 'Green Solutions LLC', 
    regNumber: '987654321', 
    docUrl: '#', 
    submittedAt: '2023-10-25', 
    status: 'PENDING' 
  }
];

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [requests, setRequests] = useState<VerificationRequest[]>(MOCK_REQUESTS);

  const reviewRequest = (id: string, decision: 'APPROVED' | 'REJECTED') => {
    setRequests(prev => prev.map(req => 
      req.id === id ? { ...req, status: decision } : req
    ));
  };

  return (
    <AdminContext.Provider value={{ requests, reviewRequest }}>
      {children}
    </AdminContext.Provider>
  );
}

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (!context) throw new Error('useAdmin must be used within AdminProvider');
  return context;
};
