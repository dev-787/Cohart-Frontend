import React from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { Home, Projects, ProjectDetail, Services, Contact, Login, SignUp } from '@/pages'
import { Navbar } from '@/components'
import ScrollToTop from './components/ScrollToTop'

const AppContent = () => {
  const location = useLocation();
  const hideNavbarRoutes = ['/login', '/signup', '/contact', '/services', '/projects'];
  // Also hide navbar for project detail pages
  const isProjectDetailPage = location.pathname.startsWith('/project/');
  const showNavbar = !hideNavbarRoutes.includes(location.pathname) && !isProjectDetailPage;

  return (
    <div className="app">
      <ScrollToTop />
      {showNavbar && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}

export default App
