import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';



// 3D Quantum Particle System Component
function QuantumParticles() {
  const particlesRef = useRef();
  const count = 3000;



  // Generate particle positions, colors, and sizes
  const [positions, colors, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);



    for (let i = 0; i < count; i++) {
      // Spread particles in a sphere
      const i3 = i * 3;
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);



      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);



      // Quantum-inspired colors (blue, cyan, purple)
      const colorChoice = Math.random();
      if (colorChoice < 0.4) {
        colors[i3] = 0.2; colors[i3 + 1] = 0.4; colors[i3 + 2] = 1.0; // Blue
      } else if (colorChoice < 0.7) {
        colors[i3] = 0.3; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1.0; // Cyan
      } else {
        colors[i3] = 0.6; colors[i3 + 1] = 0.2; colors[i3 + 2] = 1.0; // Purple
      }



      sizes[i] = Math.random() * 3 + 1;
    }



    return [positions, colors, sizes];
  }, [count]);



  // Animate particles
  useFrame((state) => {
    if (particlesRef.current) {
      const time = state.clock.getElapsedTime();
      particlesRef.current.rotation.y = time * 0.05;
      particlesRef.current.rotation.x = Math.sin(time * 0.1) * 0.1;



      // Pulse effect
      const positions = particlesRef.current.geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const i3 = i * 3;
        const x = positions[i3];
        const y = positions[i3 + 1];
        const z = positions[i3 + 2];
        
        const distance = Math.sqrt(x * x + y * y + z * z);
        const pulse = Math.sin(distance * 0.3 - time * 2) * 0.3;
        
        positions[i3] = x + pulse * Math.sin(time + i) * 0.01;
        positions[i3 + 1] = y + pulse * Math.cos(time + i) * 0.01;
        positions[i3 + 2] = z + pulse * 0.01;
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true;
    }
  });



  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}



