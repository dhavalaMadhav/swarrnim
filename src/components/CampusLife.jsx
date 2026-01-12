import React, { useState } from 'react';



function CampusLife() {
  const [activeFeature, setActiveFeature] = useState(0);



  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#ffffff',
      zIndex: 10,
      isolation: 'isolate'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%'
    },
    gradientBox: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 50%, #000000 100%)',
      padding: '60px 50px',
      borderRadius: '16px',
      position: 'relative',
      overflow: 'hidden'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '2.5rem'
    },
    topLabel: {
      fontSize: '36px',
      fontWeight: '400',
      color: '#60a5fa',
      letterSpacing: '0.5px',
      marginBottom: '20px',
      textTransform: 'none',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1.4'
    },
    topLabelLine: {
      display: 'block'
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
      color: 'rgba(255, 255, 255, 0.12)',
      fontFamily: '"Inter", system-ui, sans-serif',
      textShadow: 'none',
      WebkitTextStroke: '2px rgba(255, 255, 255, 0.35)',
      textStroke: '2px rgba(255, 255, 255, 0.35)',
      WebkitTextFillColor: 'rgba(255, 255, 255, 0.12)'
    },
    description: {
      fontSize: '15px',
      color: 'rgba(255, 255, 255, 0.85)',
      lineHeight: '1.8',
      fontWeight: '400',
      fontFamily: '"Inter", system-ui, sans-serif',
      maxWidth: '900px',
      margin: '0 auto 60px',
      textAlign: 'center'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr',
      gap: '40px',
      alignItems: 'start'
    },
    leftSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    },
    imageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '12px'
    },
    imageBox: {
      width: '100%',
      height: '190px',
      overflow: 'hidden',
      background: '#1a1f3a',
      border: '2px solid rgba(255, 255, 255, 0.1)',
      position: 'relative'
    },
    campusImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.4s ease'
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    },
    featuresList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0'
    },
    featureItem: {
      padding: '16px 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      textAlign: 'right',
      transition: 'all 0.3s ease',
      cursor: 'pointer'
    },
    featureItemActive: {
      borderBottom: '1px solid #2563eb',
      paddingRight: '15px'
    },
    featureItemLast: {
      borderBottom: 'none'
    },
    featureTitle: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#ffffff',
      lineHeight: '1.4',
      textTransform: 'uppercase',
      letterSpacing: '0.5px',
      transition: 'color 0.3s ease',
      fontFamily: '"Inter", system-ui, sans-serif'
    },
    featureTitleActive: {
      color: '#60a5fa'
    },
    // Mobile features list (hidden on desktop)
    mobileFeaturesSection: {
      display: 'none',
      marginTop: '20px'
    }
  };



  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');



    /* Darker outline with darker fill - white version */
    #campus .section-title {
      color: rgba(255, 255, 255, 0.12) !important;
      text-shadow: none !important;
      -webkit-text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
      text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      background: none !important;
    }



    .image-box:hover img {
      transform: scale(1.08);
    }



    .feature-item:hover {
      padding-right: 15px !important;
      border-bottom-color: #2563eb !important;
    }



    .feature-item:hover .feature-title {
      color: #60a5fa !important;
    }



    /* Hide mobile features on desktop */
    .mobile-features-section {
      display: none !important;
    }



    @media (max-width: 1200px) {
      .gradient-box {
        padding: 50px 40px !important;
        border-radius: 14px !important;
      }
      .top-label {
        font-size: 32px !important;
      }
      #campus .section-title {
        font-size: 100px !important;
        letter-spacing: 6px !important;
        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .description {
        font-size: 14px !important;
        margin-bottom: 50px !important;
      }
      .content-grid {
        gap: 35px !important;
      }
      .image-box {
        height: 170px !important;
      }
    }



    @media (max-width: 1024px) {
      .gradient-box {
        padding: 40px 35px !important;
        border-radius: 14px !important;
      }
      .content-grid {
        grid-template-columns: 1fr !important;
        gap: 0px !important;
      }
      
      /* Hide desktop features list on mobile/tablet */
      .right-section {
        display: none !important;
      }
      
      /* Show mobile features list */
      .mobile-features-section {
        display: block !important;
      }
      
      .left-section {
        order: 1;
      }
      
      .feature-item,
      .feature-title {
        text-align: left !important;
      }
      
      /* Mobile touch/click interactions */
      .feature-item:active {
        padding-left: 15px !important;
        padding-right: 0 !important;
        border-bottom-color: #2563eb !important;
      }
      
      .feature-item:active .feature-title {
        color: #60a5fa !important;
      }
      
      .feature-item-active {
        padding-left: 15px !important;
        padding-right: 0 !important;
      }
    }



    @media (max-width: 768px) {
      #campus.section {
        padding: 60px 0 !important;
      }
      #campus .container {
        padding: 0 1rem !important;
      }
      .gradient-box {
        padding: 35px 25px !important;
        border-radius: 12px !important;
      }
      .top-label {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      #campus .section-title {
        font-size: 70px !important;
        letter-spacing: 4px !important;
        margin-bottom: 2.5rem !important;
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .description {
        font-size: 12px !important;
        line-height: 1.6 !important;
        margin-bottom: 40px !important;
      }
      .content-grid {
        gap: 0px !important;
      }
      .image-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 8px !important;
      }
      .image-box {
        height: 110px !important;
      }
      .mobile-features-section {
        margin-top: 20px !important;
      }
      .feature-item {
        padding: 10px 0 !important;
      }
      .feature-title {
        font-size: 13px !important;
        letter-spacing: 0.3px !important;
        line-height: 1.3 !important;
      }
    }



    @media (max-width: 576px) {
      .gradient-box {
        padding: 30px 20px !important;
        border-radius: 12px !important;
      }
      .top-label {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      #campus .section-title {
        font-size: 50px !important;
        letter-spacing: 3px !important;
        margin-bottom: 2rem !important;
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .description {
        font-size: 11px !important;
        line-height: 1.5 !important;
        margin-bottom: 35px !important;
      }
      .content-grid {
        gap: 0px !important;
      }
      .image-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 6px !important;
      }
      .image-box {
        height: 95px !important;
      }
      .mobile-features-section {
        margin-top: 18px !important;
      }
      .feature-item {
        padding: 9px 0 !important;
      }
      .feature-title {
        font-size: 12px !important;
        letter-spacing: 0.2px !important;
        line-height: 1.3 !important;
      }
    }



    @media (max-width: 400px) {
      .gradient-box {
        padding: 25px 15px !important;
        border-radius: 10px !important;
      }
      .top-label {
        font-size: 20px !important;
      }
      #campus .section-title {
        font-size: 42px !important;
        letter-spacing: 2px !important;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .description {
        font-size: 10px !important;
      }
      .image-box {
        height: 85px !important;
      }
      .mobile-features-section {
        margin-top: 15px !important;
      }
      .feature-item {
        padding: 8px 0 !important;
      }
      .feature-title {
        font-size: 11px !important;
      }
    }
  `;



  const campusFeatures = [
    {
      title: 'World-Class Infrastructure',
      images: [
        'https://images.unsplash.com/photo-1562774053-701939374585?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Advanced Labs & Research Centers',
      images: [
        'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1581093458791-9f3c3250a8d0?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Sports & Fitness Facilities',
      images: [
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Industry Leaders & Guest Lectures',
      images: [
        'https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Cultural Events & Celebrations',
      images: [
        'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=600&fit=crop'
      ]
    },
    {
      title: 'Hackathons, Conferences & Tech Summits',
      images: [
        'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=800&h=600&fit=crop'
      ]
    }
  ];


  // Handle both mouse and touch events
  const handleFeatureInteraction = (index) => {
    setActiveFeature(index);
  };



  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="campus" style={styles.section} className="section campus-section">
        <div style={styles.container} className="container">
          {/* Gradient Box Container */}
          <div style={styles.gradientBox} className="gradient-box">
            {/* Centered Heading Section */}
            <div style={styles.textCenter}>
              <div style={styles.topLabel} className="top-label">
                <span style={styles.topLabelLine}>Experience Excellence Beyond Classrooms</span>
                <span style={styles.topLabelLine}>Where Learning Meets Innovation & Growth</span>
              </div>
              <h2 style={styles.sectionTitle} className="section-title">
                CAMPUS LIFE
              </h2>
            </div>



            {/* Description */}
            <p style={styles.description} className="description">
              At Swarnim University, education extends far beyond textbooks. Students experience a dynamic campus life filled with cutting-edge research facilities, industry interactions, cultural celebrations, and innovation-driven events. This is where future leaders are shaped through holistic development, collaboration, and real-world exposure.
            </p>



            {/* Content Grid */}
            <div style={styles.contentGrid} className="content-grid">
              {/* Left Section - Images */}
              <div style={styles.leftSection} className="left-section">
                <div style={styles.imageGrid} className="image-grid">
                  {campusFeatures[activeFeature].images.map((image, index) => (
                    <div key={index} style={styles.imageBox} className="image-box">
                      <img 
                        src={image}
                        alt={`${campusFeatures[activeFeature].title} ${index + 1}`}
                        style={styles.campusImage}
                        className="campus-image"
                      />
                    </div>
                  ))}
                </div>


                {/* Mobile Features List - Shows below images on mobile */}
                <div style={styles.mobileFeaturesSection} className="mobile-features-section">
                  <div style={styles.featuresList} className="features-list">
                    {campusFeatures.map((feature, index) => (
                      <div
                        key={index}
                        style={{
                          ...styles.featureItem,
                          ...(activeFeature === index ? styles.featureItemActive : {}),
                          ...(index === campusFeatures.length - 1 ? styles.featureItemLast : {})
                        }}
                        className={`feature-item ${activeFeature === index ? 'feature-item-active' : ''}`}
                        onClick={() => handleFeatureInteraction(index)}
                        onTouchStart={() => handleFeatureInteraction(index)}
                      >
                        <h4 
                          style={{
                            ...styles.featureTitle,
                            ...(activeFeature === index ? styles.featureTitleActive : {})
                          }}
                          className="feature-title"
                        >
                          {feature.title}
                        </h4>
                      </div>
                    ))}
                  </div>
                </div>
              </div>



              {/* Right Section - Features List (Desktop Only) */}
              <div style={styles.rightSection} className="right-section">
                <div style={styles.featuresList} className="features-list">
                  {campusFeatures.map((feature, index) => (
                    <div
                      key={index}
                      style={{
                        ...styles.featureItem,
                        ...(activeFeature === index ? styles.featureItemActive : {}),
                        ...(index === campusFeatures.length - 1 ? styles.featureItemLast : {})
                      }}
                      className={`feature-item ${activeFeature === index ? 'feature-item-active' : ''}`}
                      onMouseEnter={() => handleFeatureInteraction(index)}
                    >
                      <h4 
                        style={{
                          ...styles.featureTitle,
                          ...(activeFeature === index ? styles.featureTitleActive : {})
                        }}
                        className="feature-title"
                      >
                        {feature.title}
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default CampusLife;
