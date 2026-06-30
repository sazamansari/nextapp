import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundGlow}></div>
      <div className={`container ${styles.heroContainer}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot}></span>
            <span>Empowering University Students</span>
          </div>
          <h1 className={styles.title}>
            Master the Future with <br />
            <span className="text-gradient">Excellence Education</span>
          </h1>
          <p className={styles.description}>
            Elevate your career with premium, industry-aligned training in Cloud, Fullstack, Java, and DBMS. Partnered with top universities to bring you world-class education.
          </p>
          <div className={styles.ctaGroup}>
            <button className="btn-primary">Explore Courses</button>
            <button className="btn-secondary">View University Partners</button>
          </div>
          
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <h3>10k+</h3>
              <p>Students Trained</p>
            </div>
            <div className={styles.statItem}>
              <h3>5+</h3>
              <p>University Partners</p>
            </div>
            <div className={styles.statItem}>
              <h3>98%</h3>
              <p>Placement Rate</p>
            </div>
          </div>
        </div>
        
        <div className={styles.visual}>
          <div className={`${styles.glassCard} ${styles.card1} animate-float`}>
            <div className={styles.iconWrapper}>☁️</div>
            <div>
              <h4>Cloud Architecture</h4>
              <p>AWS & Azure Mastery</p>
            </div>
          </div>
          <div className={`${styles.glassCard} ${styles.card2} animate-float`} style={{ animationDelay: '1s' }}>
            <div className={styles.iconWrapper}>💻</div>
            <div>
              <h4>Fullstack Web</h4>
              <p>React & Next.js Pro</p>
            </div>
          </div>
          <div className={`${styles.glassCard} ${styles.card3} animate-float`} style={{ animationDelay: '2s' }}>
            <div className={styles.iconWrapper}>☕</div>
            <div>
              <h4>Java Fullstack</h4>
              <p>Enterprise grade APIs</p>
            </div>
          </div>
          <div className={styles.glowOrb}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
