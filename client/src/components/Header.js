import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header
            style={{
                background: '#161b22',
                padding: '1rem',
                textAlign: 'center',
                position: 'sticky',
                top: 0,
                zIndex: 1000,
                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
            }}
        >
            <nav style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'neon-border active' : 'neon-border'
                    }
                    style={{
                        padding: '0.5rem 1rem',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? 'neon-border active' : 'neon-border'
                    }
                    style={{
                        padding: '0.5rem 1rem',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                >
                    About
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? 'neon-border active' : 'neon-border'
                    }
                    style={{
                        padding: '0.5rem 1rem',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Projects
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? 'neon-border active' : 'neon-border'
                    }
                    style={{
                        padding: '0.5rem 1rem',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    );
};

export default Header;
