import { Job } from '@/types/job';

export const MOCK_JOBS: Job[] = [
  {
    id: '1',
    title: 'Junior Data Analyst',
    company: 'Payme',
    location: 'Tashkent, Uzbekistan (Hybrid)',
    type: 'Full-time',
    salaryRange: '$600 - $900',
    postedAt: '2023-10-25',
    isVerified: true,
    scamRisk: 'LOW',
    matchScore: 85,
    missingSkills: ['PowerBI'],
    tags: ['Fintech', 'SQL', 'Data']
  },
  {
    id: '2',
    title: 'Marketing Intern',
    company: 'Uzum Market',
    location: 'Tashkent, Uzbekistan (On-site)',
    type: 'Internship',
    salaryRange: '$300 - $500',
    postedAt: '2023-10-24',
    isVerified: true,
    scamRisk: 'LOW',
    matchScore: 92,
    missingSkills: [],
    tags: ['E-commerce', 'SMM', 'Copywriting']
  },
  {
    id: '3',
    title: 'React Developer (Urgent)',
    company: 'Unknown Agency',
    location: 'Remote',
    type: 'Contract',
    salaryRange: '$2000+',
    postedAt: '2023-10-26',
    isVerified: false,
    scamRisk: 'MEDIUM', // Suspicious high salary
    matchScore: 40,
    missingSkills: ['Redux', 'TypeScript', 'Next.js'],
    tags: ['Web', 'Frontend']
  },
  {
    id: '4',
    title: 'Customer Support Specialist',
    company: 'Beeline Uzbekistan',
    location: 'Tashkent',
    type: 'Full-time',
    salaryRange: '$400 - $600',
    postedAt: '2023-10-23',
    isVerified: true,
    scamRisk: 'LOW',
    matchScore: 60,
    missingSkills: ['CRM Tools'],
    tags: ['Telecom', 'Support']
  }
];
