export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Contract';
  salaryRange?: string; // e.g. "$500 - $1000" or "Unpaid"
  postedAt: string; // ISO Date
  
  // Trust Signals
  isVerified: boolean; // Employer is KYC verified
  scamRisk: 'LOW' | 'MEDIUM' | 'HIGH';
  
  // Matching Signals (Mocked for now)
  matchScore: number; // 0-100
  missingSkills: string[]; // e.g. ['SQL', 'Figma']
  
  tags: string[];
}

export interface VerificationRequest {
  id: string;
  companyName: string;
  website: string;
  regNumber: string; // INN or similar
  contactEmail: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
}
