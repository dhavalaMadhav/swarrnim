import React from 'react';


function CampusLife() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#ffffff',
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
    campusFeaturesWrapper: {
      padding: '0',
      marginTop: '30px'
    },
    campusFeatures: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '18px',
      maxWidth: '100%',
      margin: '0 auto',
      justifyContent: 'center'
    },
    campusFeature: {
      background: '#fafafa',
      padding: '30px 24px',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
      position: 'relative',
      flex: '1 1 calc(50% - 9px)',
      maxWidth: 'calc(50% - 9px)'
    },
    featureTitle: {
      fontSize: '20px',
      fontWeight: '600',
      color: '#000000',
      marginBottom: '12px',
      lineHeight: '1.3',
      textTransform: 'uppercase',
      letterSpacing: '-0.3px'
    },
    featureDescription: {
      fontSize: '14px',
      color: '#666',
      lineHeight: '1.6',
      fontWeight: '400'
    }
  };


  const mediaQueryStyles = `
    /* Force black color for section title and remove gradient */
    #campus .section-title,
    section#campus .section-title {
      color: #000000 !important;
      background: none !important;
      -webkit-background-clip: unset !important;
      -webkit-text-fill-color: #000000 !important;
      background-clip: unset !important;
    }


    /* Prevent GSAP interference */
    #campus,
    #campus *,
    #campus .campus-feature {
      transform: none !important;
      will-change: auto !important;
    }


    .campus-feature:hover {
      transform: translateY(-6px) !important;
      border-color: #ff6b35;
      background: #ffffff;
    }


    @media (max-width: 1024px) {
      .campus-features {
        gap: 16px !important;
      }
      .campus-feature {
        flex: 1 1 calc(50% - 8px) !important;
        max-width: calc(50% - 8px) !important;
        padding: 28px 22px !important;
      }
      #campus .section-title {
        font-size: 36px !important;
      }
      .feature-title {
        font-size: 19px !important;
      }
    }


    @media (max-width: 768px) {
      #campus.section {
        padding: 50px 0 !important;
      }
      #campus .container {
        padding: 0 1rem !important;
      }
      #campus .section-title {
        font-size: 28px !important;
        margin-bottom: 0.4rem !important;
      }
      .title-underline {
        padding-bottom: 0.4rem !important;
      }
      .section-intro {
        font-size: 12px !important;
      }
      .campus-features-wrapper {
        margin-top: 25px !important;
      }
      .campus-features {
        gap: 12px !important;
      }
      .campus-feature {
        flex: 1 1 100% !important;
        max-width: 100% !important;
        padding: 24px 18px !important;
      }
      .feature-title {
        font-size: 18px !important;
        margin-bottom: 10px !important;
      }
      .feature-description {
        font-size: 13px !important;
      }
    }


    @media (max-width: 576px) {
      #campus .container {
        padding: 0 0.75rem !important;
      }
      #campus .section-title {
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
      .campus-features {
        gap: 10px !important;
      }
      .campus-feature {
        padding: 20px 16px !important;
        border-width: 1.5px !important;
      }
      .feature-title {
        font-size: 17px !important;
        margin-bottom: 8px !important;
      }
      .feature-description {
        font-size: 12px !important;
      }
    }


    @media (max-width: 400px) {
      #campus .container {
        padding: 0 0.5rem !important;
      }
      .campus-features {
        gap: 8px !important;
      }
      .campus-feature {
        padding: 18px 14px !important;
      }
      .feature-title {
        font-size: 16px !important;
      }
      .feature-description {
        font-size: 11px !important;
      }
    }
  `;


  const campusFeatures = [
    {
      title: 'Diverse Programs',
      description: 'Engineering, Management, Law, Design, Health Sciences, and more across 10+ disciplines'
    },
    {
      title: 'Entrepreneurial Ecosystem',
      description: 'Mentorship from successful entrepreneurs and access to funding opportunities'
    },
    {
      title: 'Cultural Activities',
      description: 'Annual fests, tech competitions, sports events, and student clubs'
    },
    {
      title: 'Industry Exposure',
      description: 'Regular workshops, seminars, and internships with top companies'
    }
  ];


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="campus" style={styles.section} className="section campus-section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline} className="title-underline">
              <h2 style={styles.sectionTitle} className="section-title">
                Campus Life
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Experience a vibrant campus culture that nurtures innovation, creativity, and personal growth
            </p>
          </div>


          {/* Campus Features Grid */}
          <div style={styles.campusFeaturesWrapper} className="campus-features-wrapper">
            <div style={styles.campusFeatures} className="campus-features">
              {campusFeatures.map((feature, index) => (
                <div 
                  key={index} 
                  style={styles.campusFeature} 
                  className="campus-feature"
                >
                  <h4 style={styles.featureTitle} className="feature-title">
                    {feature.title}
                  </h4>
                  <p style={styles.featureDescription} className="feature-description">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}


export default CampusLife;
