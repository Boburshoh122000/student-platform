"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Application, ApplicationStatus } from '@/types/application';

interface ApplicationContextType {
  applications: Application[];
  addApplication: (jobId: string, jobTitle: string, company: string, location: string) => void;
  updateStatus: (id: string, status: ApplicationStatus) => void;
}

const ApplicationContext = createContext<ApplicationContextType | undefined>(undefined);

export function ApplicationProvider({ children }: { children: React.ReactNode }) {
  // Lazy load from LocalStorage
  const [applications, setApplications] = useState<Application[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('applications');
      if (saved) {
        try {
          return JSON.parse(saved);
        } catch (e) {
          console.error("Failed to parse applications", e);
        }
      }
    }
    return [];
  });

  // Save to LocalStorage on change
  useEffect(() => {
    localStorage.setItem('career-os-apps', JSON.stringify(applications));
  }, [applications]);

  const addApplication = (jobId: string, jobTitle: string, company: string, location: string) => {
    const newApp: Application = {
      id: crypto.randomUUID(),
      jobId,
      jobTitle,
      companyName: company,
      location,
      status: 'APPLIED',
      appliedAt: new Date().toISOString().split('T')[0],
      lastUpdated: new Date().toISOString(),
    };
    setApplications(prev => [...prev, newApp]);
  };

  const updateStatus = (id: string, status: ApplicationStatus) => {
    setApplications(prev => prev.map(app => 
      app.id === id ? { ...app, status, lastUpdated: new Date().toISOString() } : app
    ));
  };

  return (
    <ApplicationContext.Provider value={{ applications, addApplication, updateStatus }}>
      {children}
    </ApplicationContext.Provider>
  );
}

export const useApplications = () => {
  const context = useContext(ApplicationContext);
  if (!context) throw new Error('useApplications must be used within an ApplicationProvider');
  return context;
};
