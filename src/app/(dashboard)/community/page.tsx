"use client";

import React, { useState } from 'react';

export default function CommunityPage() {
  const [joinedCohorts, setJoinedCohorts] = useState<string[]>([]);

  const handleJoin = (id: string) => {
    if (joinedCohorts.includes(id)) {
        setJoinedCohorts(prev => prev.filter(c => c !== id));
    } else {
        setJoinedCohorts(prev => [...prev, id]);
        alert("🎉 You joined the cohort! Check your 'Learning' tab for updates.");
    }
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: 'var(--s-4)' }}>
      <header style={{ marginBottom: 'var(--s-8)' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>Community Hub 🌍</h1>
        <p style={{ color: 'var(--c-text-minor)' }}>
            Connect with 5,000+ students across Central Asia. Build together, not alone.
        </p>
      </header>

      {/* Cohorts Section */}
      <section style={{ marginBottom: 'var(--s-10)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--s-4)' }}>
             <h2 style={{ fontSize: '1.5rem' }}>🔥 Active Cohorts</h2>
             <span style={{ color: 'var(--c-primary)', cursor: 'pointer' }}>View All →</span>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'var(--s-4)' }}>
           <CohortCard 
             id="c1"
             title="March Frontend Sprint"
             members={1240}
             goal="Build a React Portfolio"
             joined={joinedCohorts.includes('c1')}
             onJoin={handleJoin}
           />
           <CohortCard 
             id="c2"
             title="UX Research Deep Dive"
             members={850}
             goal="Complete 5 User Interviews"
             joined={joinedCohorts.includes('c2')}
             onJoin={handleJoin}
           />
        </div>
      </section>

      {/* Peer Review & Discussions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--s-8)' }}>
        
        {/* Main Feed */}
        <section>
           <h2 style={{ fontSize: '1.5rem', marginBottom: 'var(--s-4)' }}>💬 Recent Discussions</h2>
           <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-4)' }}>
              <DiscussionItem 
                author="Aziz K." 
                role="Student @ INHA" 
                title="How to answer 'Where do you see yourself in 5 years?'"
                replies={14}
                tag="Interview Prep"
              />
              <DiscussionItem 
                author="Malika R." 
                role="Junior Dev @ Payme" 
                title="My experience verifying my employer on CareerOS - it's legit!"
                replies={42}
                tag="Success Story"
              />
              <DiscussionItem 
                author="Bekzod T." 
                role="Student @ WIUT" 
                title="Is it better to learn Vue or React for the Tashkent market?"
                replies={28}
                tag="Tech Stack"
              />
           </div>
        </section>

        {/* Sidebar */}
        <aside style={{ display: 'flex', flexDirection: 'column', gap: 'var(--s-6)' }}>
            
            {/* Peer Review Widget */}
            <div style={{ padding: 'var(--s-6)', background: 'var(--c-bg-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
                <div style={{ fontSize: '2rem', marginBottom: 'var(--s-2)' }}>🤝</div>
                <h3 style={{ marginBottom: 'var(--s-2)' }}>Peer CV Review</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--c-text-minor)', marginBottom: 'var(--s-4)' }}>
                    Get feedback from 3 peers. Earn 'Karma' by reviewing others.
                </p>
                <button style={{ 
                    width: '100%', padding: 'var(--s-3)', 
                    background: 'var(--c-primary)', color: 'white', 
                    border: 'none', borderRadius: 'var(--r-md)', fontWeight: 600, cursor: 'pointer' 
                }}>
                    Request Review
                </button>
            </div>

             {/* Events Widget */}
             <div style={{ padding: 'var(--s-6)', background: 'var(--c-bg-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
                <h3 style={{ marginBottom: 'var(--s-4)' }}>📅 Upcoming Events</h3>
                <EventItem date="Feb 12" title="Ask Me Anything: Head of HR at Click" />
                <EventItem date="Feb 15" title="CV Workshop: Westminster Uni" />
            </div>

        </aside>
      </div>
    </div>
  );
}

function CohortCard({ id, title, members, goal, joined, onJoin }: any) {
    return (
        <div style={{ padding: 'var(--s-6)', background: 'var(--c-bg-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: 'var(--s-4)' }}>
                <div style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)', borderRadius: '12px' }} />
                <span style={{ fontSize: '0.8rem', color: '#10B981', background: 'rgba(16, 185, 129, 0.1)', padding: '2px 8px', borderRadius: '12px' }}>
                    Active
                </span>
            </div>
            <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--s-2)' }}>{title}</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--c-text-minor)', marginBottom: 'var(--s-4)' }}>
                Goal: {goal}
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.8rem', color: 'var(--c-text-minor)' }}>👥 {members} joined</span>
                <button 
                  onClick={() => onJoin(id)}
                  style={{ 
                    padding: '6px 16px', borderRadius: '20px', 
                    background: joined ? 'transparent' : 'var(--c-border)', 
                    color: joined ? '#10B981' : 'var(--c-text-primary)',
                    border: joined ? '1px solid #10B981' : 'none',
                    cursor: 'pointer'
                }}>
                    {joined ? 'Joined ✓' : 'Join'}
                </button>
            </div>
        </div>
    )
}

function DiscussionItem({ author, role, title, replies, tag }: any) {
    return (
        <div style={{ padding: 'var(--s-4)', background: 'var(--c-bg-card)', borderRadius: 'var(--r-lg)', border: '1px solid var(--c-border)', cursor: 'pointer' }}>
             <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--s-2)', marginBottom: 'var(--s-2)' }}>
                <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#cbd5e1' }} />
                <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>{author}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--c-text-minor)' }}>• {role}</span>
             </div>
             <h4 style={{ fontSize: '1.1rem', marginBottom: 'var(--s-3)' }}>{title}</h4>
             <div style={{ display: 'flex', gap: 'var(--s-4)', fontSize: '0.85rem', color: 'var(--c-text-minor)' }}>
                 <span>💬 {replies} replies</span>
                 <span style={{ background: 'var(--c-bg-page)', padding: '2px 8px', borderRadius: '4px' }}>#{tag}</span>
             </div>
        </div>
    )
}

function EventItem({ date, title }: any) {
    return (
        <div style={{ display: 'flex', gap: 'var(--s-3)', marginBottom: 'var(--s-3)' }}>
            <div style={{ 
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                background: 'var(--c-bg-page)', borderRadius: '8px', padding: '8px', width: '50px'
            }}>
                <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', color: 'var(--c-text-minor)' }}>FEB</span>
                <span style={{ fontWeight: 700 }}>{date.split(' ')[1]}</span>
            </div>
            <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 500 }}>{title}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--c-text-minor)' }}>Video Call</div>
            </div>
        </div>
    )
}
