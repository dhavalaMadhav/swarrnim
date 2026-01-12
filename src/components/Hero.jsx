import React, { useState } from 'react';
import { Phone, Mail, User, GraduationCap, TrendingUp, Award, Building2, ArrowRight } from 'lucide-react';


function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    course: ''
  });


  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    setFormData({ name: '', email: '', number: '', course: '' });
  };

  // Function to scroll to quantum computing section
  const scrollToQuantum = () => {
    const quantumSection = document.getElementById('quantum-section');
    if (quantumSection) {
      quantumSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };


  const styles = {
    hero: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      padding: '0'
    },
    backgroundImage: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: 'url(https://images.unsplash.com/photo-1562774053-701939374585?w=1920&h=1080&fit=crop)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      zIndex: 0
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, rgba(255, 255, 255, 0.75) 15%, rgba(37, 99, 235, 0.6) 30%, rgba(29, 78, 216, 0.75) 50%, rgba(0, 0, 0, 0.85) 75%, rgba(0, 0, 0, 0.95) 100%)',
      zIndex: 1
    },
    logo: {
      position: 'absolute',
      top: '2rem',
      left: '2rem',
      zIndex: 20,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    logoImage: {
      height: '80px',
      width: 'auto',
      objectFit: 'contain'
    },
    container: {
      position: 'relative',
      zIndex: 10,
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '100px 2rem 2rem',
      width: '100%'
    },
    contentWrapper: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 0.8fr',
      gap: '3rem',
      alignItems: 'center',
      width: '100%'
    },
    leftSection: {
      animation: 'fadeInLeft 0.8s ease-out'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      lineHeight: '1.1',
      marginBottom: '1rem',
      color: '#ffffff',
      letterSpacing: '-3px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      textShadow: '2px 2px 6px rgba(0, 0, 0, 0.6), 1px 1px 3px rgba(0, 0, 0, 0.4)'
    },
    description: {
      fontSize: '1rem',
      color: '#ffffff',
      lineHeight: '1.7',
      marginBottom: '2rem',
      maxWidth: '650px',
      fontWeight: '500',
      textShadow: '1px 1px 4px rgba(0, 0, 0, 0.7), 2px 2px 6px rgba(0, 0, 0, 0.5)'
    },
    // New button style for Explore Quantum Computing
    quantumButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.6rem',
      background: '#FFC107',
      color: '#1a1a1a',
      padding: '0.9rem 2rem',
      fontSize: '0.9rem',
      fontWeight: '700',
      border: 'none',
      borderRadius: '30px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '0.5px',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px rgba(255, 193, 7, 0.3)',
      textTransform: 'uppercase'
    },
    arrowIcon: {
      transition: 'transform 0.3s ease'
    },
    statsContainer: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      background: 'rgba(255, 255, 255, 0.08)',
      backdropFilter: 'blur(20px) saturate(180%)',
      WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      padding: '2rem',
      gap: '0',
      maxWidth: '650px',
      border: '1px solid rgba(255, 255, 255, 0.18)',
      overflow: 'hidden'
    },
    statsGlassShine: {
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '50%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)',
      animation: 'glassShine 3s infinite',
      pointerEvents: 'none'
    },
    statItem: {
      flex: 1,
      textAlign: 'center',
      padding: '0 1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '0.5rem',
      position: 'relative',
      zIndex: 1
    },
    statIcon: {
      color: '#ffffff',
      transition: 'transform 0.3s ease'
    },
    statDivider: {
      width: '2px',
      height: '60px',
      background: 'rgba(255, 255, 255, 0.2)',
      flexShrink: 0
    },
    statNumber: {
      fontSize: '2rem',
      fontWeight: '900',
      color: '#ffffff',
      lineHeight: '1',
      letterSpacing: '-1px'
    },
    statLabel: {
      fontSize: '0.75rem',
      fontWeight: '600',
      letterSpacing: '0.5px',
      whiteSpace: 'nowrap',
      color: '#3b82f6'
    },
    rightSection: {
      animation: 'fadeInRight 0.8s ease-out'
    },
    contactBox: {
      position: 'relative',
      background: '#ffffff',
      padding: '1.5rem',
      border: '1px solid rgba(0, 0, 0, 0.1)',
      overflow: 'hidden',
      borderRadius: '12px'
    },
    contactBoxHeader: {
      textAlign: 'center',
      marginBottom: '1rem',
      paddingBottom: '1rem',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      position: 'relative',
      zIndex: 1
    },
    contactBoxTitle: {
      fontSize: '1.5rem',
      fontWeight: '400',
      color: '#1a1a1a',
      marginBottom: '0.3rem',
      letterSpacing: '0.5px',
      fontFamily: "'Young Serif', Georgia, serif"
    },
    contactBoxSubtitle: {
      color: '#666666',
      fontSize: '0.8rem',
      fontWeight: '600'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.9rem',
      position: 'relative',
      zIndex: 1
    },
    formGroup: {
      width: '100%'
    },
    inputWrapper: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    },
    inputIcon: {
      position: 'absolute',
      left: '0.9rem',
      color: '#666666',
      pointerEvents: 'none',
      zIndex: 2
    },
    input: {
      width: '100%',
      padding: '0.8rem 0.9rem 0.8rem 2.6rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '0.9rem',
      color: '#1a1a1a',
      background: '#ffffff',
      backgroundColor: '#ffffff',
      WebkitAppearance: 'none',
      appearance: 'none',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      fontFamily: 'inherit',
      outline: 'none'
    },
    select: {
      width: '100%',
      padding: '0.8rem 2.6rem 0.8rem 2.6rem',
      border: '1px solid #d1d5db',
      borderRadius: '6px',
      fontSize: '0.9rem',
      color: '#1a1a1a',
      background: '#ffffff',
      backgroundColor: '#ffffff',
      WebkitAppearance: 'none',
      appearance: 'none',
      transition: 'all 0.3s ease',
      fontWeight: '500',
      cursor: 'pointer',
      fontFamily: 'inherit',
      outline: 'none'
    },
    submitBtn: {
      width: '100%',
      padding: '0.85rem',
      background: '#2563eb',
      color: 'white',
      border: 'none',
      fontSize: '0.85rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      marginTop: '0.3rem',
      letterSpacing: '1px',
      textTransform: 'uppercase',
      borderRadius: '6px'
    },
    contactBoxFooter: {
      marginTop: '1rem',
      paddingTop: '1rem',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.6rem',
      position: 'relative',
      zIndex: 1
    },
    contactItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      color: '#666666',
      fontSize: '0.8rem',
      fontWeight: '600'
    },
    contactItemIcon: {
      color: '#3b82f6',
      flexShrink: 0
    }
  };


  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');

    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }


    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(30px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }


    @keyframes glassShine {
      0% {
        left: -100%;
      }
      50%, 100% {
        left: 100%;
      }
    }

    @keyframes arrowBounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateX(0);
      }
      40% {
        transform: translateX(5px);
      }
      60% {
        transform: translateX(3px);
      }
    }

    .arrow-animate {
      animation: arrowBounce 2s infinite;
    }


    input::placeholder,
    select::placeholder {
      color: #9ca3af;
    }


    input:focus,
    select:focus {
      outline: none;
      border-color: #3b82f6 !important;
      background: #ffffff !important;
    }


    select option {
      background: #ffffff;
      color: #1a1a1a;
    }


    select:invalid {
      color: #9ca3af;
    }


    select option:first-child {
      color: #9ca3af;
    }


    /* Force white background on all inputs */
    input,
    select {
      background: #ffffff !important;
      background-color: #ffffff !important;
      -webkit-appearance: none !important;
      appearance: none !important;
    }


    /* Auto-fill styles for Chrome/Safari */
    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: #1a1a1a;
      transition: background-color 5000s ease-in-out 0s;
      box-shadow: inset 0 0 20px 20px #ffffff;
    }

    .quantum-button:hover {
      background: #FFB300 !important;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(255, 193, 7, 0.4) !important;
    }

    .quantum-button:hover .arrow-icon {
      transform: translateX(5px);
    }

    @media (max-width: 1200px) {
      .hero-title {
        font-size: 3.2rem !important;
      }
      .hero-logo-image {
        height: 70px !important;
      }
    }


    @media (max-width: 1024px) {
      .hero-content-wrapper {
        grid-template-columns: 1fr !important;
        gap: 3rem !important;
      }
      .hero-container {
        padding: 2rem 1.5rem !important;
      }
      .hero-logo-image {
        height: 65px !important;
      }
      .hero-overlay {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.7) 12%, rgba(37, 99, 235, 0.55) 25%, rgba(29, 78, 216, 0.7) 45%, rgba(0, 0, 0, 0.85) 70%, rgba(0, 0, 0, 0.95) 100%) !important;
      }
    }


    @media (max-width: 768px) {
      .hero {
        min-height: auto !important;
        display: block !important;
        padding-top: 70px !important;
        background: #fafafa !important;
      }


      .hero-background-wrapper {
        position: relative !important;
        height: 75% !important;
      }


      .hero-mobile-content {
        position: relative !important;
        background: #fafafa !important;
        padding: 2rem 1rem 3rem !important;
        margin-top: -8rem !important;
        z-index: 10 !important;
      }


      .hero-container {
        padding: 2rem 1rem !important;
        margin-top: 0 !important;
      }


      .hero-content-wrapper {
        display: block !important;
      }


      .hero-left-section {
        padding: 0 !important;
      }


      .hero-title {
        font-size: 2rem !important;
        letter-spacing: -1.5px !important;
        margin-bottom: 0.8rem !important;
      }


      .hero-description {
        font-size: 0.9rem !important;
        margin-bottom: 1.5rem !important;
      }

      .quantum-button {
        padding: 0.75rem 1.5rem !important;
        font-size: 0.8rem !important;
      }


      .hero-stats-container {
        display: none !important;
      }


      .hero-right-section {
        width: 100% !important;
        max-width: 500px !important;
        margin: 0 auto !important;
        padding: 0 !important;
      }


      .hero-contact-box {
        padding: 1.3rem !important;
      }


      .contact-box-title {
        font-size: 1.3rem !important;
      }


      .contact-box-subtitle {
        font-size: 0.75rem !important;
      }


      /* Mobile - Center logo */
      .hero-logo {
        top: 1.5rem !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
      }


      .hero-logo-image {
        height: 60px !important;
      }


      .hero-overlay {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.75) 0%, rgba(255, 255, 255, 0.65) 10%, rgba(37, 99, 235, 0.5) 22%, rgba(29, 78, 216, 0.65) 40%, rgba(0, 0, 0, 0.8) 65%, rgba(0, 0, 0, 0.92) 100%) !important;
      }
    }


    @media (max-width: 480px) {
      .hero {
        padding-top: 60px !important;
      }


      .hero-mobile-content {
        margin-top: -6rem !important;
        padding: 1.5rem 0.75rem 2rem !important;
      }


      .hero-title {
        font-size: 1.7rem !important;
        letter-spacing: -1px !important;
      }


      .hero-description {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
      }

      .quantum-button {
        padding: 0.7rem 1.3rem !important;
        font-size: 0.75rem !important;
      }


      .hero-contact-box {
        padding: 1.2rem !important;
      }

      .contact-box-title {
        font-size: 1.2rem !important;
      }


      /* Mobile - Center logo */
      .hero-logo {
        top: 1rem !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
      }


      .hero-logo-image {
        height: 55px !important;
      }


      .hero-overlay {
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.6) 8%, rgba(37, 99, 235, 0.45) 20%, rgba(29, 78, 216, 0.6) 35%, rgba(0, 0, 0, 0.78) 60%, rgba(0, 0, 0, 0.9) 100%) !important;
      }
    }
  `;


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section style={styles.hero} className="hero">
        {/* Desktop View */}
        <div style={styles.backgroundImage} className="hero-desktop-bg"></div>
        <div style={styles.overlay} className="hero-overlay"></div>


        {/* University Logo - Top Left (Same as Header) */}
        <div style={styles.logo} className="hero-logo">
          <img 
            src="/swarrnim-logo.png" 
            alt="Swarrnim University Logo" 
            style={styles.logoImage}
            className="hero-logo-image"
          />
        </div>


        <div style={styles.container} className="hero-container">
          <div style={styles.contentWrapper} className="hero-content-wrapper">
            {/* Left Side - Content */}
            <div style={styles.leftSection} className="hero-left-section">
              <h1 style={styles.title} className="hero-title">
                QUANTUM MINDS,<br />STARTUP FOUNDERS
              </h1>


              <p style={styles.description} className="hero-description">
                India's first university dedicated to startup incubation and quantum computing education. 
                Launch your venture while mastering next-gen technology.
              </p>

              {/* Explore Quantum Computing Button */}
              <button 
                style={styles.quantumButton}
                className="quantum-button"
                onClick={scrollToQuantum}
              >
                <span>Explore Quantum Computing</span>
                <ArrowRight size={20} className="arrow-animate arrow-icon" style={styles.arrowIcon} />
              </button>


              {/* Statistics Container - Desktop Only */}
              <div style={styles.statsContainer} className="hero-stats-container">
                <div style={styles.statsGlassShine}></div>
                <div style={styles.statItem} className="hero-stat-item">
                  <TrendingUp size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">75+</div>
                  <div style={styles.statLabel} className="stat-label">Startups Launched</div>
                </div>


                <div style={styles.statDivider} className="stat-divider"></div>


                <div style={styles.statItem} className="hero-stat-item">
                  <GraduationCap size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">84 LPA</div>
                  <div style={styles.statLabel} className="stat-label">Highest Package</div>
                </div>


                <div style={styles.statDivider} className="stat-divider"></div>


                <div style={styles.statItem} className="hero-stat-item">
                  <Award size={28} style={styles.statIcon} />
                  <div style={styles.statNumber} className="stat-number">1ST</div>
                  <div style={styles.statLabel} className="stat-label">Quantum Programs</div>
                </div>
              </div>
            </div>


            {/* Right Side - Contact Form (Desktop) */}
            <div style={styles.rightSection} className="hero-right-section">
              <div style={styles.contactBox} className="hero-contact-box">
                <div style={styles.contactBoxHeader}>
                  <h3 style={styles.contactBoxTitle} className="contact-box-title">Admissions Are Open</h3>
                  <p style={styles.contactBoxSubtitle} className="contact-box-subtitle">Start Your Journey with Us</p>
                </div>


                <form style={styles.form} onSubmit={handleSubmit}>
                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <User size={18} style={styles.inputIcon} />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>


                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <Mail size={18} style={styles.inputIcon} />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>


                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <Phone size={18} style={styles.inputIcon} />
                      <input
                        type="tel"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        style={styles.input}
                        required
                      />
                    </div>
                  </div>


                  <div style={styles.formGroup}>
                    <div style={styles.inputWrapper}>
                      <GraduationCap size={18} style={styles.inputIcon} />
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        style={styles.select}
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="btech-ai">B.Tech - AI & Data Science</option>
                        <option value="btech-it">B.Tech - Information Technology</option>
                        <option value="btech-cs">B.Tech - Computer Engineering</option>
                        <option value="btech-cyber">B.Tech - Cyber Security</option>
                        <option value="btech-quantum">B.Tech - CSE Quantum Computing</option>
                        <option value="btech-civil">B.Tech - Civil Engineering</option>
                        <option value="btech-chemical">B.Tech - Chemical Engineering</option>
                        <option value="btech-mechanical">B.Tech - Mechanical Engineering</option>
                        <option value="btech-env">B.Tech - Environmental Engineering</option>
                        <option value="bca">BCA (Hons.)</option>
                        <option value="bsc-it">B.Sc-IT (Hons.)</option>
                        <option value="mca">MCA</option>
                        <option value="msc-it">M.Sc-IT</option>
                        <option value="bba">BBA (Hons.)</option>
                        <option value="bcom">B.Com (Hons.)</option>
                        <option value="ba">BA (Hons.)</option>
                        <option value="mba">MBA</option>
                        <option value="mcom">M.Com</option>
                        <option value="ma">MA</option>
                        <option value="bajmc">BAJMC (Hons.)</option>
                        <option value="majmc">MAJMC</option>
                        <option value="bpharm">B.Pharm</option>
                        <option value="mpharm">M.Pharm</option>
                        <option value="pharmd">Pharm.D</option>
                        <option value="dpharm">D.Pharm</option>
                        <option value="ballb">B.A. LL.B</option>
                        <option value="llb">LL.B</option>
                        <option value="llm">LL.M</option>
                        <option value="barch">B.Arch</option>
                        <option value="bdes">B.Des</option>
                        <option value="mdes">M.Des</option>
                        <option value="bsc-nursing">B.Sc Nursing</option>
                        <option value="bpt">BPT</option>
                        <option value="mpt">MPT</option>
                        <option value="bhms">BHMS</option>
                        <option value="bams">BAMS</option>
                        <option value="other">Other Courses</option>
                      </select>
                    </div>
                  </div>


                  <button 
                    type="submit" 
                    style={styles.submitBtn}
                    onMouseEnter={(e) => e.target.style.background = '#1d4ed8'}
                    onMouseLeave={(e) => e.target.style.background = '#2563eb'}
                  >
                    Submit Inquiry
                  </button>
                </form>


                <div style={styles.contactBoxFooter}>
                  <div style={styles.contactItem}>
                    <Phone size={16} style={styles.contactItemIcon} />
                    <span>+91-XXXX-XXXXXX</span>
                  </div>
                  <div style={styles.contactItem}>
                    <Mail size={16} style={styles.contactItemIcon} />
                    <span>admissions@swarrnim.edu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Mobile View - Background wrapper (75% height) */}
        <div className="hero-background-wrapper" style={{display: 'none'}}>
          <div style={styles.backgroundImage}></div>
          <div style={styles.overlay}></div>
        </div>


        {/* Mobile View - Content section */}
        <div className="hero-mobile-content" style={{display: 'none'}}>
          {/* Content will be rendered here on mobile via CSS */}
        </div>
      </section>
    </>
  );
}


export default Hero;
