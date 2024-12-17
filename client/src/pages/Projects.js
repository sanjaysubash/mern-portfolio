import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'Sports Information Website (ADRIN)',
      description: 'A website built with the MERN stack to provide sports data.',
      techStack: ['React', 'Node.js', 'MongoDB'],
      image: 'https://via.placeholder.com/400x300',
      link: 'https://example.com/project1',
    },
    {
      title: 'T-shirt Advertising Product (T-SWEAT)',
      description: 'An innovative product that tracks movement for advertising purposes.',
      techStack: ['JavaScript', 'HTML', 'CSS'],
      image: 'https://via.placeholder.com/400x300',
      link: 'https://splitter-8fih.onrender.com',
    },
    // Add more projects here
  ];

  return (
    <section style={{ padding: '3rem 1rem', backgroundColor: '#161b22', color: '#fff' }}>
      <h1>My Projects</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem' }}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
