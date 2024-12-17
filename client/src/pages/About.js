import React from 'react';

const About = () => {
  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        <h1 style={headingStyle}>About Me</h1>
        <div style={contentStyle}>
          <p style={paragraphStyle}>
            I am a software developer based in Coimbatore, Tamil Nadu. I hold a B.Tech in Computer Science and Business Systems from KIT.
            I have experience in developing websites and applications using various technologies such as React, JavaScript, Python, Java, and more.
          </p>
          <p style={paragraphStyle}>
            In my free time, I enjoy exploring new technologies, contributing to open-source, and solving problems.
          </p>
        </div>
        <img 
          src={`${process.env.PUBLIC_URL}/assets/IMG_6008.jpeg`} 
          alt="Sanjay's Avatar" 
          style={avatarStyle} 
        />
      </div>
    </section>
  );
};

// Inline styles for better design
const sectionStyle = {
  padding: '4rem 2rem',
  backgroundColor: '#1c1f26',
  color: '#fff',
  textAlign: 'center',
  borderBottom: '2px solid #58a6ff',
};

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  textAlign: 'left',
  lineHeight: '1.6',
};

const headingStyle = {
  fontSize: '2.5rem',
  color: '#58a6ff',
  marginBottom: '1rem',
};

const contentStyle = {
  marginBottom: '2rem',
};

const paragraphStyle = {
  fontSize: '1.2rem',
  marginBottom: '1rem',
  color: '#b0b3b8',
};

const avatarStyle = {
  borderRadius: '50%',
  marginTop: '1rem',
  width: '150px',
  height: '150px',
  objectFit: 'cover',
  border: '4px solid #58a6ff',
};

export default About;
