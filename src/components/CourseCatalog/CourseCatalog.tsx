import styles from './CourseCatalog.module.css';

const courses = [
  {
    id: 1,
    title: 'Cloud Computing Mastery',
    icon: '☁️',
    description: 'Master AWS, Azure, and Google Cloud. Learn to architect scalable, secure, and highly available systems.',
    duration: '12 Weeks',
    level: 'Advanced',
    color: '#06b6d4'
  },
  {
    id: 2,
    title: 'Fullstack Web Development',
    icon: '💻',
    description: 'Build robust web applications from scratch using modern React, Next.js, Node.js, and MongoDB.',
    duration: '16 Weeks',
    level: 'Intermediate',
    color: '#6366f1'
  },
  {
    id: 3,
    title: 'Java Fullstack Engineer',
    icon: '☕',
    description: 'Enterprise-level software development using Java Spring Boot, Hibernate, and modern frontend frameworks.',
    duration: '20 Weeks',
    level: 'Beginner to Pro',
    color: '#ec4899'
  },
  {
    id: 4,
    title: 'Database Management Systems (DBMS)',
    icon: '🗄️',
    description: 'Deep dive into SQL, NoSQL, data modeling, indexing, and high-performance query optimization.',
    duration: '8 Weeks',
    level: 'Foundational',
    color: '#8b5cf6'
  }
];

const CourseCatalog = () => {
  return (
    <section id="courses" className={styles.coursesSection}>
      <div className={`container ${styles.coursesContainer}`}>
        <div className={styles.header}>
          <h2>Explore Our <span className="text-gradient">Premium Courses</span></h2>
          <p>Curriculum designed by industry experts to make you job-ready from day one.</p>
        </div>
        
        <div className={styles.grid}>
          {courses.map((course) => (
            <div key={course.id} className={styles.courseCard}>
              <div 
                className={styles.cardGlow} 
                style={{ backgroundColor: course.color }}
              ></div>
              <div className={styles.cardContent}>
                <div className={styles.iconWrapper} style={{ backgroundColor: `${course.color}20`, color: course.color }}>
                  {course.icon}
                </div>
                <h3>{course.title}</h3>
                <p>{course.description}</p>
                <div className={styles.meta}>
                  <span>⏱️ {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <button className={`btn-secondary ${styles.enrollBtn}`}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalog;
