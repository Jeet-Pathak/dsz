export default function Telegram() {
  const channels = [
    { name: 'DSZ Announcements', desc: 'Official announcements and updates' },
    { name: 'CSE Resources', desc: 'Important CSE study materials' },
    { name: 'Event Updates', desc: 'Upcoming contests and events' },
  ];

  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Channels</div>
        <h1 className="page-banner-title"><i className="fab fa-telegram" style={{ marginRight: '12px' }}></i>Telegram Channels</h1>
        <p className="page-banner-sub">Stay updated with our official Telegram channels</p>
      </div>

      <div className="comm-grid">
        {channels.map((channel, i) => (
          <div key={i} className="comm-panel violet">
            <div className="comm-title">
              <i className="fab fa-telegram"></i> {channel.name}
            </div>
            <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>{channel.desc}</p>
            <button className="btn-acid" style={{ width: '100%' }}>
              <i className="fab fa-telegram"></i> Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
