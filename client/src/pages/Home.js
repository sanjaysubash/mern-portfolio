import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section style={styles.homeSection}>
      {/* Header Title */}
      <motion.h1
        initial={{ opacity: 0, y: -80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.heading}
      >
        Hi, I'm Sanjay S 👋
      </motion.h1>

      {/* Typing Effect */}
      <ReactTyped
        strings={[
          'Software Developer 💻',
          'Web Developer 🌐',
          'UI/UX Designer 🎨',
          'Tech Enthusiast 🚀',
        ]}
        typeSpeed={40}
        backSpeed={30}
        loop
        style={styles.typed}
      />

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={styles.paragraph}
      >
        I specialize in Java, Python, and the MERN stack. From dynamic web apps to stunning UI/UX
        designs, I bring creativity and functionality together. Featured projects like ADRIN and
        Splitter highlight my passion for development and design.
      </motion.p>

      {/* Featured Projects */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        style={styles.subHeading}
      >
        🌟 Featured Projects
      </motion.h2>

      <div style={styles.projectContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{
              scale: 1.05,
              rotateX: 5,
              rotateY: -5,
              boxShadow: '0 20px 30px rgba(0,0,0,0.5)',
            }}
            transition={{ type: 'spring', stiffness: 200, damping: 10 }}
            style={styles.projectCard}
          >
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDesc}>{project.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Call-to-Action Buttons */}
      <div style={styles.buttonGroup}>
        <motion.a href="/projects" whileHover={{ scale: 1.1 }}>
          <button style={styles.projectButton}>🚀 View Projects</button>
        </motion.a>

        <motion.a
          href="https://drive.google.com/file/d/1hk6gan6ANV-mgNLkrkQmXjHlFK-E6-nL/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
        >
          <button style={styles.resumeButton}>📄 Download Resume</button>
        </motion.a>
      </div>
    </section>
  );
};

// 🧠 Project Data
const projects = [
  {
    title: 'ADRIN',
    description: 'A MERN stack-based sports information platform with real-time analytics.',
  },
  {
    title: 'Splitter',
    description: 'Smart expense-splitting tool with responsive UI and social sharing.',
  },
  {
    title: 'VisionBoard AI',
    description: 'AI-generated inspiration board builder using OpenAI + Firebase.',
  },
];

// 🎨 Styles
const styles = {
  homeSection: {
    padding: '6rem 2rem',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at top, #0f2027, #203a43, #2c5364)',
    color: '#ffffff',
    fontFamily: "'Poppins', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  heading: {
    fontSize: '3.8rem',
    fontWeight: 'bold',
    color: '#58a6ff',
    textShadow: '0 5px 20px rgba(0,0,0,0.5)',
  },
  typed: {
    fontSize: '1.8rem',
    marginTop: '0.5rem',
    color: '#ffb347',
    textShadow: '0px 2px 4px rgba(0, 0, 0, 0.3)',
  },
  paragraph: {
    maxWidth: '800px',
    fontSize: '1.25rem',
    lineHeight: '2',
    color: '#d1d5db',
    marginTop: '2rem',
    textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
  },
  subHeading: {
    fontSize: '2.5rem',
    color: '#ff7f50',
    marginTop: '4rem',
    textShadow: '0 3px 6px rgba(0,0,0,0.4)',
  },
  projectContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2rem',
    justifyContent: 'center',
    marginTop: '2rem',
  },
  projectCard: {
    width: '280px',
    padding: '1.8rem',
    borderRadius: '15px',
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 20px rgba(0,0,0,0.3)',
    transition: 'all 0.4s ease',
    cursor: 'pointer',
  },
  projectTitle: {
    fontSize: '1.4rem',
    marginBottom: '0.75rem',
    color: '#58a6ff',
  },
  projectDesc: {
    fontSize: '1rem',
    color: '#d1d5db',
    lineHeight: '1.6',
  },
  buttonGroup: {
    marginTop: '3rem',
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  projectButton: {
    background: 'linear-gradient(145deg, #58a6ff, #0077ff)',
    color: '#fff',
    padding: '0.8rem 1.6rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
  },
  resumeButton: {
    background: 'linear-gradient(145deg, #28a745, #218838)',
    color: '#fff',
    padding: '0.8rem 1.6rem',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    boxShadow: '0 6px 12px rgba(0,0,0,0.3)',
    transition: 'all 0.3s ease',
  },
};

export default Home;
