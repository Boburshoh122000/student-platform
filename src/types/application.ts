export type ApplicationStatus = 'SAVED' | 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED';

export interface Application {
  id: string;
  jobId: string;
  jobTitle: string;
  companyName: string;
  location: string;
  status: ApplicationStatus;
  appliedAt: string; // ISO Date
  lastUpdated: string; // ISO Date
  notes?: string;
  nextInterviewDate?: string;
}

export const KANBAN_COLUMNS: { id: ApplicationStatus; label: string; color: string }[] = [
  { id: 'SAVED', label: 'Wishlist', color: '#64748b' },
  { id: 'APPLIED', label: 'Applied', color: '#3b82f6' },
  { id: 'INTERVIEW', label: 'Interviewing', color: '#f59e0b' },
  { id: 'OFFER', label: 'Offers', color: '#10b981' },
  { id: 'REJECTED', label: 'Rejections', color: '#ef4444' },
];
