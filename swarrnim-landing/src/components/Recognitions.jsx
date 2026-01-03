import React from 'react';
import '../styles/Recognitions.css';

function Recognitions() {
  return (
    <section id="recognitions" className="section recognitions-section">
      <div className="container">
        <h2 className="section-title">Recognitions & Rankings</h2>
        <div className="recognition-grid">
          <div className="recognition-card">
            <div className="badge">TOP 4</div>
            <h4>Private Universities in Gujarat</h4>
            <p>Ranked among top 4 private universities in Gujarat</p>
          </div>
          <div className="recognition-card">
            <div className="badge">TOP 50</div>
            <h4>ARIIA Ranking 2020</h4>
            <p>Institutions on Innovation Achievement by Ministry of Education</p>
          </div>
          <div className="recognition-card">
            <div className="badge">PROMISING</div>
            <h4>ARIIA 2021</h4>
            <p>Band-Promising Category by Ministry of Education</p>
          </div>
          <div className="recognition-card">
            <div className="badge">3.5/4 ★</div>
            <h4>Innovation Council 3.0</h4>
            <p>Annual Performance Rating 2020-21</p>
          </div>
          <div className="recognition-card">
            <div className="badge">5/5 ★</div>
            <h4>GSIRF 2024</h4>
            <p>Arihant School of Pharmacy & Bio-Research Institute</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Recognitions;
