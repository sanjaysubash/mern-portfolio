import React from 'react';

const About = () => {
  return (
    <section style={styles.aboutSection}>
      <div style={styles.aboutContainer}>
        <div style={styles.imageContainer}>
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile.jpeg`}
            alt="Profile"
            style={styles.avatar}
          />
        </div>
        <div style={styles.bioContainer}>
          <h1 style={styles.heading}>👋 About Me</h1>
          <div style={styles.content}>
            <p style={styles.paragraph}>
              I’m a passionate software developer from Coimbatore, Tamil Nadu 🇮🇳 with a B.Tech in Computer Science and Business Systems from KIT. I build modern websites and applications using technologies like React, Node.js, Python, Java, and more.
            </p>
            <p style={styles.paragraph}>
              I'm enthusiastic about solving real-world problems, contributing to open-source, and exploring new tech trends. When I’m not coding, you’ll find me immersed in design, hardware setups, or editing videos.
            </p>
            <h3 style={styles.subHeading}>💼 My Skills</h3>
            <div style={styles.skillsFrame}>
              {skills.map((skill, index) => (
                <div key={index} style={styles.skillItem}>
                  <span style={styles.skillIcon}>{skill.icon}</span>
                  <span style={styles.skillText}>{skill.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const skills = [
  { icon: '⚛️', text: 'React - Proficient' },
  { icon: '📜', text: 'JavaScript - Advanced' },
  { icon: '🐍', text: 'Python - Intermediate' },
  { icon: '☕', text: 'Java - Intermediate' },
  { icon: '🌐', text: 'Node.js - Advanced' },
  { icon: '💾', text: 'SQL & NoSQL - Proficient' },
  { icon: '🔗', text: 'Git & GitHub - Advanced' },
  { icon: '🎨', text: 'Graphic Design - Intermediate' },
  { icon: '💡', text: 'UI/UX - Proficient' },
  { icon: '🖥️', text: 'Computer Hardware - Advanced' },
];

const styles = {
  aboutSection: {
    padding: '5rem 2rem',
    background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  aboutContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '3rem',
    width: '100%',
    maxWidth: '1200px',
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 30px rgba(0, 0, 0, 0.5)',
    padding: '3rem',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: '260px',
    height: '260px',
    borderRadius: '50%',
    objectFit: 'cover',
    border: '5px solid rgba(88, 166, 255, 0.6)',
    boxShadow: '0 4px 25px rgba(88, 166, 255, 0.6)',
    transition: 'transform 0.4s ease',
    cursor: 'pointer',
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '3.5rem',
    color: '#58a6ff',
    marginBottom: '1.5rem',
    fontWeight: '800',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  content: {
    marginBottom: '2rem',
  },
  paragraph: {
    fontSize: '1.25rem',
    lineHeight: '1.9',
    marginBottom: '1.25rem',
    color: '#d1d9e6',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#fff',
    marginBottom: '1.2rem',
    fontWeight: '600',
    borderBottom: '2px solid #58a6ff',
    paddingBottom: '0.5rem',
    width: 'fit-content',
  },
  skillsFrame: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
    gap: '1.25rem',
    background: 'rgba(255, 255, 255, 0.03)',
    borderRadius: '12px',
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    padding: '1rem',
    backgroundColor: 'rgba(255, 255, 255, 0.06)',
    borderRadius: '10px',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)',
  },
  skillItemHover: {
    transform: 'scale(1.03)',
    boxShadow: '0 4px 12px rgba(88, 166, 255, 0.4)',
  },
  skillIcon: {
    fontSize: '2rem',
  },
  skillText: {
    fontSize: '1.1rem',
    color: '#e1e5ee',
  },
};

export default About;
