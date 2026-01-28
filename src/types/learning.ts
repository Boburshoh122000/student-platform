export type TargetRole = 'Frontend Developer' | 'UX Designer' | 'Product Manager' | 'Data Analyst' | 'Digital Marketer';

export interface LearningTask {
  id: string;
  title: string;
  type: 'video' | 'article' | 'project' | 'quiz';
  duration: string; // e.g. "45 min"
  isCompleted: boolean;
  link?: string;
}

export interface LearningWeek {
  id: string;
  weekNumber: number;
  theme: string;
  goals: string[];
  tasks: LearningTask[];
}

export interface LearningPlan {
  id: string;
  role: TargetRole;
  generatedAt: Date;
  weeks: LearningWeek[];
  progress: number; // 0-100
}
