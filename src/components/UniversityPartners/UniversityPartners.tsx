import styles from './UniversityPartners.module.css';

const partners = [
  { name: 'LPU', desc: 'Lovely Professional University' },
  { name: 'Chitkara', desc: 'Chitkara University' },
  { name: 'Parul', desc: 'Parul University' },
  { name: 'VIS', desc: 'Vidyalankar Institute' },
  { name: 'Hitbullseye', desc: 'Career Partner' },
];

const UniversityPartners = () => {
  return (
    <section id="partners" className={styles.partnersSection}>
      <div className={`container ${styles.partnersContainer}`}>
        <div className={styles.header}>
          <h2>Trusted by Top <span className="text-gradient">Universities</span></h2>
          <p>We partner with leading institutions to deliver premium education right at your campus.</p>
        </div>
        
        <div className={styles.marqueeContainer}>
          <div className={styles.marquee}>
            {[...partners, ...partners].map((partner, index) => (
              <div key={index} className={styles.partnerCard}>
                <h3>{partner.name}</h3>
                <p>{partner.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversityPartners;
