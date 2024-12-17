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
  backgroundColor: '#161b22',
  color: '#ffffff',
  boxShadow: '0 -4px 10px rgba(88, 166, 255, 0.6)',
  position: 'relative',
  bottom: 0,
  width: '100%',
};

const footerTextStyle = {
  margin: '0',
  fontSize: '1rem',
  color: '#fff',
  fontWeight: 'bold',
};

const footerSubTextStyle = {
  margin: '0',
  fontSize: '0.85rem',
  color: '#b0b3b8',
  fontStyle: 'italic',
};

export default Footer;
