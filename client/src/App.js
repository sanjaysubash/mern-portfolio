import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importing components and pages
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/connect';

const App = () => {
  return (
    <Router>
      {/* Header - Always displayed */}
      <Header />

      {/* Main content routes */}
      <main style={{ minHeight: 'calc(100vh - 120px)', padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer - Always displayed */}
      <Footer />
    </Router>
  );
};

export default App;
