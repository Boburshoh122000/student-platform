import prisma from '@/lib/prisma';
import JobFeedInternal from '@/components/market/JobFeedInternal';
import { MOCK_JOBS } from '@/lib/mock-jobs';

// Ensure this page is not statically cached since we want fresh jobs
export const dynamic = 'force-dynamic';

export default async function JobFeedPage() {
  let jobs = MOCK_JOBS;
  
  try {
     // @ts-ignore -- Ignoring typings until prisma generate is run
     const dbJobs = await prisma.job.findMany({ 
        // @ts-ignore
        include: { employer: true } 
     });

     if (dbJobs && dbJobs.length > 0) {
        // Map DB jobs to UI jobs interface
        // @ts-ignore
        jobs = dbJobs.map((j: any) => ({
            id: j.id,
            title: j.title,
            company: j.employer?.companyName || 'Unknown',
            location: j.location,
            type: j.type,
            salaryRange: j.salaryRange,
            postedAt: j.createdAt.toLocaleDateString(),
            matchScore: 85, // Mock scoring for now
            isVerified: j.employer?.isVerified || false
        }));
     }
  } catch (e) {
     console.log("Database connection not ready, using Mock Data.");
  }

  return <JobFeedInternal initialJobs={jobs} />;
}
