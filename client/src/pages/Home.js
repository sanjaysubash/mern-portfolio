import React from 'react';
import { ReactTyped } from 'react-typed';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <section
      style={{
        textAlign: 'center',
        padding: '4rem 1rem',
        background: 'linear-gradient(135deg, #1c1f26, #2c5364)',
        color: '#ffffff',
        fontFamily: "'Poppins', sans-serif",
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Header Section */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{
          fontSize: '3rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          color: '#ff7f50', // Coral for header
          textShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
        }}
      >
        Hi, I'm Sanjay S 👋
      </motion.h1>

      <ReactTyped
        strings={['Software Developer', 'Web Developer', 'UI/UX Designer', 'Tech Enthusiast']}
        typeSpeed={50}
        backSpeed={30}
        loop
        style={{
          fontSize: '1.5rem',
          color: '#58a6ff', // Light blue for typed text
          textShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
        }}
      />

      {/* Intro Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{
          margin: '2rem auto',
          maxWidth: '700px',
          lineHeight: '1.8',
          fontSize: '1.2rem',
          color: '#d1d5db', // Light gray for paragraph
          textShadow: '0px 1px 3px rgba(0, 0, 0, 0.3)',
        }}
      >
        I specialize in Java, Python, and the MERN stack. From dynamic web apps to stunning UI/UX
        designs, I bring creativity and functionality together. Featured projects like ADRIN and
        Splitter highlight my passion for development and design.
      </motion.p>

      {/* Projects Section */}
      <h2
        style={{
          margin: '4rem 0 2rem',
          fontSize: '2.5rem',
          color: '#ffb347', // Warm gradient orange
          textShadow: '0px 3px 5px rgba(0, 0, 0, 0.3)',
        }}
      >
        Featured Projects
      </h2>
      <motion.div
        style={{
          display: 'flex',
          gap: '2rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}
      >
        {/* Project Card 1 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: 'linear-gradient(145deg, #2c5364, #1c1f26)',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            color: '#ffffff',
            width: '280px',
            textAlign: 'left',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#58a6ff' }}>ADRIN</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#d1d5db' }}>
            Sports information platform built using MERN Stack.
          </p>
        </motion.div>

        {/* Project Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          style={{
            background: 'linear-gradient(145deg, #2c5364, #1c1f26)',
            borderRadius: '12px',
            padding: '1.5rem',
            boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.4)',
            color: '#ffffff',
            width: '280px',
            textAlign: 'left',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        >
          <h3 style={{ marginBottom: '1rem', color: '#58a6ff' }}>Splitter</h3>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#d1d5db' }}>
            Expense-splitting tool with dynamic UI and sharing options.
          </p>
        </motion.div>
      </motion.div>

      {/* Action Buttons */}
      <div style={{ marginTop: '3rem' }}>
        <motion.a
          href="/projects"
          whileHover={{ scale: 1.1 }}
          style={{ textDecoration: 'none' }}
        >
          <button
            style={{
              backgroundColor: '#ff7f50', // Coral for the button
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              margin: '0.5rem',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            View Projects
          </button>
        </motion.a>

        <motion.a href="https://drive.google.com/file/d/1hk6gan6ANV-mgNLkrkQmXjHlFK-E6-nL/view?usp=sharing" download whileHover={{ scale: 1.1 }}>
          <button
            style={{
              backgroundColor: '#28a745', // Green for the button
              color: '#ffffff',
              border: 'none',
              padding: '0.75rem 1.5rem',
              margin: '0.5rem',
              borderRadius: '5px',
              cursor: 'pointer',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)',
              transition: 'all 0.3s ease',
            }}
          >
            Download Resume
          </button>
        </motion.a>
      </div>
    </section>
  );
};

export default Home;
