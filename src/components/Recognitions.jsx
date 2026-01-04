import React from 'react';

function Recognitions() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#fafafa',
      zIndex: 10,
      isolation: 'isolate'
    },
    container: {
      maxWidth: '1100px',
      margin: '0 auto',
      padding: '0 1.5rem',
      width: '100%'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    titleUnderline: {
      position: 'relative',
      display: 'inline-block',
      paddingBottom: '0.5rem'
    },
    sectionTitle: {
      fontSize: '42px',
      fontWeight: '900',
      letterSpacing: '-1px',
      textTransform: 'uppercase',
      lineHeight: '1.2',
      marginBottom: '0.5rem',
      position: 'relative',
      display: 'inline-block',
      color: '#000000',
      textShadow: '2px 2px 0px rgba(0, 0, 0, 0.1), 4px 4px 0px rgba(0, 0, 0, 0.08), 6px 6px 0px rgba(0, 0, 0, 0.06), 8px 8px 0px rgba(0, 0, 0, 0.04), 10px 10px 20px rgba(0, 0, 0, 0.15)'
    },
    titleUnderlineAfter: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      width: '100%',
      height: '3px',
      background: '#ff6b35'
    },
    sectionIntro: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
      fontWeight: '300',
      maxWidth: '650px',
      margin: '0 auto 1.5rem'
    },
    recognitionGridWrapper: {
      padding: '0',
      marginTop: '30px'
    },
    recognitionGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px',
      maxWidth: '100%',
      margin: '0 auto',
      justifyContent: 'center'
    },
    recognitionCard: {
      background: '#ffffff',
      padding: '18px 14px',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      position: 'relative',
      flex: '1 1 calc(33.333% - 12px)',
      maxWidth: 'calc(33.333% - 12px)'
    },
    badge: {
      position: 'absolute',
      top: '0',
      left: '0',
      padding: '4px 10px',
      background: '#ff6b35',
      color: '#ffffff',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      borderRadius: '0',
      whiteSpace: 'nowrap',
      fontSize: '13px'
    },
    cardContent: {
      marginTop: '32px',
      width: '100%'
    },
    cardTitle: {
      fontWeight: '700',
      color: '#000',
      marginBottom: '6px',
      lineHeight: '1.35',
      textTransform: 'uppercase',
      letterSpacing: '-0.3px',
      fontSize: '15px'
    },
    cardDescription: {
      color: '#666',
      lineHeight: '1.5',
      fontWeight: '400',
      fontSize: '13px'
    },
    cardYear: {
      color: '#ff6b35',
      fontWeight: '700',
      fontSize: '14px',
      marginTop: '4px'
    }
  };

  const mediaQueryStyles = `
    /* Force black color for section title and remove gradient */
    #recognitions .section-title,
    section#recognitions .section-title {
      color: #000000 !important;
      background: none !important;
      -webkit-background-clip: unset !important;
      -webkit-text-fill-color: #000000 !important;
      background-clip: unset !important;
    }

    /* Prevent GSAP interference */
    #recognitions,
    #recognitions *,
    #recognitions .recognition-card {
      transform: none !important;
      will-change: auto !important;
    }

    .recognition-card:hover {
      transform: translateY(-6px) !important;
      border-color: #ff6b35;
    }

    @media (max-width: 1024px) {
      .recognition-grid {
        gap: 16px !important;
      }
      .recognition-card {
        flex: 1 1 calc(50% - 8px) !important;
        max-width: calc(50% - 8px) !important;
        padding: 16px 12px !important;
      }
      #recognitions .section-title {
        font-size: 36px !important;
      }
      .card-content {
        margin-top: 30px !important;
      }
    }

    @media (max-width: 768px) {
      #recognitions.section {
        padding: 50px 0 !important;
      }
      #recognitions .container {
        padding: 0 1rem !important;
      }
      #recognitions .section-title {
        font-size: 28px !important;
        margin-bottom: 0.4rem !important;
      }
      .title-underline {
        padding-bottom: 0.4rem !important;
      }
      .section-intro {
        font-size: 12px !important;
      }
      .recognition-grid-wrapper {
        margin-top: 25px !important;
      }
      .recognition-grid {
        gap: 12px !important;
      }
      .recognition-card {
        flex: 1 1 calc(50% - 6px) !important;
        max-width: calc(50% - 6px) !important;
        padding: 14px 10px !important;
        aspect-ratio: auto !important;
        min-height: auto !important;
      }
      .badge {
        padding: 3px 8px !important;
        font-size: 11px !important;
      }
      .card-content {
        margin-top: 28px !important;
      }
      .card-title {
        margin-bottom: 5px !important;
        font-size: 13px !important;
      }
      .card-description {
        font-size: 11px !important;
      }
      .card-year {
        font-size: 12px !important;
      }
    }

    @media (max-width: 576px) {
      #recognitions .container {
        padding: 0 0.75rem !important;
      }
      #recognitions .section-title {
        font-size: 24px !important;
        margin-bottom: 0.3rem !important;
      }
      .title-underline {
        padding-bottom: 0.3rem !important;
      }
      .section-intro {
        font-size: 11px !important;
        margin-bottom: 1rem !important;
      }
      .recognition-grid {
        gap: 10px !important;
      }
      .recognition-card {
        flex: 1 1 calc(50% - 5px) !important;
        max-width: calc(50% - 5px) !important;
        padding: 12px 10px 14px 10px !important;
        border-width: 1.5px !important;
        aspect-ratio: auto !important;
        min-height: auto !important;
      }
      .badge {
        padding: 3px 7px !important;
        font-size: 10px !important;
      }
      .card-content {
        margin-top: 26px !important;
      }
      .card-title {
        margin-bottom: 4px !important;
        font-size: 12px !important;
      }
      .card-description {
        font-size: 10px !important;
      }
      .card-year {
        font-size: 11px !important;
      }
    }

    @media (max-width: 400px) {
      #recognitions .container {
        padding: 0 0.5rem !important;
      }
      .recognition-grid {
        gap: 8px !important;
      }
      .recognition-card {
        flex: 1 1 calc(50% - 4px) !important;
        max-width: calc(50% - 4px) !important;
        padding: 10px 8px 12px 8px !important;
        aspect-ratio: auto !important;
        min-height: auto !important;
      }
      .badge {
        padding: 2px 6px !important;
        font-size: 9px !important;
      }
      .card-content {
        margin-top: 24px !important;
      }
    }
  `;

  const recognitions = [
    {
      badge: 'TOP 50',
      title: 'Institutions on Innovation Achievement',
      description: '& Top 4 Private Universities Selected from Gujarat',
      year: '2020',
      subtitle: 'Announced by Shri. M. Venkaiah Naidu, Honble Vice President of India'
    },
    {
      badge: 'BAND-PROMISING',
      title: 'One of the Top Universities in India',
      description: 'Category in the Atal Ranking of Institutions on Innovation Achievements',
      year: '2021',
      subtitle: 'An initiative of the Ministry of Education, Government of India'
    },
    {
      badge: '3.5/4 STARS',
      title: 'Institutions Innovation Council 3.0',
      description: 'Annual Performance in University Category',
      year: '2021',
      subtitle: 'Category awarded by Ministry of Education, Govt. Of India'
    },
    {
      badge: '5/5 STARS',
      title: 'Arihant School of Pharmacy & Bio-Research Institute',
      description: 'Gujarat State Institutional Rating Framework',
      year: '2024',
      subtitle: 'GSIRF-2024'
    }
  ];

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="recognitions" style={styles.section} className="section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline} className="title-underline">
              <h2 style={styles.sectionTitle} className="section-title">
                Recognitions & Rankings
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Celebrating excellence and achievement in innovation, education, and research
            </p>
          </div>

          {/* Recognition Cards Grid */}
          <div style={styles.recognitionGridWrapper} className="recognition-grid-wrapper">
            <div style={styles.recognitionGrid} className="recognition-grid">
              {recognitions.map((recognition, index) => (
                <div 
                  key={index} 
                  style={styles.recognitionCard} 
                  className="recognition-card"
                >
                  {/* Badge positioned at top-left corner */}
                  <div style={styles.badge} className="badge">
                    {recognition.badge}
                  </div>

                  {/* Content below badge */}
                  <div style={styles.cardContent} className="card-content">
                    <h4 style={styles.cardTitle} className="card-title">
                      {recognition.title}
                    </h4>
                    <p style={styles.cardDescription} className="card-description">
                      {recognition.description}
                    </p>
                    {recognition.subtitle && (
                      <p style={styles.cardDescription} className="card-description">
                        {recognition.subtitle}
                      </p>
                    )}
                    <div style={styles.cardYear} className="card-year">
                      {recognition.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Recognitions;
