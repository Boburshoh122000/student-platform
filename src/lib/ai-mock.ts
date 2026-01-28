import { ResumeData } from "@/types/resume";

export interface ATSResult {
  score: number;
  issues: string[];
  tips: string[];
}

export const calculateATSScore = (resume: ResumeData): ATSResult => {
  let score = 100;
  const issues: string[] = [];
  const tips: string[] = [];

  // 1. Contact Info Check
  if (!resume.profile.email) {
    score -= 20;
    issues.push("Missing Email Address");
  }
  if (!resume.profile.phone) {
    score -= 10;
    issues.push("Missing Phone Number");
  }
  if (!resume.profile.linkedinUrl) {
    score -= 5;
    tips.push("Adding a LinkedIn profile increases trust.");
  }

  // 2. Summary Check
  if (!resume.summary || resume.summary.length < 50) {
    score -= 15;
    issues.push("Summary is too short or missing.");
    tips.push("Write at least 2-3 sentences about your career goals.");
  }

  // 3. Experience Check
  if (resume.experience.length === 0) {
    score -= 20;
    issues.push("No experience listed.");
  } else {
    resume.experience.forEach((exp, idx) => {
      if (!exp.description || exp.description.length < 30) {
        score -= 5;
        issues.push(`Experience #${idx + 1} description is too weak.`);
      }
    });
  }

  // 4. Skills Check
  if (resume.skills.length < 3) {
    score -= 10;
    issues.push("List at least 3 core skills.");
  }

  return { score: Math.max(0, score), issues, tips };
};

export const rewriteContent = async (text: string, tone: 'professional' | 'energetic' = 'professional'): Promise<string> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (!text) return "Results-driven professional with a proven track record of delivering high-quality solutions. Passionate about leveraging technology to solve complex problems.";

  // Simple deterministic "improvements"
  if (text.includes("Managed")) return text.replace("Managed", "Orchestrated and led");
  if (text.includes("Created")) return text.replace("Created", "Designed and implemented");
  if (text.includes("Worked on")) return text.replace("Worked on", "Collaborated on critical initiatives including");
  if (text.includes("Helped")) return text.replace("Helped", "Facilitated and supported");

  return `[AI Enhanced] ${text} (Optimized for impact and clarity)`; 
};

export const generateCoverLetter = async (jobTitle: string, company: string): Promise<string> => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return `Dear Hiring Manager at ${company},

I am writing to express my strong interest in the ${jobTitle} position. With my background in software development and a passion for building user-centric products, I am confident in my ability to contribute effectively to your team.

I have followed ${company}'s work in the industry and admire your commitment to innovation. I am eager to bring my skills in technical problem-solving and collaborative development to help achieve your strategic goals.

Thank you for considering my application. I look forward to the possibility of discussing how my experience aligns with the needs of your team.

Sincerely,
[Your Name]`;
}
