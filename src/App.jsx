import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/HomePage';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

function App() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar bg-base-100 bg-gray-700 shadow-md">
          <div className="container mx-auto flex justify-between items-center p-4">
            {/* Logo / Branding */}
            <Link to="/" className="text-2xl font-bold text-white">
              My_Portfolio
            </Link>

            {/* Large Screen Menu */}
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-white hover:font-bold">Home</Link>
              <Link to="/about" className="text-white hover:font-bold">About</Link>
              <Link to="/projects" className="text-white hover:font-bold">Projects</Link>
              <Link to="/contact" className="text-white hover:font-bold">Contact</Link>
            </div>

            {/* Mobile Menu Button (Hamburger) */}
            <div className="md:hidden">
              <button
                className="btn btn-square btn-outline text-white"
                onClick={toggleMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu (Only visible on smaller screens) */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-gray-700 text-center">
              <ul className="flex flex-col space-y-2 p-4">
                <li>
                  <Link to="/" className="text-white hover:font-bold" onClick={toggleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white hover:font-bold" onClick={toggleMobileMenu}>
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-white hover:font-bold" onClick={toggleMobileMenu}>
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white hover:font-bold" onClick={toggleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>

        {/* Routes for Pages */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
