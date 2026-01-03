import React from 'react';
import '../styles/Placements.css';

function Placements() {
  return (
    <section id="placements" className="section placements-section">
      <div className="container">
        <h2 className="section-title">Placements</h2>
        <div className="placement-highlights">
          <div className="placement-stat">
            <h3>100%</h3>
            <p>Placement Assistance</p>
            <span>In Last 6 Years</span>
          </div>
          <div className="placement-stat">
            <h3>84 LPA</h3>
            <p>Highest National Package</p>
          </div>
          <div className="placement-stat">
            <h3>48 LPA</h3>
            <p>Highest International Package</p>
          </div>
          <div className="placement-stat">
            <h3>400+</h3>
            <p>Companies</p>
          </div>
        </div>
        <div className="company-logos">
          <div className="company-tag">Google</div>
          <div className="company-tag">Microsoft</div>
          <div className="company-tag">IBM</div>
          <div className="company-tag">TCS</div>
          <div className="company-tag">Infosys</div>
          <div className="company-tag">Accenture</div>
          <div className="company-tag">Reliance</div>
          <div className="company-tag">Unilever</div>
          <div className="company-tag">L&T Infotech</div>
          <div className="company-tag">Tech Mahindra</div>
        </div>
      </div>
    </section>
  );
}

export default Placements;
