export default function PYQ() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Question Papers</div>
        <h1 className="page-banner-title">PYQ <span className="accent">Database</span></h1>
        <p className="page-banner-sub">Previous Year Questions from all departments</p>
      </div>

      <div className="sec">
        <div className="sec-label">Previous Year Questions</div>
        <div className="pyq-filter-card">
          <div className="pyq-filter-row">
            <span className="filter-key">YEAR:</span>
            <button className="tog-pill on">2023</button>
            <button className="tog-pill">2022</button>
            <button className="tog-pill">2021</button>
            <button className="tog-pill">2020</button>
          </div>
          <div className="pyq-filter-row">
            <span className="filter-key">SEM:</span>
            <button className="tog-pill on">1st</button>
            <button className="tog-pill">2nd</button>
          </div>
          
          <div className="pyq-subjects-section visible">
            <div className="pyq-subjects-label">
              <i className="fas fa-bookmark"></i>Select Subject:
            </div>
            <div className="pyq-subject-chips">
              <div className="pyq-subject-chip on">
                Math <span className="chip-count">5</span>
              </div>
              <div className="pyq-subject-chip">
                Physics <span className="chip-count">3</span>
              </div>
              <div className="pyq-subject-chip">
                Chemistry <span className="chip-count">4</span>
              </div>
            </div>
          </div>
        </div>

        <div id="pyqResultsArea">
          <div className="pyq-results-header">
            <div className="pyq-results-subject-title">Engineering Mathematics - 2023 SEM 1</div>
            <div className="pyq-results-meta">
              <span className="pyq-results-badge">5 Papers</span>
            </div>
          </div>

          <div className="cards-grid">
            <div className="pyq-card">
              <div className="card-meta">
                <span className="card-dept-pyq">PYQ • 2023</span>
                <span>PDF</span>
              </div>
              <h3 className="card-title">Mid Semester Exam</h3>
              <button className="dl-btn dl-btn-cyan">
                <i className="fas fa-download"></i> Download
              </button>
            </div>

            <div className="pyq-card">
              <div className="card-meta">
                <span className="card-dept-pyq">PYQ • 2023</span>
                <span>PDF</span>
              </div>
              <h3 className="card-title">End Semester Exam</h3>
              <button className="dl-btn dl-btn-cyan">
                <i className="fas fa-download"></i> Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
