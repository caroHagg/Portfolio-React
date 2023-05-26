import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css';
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import About from './components/pages/About'
import Portfolio from './components/pages/Portfolio'
import Contact from './components/pages/Contact'
import Resume from './components/pages/Resume'

function App() {
  return (
    <>
    <header>

    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/resume" element={<Resume/>}/>
    </Routes>
  </BrowserRouter>
    </header>

  <Footer/>
    </>
  );
}

export default App;
