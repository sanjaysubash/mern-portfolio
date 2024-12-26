import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://api.github.com/users/sanjaysubash/repos');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();

        // Map the GitHub data to the structure you want for your projects
        const formattedProjects = data.map((repo) => ({
          title: repo.name,
          description: repo.description,
          techStack: repo.language ? [repo.language] : ['JavaScript'],
          image: `https://via.placeholder.com/400x300`, // Replace with actual images if necessary
          link: repo.html_url,
        }));

        setProjects(formattedProjects);
      } catch (error) {
        setError('Error fetching projects');
        console.error('Error fetching projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <p>Loading projects...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

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
