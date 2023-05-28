import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

function App() {
  const mainStyle = {
    background: '#596e79'
  }
  const headerStyle = {
    background: '#f0ece2'
  }
  return (
    <div style={headerStyle}>
    <BrowserRouter>
    <header className="container-fluid" style={headerStyle}>
    <Navigation />
    </header>
    <main style={mainStyle}>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
    </main>
  </BrowserRouter>

  <Footer style={headerStyle}/>
    </div>
  );
}

export default App;
