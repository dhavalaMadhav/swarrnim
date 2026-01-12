import React from 'react';



function Placements() {
  const styles = {
    section: {
      padding: '80px 0',
      position: 'relative',
      background: '#ffffff',
      zIndex: 10,
      isolation: 'isolate',
      overflow: 'hidden',
      width: '100%'
    },
    container: {
      maxWidth: '1400px',
      margin: '0 auto',
      padding: '0 2rem',
      width: '100%',
      boxSizing: 'border-box',
      overflow: 'hidden'
    },
    textCenter: {
      textAlign: 'center',
      marginBottom: '2.5rem',
      overflow: 'hidden',
      width: '100%'
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
      WebkitTextFillColor: 'rgba(0, 0, 0, 0.12)',
      maxWidth: '100%',
      wordWrap: 'break-word'
    },
    achieversHeader: {
      fontSize: '32px',
      fontWeight: '400',
      color: '#c53030',
      textAlign: 'center',
      marginBottom: '40px',
      marginTop: '0px',
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontFamily: '"Young Serif", Georgia, serif',
      display: 'none'
    },
    contentWrapper: {
      marginTop: '60px',
      marginBottom: '60px'
    },
    contentGrid: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.5fr',
      gap: '30px',
      position: 'relative',
      overflow: 'hidden'
    },
    verticalDivider: {
      position: 'absolute',
      left: 'calc(40% - 15px)',
      top: 0,
      bottom: 0,
      width: '2px',
      background: 'rgba(0, 0, 0, 0.1)'
    },
    leftSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingRight: '15px',
      gap: '30px'
    },
    packageContainer: {
      background: 'linear-gradient(135deg, #1e3a8a 0%, #0f172a 50%, #000000 100%)',
      padding: '30px 35px',
      borderRadius: '16px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '25px',
      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
      width: '100%',
      maxWidth: '350px'
    },
    packageItem: {
      textAlign: 'center',
      width: '100%'
    },
    packageNumberWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '4px',
      marginBottom: '8px'
    },
    packageNumber: {
      fontSize: '85px',
      fontWeight: '400',
      color: '#ffffff',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1',
      textShadow: '0 4px 20px rgba(255, 255, 255, 0.3)'
    },
    packageLPA: {
      fontSize: '24px',
      fontWeight: '400',
      color: '#ffffff',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1',
      textShadow: '0 4px 20px rgba(255, 255, 255, 0.3)',
      letterSpacing: '1px'
    },
    packageLabel: {
      fontSize: '15px',
      fontWeight: '600',
      color: 'rgba(255, 255, 255, 0.9)',
      textTransform: 'uppercase',
      letterSpacing: '2px',
      fontFamily: '"Inter", system-ui, sans-serif',
      lineHeight: '1.4'
    },
    packageDivider: {
      width: '70%',
      height: '2px',
      background: 'rgba(255, 255, 255, 0.2)'
    },
    desktopAchieversHeader: {
      fontSize: '32px',
      fontWeight: '400',
      color: '#c53030',
      textAlign: 'right',
      marginTop: '0px',
      marginBottom: '30px',
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontFamily: '"Young Serif", Georgia, serif',
      width: '100%'
    },
    desktopStudentSection: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      gap: '20px'
    },
    rightSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      paddingLeft: '15px'
    },
    studentCardsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '0',
      position: 'relative'
    },
    studentCard: {
      background: 'transparent',
      border: 'none',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      transition: 'all 0.3s ease',
      position: 'relative',
      borderRight: '1px solid rgba(0, 0, 0, 0.08)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
    },
    studentCardTop: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '12px'
    },
    studentCardBottom: {
      display: 'flex',
      flexDirection: 'column',
      gap: '6px'
    },
    studentPackageWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '3px',
      flex: 1
    },
    studentImageWrapper: {
      flex: '0 0 90px',
      width: '90px',
      height: '90px'
    },
    studentImage: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px dotted #2563eb',
      transition: 'all 0.3s ease'
    },
    studentName: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#000',
      textTransform: 'uppercase',
      letterSpacing: '0.3px',
      fontFamily: '"Inter", system-ui, sans-serif',
      lineHeight: '1.3'
    },
    studentPackageNumber: {
      fontSize: '42px',
      fontWeight: '400',
      color: '#2563eb',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1'
    },
    studentPackageLPA: {
      fontSize: '15px',
      fontWeight: '400',
      color: '#2563eb',
      fontFamily: '"Young Serif", Georgia, serif',
      lineHeight: '1',
      letterSpacing: '0.5px'
    },
    studentCompany: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#666',
      fontFamily: '"Inter", system-ui, sans-serif',
      lineHeight: '1.3'
    },
    companiesSection: {
      marginTop: '50px',
      padding: '0'
    },
    companiesHeader: {
      fontSize: '32px',
      fontWeight: '400',
      color: '#000',
      textAlign: 'center',
      marginBottom: '30px',
      textTransform: 'none',
      letterSpacing: '0.5px',
      fontFamily: '"Young Serif", Georgia, serif'
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
      gap: '15px',
      WebkitOverflowScrolling: 'touch',
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
      padding: '10px 5px'
    },
    carouselSlide: {
      minWidth: '100%',
      scrollSnapAlign: 'start',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '15px',
      flexShrink: 0
    },
    companyCard: {
      background: '#fafafa',
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '2px solid rgba(37, 99, 235, 0.1)',
      transition: 'all 0.3s ease',
      height: '140px',
      width: '100%',
      minWidth: '0',
      maxWidth: '100%',
      overflow: 'hidden',
      position: 'relative',
      boxSizing: 'border-box'
    },
    companyLogoContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      height: '100%',
      position: 'relative'
    },
    companyLogo: {
      maxWidth: '90%',
      maxHeight: '90px',
      width: 'auto',
      height: 'auto',
      objectFit: 'contain',
      transition: 'all 0.3s ease',
      display: 'block',
      margin: '0 auto'
    },
    companyName: {
      fontSize: '18px',
      fontWeight: '700',
      color: '#000',
      textAlign: 'center',
      letterSpacing: '-0.3px',
      textTransform: 'uppercase',
      fontFamily: '"Inter", system-ui, sans-serif'
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
      background: '#2563eb'
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



    #placements {
      overflow-x: hidden !important;
      width: 100% !important;
    }



    /* Default desktop style */
    .student-cards-grid {
      grid-template-columns: repeat(3, 1fr) !important;
    }



    /* Remove right border from last column (every 3rd item) */
    .student-cards-grid .student-card:nth-child(3n) {
      border-right: none !important;
    }



    /* Remove bottom border from last row (last 3 items) */
    .student-cards-grid .student-card:nth-last-child(-n+3) {
      border-bottom: none !important;
    }



    /* Hide mobile achievers header on desktop */
    .achievers-header {
      display: none !important;
    }



    /* Hide desktop student section on desktop - shown on right */
    .desktop-student-section {
      display: none !important;
    }



    /* Same title style as other sections */
    #placements .section-title {
      color: rgba(0, 0, 0, 0.12) !important;
      text-shadow: none !important;
      -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
      -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      background: none !important;
      max-width: 100% !important;
      overflow: hidden !important;
    }



    .carousel-track::-webkit-scrollbar {
      display: none;
    }



    .student-card:hover {
      background: rgba(37, 99, 235, 0.02);
      transform: scale(1.02);
    }



    .student-card:hover .student-image {
      border-color: #c53030;
      transform: scale(1.05);
    }



    /* Remove package container hover effect */
    .package-container {
      transition: none !important;
    }



    .company-card:hover {
      border-color: #2563eb;
      background: #fff;
    }



    .company-card:hover .company-logo {
      transform: scale(1.08);
    }



    .dot:hover {
      background: #60a5fa;
    }



    @media (max-width: 1200px) {
      .top-label {
        font-size: 32px !important;
      }
      #placements .section-title {
        font-size: 80px !important;
        letter-spacing: 4px !important;
        -webkit-text-stroke: 2px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .content-grid {
        gap: 25px !important;
      }
      .left-section {
        padding-right: 12px !important;
      }
      .right-section {
        padding-left: 12px !important;
      }
      .vertical-divider {
        left: calc(40% - 12px) !important;
      }
      .package-container {
        padding: 28px 30px !important;
        gap: 22px !important;
        max-width: 320px !important;
      }
      .package-number {
        font-size: 75px !important;
      }
      .package-lpa {
        font-size: 22px !important;
      }
      .package-label {
        font-size: 14px !important;
      }
      .desktop-achievers-header {
        font-size: 28px !important;
        margin-bottom: 25px !important;
      }
      .student-card {
        padding: 18px !important;
        gap: 14px !important;
      }
      .student-card-top {
        gap: 10px !important;
      }
      .student-card-bottom {
        gap: 5px !important;
      }
      .student-name {
        font-size: 14px !important;
      }
      .student-package-number {
        font-size: 38px !important;
      }
      .student-package-lpa {
        font-size: 14px !important;
      }
      .student-company {
        font-size: 12px !important;
      }
      .student-image-wrapper {
        flex: 0 0 85px !important;
        width: 85px !important;
        height: 85px !important;
      }
      .companies-header {
        font-size: 28px !important;
      }
      .carousel-slide {
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 12px !important;
      }
      .company-card {
        height: 130px !important;
        padding: 15px !important;
        min-height: 130px !important;
        max-height: 130px !important;
      }
      .company-logo {
        max-height: 80px !important;
      }
    }



    @media (max-width: 1024px) {
      .content-grid {
        grid-template-columns: 1fr !important;
        gap: 0px !important;
      }
      .vertical-divider {
        display: none !important;
      }
      .left-section {
        padding-right: 0 !important;
        margin-bottom: 0px !important;
        align-items: stretch !important;
        display: flex !important;
        flex-direction: column !important;
      }
      .package-container {
        flex-direction: row !important;
        padding: 35px 50px !important;
        gap: 50px !important;
        max-width: 100% !important;
        margin-bottom: 30px !important;
        order: 1 !important;
      }
      .package-item {
        flex: 1 !important;
      }
      .package-divider {
        width: 2px !important;
        height: 100px !important;
      }
      .achievers-header {
        display: block !important;
        margin-top: 0px !important;
        margin-bottom: 25px !important;
        order: 2 !important;
        text-align: center !important;
      }
      .desktop-achievers-header {
        display: none !important;
      }
      .desktop-student-section {
        display: grid !important;
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 0px !important;
        order: 3 !important;
      }
      /* Remove right border from even columns (every 2nd item) on tablet/mobile */
      .desktop-student-section .student-card:nth-child(2n) {
        border-right: none !important;
      }
      /* Remove 3n rule for mobile */
      .desktop-student-section .student-card:nth-child(3n) {
        border-right: 1px solid rgba(0, 0, 0, 0.08) !important;
      }
      /* Remove bottom border from last row (last 2 items) on tablet/mobile */
      .desktop-student-section .student-card:nth-last-child(-n+2) {
        border-bottom: none !important;
      }
      /* Override the 3-item rule */
      .desktop-student-section .student-card:nth-last-child(-n+3) {
        border-bottom: 1px solid rgba(0, 0, 0, 0.08) !important;
      }
      /* But still remove for actual last 2 */
      .desktop-student-section .student-card:nth-last-child(-n+2) {
        border-bottom: none !important;
      }
      .right-section {
        display: none !important;
      }
      .carousel-slide {
        grid-template-columns: repeat(4, 1fr) !important;
        gap: 10px !important;
      }
      .company-card {
        height: 120px !important;
        padding: 12px !important;
        min-height: 120px !important;
        max-height: 120px !important;
      }
      .company-logo {
        max-height: 70px !important;
      }
    }



    @media (max-width: 768px) {
      #placements.section {
        padding: 60px 0 !important;
      }
      #placements .container {
        padding: 0 1rem !important;
      }
      .top-label {
        font-size: 26px !important;
        margin-bottom: 15px !important;
      }
      #placements .section-title {
        font-size: 60px !important;
        letter-spacing: 3px !important;
        margin-bottom: 2.5rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .content-wrapper {
        margin-top: 40px !important;
        margin-bottom: 25px !important;
      }
      .package-container {
        padding: 30px 35px !important;
        gap: 35px !important;
        border-radius: 14px !important;
        margin-bottom: 25px !important;
      }
      .package-number {
        font-size: 70px !important;
      }
      .package-lpa {
        font-size: 20px !important;
      }
      .package-label {
        font-size: 13px !important;
        letter-spacing: 1.5px !important;
      }
      .package-divider {
        height: 90px !important;
      }
      .achievers-header {
        font-size: 24px !important;
        margin-bottom: 20px !important;
      }
      .student-card {
        padding: 16px !important;
        gap: 12px !important;
      }
      .student-card-top {
        gap: 8px !important;
      }
      .student-card-bottom {
        gap: 5px !important;
      }
      .student-image-wrapper {
        flex: 0 0 80px !important;
        width: 80px !important;
        height: 80px !important;
      }
      .student-name {
        font-size: 13px !important;
      }
      .student-package-number {
        font-size: 36px !important;
      }
      .student-package-lpa {
        font-size: 14px !important;
      }
      .student-company {
        font-size: 12px !important;
      }
      .companies-section {
        margin-top: 35px !important;
      }
      .companies-header {
        font-size: 24px !important;
        margin-bottom: 25px !important;
      }
      .carousel-slide {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 12px !important;
      }
      .company-card {
        height: 110px !important;
        padding: 10px !important;
        min-height: 110px !important;
        max-height: 110px !important;
      }
      .company-logo {
        max-height: 70px !important;
      }
    }



    @media (max-width: 576px) {
      .top-label {
        font-size: 22px !important;
        margin-bottom: 12px !important;
      }
      #placements .section-title {
        font-size: 48px !important;
        letter-spacing: 2px !important;
        margin-bottom: 2rem !important;
        -webkit-text-stroke: 1.5px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .package-container {
        flex-direction: column !important;
        padding: 28px 25px !important;
        gap: 22px !important;
        margin-bottom: 20px !important;
      }
      .package-number {
        font-size: 60px !important;
      }
      .package-lpa {
        font-size: 18px !important;
      }
      .package-label {
        font-size: 12px !important;
      }
      .package-divider {
        width: 70% !important;
        height: 2px !important;
      }
      .achievers-header {
        font-size: 20px !important;
        margin-bottom: 18px !important;
      }
      .content-wrapper {
        margin-bottom: 20px !important;
      }
      .student-card {
        padding: 14px !important;
        gap: 10px !important;
      }
      .student-card-top {
        gap: 6px !important;
      }
      .student-card-bottom {
        gap: 4px !important;
      }
      .student-image-wrapper {
        flex: 0 0 75px !important;
        width: 75px !important;
        height: 75px !important;
      }
      .student-name {
        font-size: 12px !important;
      }
      .student-package-number {
        font-size: 32px !important;
      }
      .student-package-lpa {
        font-size: 13px !important;
      }
      .student-company {
        font-size: 11px !important;
      }
      .companies-header {
        font-size: 20px !important;
      }
      .carousel-slide {
        gap: 10px !important;
      }
      .company-card {
        height: 100px !important;
        padding: 8px !important;
        min-height: 100px !important;
        max-height: 100px !important;
      }
      .company-logo {
        max-height: 60px !important;
      }
    }



    @media (max-width: 400px) {
      .top-label {
        font-size: 20px !important;
      }
      #placements .section-title {
        font-size: 38px !important;
        letter-spacing: 1px !important;
        -webkit-text-stroke: 1px rgba(0, 0, 0, 0.35) !important;
        -webkit-text-fill-color: rgba(0, 0, 0, 0.12) !important;
      }
      .package-number {
        font-size: 52px !important;
      }
      .package-lpa {
        font-size: 16px !important;
      }
      .package-label {
        font-size: 11px !important;
      }
      .achievers-header {
        font-size: 18px !important;
      }
      .student-card {
        padding: 12px !important;
      }
      .student-card-top {
        gap: 5px !important;
      }
      .student-image-wrapper {
        flex: 0 0 70px !important;
        width: 70px !important;
        height: 70px !important;
      }
      .student-name {
        font-size: 11px !important;
      }
      .student-package-number {
        font-size: 28px !important;
      }
      .student-package-lpa {
        font-size: 12px !important;
      }
      .student-company {
        font-size: 10px !important;
      }
      .carousel-slide {
        grid-template-columns: repeat(2, 1fr) !important;
      }
      .company-card {
        height: 90px !important;
        padding: 6px !important;
        min-height: 90px !important;
        max-height: 90px !important;
      }
      .company-logo {
        max-height: 55px !important;
      }
    }
  `;



  // Student data
  const students = [
    {
      name: 'Rahul Sharma',
      packageNumber: '84',
      company: 'Google',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
    },
    {
      name: 'Priya Patel',
      packageNumber: '48',
      company: 'Microsoft',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
    },
    {
      name: 'Arjun Mehta',
      packageNumber: '36',
      company: 'Amazon',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
    },
    {
      name: 'Sneha Reddy',
      packageNumber: '32',
      company: 'Goldman Sachs',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
    },
    {
      name: 'Vikram Singh',
      packageNumber: '28',
      company: 'Flipkart',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop'
    },
    {
      name: 'Ananya Gupta',
      packageNumber: '25',
      company: 'Accenture',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop'
    }
  ];



  // Company data
  const companies = [
    [
      { name: 'Google', logo: '/logos/google.png' },
      { name: 'Unilever', logo: '/logos/unilever.png' },
      { name: 'IBM', logo: '/logos/ibm.png' },
      { name: 'Microsoft', logo: '/logos/microsoft.png' }
    ],
    [
      { name: 'Reliance', logo: '/logos/reliance.png' },
      { name: 'TCS', logo: '/logos/tcs.png' },
      { name: 'Infosys', logo: '/logos/infosys.png' },
      { name: 'L&T Infotech', logo: '/logos/lnt.png' }
    ],
    [
      { name: 'Tech Mahindra', logo: '/logos/techmahindra.png' },
      { name: 'Accenture', logo: '/logos/accenture.png' },
      { name: 'Indian Navy', logo: '/logos/indiannavy.png' },
      { name: 'HDFC Life', logo: '/logos/hdfclife.png' }
    ],
    [
      { name: 'Coca-Cola', logo: '/logos/cocacola.png' },
      { name: 'Dell', logo: '/logos/dell.png' },
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
            <div style={styles.topLabel} className="top-label">
              From Classroom to Boardroom
            </div>
            <h2 style={styles.sectionTitle} className="section-title">
              PLACEMENTS
            </h2>
          </div>



          <div style={styles.contentWrapper} className="content-wrapper">
            {/* Two Column Layout with Vertical Divider */}
            <div style={styles.contentGrid} className="content-grid">
              {/* Vertical Divider Line */}
              <div style={styles.verticalDivider} className="vertical-divider"></div>



              {/* Left Section - Package Box Only */}
              <div style={styles.leftSection} className="left-section">
                {/* Package Container (Smaller) */}
                <div style={styles.packageContainer} className="package-container">
                  {/* 84 LPA */}
                  <div style={styles.packageItem} className="package-item">
                    <div style={styles.packageNumberWrapper} className="package-number-wrapper">
                      <span style={styles.packageNumber} className="package-number">84</span>
                      <span style={styles.packageLPA} className="package-lpa">LPA</span>
                    </div>
                    <div style={styles.packageLabel} className="package-label">
                      Highest National<br />Package
                    </div>
                  </div>



                  {/* Divider */}
                  <div style={styles.packageDivider} className="package-divider"></div>



                  {/* 48 LPA */}
                  <div style={styles.packageItem} className="package-item">
                    <div style={styles.packageNumberWrapper} className="package-number-wrapper">
                      <span style={styles.packageNumber} className="package-number">48</span>
                      <span style={styles.packageLPA} className="package-lpa">LPA</span>
                    </div>
                    <div style={styles.packageLabel} className="package-label">
                      Highest International<br />Package
                    </div>
                  </div>
                </div>



                {/* Mobile "Our Top Achievers" Heading - Shows only on mobile/tablet */}
                <h3 style={styles.achieversHeader} className="achievers-header">
                  Our Top Achievers
                </h3>



                {/* Student Cards for Mobile - Shows only on mobile/tablet */}
                <div style={styles.desktopStudentSection} className="desktop-student-section">
                  {students.map((student, index) => (
                    <div key={`mobile-${index}`} style={styles.studentCard} className="student-card">
                      {/* Top Section: Package Left, Image Right */}
                      <div style={styles.studentCardTop} className="student-card-top">
                        <div style={styles.studentPackageWrapper} className="student-package-wrapper">
                          <div style={styles.studentPackageNumber} className="student-package-number">
                            {student.packageNumber}
                          </div>
                          <div style={styles.studentPackageLPA} className="student-package-lpa">
                            LPA
                          </div>
                        </div>
                        <div style={styles.studentImageWrapper} className="student-image-wrapper">
                          <img 
                            src={student.image} 
                            alt={student.name}
                            style={styles.studentImage}
                            className="student-image"
                          />
                        </div>
                      </div>
                      {/* Bottom Section: Name and Company */}
                      <div style={styles.studentCardBottom} className="student-card-bottom">
                        <div style={styles.studentName} className="student-name">
                          {student.name}
                        </div>
                        <div style={styles.studentCompany} className="student-company">
                          {student.company}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>



              {/* Right Section - For Desktop: Heading + Student Cards Grid */}
              <div style={styles.rightSection} className="right-section">
                {/* Desktop "Our Top Achievers" Heading - Right side top */}
                <h3 style={styles.desktopAchieversHeader} className="desktop-achievers-header">
                  Our Top Achievers
                </h3>



                {/* Student Cards Grid for Desktop */}
                <div style={styles.studentCardsGrid} className="student-cards-grid">
                  {students.map((student, index) => (
                    <div key={`desktop-${index}`} style={styles.studentCard} className="student-card">
                      {/* Top Section: Package Left, Image Right */}
                      <div style={styles.studentCardTop} className="student-card-top">
                        <div style={styles.studentPackageWrapper} className="student-package-wrapper">
                          <div style={styles.studentPackageNumber} className="student-package-number">
                            {student.packageNumber}
                          </div>
                          <div style={styles.studentPackageLPA} className="student-package-lpa">
                            LPA
                          </div>
                        </div>
                        <div style={styles.studentImageWrapper} className="student-image-wrapper">
                          <img 
                            src={student.image} 
                            alt={student.name}
                            style={styles.studentImage}
                            className="student-image"
                          />
                        </div>
                      </div>
                      {/* Bottom Section: Name and Company */}
                      <div style={styles.studentCardBottom} className="student-card-bottom">
                        <div style={styles.studentName} className="student-name">
                          {student.name}
                        </div>
                        <div style={styles.studentCompany} className="student-company">
                          {student.company}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>



          {/* Recruiting Partners Section */}
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
                {companies.map((group, index) => (
                  <div 
                    key={index} 
                    style={styles.carouselSlide} 
                    className="carousel-slide"
                  >
                    {group.map((company, companyIndex) => (
                      <div 
                        key={companyIndex}
                        style={styles.companyCard} 
                        className="company-card"
                      >
                        <div style={styles.companyLogoContainer} className="company-logo-container">
                          <img
                            src={company.logo}
                            alt={`${company.name} logo`}
                            style={styles.companyLogo}
                            className="company-logo"
                            onError={(e) => {
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
