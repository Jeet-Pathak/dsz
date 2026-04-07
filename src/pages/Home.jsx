import '../styles/pages.css';

export default function Home() {
  return (
    <section className="page active">
      <div className="hero">
        <div className="hero-tag">
          <div className="hero-tag-line"></div>
          <div className="hero-tag-dot"></div>
          System Online — Academic Resource Hub
          <div className="hero-tag-dot"></div>
          <div className="hero-tag-line"></div>
        </div>
        <div className="tw-line">_LOADING RESOURCES...<span className="tw-cursor">▌</span></div>
        <h1 className="hero-title">
          <span className="line1">Debkanta</span>
          <span className="line2">Study</span>
          <span className="line3" data-text="Zone">Zone</span>
        </h1>
        <div className="hero-sub">
          <p>Engineering excellence through shared knowledge. Curated resources, organized brilliantly.</p>
        </div>
        <div className="hero-actions">
          <button className="btn-acid">
            <span><i className="fas fa-database"></i> &nbsp;Explore Notes</span>
          </button>
          <button className="btn-ghost">
            <i className="fas fa-users"></i> Meet the Team
          </button>
        </div>
        <div className="hero-stats">
          <div className="hstat">
            <div className="hstat-n">134+</div>
            <div className="hstat-l">Resources</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">1290+</div>
            <div className="hstat-l">Students Helped</div>
          </div>
          <div className="hstat">
            <div className="hstat-n">4+</div>
            <div className="hstat-l">Departments</div>
          </div>
        </div>
        <div className="hero-watermark">DSZ</div>
      </div>

      <div className="sec">
        <div className="sec-label">Quick Navigation</div>
        <h2 className="sec-heading">Navigate <span className="hi">the Zone</span></h2>
        <div className="qgrid">
          <div className="qcard" style={{'--c': 'var(--acid)'}}>
            <div className="qcard-ico"><i className="fas fa-book-open"></i></div>
            <div className="qcard-name">Study Notes</div>
            <div className="qcard-desc">PDF notes filtered by dept, year & semester</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--electric)'}}>
            <div className="qcard-ico"><i className="fas fa-file-alt"></i></div>
            <div className="qcard-name">PYQ Database</div>
            <div className="qcard-desc">Previous year question papers, searchable</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--warm)'}}>
            <div className="qcard-ico"><i className="fas fa-clipboard-list"></i></div>
            <div className="qcard-name">Organizer</div>
            <div className="qcard-desc">Structured study planners & schedules</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--acid2)'}}>
            <div className="qcard-ico"><i className="fab fa-youtube"></i></div>
            <div className="qcard-name">Video Lectures</div>
            <div className="qcard-desc">Topic-organized YouTube lecture library</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--violet)'}}>
            <div className="qcard-ico"><i className="fas fa-question-circle"></i></div>
            <div className="qcard-name">Doubt Zone</div>
            <div className="qcard-desc">Ask doubts, get answers from admins</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--violet)'}}>
            <div className="qcard-ico"><i className="fas fa-lightbulb"></i></div>
            <div className="qcard-name">Suggestions</div>
            <div className="qcard-desc">Tips & updates from DSZ admins</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': '#25d366'}}>
            <div className="qcard-ico"><i className="fab fa-whatsapp"></i></div>
            <div className="qcard-name">WhatsApp</div>
            <div className="qcard-desc">Join department communication groups</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': '#2ca5e0'}}>
            <div className="qcard-ico"><i className="fab fa-telegram"></i></div>
            <div className="qcard-name">Telegram</div>
            <div className="qcard-desc">Official announcement channels</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>

          <div className="qcard" style={{'--c': 'var(--violet)'}}>
            <div className="qcard-ico"><i className="fas fa-university"></i></div>
            <div className="qcard-name">GATE Database</div>
            <div className="qcard-desc">CSE & DA — Magical syllabus & notes portal</div>
            <div className="qcard-arrow"><span>Open</span><i className="fas fa-arrow-right"></i></div>
          </div>
        </div>
      </div>
    </section>
  );
}
