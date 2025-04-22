import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/Theme';

// Layout Components
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';

// Note: We're now using section-based navigation for the main content
// These pages would be used for more detailed content beyond the home page
const DetailedAbout = () => <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}><h1>About Page</h1></div>;
const DetailedServices = () => <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}><h1>Services Page</h1></div>;
const DetailedProjects = () => <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}><h1>Projects Page</h1></div>;

// Simple Contact page component if you don't have one yet
const ContactPage = () => (
  <div className="container" style={{paddingTop: '120px', minHeight: '80vh'}}>
    <h1>Contact Page</h1>
  </div>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<DetailedAbout />} />
          <Route path="/services" element={<DetailedServices />} />
          <Route path="/projects" element={<DetailedProjects />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;