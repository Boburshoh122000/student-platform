// Core Resume Data Types

export interface ResumeProfile {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  location: string; // e.g., "Tashkent, Uzbekistan"
  linkedinUrl?: string; // Optional
  portfolioUrl?: string; // Optional
}

export interface ResumeEducation {
  id: string; // UUID for rendering lists
  schoolName: string;
  degree: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM or "Present"
  city: string;
  description?: string; // Optional achievements
}

export interface ResumeExperience {
  id: string;
  companyName: string;
  jobTitle: string;
  startDate: string;
  endDate: string;
  city: string;
  description: string; // Bullets as user types them
}

export interface ResumeSkill {
  id: string;
  name: string;
  level?: 'Beginner' | 'Intermediate' | 'Advanced'; // Optional for now
}

export interface ResumeData {
  profile: ResumeProfile;
  summary: string;
  education: ResumeEducation[];
  experience: ResumeExperience[];
  skills: string[]; // Simplest array of strings for MVP
}

export const INITIAL_RESUME_STATE: ResumeData = {
  profile: {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    location: '',
  },
  summary: '',
  education: [],
  experience: [],
  skills: [],
};
