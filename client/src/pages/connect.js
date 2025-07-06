import React from 'react';

const ProfileLinks = () => {
  const profiles = [
    {
      name: 'GitHub',
      url: 'https://github.com/sanjaysubash',
      logo: 'https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif',
    },
    {
      name: 'Codolio',
      url: 'https://codolio.com/profile/funguy',
      logo: 'https://codolio.com/codolio_assets/gif-owl-transparent.GIF',
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/sanjaysubash/',
      logo: 'https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif',
    },
    {
      name: 'Instagram',
      url: 'https://instagram.com/mr._funguy',
      logo: 'https://media2.giphy.com/media/3o7bu7wtT19WfBAt0Y/200w.gif?cid=6c09b9529gnfq8y23jj16dcmedl6z2ejsr5squx9sxy04ri0&ep=v1_gifs_search&rid=200w.gif&ct=g',
    },
  ];

  return (
    <section style={sectionStyle}>
      <h1 style={headingStyle}>Connect with Me</h1>
      <div style={gridStyle}>
        {profiles.map((profile, index) => (
          <a
            key={index}
            href={profile.url}
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle}
          >
            <div style={logoWrapperStyle}>
              <img src={profile.logo} alt={`${profile.name} logo`} style={logoStyle} />
            </div>
            <span style={nameStyle}>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '4rem 2rem',
  background: 'linear-gradient(135deg, #0f0f0f 0%, #1f1f1f 100%)',
  color: '#fff',
  textAlign: 'center',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  boxSizing: 'border-box',
};

const headingStyle = {
  fontSize: '3.5rem',
  marginBottom: '2.5rem',
  color: '#66fcf1',
  fontWeight: 'bold',
  letterSpacing: '2px',
  textTransform: 'uppercase',
  textShadow: '4px 4px 12px rgba(102, 252, 241, 0.8)',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
  gap: '2rem',
  width: '100%',
  maxWidth: '1200px',
  padding: '0 1rem',
};

const linkStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: '#fff',
  padding: '2rem',
  borderRadius: '16px',
  background: 'rgba(255, 255, 255, 0.05)',
  backdropFilter: 'blur(10px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
  transition: 'all 0.4s ease-in-out',
  transformStyle: 'preserve-3d',
};

const logoWrapperStyle = {
  width: '80px',
  height: '80px',
  borderRadius: '50%',
  overflow: 'hidden',
  marginBottom: '1.2rem',
  transition: 'transform 0.6s ease',
};

const logoStyle = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  transition: 'transform 0.4s ease-in-out',
};

const nameStyle = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#66fcf1',
  marginTop: '1rem',
  transition: 'color 0.3s ease',
};

// Add animation with hover effects via CSS-in-JS (pseudo-style workaround)
const styleTag = document.createElement('style');
styleTag.innerHTML = `
  a:hover {
    transform: translateY(-10px) scale(1.05);
    box-shadow: 0 20px 40px rgba(102, 252, 241, 0.2);
  }
  a:hover img {
    transform: rotate(10deg) scale(1.1);
  }
  a:hover span {
    color: #ffffff;
  }
`;
document.head.appendChild(styleTag);

export default ProfileLinks;
