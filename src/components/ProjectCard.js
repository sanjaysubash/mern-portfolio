import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div
      style={{
        background: '#161b22',
        padding: '1.5rem',
        borderRadius: '10px',
        boxShadow: '0 0 20px rgba(88, 166, 255, 0.8)',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        transformStyle: 'preserve-3d',
        maxWidth: '400px',
        margin: '1.5rem',
        cursor: 'pointer',
        color: '#ffffff',
      }}
      className="project-card"
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(88, 166, 255, 1)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 0 20px rgba(88, 166, 255, 0.8)';
      }}
    >
      <img
        src={project.image}
        alt={project.title}
        style={{
          width: '100%',
          borderRadius: '10px',
          marginBottom: '1rem',
          objectFit: 'cover', // Ensures the image is properly contained
          height: '200px',
        }}
      />
      <h3 style={{ marginBottom: '0.5rem', fontSize: '1.6rem', color: '#58a6ff', fontWeight: 'bold' }}>
        {project.title}
      </h3>
      <p style={{ fontSize: '1rem', marginBottom: '0.5rem', lineHeight: '1.6' }}>
        {project.description}
      </p>
      <p style={{ fontSize: '0.9rem', marginBottom: '1rem', color: '#b0b3b8' }}>
        <strong>Tech Stack:</strong> {project.techStack.join(', ')}
      </p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: 'none',
          color: '#ffffff',
          padding: '0.75rem 1.5rem',
          borderRadius: '5px',
          background: '#58a6ff',
          fontWeight: 'bold',
          fontSize: '1rem',
          transition: 'background 0.3s ease-in-out, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#4593e5';
          e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = '#58a6ff';
          e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        View Project
      </a>
    </div>
  );
};

export default ProjectCard;
