export default function Gate() {
  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Competitive Exams</div>
        <h1 className="page-banner-title">GATE <span className="accent">Database</span></h1>
        <p className="page-banner-sub">Curated resources for CSE and Data Analytics GATE prep</p>
      </div>

      <div className="sec">
        <div className="gate-selection">
          <div className="floating-label cse-label">CSE</div>
          <div className="floating-label da-label">DA</div>
        </div>

        <h2 className="sec-heading">GATE <span className="hi">Topics</span></h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
          <div className="gate-topic-card">
            <h3 style={{ color: 'var(--electric)', marginBottom: '12px', textTransform: 'uppercase' }}>
              Data Structures
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              Arrays, Linked Lists, Stacks, Queues, Trees, Graphs, Hashing, and advanced data structures.
            </p>
          </div>

          <div className="gate-topic-card">
            <h3 style={{ color: 'var(--electric)', marginBottom: '12px', textTransform: 'uppercase' }}>
              Algorithms
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              Sorting, Searching, Dynamic Programming, Greedy, Graph algorithms with complexity analysis.
            </p>
          </div>

          <div className="gate-topic-card">
            <h3 style={{ color: 'var(--electric)', marginBottom: '12px', textTransform: 'uppercase' }}>
              Operating Systems
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              Process Management, Memory Management, Deadlocks, File Systems, and Scheduling algorithms.
            </p>
          </div>

          <div className="gate-topic-card">
            <h3 style={{ color: 'var(--electric)', marginBottom: '12px', textTransform: 'uppercase' }}>
              Database
            </h3>
            <p style={{ color: 'var(--muted)', lineHeight: '1.6' }}>
              Normalization, SQL, ER Model, Transactions, and advanced database concepts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
