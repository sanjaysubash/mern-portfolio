import React from 'react';

const ProfileLinks = () => {
  const profiles = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/sanjaysubash', 
      logo: 'https://user-images.githubusercontent.com/74038190/212257468-1e9a91f1-b626-4baa-b15d-5c385dfa7ed2.gif' 
    },
    { 
      name: 'Codolio', 
      url: 'https://codolio.com/profile/funguy', 
      logo: 'https://codolio.com/codolio_assets/gif-owl-transparent.GIF' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://www.linkedin.com/in/sanjaysubash/', 
      logo: 'https://i.pinimg.com/originals/de/b4/6f/deb46f02a59e3b3a2aa58fac16290d63.gif' 
    },
    { 
      name: 'Instagram', 
      url: 'https://instagram.com/mr._funguy', 
      logo: 'https://media2.giphy.com/media/3o7bu7wtT19WfBAt0Y/200w.gif?cid=6c09b9529gnfq8y23jj16dcmedl6z2ejsr5squx9sxy04ri0&ep=v1_gifs_search&rid=200w.gif&ct=g' 
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
            <img src={profile.logo} alt={`${profile.name} logo`} style={logoStyle} />
            <span style={nameStyle}>{profile.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

const sectionStyle = {
  padding: '4rem 2rem',
  background: 'linear-gradient(45deg, #0b0c10, #1f2833)',
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
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', 
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
  color: '#66fcf1',
  fontSize: '1.4rem',
  fontWeight: '600',
  padding: '2rem',
  border: '2px solid #66fcf1',
  borderRadius: '12px',
  transition: 'transform 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease, color 0.3s ease',
  textAlign: 'center',
  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.6)',
  position: 'relative',
  overflow: 'hidden',
  background: 'linear-gradient(135deg, #1f2833 0%, #0b0c10 100%)',
  cursor: 'pointer',
};

const logoStyle = {
  width: '60px',
  height: '60px',
  marginBottom: '1.2rem',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
};

const nameStyle = {
  fontSize: '1.4rem',
  fontWeight: '600',
  color: '#ffffff',
  marginTop: '1rem',
  transition: 'color 0.3s ease',
};

export default ProfileLinks;
