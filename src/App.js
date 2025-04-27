import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './components/Home';
import { Toaster } from 'react-hot-toast';
import './styles/app.css';
import ProjectsPage from './components/ProjectsPage';
import ContactPage from './components/ContactPage';
import ScrollToTop from './components/Scrolltotop';

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollToTop/>
      
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <Toaster />
    </Router>
  );
}

export default App;
