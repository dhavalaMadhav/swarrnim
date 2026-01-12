import React from 'react';

function Startups() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#ffffff'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    topLabel: {
      fontSize: '36px',
      fontWeight: '400',
      color: '#c53030',
      letterSpacing: '0.5px',
      marginBottom: '20px',
      textTransform: 'none',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1.3'
    },
    sectionTitle: {
      fontSize: '120px',
      fontWeight: '900',
      letterSpacing: '8px',
      textTransform: 'uppercase',
      lineHeight: '1',
      marginBottom: '3rem',
      position: 'relative',
      display: 'inline-block',
      color: 'rgba(0, 0, 0, 0.12)',
      fontFamily: '"Inter", system-ui, sans-serif',
      textShadow: 'none',
      WebkitTextStroke: '2px rgba(0, 0, 0, 0.35)',
      textStroke: '2px rgba(0, 0, 0, 0.35)',
      WebkitTextFillColor: 'rgba(0, 0, 0, 0.12)'
    },
    achievementsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '50px 60px',
      marginTop: '60px'
    },
    achievementItem: {
      display: 'flex',
      gap: '20px',
      alignItems: 'flex-start',
      transition: 'all 0.3s ease'
    },
    iconWrapper: {
      minWidth: '50px',
      width: '50px',
      height: '50px',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      flexShrink: 0
    },
    icon: {
      width: '50px',
      height: '50px',
      stroke: '#2563eb',
      strokeWidth: '2',
      fill: 'none'
    },
    achievementContent: {
      flex: 1
    },
    achievementNumber: {
      fontSize: '36px',
      fontWeight: '900',
      color: '#2563eb',
      marginBottom: '6px',
      lineHeight: '1',
      letterSpacing: '-1px',
      fontFamily: '"Inter", system-ui, sans-serif'
    },
    achievementTitle: {
      fontSize: '16px',
      fontWeight: '700',
      color: '#000',
      marginBottom: '6px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      lineHeight: '1.3',
      fontFamily: '"Inter", system-ui, sans-serif'
    },
    achievementDescription: {
      fontSize: '13px',
      color: '#666',
      lineHeight: '1.6',
      fontWeight: '400',
      fontFamily: '"Inter", system-ui, sans-serif'
    }
  };


  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');


    /* Darker outline with darker fill */
    #startups .section-title {
      color: rgba(0, 0, 0, 0.12) !important;
      text-shadow: none !important;
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      background: none !important;
    }


    .achievement-item:hover .icon-wrapper {
      transform: scale(1.1);
    }


    .achievement-item:hover .icon {
      stroke: #60a5fa;
    }


    @media (max-width: 1200px) {
      .top-label {
        font-size: 32px !important;
      }
      #startups .section-title {
        font-size: 100px !important;
        letter-spacing: 6px !important;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .achievements-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 40px 50px !important;
      }
    }


    @media (max-width: 768px) {
      #startups.section {
        padding: 60px 0 !important;
      }
      #startups .container {
        padding: 0 1rem !important;
      }
      .top-label {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      #startups .section-title {
        font-size: 70px !important;
        letter-spacing: 4px !important;
        margin-bottom: 2.5rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .achievements-grid {
        grid-template-columns: 1fr !important;
        gap: 35px !important;
        margin-top: 50px !important;
      }
      .achievement-item {
        gap: 18px !important;
      }
      .icon-wrapper {
        min-width: 45px !important;
        width: 45px !important;
        height: 45px !important;
      }
      .icon {
        width: 45px !important;
        height: 45px !important;
      }
      .achievement-number {
        font-size: 32px !important;
      }
      .achievement-title {
        font-size: 15px !important;
      }
      .achievement-description {
        font-size: 12px !important;
      }
    }


    @media (max-width: 576px) {
      .top-label {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      #startups .section-title {
        font-size: 50px !important;
        letter-spacing: 3px !important;
        margin-bottom: 2rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .achievements-grid {
        gap: 30px !important;
      }
      .achievement-item {
        gap: 15px !important;
      }
      .icon-wrapper {
        min-width: 40px !important;
        width: 40px !important;
        height: 40px !important;
      }
      .icon {
        width: 40px !important;
        height: 40px !important;
      }
      .achievement-number {
        font-size: 28px !important;
      }
      .achievement-title {
        font-size: 14px !important;
      }
      .achievement-description {
        font-size: 11px !important;
      }
    }


    @media (max-width: 400px) {
      .top-label {
        font-size: 20px !important;
      }
      #startups .section-title {
        font-size: 42px !important;
        letter-spacing: 2px !important;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .achievement-item {
        gap: 12px !important;
      }
      .icon-wrapper {
        min-width: 38px !important;
        width: 38px !important;
        height: 38px !important;
      }
      .icon {
        width: 38px !important;
        height: 38px !important;
      }
      .achievement-number {
        font-size: 26px !important;
      }
      .achievement-title {
        font-size: 13px !important;
      }
      .achievement-description {
        font-size: 10px !important;
      }
    }
  `;


  const achievements = [
    {
      iconPath: 'M13 10V3L4 14h7v7l9-11h-7z', // Lightning bolt - Startups
      number: '75+',
      title: 'Active Startups',
      description: 'Student-led ventures actively operating and growing across diverse sectors including technology, healthcare, and sustainability.'
    },
    {
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z', // Lightbulb - Patents
      number: '27+',
      title: 'Patents Filed',
      description: 'Innovative ideas converted into intellectual property, with students publishing and protecting their groundbreaking inventions.'
    },
    {
      iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Currency - Funding
      number: '₹2.5Cr+',
      title: 'Funding Secured',
      description: 'Students successfully raised capital from angel investors, VCs, and government grants to scale their ventures.'
    },
    {
      iconPath: 'M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4', // Package - Products
      number: '150+',
      title: 'Products Launched',
      description: 'Market-ready products and services developed, tested, and successfully launched by student entrepreneurs.'
    },
    {
      iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 4 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', // Briefcase - Jobs
      number: '500+',
      title: 'Jobs Created',
      description: 'Direct employment opportunities generated by student startups, contributing to economic growth and innovation ecosystem.'
    },
    {
      iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z', // Users - Training
      number: '1000+',
      title: 'Students Trained',
      description: 'Aspiring entrepreneurs equipped with essential skills through workshops, bootcamps, and hands-on mentorship programs.'
    }
  ];


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="startups" style={styles.section} className="section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.topLabel} className="top-label">
              Where Startups Become Success Stories
            </div>
            <h2 style={styles.sectionTitle} className="section-title">
              STARTUPS & INNOVATION
            </h2>
          </div>


          {/* Achievements Grid */}
          <div style={styles.achievementsGrid} className="achievements-grid">
            {achievements.map((item, index) => (
              <div key={index} style={styles.achievementItem} className="achievement-item">
                <div style={styles.iconWrapper} className="icon-wrapper">
                  <svg style={styles.icon} className="icon" viewBox="0 0 24 24">
                    <path d={item.iconPath} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div style={styles.achievementContent} className="achievement-content">
                  <div style={styles.achievementNumber} className="achievement-number">
                    {item.number}
                  </div>
                  <h3 style={styles.achievementTitle} className="achievement-title">
                    {item.title}
                  </h3>
                  <p style={styles.achievementDescription} className="achievement-description">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
export default Startups;
