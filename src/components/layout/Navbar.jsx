import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      {/* WhatsApp Floating Button */}
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/7410764696"
  target="_blank"
  rel="noopener noreferrer"
  className="fixed left-4 top-1/2 z-50 transform -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors"
  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
  aria-label="Chat on WhatsApp"
>
  <FaWhatsapp size={28} color="#fff" />
</a>

{/* Call Floating Button (almost touching WhatsApp) */}
<a
  href="tel:7410764696"
  className="fixed left-4 top-[calc(50%+42px)] z-50 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-colors"
  style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.15)' }}
  aria-label="Call Us"
>
  <Phone size={22} color="#fff" />
</a>


      <header className="w-full shadow-sm bg-white">
        {/* Top bar with contact info */}
        <div className="bg-healthcare-green text-white py-2">
          <div className="healthcare-container flex justify-between items-center">
            <div className="hidden md:flex items-center space-x-4">
              <a href="tel:9982-782-555" className="flex items-center text-sm">
                <Phone size={16} className="mr-1" />
                <span>7410764696</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="healthcare-container py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold text-healthcare-green">Metropolis</span>
              <span className="ml-1 text-sm text-gray-600">Healthcare</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <NavLink to="/" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Home
              </NavLink>
              <NavLink to="/about" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                About
              </NavLink>
              <NavLink to="/packages" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Our Packages
              </NavLink>
              <NavLink to="/contact" className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}>
                Contact Us
              </NavLink>
            </div>
            
            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" onClick={toggleMenu} aria-label="Toggle menu">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </Button>
            </div>
          </nav>
          
          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 bg-white">
              <div className="flex flex-col space-y-4">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => `block py-2 px-4 ${isActive ? 'bg-healthcare-green-light text-healthcare-green' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/about" 
                  className={({ isActive }) => `block py-2 px-4 ${isActive ? 'bg-healthcare-green-light text-healthcare-green' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink 
                  to="/packages" 
                  className={({ isActive }) => `block py-2 px-4 ${isActive ? 'bg-healthcare-green-light text-healthcare-green' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Our Packages
                </NavLink>
                <NavLink 
                  to="/contact" 
                  className={({ isActive }) => `block py-2 px-4 ${isActive ? 'bg-healthcare-green-light text-healthcare-green' : ''}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Navbar;
