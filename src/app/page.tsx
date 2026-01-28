import Link from "next/link";

export default function Home() {
  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', color: 'white' }}>
      
      {/* NAV */}
      <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 'var(--s-4) var(--s-8)', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ fontSize: '1.25rem', fontWeight: 700, fontFamily: 'var(--font-outfit)' }}>
          Career<span style={{ color: '#3b82f6' }}>OS</span>
        </div>
        <div style={{ display: 'flex', gap: 'var(--s-6)', alignItems: 'center' }}>
          <Link href="/jobs" style={{ color: '#94a3b8', textDecoration: 'none' }}>Find Jobs</Link>
          <Link href="/employers" style={{ color: '#94a3b8', textDecoration: 'none' }}>For Employers</Link>
          <Link href="/resume/builder" style={{ 
            background: 'white', 
            color: 'black', 
            padding: 'var(--s-2) var(--s-4)', 
            borderRadius: 'var(--r-full)',
            fontWeight: 600,
            textDecoration: 'none'
          }}>
            Build CV
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section style={{ textAlign: 'center', padding: 'var(--s-20) var(--s-4)', maxWidth: '1000px', margin: '0 auto', position: 'relative' }}>
        {/* Glow Effect */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)', zIndex: 0, pointerEvents: 'none' }}></div>

        <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(59, 130, 246, 0.1)', 
                color: '#60a5fa', 
                padding: '6px 16px', 
                marginBottom: 'var(--s-8)',
                fontSize: '0.9rem',
                border: '1px solid rgba(59, 130, 246, 0.2)',
                borderRadius: '999px',
                fontWeight: 600
            }}>
              <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
                <span style={{ position: 'absolute', display: 'inline-flex', height: '100%', width: '100%', borderRadius: '50%', background: '#60A5FA', opacity: 0.75, animation: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' }}></span>
                <span style={{ position: 'relative', display: 'inline-flex', borderRadius: '50%', height: '8px', width: '8px', background: '#3B82F6' }}></span>
              </span>
              v1.0 is Live: AI Resume Builder
            </div>

            <h1 style={{ 
            fontSize: '5rem', 
            fontWeight: 800, 
            lineHeight: 1.1, 
            marginBottom: 'var(--s-8)',
            fontFamily: 'var(--font-outfit)',
            letterSpacing: '-0.02em',
            background: 'linear-gradient(to bottom, #ffffff, #94a3b8)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0 20px 40px rgba(0,0,0,0.2)'
            }}>
            Launch Your Career <br /> in <span style={{ color: '#3b82f6', WebkitTextFillColor: '#3b82f6', textShadow: '0 0 40px rgba(59,130,246,0.5)' }}>15 Minutes</span>.
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#94a3b8', marginBottom: 'var(--s-12)', lineHeight: 1.6, maxWidth: '700px', margin: '0 auto var(--s-12) auto' }}>
            The only platform in Central Asia that turns your student profile into a <br/> CEO-ready resume and connects you with verified employers.
            </p>
            <div style={{ display: 'flex', gap: 'var(--s-4)', justifyContent: 'center' }}>
            <Link href="/resume/builder" style={{
                background: '#3b82f6',
                color: 'white',
                padding: '16px 32px',
                borderRadius: 'var(--r-full)',
                fontWeight: 700,
                textDecoration: 'none',
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(59, 130, 246, 0.4)',
                transition: 'transform 0.2s',
                display: 'inline-block'
            }}>
                Build Resume Free &rarr;
            </Link>
            <Link href="/jobs" style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                color: 'white',
                padding: '16px 32px',
                borderRadius: 'var(--r-full)',
                fontWeight: 600,
                textDecoration: 'none',
                fontSize: '1.1rem',
                backdropFilter: 'blur(12px)'
            }}>
                Browse Jobs
            </Link>
            </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section style={{ borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)', padding: 'var(--s-10) 0', background: 'rgba(2, 6, 23, 0.5)' }}>
         <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
           <p style={{ color: '#64748b', fontSize: '0.875rem', marginBottom: 'var(--s-8)', letterSpacing: '0.1em', fontWeight: 600 }}>TRUSTED BY STUDENTS FROM</p>
           <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--s-12)', flexWrap: 'wrap', opacity: 0.6, filter: 'grayscale(100%)' }}>
             {/* Text Placeholders for Logos */}
             <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>WIUT</span>
             <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>IUT</span>
             <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>MDIST</span>
             <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>AMITY</span>
             <span style={{ fontSize: '1.5rem', fontWeight: 800 }}>WEBSTER</span>
           </div>
         </div>
      </section>

      {/* FEATURE GRID */}
      <section style={{ padding: 'var(--s-24) var(--s-4)', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: 'var(--s-16)', fontFamily: 'var(--font-outfit)' }}>
          Why Top Students Choose <span style={{ color: '#3b82f6' }}>CareerOS</span>
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: 'var(--s-8)' }}>
           {/* Card 1 */}
           <div style={{ background: 'rgba(30, 41, 59, 0.3)', padding: 'var(--s-10)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
             <div style={{ position: 'absolute', top: 0, right: 0, width: '150px', height: '150px', background: 'radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)'}}></div>
             <div style={{ fontSize: '3.5rem', marginBottom: 'var(--s-6)' }}>⚡</div>
             <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--s-3)' }}>AI Resume Tailoring</h3>
             <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1.1rem' }}>
               Stop sending generic CVs. Our engine rewrites your bullet points to match the job description perfectly in seconds.
             </p>
           </div>
           
           {/* Card 2 */}
           <div style={{ background: 'rgba(30, 41, 59, 0.3)', padding: 'var(--s-10)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 'var(--s-6)' }}>🛡️</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--s-3)' }}>100% Verified Jobs</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1.1rem' }}>
                 We manually verify every employer&apos;s registration documents. Say goodbye to MLM schemes and Telegram scams.
              </p>
           </div>

           {/* Card 3 */}
           <div style={{ background: 'rgba(30, 41, 59, 0.3)', padding: 'var(--s-10)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ fontSize: '3.5rem', marginBottom: 'var(--s-6)' }}>🚀</div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: 'var(--s-3)' }}>Application Tracker</h3>
              <p style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '1.1rem' }}>
                 Organize your job hunt like a pro. Track every application from &quot;Applied&quot; to &quot;Offer&quot; in one visual board.
              </p>
           </div>
        </div>
      </section>
      
      {/* FINAL CTA */}
      <section style={{ textAlign: 'center', padding: 'var(--s-20) 0' }}>
         <h2 style={{ fontSize: '3.5rem', marginBottom: 'var(--s-8)' }}>Ready to get hired?</h2>
         <Link href="/resume/builder" style={{
            background: 'white',
            color: 'black',
            padding: '20px 48px',
            borderRadius: 'var(--r-full)',
            fontWeight: 800,
            textDecoration: 'none',
            fontSize: '1.5rem',
            boxShadow: '0 0 30px rgba(255,255,255,0.3)',
            transition: 'transform 0.2s',
            display: 'inline-block'
          }}>
            Build Your Resume Now
          </Link>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #1e293b', padding: 'var(--s-10) 0', textAlign: 'center', color: '#64748b' }}>
        <p>&copy; 2024 CareerOS. Built for Students in Central Asia.</p>
      </footer>

    </div>
  );
}
