import React from 'react';
import '../styles/Facilities.css';

function Facilities() {
  return (
    <section id="facilities" className="section facilities-section">
      <div className="container">
        <h2 className="section-title">World-Class Facilities</h2>
        <div className="facilities-grid">
          <div className="facility-card">
            <div className="facility-icon">🚀</div>
            <h4>Innovation Labs</h4>
            <p>State-of-the-art labs for prototyping and research</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon">💻</div>
            <h4>Tech Infrastructure</h4>
            <p>Advanced computing facilities with quantum computing access</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon">📚</div>
            <h4>Digital Library</h4>
            <p>Extensive collection of research materials and journals</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon">🏢</div>
            <h4>Incubation Center</h4>
            <p>Dedicated spaces for startup development and mentorship</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon">🎯</div>
            <h4>Skill Development</h4>
            <p>Workshops and training programs with industry experts</p>
          </div>
          <div className="facility-card">
            <div className="facility-icon">🌐</div>
            <h4>Global Collaborations</h4>
            <p>Partnerships with leading international institutions</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facilities;
