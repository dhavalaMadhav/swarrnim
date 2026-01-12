import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';



gsap.registerPlugin(ScrollTrigger);



function Facilities() {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMobile, setIsMobile] = useState(false);



  // Detect screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);



  useEffect(() => {
    if (!isMobile) return; // Only run scroll animation on mobile



    const setupAnimations = () => {
      const cards = cardsRef.current.filter(card => card !== null);
      
      if (cards.length === 0) return;



      // Clean up existing triggers
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id && trigger.vars.id.startsWith('facility-')) {
          trigger.kill();
        }
      });

<<<<<<< HEAD


      const vh = window.innerHeight;
      const scrubValue = 0.2;
      const offScreenY = window.innerHeight;
      const totalScrollDistance = (cards.length - 1 + 0.5) * vh;



      // Master Timeline
=======
      // Store viewport height
      const vh = window.innerHeight;

      // Mobile Optimization
      const isMobile = window.innerWidth <= 768;
      const scrubValue = isMobile ? 0.2 : 1; 
      // Use pixels on mobile to avoid VH recalc issues
      const offScreenY = isMobile ? window.innerHeight : '100vh'; 

      console.log(`📱 Mobile: ${isMobile}, Scrub: ${scrubValue}, Y: ${offScreenY}`);
      
      // Pin duration: (cards.length - 1) * vh + 0.5vh buffer
      // The buffer allows the last card to "settle" before unpinning.
      const totalScrollDistance = (cards.length - 1 + 0.5) * vh;
      
      console.log(`📏 Pin duration: ${totalScrollDistance}px`);

      // Master Timeline that handles BOTH Pinning and Animation
      // This ensures they are perfectly synced.
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: cardsContainerRef.current,
          start: 'top top',
          end: `+=${totalScrollDistance}`,
          pin: true,
<<<<<<< HEAD
          scrub: scrubValue,
          id: 'facilities-master-timeline'
=======
          scrub: scrubValue, // Adaptive scrub
          id: 'facilities-master-timeline',
          onLeave: () => console.log('🎉 ALL CARDS SHOWN'),
          onEnterBack: () => console.log('⬆️ Re-entering')
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
        }
      });



      // Set initial positions
      cards.forEach((card, index) => {
        const zIndex = 100 + index;
        
        if (index === 0) {
          gsap.set(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            zIndex: zIndex,
            visibility: 'visible'
          });
        } else {
          gsap.set(card, {
<<<<<<< HEAD
            y: offScreenY,
=======
            y: offScreenY, // Adaptive Y
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
            opacity: 1,
            scale: 1,
            zIndex: zIndex,
            visibility: 'visible'
          });
        }
      });

<<<<<<< HEAD


      // Add animations
=======
      // Step 3: Add animations to the single timeline
      // We map the scroll distance nicely: 0 to 1, 1 to 2, etc.
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
      cards.forEach((card, index) => {
        if (index === 0) return;



        const prevCard = cards[index - 1];
        
<<<<<<< HEAD
=======
        // The "slot" for this animation is [index-1, index]
        // e.g. Card 1 animates from 0 to 1
        // Card 2 animates from 1 to 2
        
        // 1. Animate Current Card UP
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
        tl.to(card, {
          y: 0, // Animate to 0 (pixels or vh handled by GSAP)
          opacity: 1,
          scale: 1,
<<<<<<< HEAD
          ease: 'none'
        }, index - 1);



=======
          ease: 'none' // Important for scrub
        }, index - 1); // Start at (index-1)

        // 2. Animate Previous Card DOWN/BACK
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
        tl.to(prevCard, {
          scale: 0.95,
          opacity: 0.7,
          ease: 'none'
<<<<<<< HEAD
        }, index - 1);
      });



      tl.to({}, { duration: 0.5 });



