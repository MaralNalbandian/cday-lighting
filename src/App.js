import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';
import SimpleScrollFix from './components/utils/SimpleScrollFix';

// Layout Components
import Footer from './components/layout/Footer';

// Pages and Sections
import Home from './pages/Home';
import Contact from './pages/Contact';
import ProjectsSection from './components/home/ProjectsSection'; // Import our ProjectsSection

// Note: We're now using section-based navigation for the main content
// These pages would be used for more detailed content beyond the home page
const DetailedAbout = () => <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}><h1>About Page</h1></div>;
const DetailedServices = () => <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}><h1>Services Page</h1></div>;

// Projects page that uses our new component
const DetailedProjects = () => (
  <div style={{paddingTop: '80px'}}>
    <ProjectsSection />
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SimpleScrollFix />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DetailedAbout />} />
          <Route path="/services" element={<DetailedServices />} />
          <Route path="/projects" element={<DetailedProjects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;