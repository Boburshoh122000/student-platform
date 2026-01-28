import { LearningPlan, TargetRole, LearningWeek } from "@/types/learning";

const MOCK_VIDEOS = [
  "https://youtube.com/watch?v=placeholder1",
  "https://youtube.com/watch?v=placeholder2"
];

const FRONTEND_WEEKS: LearningWeek[] = [
  {
    id: 'w1',
    weekNumber: 1,
    theme: 'Foundations & Semantic HTML',
    goals: ['Master semantic tags', 'Understand the box model', 'Build a simple landing page'],
    tasks: [
      { id: 't1', title: 'HTML5 Semantic Elements Deep Dive', type: 'video', duration: '45 min', isCompleted: false },
      { id: 't2', title: 'CSS Box Model Explained', type: 'article', duration: '20 min', isCompleted: false },
      { id: 't3', title: 'Project: Build a Personal Profile Page', type: 'project', duration: '3 hours', isCompleted: false },
    ]
  },
  {
    id: 'w2',
    weekNumber: 2,
    theme: 'Modern CSS & Flexbox',
    goals: ['Learn Flexbox layout', 'Responsive design principles', 'CSS Variables'],
    tasks: [
      { id: 't4', title: 'Flexbox Zombies Game', type: 'resource' as any, duration: '1 hour', isCompleted: false },
      { id: 't5', title: 'Mobile-First Design Strategy', type: 'article', duration: '30 min', isCompleted: false },
      { id: 't6', title: 'Project: Responsive Card Component', type: 'project', duration: '2 hours', isCompleted: false },
    ]
  },
  {
    id: 'w3',
    weekNumber: 3,
    theme: 'JavaScript Basics',
    goals: ['Variables & Types', 'DOM Manipulation', 'Event Listeners'],
    tasks: [
      { id: 't7', title: 'JS for Absolute Beginners', type: 'video', duration: '60 min', isCompleted: false },
      { id: 't8', title: 'DOM Manipulation Cheatsheet', type: 'article', duration: '15 min', isCompleted: false },
      { id: 't9', title: 'Project: Interactive To-Do List', type: 'project', duration: '4 hours', isCompleted: false },
    ]
  },
  {
    id: 'w4',
    weekNumber: 4,
    theme: 'React Fundamentals',
    goals: ['Components & Props', 'useState Hook', 'Building a Portfolio'],
    tasks: [
      { id: 't10', title: 'React in 100 Seconds', type: 'video', duration: '2 min', isCompleted: false },
      { id: 't11', title: 'Thinking in React', type: 'article', duration: '40 min', isCompleted: false },
      { id: 't12', title: 'Final Project: Portfolio Site with React', type: 'project', duration: '6 hours', isCompleted: false },
    ]
  }
];

const UX_WEEKS: LearningWeek[] = [
    {
      id: 'ux_w1',
      weekNumber: 1,
      theme: 'Empathy & Research',
      goals: ['Understand Design Thinking', 'User Interviews', 'Personas'],
      tasks: [
        { id: 'ux_t1', title: 'Design Thinking 101', type: 'video', duration: '30 min', isCompleted: false },
        { id: 'ux_t2', title: 'Conducting User Interviews', type: 'article', duration: '45 min', isCompleted: false },
        { id: 'ux_t3', title: 'Project: Create a User Persona', type: 'project', duration: '2 hours', isCompleted: false },
      ]
    },
    // ... Simplified for MVP
];

export const generateLearningPlan = (role: TargetRole): LearningPlan => {
  // Simulating AI generation delay behavior in UI
  
  let weeks = FRONTEND_WEEKS;
  if (role === 'UX Designer') weeks = UX_WEEKS; 
  // Default to frontend for others in MVP

  return {
    id: generateId(),
    role,
    generatedAt: new Date(),
    weeks: weeks,
    progress: 0
  };
};

function generateId() {
  return Math.random().toString(36).substr(2, 9);
}
