import React from 'react';

function Placements() {
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
    placementHighlights: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
      marginBottom: '50px',
      marginTop: '30px',
      maxWidth: '900px',
      margin: '30px auto 50px'
    },
    packageCard: {
      position: 'relative',
      background: 'linear-gradient(135deg, #1e3a5f 0%, #2d5a8a 100%)',
      padding: '50px 30px 40px',
      textAlign: 'center',
      clipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
      WebkitClipPath: 'polygon(0 0, 85% 0, 100% 15%, 100% 100%, 15% 100%, 0 85%)',
      transition: 'all 0.3s ease',
      overflow: 'visible'
    },
    packageCardGreen: {
      background: 'linear-gradient(135deg, #5a7d3a 0%, #6d9147 100%)'
    },
    packageHeaderBox: {
      position: 'absolute',
      top: '-5px',
      left: '50%',
      transform: 'translateX(-50%)',
      background: '#ffffff',
      padding: '12px 40px',
      border: '4px solid currentColor',
      zIndex: 2,
      clipPath: 'polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)',
      WebkitClipPath: 'polygon(0 0, 92% 0, 100% 25%, 100% 100%, 8% 100%, 0 75%)'
    },
    packageHeaderBoxBlue: {
      borderColor: '#1e3a5f'
    },
    packageHeaderBoxGreen: {
      borderColor: '#5a7d3a'
    },
    packageHeaderText: {
      fontSize: '36px',
      fontWeight: '900',
      lineHeight: '1',
      letterSpacing: '-2px',
      margin: 0
    },
    packageHeaderTextBlue: {
      color: '#1e3a5f'
    },
    packageHeaderTextGreen: {
      color: '#5a7d3a'
    },
    packageLabel: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#ffffff',
      textTransform: 'uppercase',
      letterSpacing: '1px',
      marginTop: '15px',
      lineHeight: '1.3'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '18px',
      marginBottom: '50px',
      maxWidth: '600px',
      margin: '0 auto 50px'
    },
    placementStat: {
      background: '#fafafa',
      padding: '30px 25px',
      textAlign: 'center',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease'
    },
    statNumber: {
      fontSize: '38px',
      fontWeight: '900',
      color: '#ff6b35',
      marginBottom: '10px',
      lineHeight: '1',
      letterSpacing: '-1px'
    },
    statLabel: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#000',
      marginBottom: '5px',
      textTransform: 'uppercase',
      letterSpacing: '0.5px'
    },
    statSubtext: {
      fontSize: '12px',
      color: '#666',
      fontWeight: '400'
    },
    companiesSection: {
      marginTop: '50px',
      padding: '0'
    },
    companiesHeader: {
      fontSize: '24px',
      fontWeight: '800',
      color: '#000',
      textAlign: 'center',
      marginBottom: '30px',
      textTransform: 'uppercase',
      letterSpacing: '-0.5px'
    },
    carouselContainer: {
      position: 'relative',
      overflow: 'hidden',
      padding: '20px 0'
    },
    carouselTrack: {
      display: 'flex',
      overflowX: 'auto',
      scrollSnapType: 'x mandatory',
      scrollBehavior: 'smooth',
      gap: '18px',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      padding: '10px 5px'
    },
    carouselSlide: {
      minWidth: '100%',
      scrollSnapAlign: 'start',
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '18px',
      flexShrink: 0
    },
    companyCard: {
      background: '#fafafa',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      minHeight: '120px',
      maxHeight: '120px',
      position: 'relative'
    },
    companyLogo: {
      maxWidth: '100%',
      maxHeight: '80px',
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
      transition: 'all 0.3s ease'
    },
    companyName: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#000',
      textAlign: 'center',
      letterSpacing: '-0.3px',
      textTransform: 'uppercase'
    },
    scrollIndicator: {
      display: 'flex',
      justifyContent: 'center',
      gap: '8px',
      marginTop: '25px'
    },
    dot: {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: '#ddd',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    dotActive: {
      width: '30px',
      borderRadius: '5px',
      background: '#ff6b35'
    }
  };

  const mediaQueryStyles = `
    /* Force black color for section title */
    #placements .section-title,
    section#placements .section-title {
      color: #000000 !important;
      background: none !important;
      -webkit-background-clip: unset !important;
      -webkit-text-fill-color: #000000 !important;
      background-clip: unset !important;
    }

    /* Prevent GSAP interference */
    #placements,
    #placements * {
      transform: none !important;
      will-change: auto !important;
    }

    .carousel-track::-webkit-scrollbar {
      display: none;
    }

    .placement-stat:hover {
      transform: translateY(-6px) !important;
      border-color: #ff6b35;
      background: #ffffff;
    }

    .package-card:hover {
      transform: translateY(-8px) scale(1.02) !important;
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.3);
    }

    .company-card:hover {
      border-color: #ff6b35;
      background: #fff;
    }

    .company-card:hover .company-logo {
      transform: scale(1.08);
    }

    .dot:hover {
      background: #ff8c66;
    }

    @media (max-width: 1024px) {
      .placement-highlights {
        max-width: 700px !important;
      }
      #placements .section-title {
        font-size: 36px !important;
      }
      .package-header-text {
        font-size: 32px !important;
      }
      .package-label {
        font-size: 16px !important;
      }
      .company-logo {
        max-height: 70px !important;
      }
    }

    @media (max-width: 768px) {
      #placements.section {
        padding: 50px 0 !important;
      }
      #placements .container {
        padding: 0 1rem !important;
      }
      #placements .section-title {
        font-size: 28px !important;
        margin-bottom: 0.4rem !important;
      }
      .title-underline {
        padding-bottom: 0.4rem !important;
      }
      .section-intro {
        font-size: 12px !important;
      }
      .placement-highlights {
        grid-template-columns: 1fr !important;
        gap: 30px !important;
        margin: 25px auto 40px !important;
      }
      .package-card {
        padding: 45px 25px 35px !important;
      }
      .package-header-box {
        padding: 10px 35px !important;
        border-width: 3px !important;
      }
      .package-header-text {
        font-size: 30px !important;
      }
      .package-label {
        font-size: 15px !important;
      }
      .stats-grid {
        gap: 14px !important;
        margin-bottom: 40px !important;
      }
      .placement-stat {
        padding: 25px 20px !important;
      }
      .stat-number {
        font-size: 32px !important;
      }
      .stat-label {
        font-size: 13px !important;
      }
      .stat-subtext {
        font-size: 11px !important;
      }
      .companies-section {
        margin-top: 35px !important;
      }
      .companies-header {
        font-size: 20px !important;
        margin-bottom: 25px !important;
      }
      .carousel-slide {
        gap: 12px !important;
      }
      .company-card {
        padding: 18px 15px !important;
        min-height: 100px !important;
        max-height: 100px !important;
      }
      .company-logo {
        max-height: 60px !important;
      }
    }

    @media (max-width: 576px) {
      #placements .container {
        padding: 0 0.75rem !important;
      }
      #placements .section-title {
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
      .placement-highlights {
        gap: 25px !important;
        margin: 20px auto 35px !important;
      }
      .package-card {
        padding: 40px 20px 30px !important;
      }
      .package-header-box {
        padding: 8px 30px !important;
        border-width: 3px !important;
      }
      .package-header-text {
        font-size: 26px !important;
      }
      .package-label {
        font-size: 13px !important;
      }
      .stats-grid {
        gap: 12px !important;
      }
      .placement-stat {
        padding: 22px 18px !important;
        border-width: 1.5px !important;
      }
      .stat-number {
        font-size: 28px !important;
      }
      .stat-label {
        font-size: 12px !important;
      }
      .stat-subtext {
        font-size: 10px !important;
      }
      .companies-header {
        font-size: 18px !important;
      }
      .carousel-slide {
        gap: 10px !important;
      }
      .company-card {
        padding: 15px 12px !important;
        min-height: 85px !important;
        max-height: 85px !important;
        border-width: 1.5px !important;
      }
      .company-logo {
        max-height: 50px !important;
      }
    }

    @media (max-width: 400px) {
      #placements .container {
        padding: 0 0.5rem !important;
      }
      .placement-highlights {
        gap: 20px !important;
      }
      .package-card {
        padding: 35px 16px 28px !important;
      }
      .package-header-box {
        padding: 8px 25px !important;
      }
      .package-header-text {
        font-size: 24px !important;
      }
      .stats-grid {
        gap: 10px !important;
      }
      .placement-stat {
        padding: 18px 14px !important;
      }
      .carousel-slide {
        gap: 8px !important;
      }
      .company-card {
        padding: 12px 10px !important;
        min-height: 75px !important;
        max-height: 75px !important;
      }
      .company-logo {
        max-height: 45px !important;
      }
    }
  `;

  // Company data with logo paths - UPDATE THESE PATHS WITH YOUR ACTUAL LOGO FILES
  const companies = [
    [
      { name: 'Google', logo: '/logos/google.png' },
      { name: 'Unilever', logo: '/logos/unilever.png' }
    ],
    [
      { name: 'IBM', logo: '/logos/ibm.png' },
      { name: 'Microsoft', logo: '/logos/microsoft.png' }
    ],
    [
      { name: 'Reliance', logo: '/logos/reliance.png' },
      { name: 'TCS', logo: '/logos/tcs.png' }
    ],
    [
      { name: 'Infosys', logo: '/logos/infosys.png' },
      { name: 'L&T Infotech', logo: '/logos/lnt.png' }
    ],
    [
      { name: 'Tech Mahindra', logo: '/logos/techmahindra.png' },
      { name: 'Accenture', logo: '/logos/accenture.png' }
    ],
    [
      { name: 'Indian Navy', logo: '/logos/indiannavy.png' },
      { name: 'HDFC Life', logo: '/logos/hdfclife.png' }
    ],
    [
      { name: 'Coca-Cola', logo: '/logos/cocacola.png' },
      { name: 'Dell', logo: '/logos/dell.png' }
    ],
    [
      { name: 'Symphony', logo: '/logos/symphony.png' },
      { name: '400+ Companies', logo: '/logos/more.png' }
    ]
  ];

  const [activeSlide, setActiveSlide] = React.useState(0);
  const carouselRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (carouselRef.current) {
        const scrollLeft = carouselRef.current.scrollLeft;
        const slideWidth = carouselRef.current.offsetWidth;
        const currentSlide = Math.round(scrollLeft / slideWidth);
        setActiveSlide(currentSlide);
      }
    };

    const carousel = carouselRef.current;
    if (carousel) {
      carousel.addEventListener('scroll', handleScroll);
      return () => carousel.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToSlide = (index) => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.offsetWidth;
      carouselRef.current.scrollTo({
        left: slideWidth * index,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="placements" style={styles.section} className="section">
        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.titleUnderline} className="title-underline">
              <h2 style={styles.sectionTitle} className="section-title">
                Placements
              </h2>
              <div style={styles.titleUnderlineAfter}></div>
            </div>
            <p style={styles.sectionIntro}>
              Empowering students with industry-leading placement opportunities and career success
            </p>
          </div>

          <div style={styles.placementHighlights} className="placement-highlights">
            <div style={styles.packageCard} className="package-card">
              <div 
                style={{
                  ...styles.packageHeaderBox, 
                  ...styles.packageHeaderBoxBlue
                }} 
                className="package-header-box"
              >
                <h3 
                  style={{
                    ...styles.packageHeaderText,
                    ...styles.packageHeaderTextBlue
                  }}
                  className="package-header-text"
                >
                  84 LPA
                </h3>
              </div>
              <div style={styles.packageLabel} className="package-label">
                Highest National<br />Package
              </div>
            </div>

            <div 
              style={{
                ...styles.packageCard, 
                ...styles.packageCardGreen
              }} 
              className="package-card package-card-green"
            >
              <div 
                style={{
                  ...styles.packageHeaderBox,
                  ...styles.packageHeaderBoxGreen
                }} 
                className="package-header-box"
              >
                <h3 
                  style={{
                    ...styles.packageHeaderText,
                    ...styles.packageHeaderTextGreen
                  }}
                  className="package-header-text"
                >
                  48 LPA
                </h3>
              </div>
              <div style={styles.packageLabel} className="package-label">
                Highest International<br />Package
              </div>
            </div>
          </div>

          <div style={styles.statsGrid} className="stats-grid">
            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">100%</div>
              <div style={styles.statLabel} className="stat-label">Placement Assistance</div>
              <div style={styles.statSubtext} className="stat-subtext">In Last 6 Years</div>
            </div>

            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">400+</div>
              <div style={styles.statLabel} className="stat-label">Companies</div>
            </div>
          </div>

          <div style={styles.companiesSection} className="companies-section">
            <h3 style={styles.companiesHeader} className="companies-header">
              Our Recruiting Partners
            </h3>

            <div style={styles.carouselContainer} className="carousel-container">
              <div 
                ref={carouselRef}
                style={styles.carouselTrack} 
                className="carousel-track"
              >
                {companies.map((pair, index) => (
                  <div 
                    key={index} 
                    style={styles.carouselSlide} 
                    className="carousel-slide"
                  >
                    {pair.map((company, companyIndex) => (
                      <div 
                        key={companyIndex}
                        style={styles.companyCard} 
                        className="company-card"
                      >
                        <img
                          src={company.logo}
                          alt={`${company.name} logo`}
                          style={styles.companyLogo}
                          className="company-logo"
                          onError={(e) => {
                            // Fallback to text if image fails to load
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div 
                          style={{...styles.companyName, display: 'none'}} 
                          className="company-name"
                        >
                          {company.name}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.scrollIndicator} className="scroll-indicator">
              {companies.map((_, index) => (
                <div
                  key={index}
                  onClick={() => scrollToSlide(index)}
                  style={{
                    ...styles.dot,
                    ...(activeSlide === index ? styles.dotActive : {})
                  }}
                  className="dot"
                  role="button"
                  tabIndex={0}
                  aria-label={`Go to slide ${index + 1}`}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToSlide(index);
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Placements;
