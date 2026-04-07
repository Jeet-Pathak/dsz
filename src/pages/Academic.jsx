export default function Academic() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Study Materials</div>
        <h1 className="page-banner-title">Study <span className="accent">Notes</span></h1>
        <p className="page-banner-sub">Comprehensive notes organized by department and semester</p>
      </div>

      <div className="sec">
        <div className="sec-label">Academic Resources</div>
        <h2 className="sec-heading">Filter <span className="hi">by Department</span></h2>
        
        <div className="filter-card">
          <div className="search-wrap">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search notes..." 
            />
            <i className="fas fa-search search-icon"></i>
          </div>
          <div className="filter-row">
            <span className="filter-key">DEPT:</span>
            <button className="tog-pill on">CSE</button>
            <button className="tog-pill">ECE</button>
            <button className="tog-pill">MECH</button>
            <button className="tog-pill">CIVIL</button>
          </div>
          <div className="filter-row">
            <span className="filter-key">YEAR:</span>
            <button className="tog-pill on">1st</button>
            <button className="tog-pill">2nd</button>
            <button className="tog-pill">3rd</button>
            <button className="tog-pill">4th</button>
          </div>
        </div>

        <div className="cards-grid">
          <div className="note-card vis">
            <div className="card-meta">
              <span className="card-dept-note">CSE • SEM 1</span>
              <span>PDF</span>
            </div>
            <h3 className="card-title">Engineering Mathematics</h3>
            <button className="dl-btn dl-btn-acid">
              <i className="fas fa-download"></i> Download
            </button>
          </div>

          <div className="note-card vis">
            <div className="card-meta">
              <span className="card-dept-note">CSE • SEM 1</span>
              <span>PDF</span>
            </div>
            <h3 className="card-title">Physics Fundamentals</h3>
            <button className="dl-btn dl-btn-acid">
              <i className="fas fa-download"></i> Download
            </button>
          </div>

          <div className="note-card vis">
            <div className="card-meta">
              <span className="card-dept-note">CSE • SEM 2</span>
              <span>PDF</span>
            </div>
            <h3 className="card-title">Digital Electronics</h3>
            <button className="dl-btn dl-btn-acid">
              <i className="fas fa-download"></i> Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
