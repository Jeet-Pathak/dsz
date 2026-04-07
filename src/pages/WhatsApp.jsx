export default function WhatsApp() {
  const groups = [
    { name: 'CSE General', desc: 'General discussions and announcements for CSE' },
    { name: 'ECE Materials', desc: 'ECE study materials and doubts' },
    { name: 'Mechanical Eng', desc: 'MECH department resources' },
  ];

  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Communication</div>
        <h1 className="page-banner-title"><i className="fab fa-whatsapp" style={{ marginRight: '12px' }}></i>WhatsApp Groups</h1>
        <p className="page-banner-sub">Join our active WhatsApp communities</p>
      </div>

      <div className="comm-grid">
        {groups.map((group, i) => (
          <div key={i} className="comm-panel">
            <div className="comm-title">
              <i className="fas fa-users"></i> {group.name}
            </div>
            <p style={{ color: 'var(--muted)', marginBottom: '20px' }}>{group.desc}</p>
            <button className="btn-acid" style={{ width: '100%' }}>
              <i className="fab fa-whatsapp"></i> Join Group
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
