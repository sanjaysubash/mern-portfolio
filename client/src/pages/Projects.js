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
        if (!response.ok) throw new Error('Failed to fetch projects');
        const data = await response.json();

        const formattedProjects = data.map((repo) => ({
          title: repo.name || 'Untitled Project',
          description: repo.description || 'No description available.',
          techStack: repo.language ? [repo.language] : ['JavaScript'],
          image: `https://opengraph.githubassets.com/1/${repo.full_name}`, // preview from GitHub
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

  if (loading || error) {
    return (
      <section style={styles.loaderSection}>
        <p style={styles.loaderText}>
          {loading ? '🚀 Loading projects...' : error}
        </p>
      </section>
    );
  }

  return (
    <section style={styles.projectSection}>
      <h1 style={styles.heading}>🚧 My GitHub Projects</h1>
      <div style={styles.projectGrid}>
        {projects.filter(Boolean).map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

const styles = {
  projectSection: {
    padding: '4rem 2rem',
    minHeight: '100vh',
    background: 'radial-gradient(ellipse at top, #0f2027, #203a43, #2c5364)',
    color: '#fff',
    fontFamily: "'Poppins', sans-serif",
  },
  heading: {
    textAlign: 'center',
    fontSize: '2.8rem',
    color: '#58a6ff',
    marginBottom: '3rem',
    textShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
  },
  projectGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
    justifyContent: 'center',
  },
  loaderSection: {
    height: '100vh',
    backgroundColor: '#0f2027',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loaderText: {
    fontSize: '1.5rem',
    color: '#58a6ff',
    fontFamily: 'monospace',
  },
};

export default Projects;
