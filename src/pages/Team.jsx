export default function Team() {
  const admins = [
    { id: 'a1', name: 'Soumaditya Jamaddar', role: 'Co Founder', img: 'https://image2url.com/r2/default/images/1774861465467-d494acd5-22d8-4961-8b33-ca080f4a22d1.jpg' },
    { id: 'a2', name: 'Debkanta Maity', role: 'Founder', img: 'https://image2url.com/r2/default/images/1775110002566-01c37acd-5720-4cc4-a73f-3643e26fc1cb.jpg' },
    { id: 'a3', name: 'Sumit Mondol', role: 'Co Founder', img: 'https://image2url.com/r2/default/images/1774643214526-ddb6f12b-2211-4dff-8255-68dd13b7cef3.jpg' },
    { id: 'a4', name: 'Priyangsu Das', role: 'Head Admin', img: 'https://image2url.com/r2/default/images/1774695175635-f5b1f310-84fb-4c81-96d0-4e66eb8bab79.jpg' },
  ];

  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Team Directory</div>
        <h1 className="page-banner-title"><span className="accent">DSZ</span> <span className="stroke">Leadership</span></h1>
        <p className="page-banner-sub">Administrators & core members — Est. 2025</p>
      </div>

      <div className="sec">
        <div className="sec-label">Administration</div>
        <h2 className="sec-heading">DSZ <span className="hi3">Admins</span></h2>
        <div className="admin-grid">
          {admins.map((admin) => (
            <div key={admin.id} className="admin-card">
              <div className="admin-ava">
                <img src={admin.img} alt={admin.name} />
              </div>
              <div className="admin-name">{admin.name}</div>
              <div className="admin-role">{admin.role}</div>
              <button className="admin-cta">View Profile</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
