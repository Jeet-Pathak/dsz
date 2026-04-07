import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

export default function DoubtZone() {
  const [question, setQuestion] = useState('');
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmitDoubt = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await addDoc(collection(db, 'doubts'), {
        question,
        name,
        timestamp: new Date(),
        answered: false,
      });
      setQuestion('');
      setName('');
      alert('Doubt posted successfully!');
    } catch (error) {
      console.error('Error posting doubt:', error);
      alert('Error posting doubt. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page active">
      <div className="page-banner">
        <div className="page-banner-kicker"><div className="kicker-line"></div>Student Support</div>
        <h1 className="page-banner-title">Doubt <span className="accent">Zone</span></h1>
        <p className="page-banner-sub">Post your questions and get answers from admins</p>
      </div>

      <div className="doubt-wrap">
        <div className="doubt-form">
          <form onSubmit={handleSubmitDoubt}>
            <div className="form-group">
              <label className="form-lbl">YOUR NAME</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label className="form-lbl">YOUR DOUBT</label>
              <textarea 
                className="form-input form-textarea" 
                placeholder="Describe your doubt in detail..."
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                required
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={loading}
            >
              {loading ? 'POSTING...' : 'POST DOUBT'}
            </button>
          </form>
        </div>

        <h3 style={{ color: 'var(--electric)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px' }}>
          Recent Doubts
        </h3>

        <div className="doubt-card">
          <div className="dq-meta">
            <span className="dq-name">Rahul Kumar</span>
            <span>2 hours ago</span>
          </div>
          <p className="dq-question">How to solve differential equations using L transform?</p>
          <div className="dq-subj-tag">MATHEMATICS</div>
          <div className="ans-section">
            <div className="ans-label">ANSWER</div>
            <p className="ans-text">Use the property that L{f'(t)} = sF(s) - f(0) and apply it systematically...</p>
          </div>
          <span className="badge badge-ans"><i className="fas fa-check"></i> ANSWERED</span>
        </div>

        <div className="doubt-card">
          <div className="dq-meta">
            <span className="dq-name">Priya Singh</span>
            <span>5 hours ago</span>
          </div>
          <p className="dq-question">What's the difference between static and dynamic binding in OOP?</p>
          <div className="dq-subj-tag">PROGRAMMING</div>
          <div className="ans-section">
            <p className="no-ans">Answer pending from admins...</p>
          </div>
          <span className="badge badge-pend"><i className="fas fa-clock"></i> PENDING</span>
        </div>
      </div>
    </section>
  );
}
