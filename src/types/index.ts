export type Role = 'STUDENT' | 'EMPLOYER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  role: Role;
  fullName: string;
  createdAt: Date;
}

export interface StudentProfile {
  userId: string;
  locationId: string; // 'Tashkent', 'Almaty', etc.
  bio: string;
  skills: string[]; // verified skills
  isOpenToWork: boolean;
}

export interface JobPosting {
  id: string;
  orgId: string;
  title: string;
  description: string;
  requirements: string[]; // simple list for MVP
  skills: string[]; // for matching
  location: string;
  isVerified: boolean; // Trust signal
  status: 'OPEN' | 'CLOSED';
}

export interface Application {
  id: string;
  studentId: string;
  jobId: string;
  status: 'SAVED' | 'APPLIED' | 'INTERVIEW' | 'OFFER' | 'REJECTED';
  appliedAt?: Date;
  tailoredResumeUrl?: string; // Link to PDF
}

export interface EmployerOrg {
  id: string;
  name: string;
  isVerified: boolean;
  trustScore: number;
}
