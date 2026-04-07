export default function Lectures() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Video Content</div>
        <h1 className="page-banner-title">Video <span className="accent">Lectures</span></h1>
        <p className="page-banner-sub">Curated YouTube lectures organized by topic</p>
      </div>

      <div className="lec-wrap">
        <div className="lec-filter">
          <div className="lec-filter-row">
            <span className="lec-stream-label">STREAM:</span>
            <div className="stream-chip on">CSE</div>
            <div className="stream-chip">ECE</div>
            <div className="stream-chip">MECH</div>
          </div>
          
          <div className="lec-stream-row">
            <span className="lec-stream-label">SUBJECT:</span>
            <div className="subject-selector">
              <div className="subj-chip on">Mathematics</div>
              <div className="subj-chip">Physics</div>
              <div className="subj-chip">Chemistry</div>
            </div>
          </div>
        </div>

        <div className="lec-content">
          <div className="topic-accordion open">
            <div className="topic-accordion-hdr">
              <div className="topic-acc-icon"></div>
              <span className="topic-acc-name">Calculus - Derivatives</span>
              <span className="topic-acc-count">12 videos</span>
              <i className="fas fa-chevron-down topic-acc-chevron"></i>
            </div>
            <div className="topic-accordion-body">
              <div className="video-grid">
                <div className="video-card">
                  <div className="video-thumb">
                    <div className="video-thumb-blank">
                      <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="video-play">
                      <div className="video-play-btn">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                  </div>
                  <div className="video-info">
                    <div className="video-tag">PART 01</div>
                    <div className="video-title">Introduction to Derivatives</div>
                    <div className="video-meta-txt">12:45 • Jeet Pathak</div>
                  </div>
                </div>

                <div className="video-card">
                  <div className="video-thumb">
                    <div className="video-thumb-blank">
                      <i className="fas fa-play-circle"></i>
                    </div>
                    <div className="video-play">
                      <div className="video-play-btn">
                        <i className="fas fa-play"></i>
                      </div>
                    </div>
                  </div>
                  <div className="video-info">
                    <div className="video-tag">PART 02</div>
                    <div className="video-title">Power Rule & Chain Rule</div>
                    <div className="video-meta-txt">18:32 • Jeet Pathak</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
