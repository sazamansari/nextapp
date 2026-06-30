import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/" className={styles.logo}>
          <span className="text-gradient">Excellence</span> Education
        </Link>
        <nav className={styles.nav}>
          <ul className={styles.navLinks}>
            <li><Link href="#courses">Courses</Link></li>
            <li><Link href="#partners">Partners</Link></li>
            <li><Link href="#about">About</Link></li>
          </ul>
          <div className={styles.actions}>
            <button className="btn-secondary">Log In</button>
            <button className="btn-primary">Enroll Now</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