function QuantumComputing() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#000000',
      overflow: 'hidden',
      width: '100%'
    },
    canvasContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      overflow: 'hidden'
    },
    particlesContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 0,
      pointerEvents: 'none',
      overflow: 'hidden'
    },
    particle: {
      position: 'absolute',
      background: '#2563eb',
      opacity: 0.6,
      animation: 'float 8s ease-in-out infinite',
      borderRadius: '50%'
    },
    overlay: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0, 0, 0, 0.85)',
      zIndex: 1
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%',
      position: 'relative',
      zIndex: 2,
      boxSizing: 'border-box'
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
      color: 'rgba(255, 255, 255, 0.12)',
      fontFamily: '"Inter", system-ui, sans-serif',
      textShadow: 'none',
      WebkitTextStroke: '2px rgba(255, 255, 255, 0.35)',
      textStroke: '2px rgba(255, 255, 255, 0.35)',
      WebkitTextFillColor: 'rgba(255, 255, 255, 0.12)',
      wordBreak: 'break-word'
    },
    quantumContent: {
      display: 'block',
      marginTop: '60px',
      maxWidth: '1400px',
      margin: '60px auto 0'
    },
    quantumText: {
      padding: '0',
      paddingLeft: '0',
      maxWidth: '900px',
      background: 'transparent'
    },
    badge: {
      display: 'inline-block',
      padding: '14px 32px',
      background: '#2563eb',
      color: '#ffffff',
      fontSize: '15px',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2.5px',
      position: 'relative',
      overflow: 'hidden',
      marginBottom: '30px',
      borderRadius: '0'
    },
    heading: {
      fontSize: '42px',
      fontWeight: '900',
      color: '#ffffff',
      marginBottom: '25px',
      lineHeight: '1.2',
      textTransform: 'uppercase',
      letterSpacing: '-0.5px',
      textAlign: 'left'
    },
    intro: {
      fontSize: '18px',
      lineHeight: '1.6',
      color: '#60a5fa',
      marginBottom: '50px',
      fontWeight: '600',
      letterSpacing: '0.3px',
      textAlign: 'left'
    },
    featuresGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '30px',
      marginBottom: '40px'
    },
    featureItem: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '20px',
      padding: '0',
      background: 'transparent',
      border: 'none',
      transition: 'all 0.3s ease'
    },
    iconWrapper: {
      flex: '0 0 28px',
      width: '28px',
      height: '28px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'transparent'
    },
    icon: {
      width: '100%',
      height: '100%'
    },
    featureContent: {
      flex: 1
    },
    featureText: {
      fontSize: '16px',
      color: '#ffffff',
      lineHeight: '1.7',
      fontWeight: '500',
      margin: 0,
      fontFamily: '"Inter", system-ui, sans-serif',
      textAlign: 'left'
    },
    highlightBox: {
      padding: '28px',
      background: 'rgba(37, 99, 235, 0.12)',
      border: '2px solid #2563eb',
      borderLeft: '6px solid #2563eb',
      marginTop: '40px',
      position: 'relative',
      borderRadius: '0'
    },
    highlightLabel: {
      fontSize: '12px',
      color: '#60a5fa',
      fontWeight: '700',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      marginBottom: '10px',
      display: 'block',
      textAlign: 'left'
    },
    highlightText: {
      fontSize: '18px',
      color: '#ffffff',
      fontWeight: '600',
      lineHeight: '1.7',
      margin: 0,
      textAlign: 'left'
    }
  };



  const mediaQueryStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Young+Serif&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');



    * {
      box-sizing: border-box;
    }



    body {
      overflow-x: hidden !important;
    }



    #quantum {
      overflow-x: hidden !important;
      width: 100% !important;
    }



    /* Darker outline with darker fill - white version */
    #quantum .section-title {
      color: rgba(255, 255, 255, 0.12) !important;
      text-shadow: none !important;
      -webkit-text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
      text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
      -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      background: none !important;
      max-width: 100% !important;
    }



    .feature-item:hover {
      transform: translateX(5px);
    }



    @keyframes float {
      0%, 100% {
        transform: translate(0, 0) scale(1);
        opacity: 0.3;
      }
      25% {
        transform: translate(30px, -40px) scale(1.2);
        opacity: 0.7;
      }
      50% {
        transform: translate(-20px, -80px) scale(0.8);
        opacity: 0.5;
      }
      75% {
        transform: translate(40px, -120px) scale(1.1);
        opacity: 0.8;
      }
    }



    @media (max-width: 1200px) {
      .top-label {
        font-size: 32px !important;
      }
      #quantum .section-title {
        font-size: 100px !important;
        letter-spacing: 6px !important;
        -webkit-text-stroke: 2px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .quantum-content {
        max-width: 100% !important;
      }
      .quantum-text {
        max-width: 800px !important;
      }
      .heading {
        font-size: 36px !important;
      }
      .icon-wrapper {
        width: 26px !important;
        height: 26px !important;
        flex: 0 0 26px !important;
      }
    }



    @media (max-width: 768px) {
      #quantum.section {
        padding: 60px 0 !important;
      }
      #quantum .container {
        padding: 0 1rem !important;
      }
      .top-label {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      #quantum .section-title {
        font-size: 70px !important;
        letter-spacing: 4px !important;
        margin-bottom: 2.5rem !important;
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .quantum-content {
        margin-top: 40px !important;
        max-width: 100% !important;
      }
      .quantum-text {
        padding: 0 !important;
        max-width: 100% !important;
      }
      .heading {
        font-size: 28px !important;
        margin-bottom: 20px !important;
      }
      .intro {
        font-size: 16px !important;
        margin-bottom: 40px !important;
      }
      .features-grid {
        gap: 25px !important;
      }
      .feature-item {
        gap: 15px !important;
      }
      .icon-wrapper {
        width: 26px !important;
        height: 26px !important;
        flex: 0 0 26px !important;
      }
      .feature-text {
        font-size: 15px !important;
      }
      .highlight-text {
        font-size: 16px !important;
      }
    }



    @media (max-width: 576px) {
      .top-label {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      #quantum .section-title {
        font-size: 50px !important;
        letter-spacing: 3px !important;
        margin-bottom: 2rem !important;
        -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .quantum-text {
        padding: 0 !important;
      }
      .heading {
        font-size: 24px !important;
      }
      .badge {
        font-size: 13px !important;
        padding: 12px 24px !important;
      }
      .intro {
        font-size: 15px !important;
      }
      .features-grid {
        gap: 20px !important;
      }
      .feature-item {
        gap: 12px !important;
      }
      .icon-wrapper {
        width: 24px !important;
        height: 24px !important;
        flex: 0 0 24px !important;
      }
      .feature-text {
        font-size: 14px !important;
      }
      .highlight-box {
        padding: 20px !important;
        margin-top: 30px !important;
      }
      .highlight-text {
        font-size: 15px !important;
      }
    }



    @media (max-width: 400px) {
      .top-label {
        font-size: 20px !important;
      }
      #quantum .section-title {
        font-size: 42px !important;
        letter-spacing: 2px !important;
        -webkit-text-stroke: 1px rgba(255, 255, 255, 0.35) !important;
        -webkit-text-fill-color: rgba(255, 255, 255, 0.12) !important;
      }
      .heading {
        font-size: 22px !important;
      }
      .badge {
        font-size: 12px !important;
        padding: 10px 20px !important;
        letter-spacing: 2px !important;
      }
      .icon-wrapper {
        width: 22px !important;
        height: 22px !important;
        flex: 0 0 22px !important;
      }
    }
  `;



  // Generate 2D particles
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    width: `${Math.random() * 6 + 3}px`,
    height: `${Math.random() * 6 + 3}px`,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDelay: `${Math.random() * 8}s`,
    animationDuration: `${6 + Math.random() * 6}s`
  }));



  const features = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "India's First University to launch dedicated Quantum Computing degree programs"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Pioneer in quantum education with industry-leading curriculum and world-class faculty"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13 10V3L4 14H11V21L20 10H13Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Training the nation's first generation of quantum experts with cutting-edge infrastructure"
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.8 19.2L16 11L21 7H14L12 3L10 7H3L8 11L6.2 19.2L12 15L17.8 19.2Z" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      text: "Setting new national standards in quantum technology education and research"
    }
  ];



  return (
    <>
      <style>{mediaQueryStyles}</style>
      <section id="quantum" style={styles.section} className="section">
        {/* 3D Quantum Particle System */}
        <div style={styles.canvasContainer}>
          <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
            <QuantumParticles />
          </Canvas>
        </div>



        {/* Additional 2D animated particles */}
        <div style={styles.particlesContainer}>
          {particles.map(particle => (
            <div
              key={particle.id}
              style={{
                ...styles.particle,
                width: particle.width,
                height: particle.height,
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration
              }}
            />
          ))}
        </div>



        <div style={styles.overlay} className="overlay"></div>



        <div style={styles.container} className="container">
          <div style={styles.textCenter}>
            <div style={styles.topLabel} className="top-label">
              Breaking barriers in technology education
            </div>
            <h2 style={styles.sectionTitle} className="section-title">
              QUANTUM COMPUTING
            </h2>
          </div>



          <div style={styles.quantumContent} className="quantum-content">
            <div style={styles.quantumText} className="quantum-text">
              <span style={styles.badge} className="badge">
                INDIA'S FIRST & FINEST
              </span>
              
              <h3 style={styles.heading} className="heading">
                FIRST TO LAUNCH. BEST IN CLASS.
              </h3>
              
              <p style={styles.intro} className="intro">
                Swarnnim Startup and Innovation University - pioneering quantum education in India.
              </p>



              {/* Features with Professional Blue Icons */}
              <div style={styles.featuresGrid} className="features-grid">
                {features.map((feature, index) => (
                  <div key={index} style={styles.featureItem} className="feature-item">
                    <div style={styles.iconWrapper} className="icon-wrapper">
                      <div style={styles.icon} className="icon">
                        {feature.icon}
                      </div>
                    </div>
                    <div style={styles.featureContent} className="feature-content">
                      <p style={styles.featureText} className="feature-text">
                        {feature.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>



              <div style={styles.highlightBox} className="highlight-box">
                <span style={styles.highlightLabel}>THE QUANTUM ADVANTAGE</span>
                <p style={styles.highlightText} className="highlight-text">
                  Join SWARRNIM university that launched India's quantum revolution. Experience unparalleled excellence in quantum education that no one else can match.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



export default QuantumComputing;
