export default function AdminDashboard() {
  return (
    <div>
      <h1 style={{ fontSize: '2rem', marginBottom: '24px', color: '#0f172a' }}>Platform Overview</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <StatsCard title="Total Students" value="1,248" change="+12% this week" />
        <StatsCard title="Jobs Posted" value="84" change="+5 today" />
        <StatsCard title="Pending Verifications" value="3" change="Urgent" isAlert />
        <StatsCard title="Total Applications" value="5,492" change="+140 today" />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
         {/* Recent Activity */}
         <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
            <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <ActivityItem user="John Doe" action="applied to" target="Frontend Dev at Payme" time="2m ago" />
                <ActivityItem user="Jane Smith" action="reported" target="Data Entry Remote" time="15m ago" isWarning />
                <ActivityItem user="New Employer" action="requested verification" target="TechCorp Solutions" time="1h ago" />
                <ActivityItem user="Alisher B." action="completed" target="React Basics Course" time="2h ago" />
            </div>
         </div>

         {/* Quick Actions */}
         <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
             <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>Safety Tools</h3>
             <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                 <button style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'transparent', textAlign: 'left', cursor: 'pointer' }}>
                    🚨 Review Reports (2)
                 </button>
                 <button style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'transparent', textAlign: 'left', cursor: 'pointer' }}>
                    🔍 Audit Employers
                 </button>
                 <button style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', background: 'transparent', textAlign: 'left', cursor: 'pointer' }}>
                    📢 Post System Alert
                 </button>
             </div>
         </div>
      </div>
    </div>
  );
}

function StatsCard({ title, value, change, isAlert = false }: { title: string, value: string, change: string, isAlert?: boolean }) {
    return (
        <div style={{ background: 'white', padding: '24px', borderRadius: '12px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)', borderLeft: isAlert ? '4px solid #ef4444' : 'none' }}>
            <div style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>{title}</div>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: '#0f172a', marginBottom: '4px' }}>{value}</div>
            <div style={{ fontSize: '0.8rem', color: isAlert ? '#ef4444' : '#10b981' }}>{change}</div>
        </div>
    );
}

function ActivityItem({ user, action, target, time, isWarning = false }: { user: string, action: string, target: string, time: string, isWarning?: boolean }) {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.9rem' }}>
            <div>
                <span style={{ fontWeight: 600 }}>{user}</span> {action} <span style={{ color: isWarning ? '#ef4444' : '#3b82f6' }}>{target}</span>
            </div>
            <div style={{ color: '#94a3b8', fontSize: '0.8rem' }}>{time}</div>
        </div>
    );
}
