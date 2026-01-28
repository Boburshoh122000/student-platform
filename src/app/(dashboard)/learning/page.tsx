"use client";

import React, { useState, useEffect } from 'react';
import { TargetRole, LearningPlan, LearningWeek, LearningTask } from '@/types/learning';
import { generateLearningPlan } from '@/lib/learning-generator';

const ROLES: TargetRole[] = ['Frontend Developer', 'UX Designer', 'Product Manager', 'Data Analyst'];

export default function LearningPage() {
  const [activePlan, setActivePlan] = useState<LearningPlan | null>(null);
  const [loading, setLoading] = useState(false);

  // Load from local storage
  useEffect(() => {
    const saved = localStorage.getItem('career-os-learning-plan');
    if (saved) {
      try {
        setActivePlan(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to load plan", e);
      }
    }
  }, []);

  // Save to local storage
  useEffect(() => {
    if (activePlan) {
      localStorage.setItem('career-os-learning-plan', JSON.stringify(activePlan));
    }
  }, [activePlan]);

  const handleCreatePlan = (role: TargetRole) => {
    setLoading(true);
    // Simulate AI delay
    setTimeout(() => {
        const newPlan = generateLearningPlan(role);
        setActivePlan(newPlan);
        setLoading(false);
    }, 1500);
  };

  const toggleTask = (weekId: string, taskId: string) => {
    if (!activePlan) return;

    const updatedWeeks = activePlan.weeks.map(week => {
      if (week.id !== weekId) return week;
      const updatedTasks = week.tasks.map(task => {
        if (task.id !== taskId) return task;
        return { ...task, isCompleted: !task.isCompleted };
      });
      return { ...week, tasks: updatedTasks };
    });

    const totalTasks = updatedWeeks.reduce((acc, w) => acc + w.tasks.length, 0);
    const completedTasks = updatedWeeks.reduce((acc, w) => acc + w.tasks.filter(t => t.isCompleted).length, 0);
    const newProgress = Math.round((completedTasks / totalTasks) * 100);

    setActivePlan({
      ...activePlan,
      weeks: updatedWeeks,
      progress: newProgress
    });
  };

  if (loading) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60vh', flexDirection: 'column' }}>
            <div style={{ fontSize: '3rem', animation: 'spin 2s linear infinite' }}>🔮</div>
            <h2 style={{ marginTop: 'var(--s-4)' }}>Consulting Career AI...</h2>
            <p style={{ color: 'var(--c-text-minor)' }}>Analyzing 10,000+ job descriptions for you.</p>
        </div>
    );
  }

  if (!activePlan) {
    return (
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: 'var(--s-4)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>Skill-Gap Engine 🧠</h1>
        <p style={{ color: 'var(--c-text-minor)', marginBottom: 'var(--s-8)', fontSize: '1.2rem', lineHeight: 1.6 }}>
            Don't just apply. Improve. Select your target role to generate a personalized 4-week crash course.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--s-4)' }}>
          {ROLES.map(role => (
            <button
               key={role}
               onClick={() => handleCreatePlan(role)}
               style={{
                 textAlign: 'left',
                 padding: 'var(--s-6)',
                 background: 'var(--c-bg-card)',
                 border: '1px solid var(--c-border)',
                 borderRadius: 'var(--r-lg)',
                 cursor: 'pointer',
                 transition: 'all 0.2s'
               }}
               onMouseOver={(e) => e.currentTarget.style.borderColor = 'var(--c-primary)'}
               onMouseOut={(e) => e.currentTarget.style.borderColor = 'var(--c-border)'}
            >
              <h3 style={{ fontSize: '1.2rem', marginBottom: 'var(--s-2)' }}>BECOME A</h3>
              <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--c-primary)' }}>{role}</div>
              <p style={{ marginTop: 'var(--s-4)', color: 'var(--c-text-minor)', fontSize: '0.9rem' }}>
                Generate 4-week roadmap →
              </p>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'var(--s-4)' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-8)' }}>
            <div>
                <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>{activePlan.role} Roadmap</h1>
                <p style={{ color: 'var(--c-text-minor)' }}>4-week intensive path generated just for you.</p>
            </div>
            
             <div style={{ textAlign: 'right' }}>
                 <div style={{ fontSize: '0.9rem', marginBottom: 'var(--s-2)', color: 'var(--c-text-minor)' }}>Progress</div>
                 <div style={{ 
                     display: 'flex', alignItems: 'center', gap: 'var(--s-2)',
                     fontSize: '1.5rem', fontWeight: 700 
                 }}>
                     {activePlan.progress}%
                 </div>
             </div>
        </div>

        {/* Timeline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-8)' }}>
            {activePlan.weeks.map((week, idx) => (
                <div key={week.id} style={{ display: 'flex', gap: 'var(--s-4)' }}>
                    {/* Visual Line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ 
                            width: '32px', height: '32px', borderRadius: '50%', 
                            background: week.weekNumber <= 1 || idx === 0 ? 'var(--c-primary)' : 'var(--c-bg-card)',
                            border: `2px solid ${week.weekNumber <= 1 ? 'var(--c-primary)' : 'var(--c-border)'}`,
                            color: week.weekNumber <= 1 ? 'white' : 'var(--c-text-minor)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700,
                            zIndex: 2
                        }}>
                            {week.weekNumber}
                        </div>
                        {idx !== activePlan.weeks.length - 1 && (
                            <div style={{ width: '2px', flex: 1, background: 'var(--c-border)', margin: 'var(--s-2) 0' }} />
                        )}
                    </div>

                    {/* Content */}
                    <div style={{ flex: 1, background: 'var(--c-bg-card)', padding: 'var(--s-6)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--s-2)' }}>Week {week.weekNumber}: {week.theme}</h3>
                        <div style={{ display: 'flex', gap: 'var(--s-2)', flexWrap: 'wrap', marginBottom: 'var(--s-4)' }}>
                            {week.goals.map(g => (
                                <span key={g} style={{ 
                                    fontSize: '0.8rem', padding: '2px 8px', borderRadius: '12px', 
                                    background: 'rgba(59, 130, 246, 0.1)', color: '#60a5fa' 
                                }}>
                                    🎯 {g}
                                </span>
                            ))}
                        </div>

                        {/* Tasks */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-3)' }}>
                            {week.tasks.map(task => (
                                <div key={task.id} style={{ 
                                    display: 'flex', alignItems: 'center', gap: 'var(--s-3)',
                                    padding: 'var(--s-3)',
                                    background: 'var(--c-bg-page)',
                                    borderRadius: 'var(--r-md)',
                                    opacity: task.isCompleted ? 0.6 : 1,
                                    textDecoration: task.isCompleted ? 'line-through' : 'none'
                                }}>
                                    <input 
                                        type="checkbox" 
                                        checked={task.isCompleted} 
                                        onChange={() => toggleTask(week.id, task.id)}
                                        style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                                    />
                                    <div style={{ flex: 1 }}>
                                        <div style={{ fontWeight: 500 }}>{task.title}</div>
                                        <div style={{ fontSize: '0.8rem', color: 'var(--c-text-minor)' }}>
                                            {getIcon(task.type)} {task.type.toUpperCase()} • {task.duration}
                                        </div>
                                    </div>
                                    {task.isCompleted && <span>✅</span>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
        
        <div style={{ marginTop: 'var(--s-8)', textAlign: 'center' }}>
            <button 
                onClick={() => { if(confirm('Are you sure? This will delete your current plan.')) setActivePlan(null); }}
                style={{ color: '#ef4444', background: 'transparent', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}
            >
                In a crisis? Reset Plan
            </button>
        </div>
    </div>
  );
}

function getIcon(type: string) {
    switch(type) {
        case 'video': return '📺';
        case 'article': return '📄';
        case 'project': return '🛠';
        case 'quiz': return '📝';
        default: return '📚';
    }
}
