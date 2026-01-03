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
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '18px',
      marginBottom: '50px',
      marginTop: '30px'
    },
    placementStat: {
      background: '#fafafa',
      padding: '35px 25px',
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
      gridTemplateColumns: '1fr 1fr',
      gap: '18px',
      flexShrink: 0
    },
    companyCard: {
      background: '#fafafa',
      padding: '30px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(0, 0, 0, 0.08)',
      transition: 'all 0.3s ease',
      minHeight: '90px',
      maxHeight: '90px'
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
      transition: 'all 0.3s ease'
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


    .company-card:hover {
      border-color: #ff6b35;
      background: #fff;
    }


    .company-card:hover .company-name {
      color: #ff6b35;
    }


    @media (max-width: 1024px) {
      .placement-highlights {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 16px !important;
      }
      #placements .section-title {
        font-size: 36px !important;
      }
      .stat-number {
        font-size: 34px !important;
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
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
        margin-bottom: 35px !important;
      }
      .placement-stat {
        padding: 28px 18px !important;
      }
      .stat-number {
        font-size: 30px !important;
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
        padding: 22px 15px !important;
        min-height: 75px !important;
        max-height: 75px !important;
      }
      .company-name {
        font-size: 16px !important;
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
        gap: 10px !important;
      }
      .placement-stat {
        padding: 24px 15px !important;
        border-width: 1.5px !important;
      }
      .stat-number {
        font-size: 26px !important;
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
        padding: 18px 12px !important;
        min-height: 65px !important;
        max-height: 65px !important;
        border-width: 1.5px !important;
      }
      .company-name {
        font-size: 14px !important;
      }
    }


    @media (max-width: 400px) {
      #placements .container {
        padding: 0 0.5rem !important;
      }
      .placement-highlights {
        gap: 8px !important;
      }
      .placement-stat {
        padding: 20px 12px !important;
      }
      .carousel-slide {
        gap: 8px !important;
      }
      .company-card {
        padding: 16px 10px !important;
        min-height: 60px !important;
        max-height: 60px !important;
      }
      .company-name {
        font-size: 13px !important;
      }
    }
  `;



  // Company data organized in pairs for carousel
  const companies = [
    ['Google', 'Microsoft'],
    ['IBM', 'TCS'],
    ['Infosys', 'Accenture'],
    ['Reliance', 'Unilever'],
    ['L&T Infotech', 'Tech Mahindra']
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



          {/* Placement Statistics */}
          <div style={styles.placementHighlights} className="placement-highlights">
            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">100%</div>
              <div style={styles.statLabel} className="stat-label">Placement Assistance</div>
              <div style={styles.statSubtext} className="stat-subtext">In Last 6 Years</div>
            </div>



            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">84 LPA</div>
              <div style={styles.statLabel} className="stat-label">Highest National Package</div>
            </div>



            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">48 LPA</div>
              <div style={styles.statLabel} className="stat-label">Highest International Package</div>
            </div>



            <div style={styles.placementStat} className="placement-stat">
              <div style={styles.statNumber} className="stat-number">400+</div>
              <div style={styles.statLabel} className="stat-label">Companies</div>
            </div>
          </div>



          {/* Companies Carousel Section */}
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
                    <div style={styles.companyCard} className="company-card">
                      <div style={styles.companyName} className="company-name">
                        {pair[0]}
                      </div>
                    </div>
                    <div style={styles.companyCard} className="company-card">
                      <div style={styles.companyName} className="company-name">
                        {pair[1]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>



            {/* Scroll Indicator Dots */}
            <div style={styles.scrollIndicator} className="scroll-indicator">
              {companies.map((_, index) => (
                <div
                  key={index}
                  style={{
                    ...styles.dot,
                    ...(activeSlide === index ? styles.dotActive : {})
                  }}
                  className="dot"
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
