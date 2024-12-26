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
          <h1 style={styles.heading}>About Me</h1>
          <div style={styles.content}>
            <p style={styles.paragraph}>
              I am a software developer based in Coimbatore, Tamil Nadu. I hold a B.Tech in Computer Science and Business Systems from KIT.
              I have experience in developing websites and applications using various technologies such as React, JavaScript, Python, Java, and more.
            </p>
            <p style={styles.paragraph}>
              In my free time, I enjoy exploring new technologies, contributing to open-source, and solving problems.
            </p>
            <h3 style={styles.subHeading}>Skills</h3>
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
  { icon: '💾', text: 'SQL & NoSQL Databases - Proficient' },
  { icon: '🔗', text: 'Version Control (Git, GitHub) - Advanced' },
  { icon: '🎨', text: 'Graphics Design - Intermediate' },
  { icon: '💡', text: 'UI/UX Design - Proficient' },
  { icon: '🖥️', text: 'Computer Hardware - Advanced' },
];

const styles = {
  aboutSection: {
    padding: '6rem 2rem',
    backgroundColor: '#1c1f26',
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
  },
  aboutContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '3rem',
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    borderRadius: '50%',
    width: '250px',
    height: '250px',
    objectFit: 'cover',
    border: '6px solid #58a6ff',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  bioContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  heading: {
    fontSize: '3rem',
    color: '#58a6ff',
    marginBottom: '1.5rem',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  content: {
    marginBottom: '2rem',
  },
  paragraph: {
    fontSize: '1.25rem',
    lineHeight: '1.8',
    marginBottom: '1.5rem',
    color: '#b0b3b8',
  },
  subHeading: {
    fontSize: '2rem',
    color: '#58a6ff',
    marginBottom: '1rem',
    fontWeight: '500',
  },
  skillsFrame: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '1.5rem',
    padding: '1.5rem',
    border: '2px solid #58a6ff',
    borderRadius: '8px',
    backgroundColor: '#1e222a',
  },
  skillItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    padding: '1rem',
    borderRadius: '6px',
    backgroundColor: '#2c313a',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  skillIcon: {
    fontSize: '2rem',
  },
  skillText: {
    fontSize: '1.15rem',
    color: '#b0b3b8',
  },
};

export default About;
