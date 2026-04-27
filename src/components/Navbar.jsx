import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : 'transparent'}`}>
      <div className="container navbar-container">
        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Logo */}
        <div className="navbar-logo-wrapper">
          <a href="/" className="navbar-logo">
            DNA<span>PLUS</span>CARE
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li><a href="/shop" className="luxury-text">Shop</a></li>
          <li><a href="/science" className="luxury-text">Our Science</a></li>
          <li><a href="/concerns" className="luxury-text">Skin Concerns</a></li>
          <li><a href="/about" className="luxury-text">About Us</a></li>
        </ul>

        {/* Icons */}
        <div className="navbar-actions">
          <div className="navbar-lang luxury-text">
            <Globe size={14} />
            <span>EN / SAR</span>
          </div>
          <button className="navbar-icon-btn">
            <Search size={20} />
          </button>
          <button className="navbar-icon-btn">
            <ShoppingBag size={20} />
            <span className="cart-badge">0</span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-menu animate-fade">
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={32} />
          </button>
          <a href="/shop" onClick={() => setIsMobileMenuOpen(false)}>Shop</a>
          <a href="/science" onClick={() => setIsMobileMenuOpen(false)}>Our Science</a>
          <a href="/concerns" onClick={() => setIsMobileMenuOpen(false)}>Skin Concerns</a>
          <a href="/about" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
          <div className="navbar-lang luxury-text" style={{display: 'flex', marginTop: '2rem'}}>
            <Globe size={18} />
            <span>EN / SAR</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
