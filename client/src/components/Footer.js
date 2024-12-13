import React from 'react';

const Footer = () => {
    return (
        <footer
            style={{
                textAlign: 'center',
                padding: '1rem',
                background: '#161b22',
                color: '#ffffff',
                boxShadow: '0 -4px 10px rgba(88, 166, 255, 0.6)',
                position: 'relative',
                bottom: 0,
                width: '100%',
            }}
        >
            <p style={{ margin: 0, fontSize: '0.9rem' }}>
                © 2024 Sanjay S. All rights reserved.
            </p>
            <p style={{ margin: 0, fontSize: '0.8rem' }}>
                Designed with ❤️ and React.
            </p>
        </footer>
    );
};

export default Footer;
