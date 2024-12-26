import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p style={footerTextStyle}>
        © 2024 Sanjay S. All rights reserved.
      </p>
      <p style={footerSubTextStyle}>
        Designed with ❤️ and React.
      </p>
    </footer>
  );
};

// Style objects
const footerStyle = {
  textAlign: 'center',
  padding: '2rem 1rem',
  background: 'linear-gradient(45deg, #0b0c10, #1f2833)',
  color: '#ffffff',
  boxShadow: '0 -4px 10px rgba(102, 252, 241, 0.6)',
  position: 'relative',
  bottom: 0,
  width: '100%',
  borderTop: '2px solid #66fcf1',
  animation: 'pulse 2s infinite',
};

const footerTextStyle = {
  margin: '0',
  fontSize: '1rem',
  color: '#66fcf1',
  fontWeight: 'bold',
  textShadow: '0 0 10px #66fcf1, 0 0 20px #66fcf1',
  transition: 'transform 0.3s ease, color 0.3s ease',
  cursor: 'pointer',
};

const footerSubTextStyle = {
  margin: '0',
  fontSize: '0.85rem',
  color: '#b0b3b8',
  fontStyle: 'italic',
  textShadow: '0 0 8px rgba(255, 255, 255, 0.8)',
};

// Add keyframes for subtle animation
const keyframes = `
@keyframes pulse {
  0% {
    box-shadow: 0 -4px 10px rgba(102, 252, 241, 0.6);
  }
  50% {
    box-shadow: 0 -6px 20px rgba(102, 252, 241, 0.8);
  }
  100% {
    box-shadow: 0 -4px 10px rgba(102, 252, 241, 0.6);
  }
}`;

// Inject keyframes dynamically
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default Footer;