=======
        }, index - 1); // Exact same start time
      });

      // Add a small buffer at the end of the timeline to match the scroll distance
      // This ensures the last card sits for a moment (0.5s / 0.5vh) before unpinning
      tl.to({}, { duration: 0.5 });

      // Force refresh for safety
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    };



    const timer = setTimeout(setupAnimations, 300);



    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.id === 'facilities-master-timeline') {
          trigger.kill();
        }
      });
    };
  }, [isMobile]);



  const styles = {
    section: {
      position: 'relative',
      background: '#ffffff',
      width: '100%',
      overflow: 'hidden',
      isolation: 'isolate',
      padding: '80px 0'
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
    // Desktop grid layout - 3 columns
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '25px',
      marginTop: '30px'
    },
    // Mobile scroll container
    cardsContainer: {
      position: 'relative',
      width: '100%',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    cardWrapper: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '90%',
      maxWidth: '900px',
      height: '65vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    card: {
      position: isMobile ? 'relative' : 'static',
      width: '100%',
      height: isMobile ? '100%' : 'auto',
      display: 'flex',
      flexDirection: isMobile ? 'row' : 'column',
      overflow: 'hidden',
      background: '#fafafa',
      border: '2px solid rgba(37, 99, 235, 0.1)',
      borderRadius: '0',
      boxShadow: '0 8px 30px rgba(37, 99, 235, 0.12)',
      visibility: isMobile ? 'hidden' : 'visible'
    },
    imageContainer: {
      flex: isMobile ? '0 0 40%' : '0 0 auto',
      width: isMobile ? '40%' : '100%',
      height: isMobile ? '100%' : '200px',
      overflow: 'hidden',
      position: 'relative',
      background: '#ffffff'
    },
    cardImage: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    },
    iconPlaceholder: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '60px',
      color: '#2563eb',
      background: '#ffffff',
      filter: 'grayscale(0.3)',
      transition: 'all 0.3s ease'
    },
    contentContainer: {
      flex: isMobile ? '0 0 60%' : '1',
      width: isMobile ? '60%' : '100%',
      height: isMobile ? '100%' : 'auto',
      padding: '25px 20px',
      background: '#fafafa',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden'
    },
    cardNumber: {
      fontSize: '10px',
      fontWeight: '900',
      color: '#2563eb',
      letterSpacing: '2px',
      marginBottom: '10px',
      textTransform: 'uppercase',
      fontFamily: '"Inter", system-ui, sans-serif'
    },
    cardTitle: {
      fontSize: '18px',
      fontWeight: '900',
      color: '#000000',
      marginBottom: '10px',
      textTransform: 'uppercase',
      letterSpacing: '-0.5px',
      lineHeight: '1.2',
      textShadow: 'none',
      fontFamily: '"Inter", system-ui, sans-serif'
    },
    cardDescription: {
      fontSize: '12px',
      color: '#666',
      lineHeight: '1.5',
      fontWeight: '400',
      fontFamily: '"Inter", system-ui, sans-serif'
    }
  };



  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap');



    /* Same title style as other sections */
    #facilities .section-title {
      color: rgba(0, 0, 0, 0.12) !important;
      text-shadow: none !important;
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      background: none !important;
    }



    .card:hover .icon-placeholder {
      filter: grayscale(0) !important;
      transform: scale(1.05);
    }



    @media (max-width: 1200px) {
      .top-label {
        font-size: 32px !important;
      }
      #facilities .section-title {
        font-size: 100px !important;
        letter-spacing: 6px !important;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .grid-container {
        gap: 20px !important;
        grid-template-columns: repeat(3, 1fr) !important;
        margin-top: 25px !important;
      }
      .image-container {
        height: 180px !important;
      }
      .content-container {
        padding: 20px 18px !important;
      }
      .card-title {
        font-size: 16px !important;
      }
      .card-description {
        font-size: 11px !important;
      }
    }



    @media (max-width: 1024px) {
      .text-center {
        margin-bottom: 0 !important;
      }
      #facilities .section-title {
        margin-bottom: 1rem !important;
      }
      .card-wrapper {
        width: 92% !important;
        height: 70vh !important;
      }
      .content-container {
        padding: 30px 35px !important;
      }
      .card-title {
        font-size: 28px !important;
      }
      .card-description {
        font-size: 14px !important;
      }
      .icon-placeholder {
        font-size: 90px !important;
      }
    }



    @media (max-width: 768px) {
      #facilities.section {
        padding: 60px 0 !important;
      }
      #facilities .container {
        padding: 0 1rem !important;
      }
      .text-center {
        margin-bottom: 0 !important;
      }
      .top-label {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      #facilities .section-title {
        font-size: 70px !important;
        letter-spacing: 4px !important;
        margin-bottom: 1rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .card-wrapper {
        width: 94% !important;
        height: 70vh !important;
      }
      .card {
        flex-direction: column !important;
      }
      .image-container {
        flex: 1 1 auto !important;
        width: 100% !important;
        height: 50% !important;
      }
      .content-container {
        flex: 0 0 auto !important;
        width: 100% !important;
        height: 50% !important;
        padding: 25px 25px !important;
      }
      .card-number {
        font-size: 11px !important;
        margin-bottom: 10px !important;
      }
      .card-title {
        font-size: 24px !important;
        margin-bottom: 12px !important;
      }
      .card-description {
        font-size: 13px !important;
      }
      .icon-placeholder {
        font-size: 70px !important;
      }
    }



    @media (max-width: 576px) {
      .text-center {
        margin-bottom: 0 !important;
      }
      .top-label {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      #facilities .section-title {
        font-size: 50px !important;
        letter-spacing: 3px !important;
        margin-bottom: 0.75rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .card-wrapper {
        width: 95% !important;
        height: 65vh !important;
      }
      .content-container {
        padding: 20px 20px !important;
      }
      .card-number {
        font-size: 10px !important;
        margin-bottom: 8px !important;
      }
      .card-title {
        font-size: 20px !important;
        margin-bottom: 10px !important;
      }
      .card-description {
        font-size: 12px !important;
        line-height: 1.5 !important;
      }
      .icon-placeholder {
        font-size: 55px !important;
      }
    }



    @media (max-width: 400px) {
      .text-center {
        margin-bottom: 0 !important;
      }
      .top-label {
        font-size: 20px !important;
      }
      #facilities .section-title {
        font-size: 42px !important;
        letter-spacing: 2px !important;
        margin-bottom: 0.75rem !important;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .card-title {
        font-size: 18px !important;
      }
      .card-description {
        font-size: 11px !important;
      }
    }
  `;
  
  const facilities = [
<<<<<<< HEAD
    {
      icon: '🚀',
      title: 'Innovation Labs',
      description: 'State-of-the-art laboratories equipped with cutting-edge technology for prototyping, research, and experimental development.',
      image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop'
    },
    {
      icon: '💻',
      title: 'Tech Infrastructure',
      description: 'Advanced computing facilities featuring high-performance servers, quantum computing access, and cloud infrastructure.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
    },
    {
      icon: '📚',
      title: 'Digital Library',
      description: 'Extensive digital and physical libraries providing access to global research papers, journals, and learning resources.',
      image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop'
    },
    {
      icon: '🤝',
      title: 'Collaboration Spaces',
      description: 'Modern collaborative workspaces designed for teamwork, brainstorming, and interdisciplinary innovation.',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop'
    },
    {
      icon: '🏆',
      title: 'Startup Incubation',
      description: 'Dedicated incubation centers providing mentorship, funding access, and industry connections for startups.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop'
    },
    {
      icon: '🎓',
      title: 'Learning Commons',
      description: 'Flexible learning environments with collaborative zones, quiet study areas, and multimedia production facilities.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop'
    }
  ];



=======
  {
    icon: '🚀',
    title: 'Innovation Labs',
    description:
      'State-of-the-art laboratories equipped with cutting-edge technology for prototyping, research, and experimental development.',
    image:
      'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=800&fit=crop'
  },
  {
    icon: '💻',
    title: 'Tech Infrastructure',
    description:
      'Advanced computing facilities featuring high-performance servers, quantum computing access, and cloud infrastructure.',
    image:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop'
  },
  {
    icon: '📚',
    title: 'Digital Library',
    description:
      'Extensive digital and physical libraries providing access to global research papers, journals, and learning resources.',
    image:
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&h=800&fit=crop'
  },
  {
    icon: '🤝',
    title: 'Collaboration Spaces',
    description:
      'Modern collaborative workspaces designed for teamwork, brainstorming, and interdisciplinary innovation.',
    image:
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&h=800&fit=crop'
  },
  {
    icon: '🏆',
    title: 'Startup Incubation',
    description:
      'Dedicated incubation centers providing mentorship, funding access, and industry connections for startups.',
    image:
      'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200&h=800&fit=crop'
  }
];
>>>>>>> 2da7a3178eee92516d6cefd6a8aa743b219378ad
  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section 
        ref={sectionRef}
        id="facilities" 
        style={styles.section}
        className="section"
      >
        <div style={styles.container} className="container">
          {/* Centered Heading */}
          <div style={styles.textCenter} className="text-center">
            <div style={styles.topLabel} className="top-label">
              Excellence Without Boundaries
            </div>
            <h2 style={styles.sectionTitle} className="section-title">
              WORLD-CLASS FACILITIES
            </h2>
          </div>



          {/* Desktop: Grid Layout - 3 columns */}
          {!isMobile && (
            <div style={styles.gridContainer} className="grid-container">
              {facilities.map((facility, index) => (
                <div key={`facility-${index}`} style={styles.card} className="card">
                  <div style={styles.imageContainer} className="image-container">
                    {facility.image ? (
                      <img 
                        src={facility.image} 
                        alt={facility.title}
                        style={styles.cardImage}
                        className="card-image"
                        loading="lazy"
                      />
                    ) : (
                      <div style={styles.iconPlaceholder} className="icon-placeholder">
                        {facility.icon}
                      </div>
                    )}
                  </div>



                  <div style={styles.contentContainer} className="content-container">
                    <div style={styles.cardNumber} className="card-number">
                      Facility {String(index + 1).padStart(2, '0')}
                    </div>
                    <h3 style={styles.cardTitle} className="card-title">
                      {facility.title}
                    </h3>
                    <p style={styles.cardDescription} className="card-description">
                      {facility.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}



          {/* Mobile: Scroll Animation */}
          {isMobile && (
            <div ref={cardsContainerRef} style={styles.cardsContainer} className="cards-container">
              {facilities.map((facility, index) => (
                <div key={`facility-${index}`} style={styles.cardWrapper} className="card-wrapper">
                  <div
                    ref={(el) => {
                      if (el) {
                        cardsRef.current[index] = el;
                      }
                    }}
                    style={styles.card}
                    className="card"
                    data-card-index={index}
                  >
                    <div style={styles.imageContainer} className="image-container">
                      {facility.image ? (
                        <img 
                          src={facility.image} 
                          alt={facility.title}
                          style={styles.cardImage}
                          className="card-image"
                          loading="lazy"
                        />
                      ) : (
                        <div style={styles.iconPlaceholder} className="icon-placeholder">
                          {facility.icon}
                        </div>
                      )}
                    </div>



                    <div style={styles.contentContainer} className="content-container">
                      <div style={styles.cardNumber} className="card-number">
                        Facility {String(index + 1).padStart(2, '0')}
                      </div>
                      <h3 style={styles.cardTitle} className="card-title">
                        {facility.title}
                      </h3>
                      <p style={styles.cardDescription} className="card-description">
                        {facility.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}



export default Facilities;
