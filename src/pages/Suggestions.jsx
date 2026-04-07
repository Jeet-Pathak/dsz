export default function Suggestions() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Admin Tips</div>
        <h1 className="page-banner-title">Study <span className="accent">Suggestions</span></h1>
        <p className="page-banner-sub">Tips and updates from DSZ admins</p>
      </div>

      <div className="sec">
        <div className="sec-label">Latest Updates</div>
        <h2 className="sec-heading">Admin <span className="hi">Suggestions</span></h2>

        <div className="sug-grid">
          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">TIP</span>
              <span>TODAY</span>
            </div>
            <h3 className="sug-title">Study Strategy for Exams</h3>
            <p className="sug-body">Focus on understanding concepts rather than rote memorization. Solve previous year papers to get familiar with question patterns.</p>
          </div>

          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">UPDATE</span>
              <span>YESTERDAY</span>
            </div>
            <h3 className="sug-title">New Lecture Series Added</h3>
            <p className="sug-body">We've added comprehensive lecture series on Advanced Mathematics covering all important topics for Gate exams.</p>
          </div>

          <div className="sug-card">
            <div className="sug-meta">
              <span className="sug-type">ANNOUNCEMENT</span>
              <span>2 DAYS AGO</span>
            </div>
            <h3 className="sug-title">Monthly Study Challenge</h3>
            <p className="sug-body">Participate in our monthly study challenge and win exclusive DSZ merchandise. Start solving problems now!</p>
          </div>
        </div>
      </div>
    </section>
  );
}
