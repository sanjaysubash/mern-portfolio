import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <NavLink
          to="/"
          className={({ isActive }) => isActive ? 'neon-border active' : 'neon-border'}
          style={linkStyle}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => isActive ? 'neon-border active' : 'neon-border'}
          style={linkStyle}
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) => isActive ? 'neon-border active' : 'neon-border'}
          style={linkStyle}
        >
          Projects
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => isActive ? 'neon-border active' : 'neon-border'}
          style={linkStyle}
        >
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

// Inline styles for the Header and Navigation
const headerStyle = {
  background: '#161b22',
  padding: '1rem',
  textAlign: 'center',
  position: 'sticky',
  top: 0,
  zIndex: 1000,
  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
};

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

const linkStyle = {
  padding: '0.5rem 1rem',
  color: 'white',
  textDecoration: 'none',
  borderRadius: '5px',
  transition: 'all 0.3s ease',
};

// Styles for neon border, hover and active states
const styles = {
  '.neon-border': {
    padding: '0.5rem 1rem',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    position: 'relative',
    fontSize: '1rem',
  },
  '.neon-border:hover': {
    backgroundColor: '#58a6ff',
    color: '#161b22',
    transform: 'scale(1.05)',
  },
  '.active': {
    border: '2px solid #58a6ff',
    boxShadow: '0 0 10px rgba(88, 166, 255, 0.8)',
    backgroundColor: '#58a6ff',
    color: '#161b22',
  },
  '@media (max-width: 768px)': {
    nav: {
      flexDirection: 'column',
      gap: '1rem',
    },
  },
};

// Dynamically inject CSS into document head for styles
const injectStyles = () => {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = `
    .neon-border {
      padding: 0.5rem 1rem;
      color: white;
      text-decoration: none;
      border-radius: 5px;
      transition: all 0.3s ease;
      position: relative;
      font-size: 1rem;
    }

    .neon-border:hover {
      background-color: #58a6ff;
      color: #161b22;
      transform: scale(1.05);
    }

    .active {
      border: 2px solid #58a6ff;
      box-shadow: 0 0 10px rgba(88, 166, 255, 0.8);
      background-color: #58a6ff;
      color: #161b22;
    }

    @media (max-width: 768px) {
      nav {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `;
  document.head.appendChild(styleTag);
};

// Call the function to inject styles
injectStyles();

export default Header;
