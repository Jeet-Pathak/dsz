export default function Organizer() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Study Planning</div>
        <h1 className="page-banner-title">Study <span className="accent">Organizer</span></h1>
        <p className="page-banner-sub">Structured schedules and study roadmaps</p>
      </div>

      <div className="sec">
        <div className="sec-label">Your Study Plan</div>
        <h2 className="sec-heading">Organize <span className="hi">Your Learning</span></h2>
        
        <div className="sug-grid">
          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">ROADMAP</span>
              <span>EST. 4 WEEKS</span>
            </div>
            <h3 className="sug-title">Semester 1 Roadmap</h3>
            <p className="sug-body">Structured learning path covering all S1 subjects with weekly milestones and assessment points.</p>
          </div>

          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">PLANNER</span>
              <span>CUSTOMIZABLE</span>
            </div>
            <h3 className="sug-title">Weekly Schedule</h3>
            <p className="sug-body">Create your custom study schedule based on your availability and learning pace.</p>
          </div>

          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">TRACKER</span>
              <span>REAL-TIME</span>
            </div>
            <h3 className="sug-title">Progress Tracker</h3>
            <p className="sug-body">Track your learning progress across all subjects with visual analytics and insights.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
