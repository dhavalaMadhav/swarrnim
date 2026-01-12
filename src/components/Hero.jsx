import React, { useState } from 'react';
import { Phone, Mail, User, GraduationCap, TrendingUp, Award, Building2 } from 'lucide-react';


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
      backgroundColor: 'rgba(0, 0, 0, 0.65)',
      zIndex: 1
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
    badge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      background: '#2563eb',
      color: 'white',
      padding: '0.5rem 1.2rem',
      fontSize: '0.8rem',
      fontWeight: '700',
      marginBottom: '1.5rem',
      letterSpacing: '0.5px'
    },
    title: {
      fontSize: '4rem',
      fontWeight: '900',
      lineHeight: '1',
      marginBottom: '1rem',
      color: '#ffffff',
      letterSpacing: '-3px',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      textShadow: '2px 2px 8px rgba(0, 0, 0, 0.3)'
    },
    subtitle: {
      fontSize: '1.2rem',
      color: '#3b82f6',
      marginBottom: '1rem',
      fontWeight: '700',
      letterSpacing: '0.5px'
    },
    description: {
      fontSize: '1rem',
      color: '#e0e0e0',
      lineHeight: '1.7',
      marginBottom: '2rem',
      maxWidth: '650px',
      fontWeight: '400'
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
      overflow: 'hidden'
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
      fontSize: '1.3rem',
      fontWeight: '800',
      color: '#1a1a1a',
      marginBottom: '0.3rem',
      letterSpacing: '-0.5px'
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
      borderRadius: '0',
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
      borderRadius: '0',
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
      textTransform: 'uppercase'
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
      border-radius: 0 !important;
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


    @media (max-width: 1200px) {
      .hero-title {
        font-size: 3.2rem !important;
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


      .hero-badge {
        font-size: 0.7rem !important;
        padding: 0.4rem 0.9rem !important;
        margin-bottom: 1rem !important;
      }


      .hero-subtitle {
        font-size: 1rem !important;
        margin-bottom: 0.8rem !important;
      }


      .hero-description {
        font-size: 0.9rem !important;
        margin-bottom: 1.5rem !important;
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
        font-size: 1.2rem !important;
      }


      .contact-box-subtitle {
        font-size: 0.75rem !important;
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


      .hero-subtitle {
        font-size: 0.9rem !important;
      }


      .hero-description {
        font-size: 0.85rem !important;
        line-height: 1.5 !important;
      }


      .hero-contact-box {
        padding: 1.2rem !important;
      }
    }
  `;


  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section style={styles.hero} className="hero">
        {/* Desktop View */}
        <div style={styles.backgroundImage} className="hero-desktop-bg"></div>
        <div style={styles.overlay} className="hero-desktop-overlay"></div>


        <div style={styles.container} className="hero-container">
          <div style={styles.contentWrapper} className="hero-content-wrapper">
            {/* Left Side - Content */}
            <div style={styles.leftSection} className="hero-left-section">
              <div style={styles.badge} className="hero-badge">
                <Building2 size={16} />
                <span>India's 1st Startup & Quantum University</span>
              </div>


              <h1 style={styles.title} className="hero-title">
                BUILD STARTUPS<br />POWER QUANTUM
              </h1>


              <h2 style={styles.subtitle} className="hero-subtitle">Swaranim Startup & Innovation University</h2>


              <p style={styles.description} className="hero-description">
                India's first university dedicated to startup incubation and quantum computing education. 
                Launch your venture while mastering next-gen technology.
              </p>


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
                    <span>admissions@swaranim.edu</span>
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
