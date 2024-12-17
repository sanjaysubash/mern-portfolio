import React from 'react';
import { ReactTyped } from 'react-typed'; // Correct named import
import { motion } from 'framer-motion';

const Home = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '5rem 1rem',
    background: 'linear-gradient(135deg, #1c1f26, #343a40)',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
  };

  const buttonStyle = {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    margin: '0.5rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  };

  return (
    <section style={sectionStyle}>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: '2.5rem', fontWeight: 'bold' }}
      >
        Hi, I'm Sanjay S 👋
      </motion.h1>

      <ReactTyped
        strings={['Web Developer', 'Freelancer', 'Tech Enthusiast']}
        typeSpeed={50}
        backSpeed={30}
        loop
        style={{ fontSize: '1.5rem', marginTop: '1rem' }}
      />

      <p style={{ margin: '1.5rem auto', maxWidth: '600px', lineHeight: '1.6' }}>
        I love building interactive and scalable web applications. Explore my work and get in touch!
      </p>

      <div>
      <a href="./Projects">
          <button style={buttonStyle}>View Projects</button>
        </a>
        <a href="/resume.pdf" download>
          <button style={buttonStyle}>Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Home;
