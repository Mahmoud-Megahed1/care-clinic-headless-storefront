import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Menu, X, Globe } from 'lucide-react';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState('EN');
  const { toggleCart, cartItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = lang === 'EN' ? 'AR' : 'EN';
    setLang(newLang);
    document.documentElement.dir = newLang === 'AR' ? 'rtl' : 'ltr';
    // Optionally change font-family here or rely on CSS logical properties
  };

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
          <a href="/" className="navbar-logo" dir="ltr">
            DNA<span>PLUS</span>CARE
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="navbar-links">
          <li><a href="/shop">Shop</a></li>
          <li><a href="/science">Our Science</a></li>
          <li><a href="/concerns">Skin Concerns</a></li>
          <li><a href="/about">About Us</a></li>
        </ul>

        {/* Icons */}
        <div className="navbar-actions">
          <div className="navbar-lang" onClick={toggleLanguage}>
            <Globe size={14} />
            <span>{lang} / SAR</span>
          </div>
          <button className="navbar-icon-btn">
            <Search size={20} />
          </button>
          <button className="navbar-icon-btn" onClick={toggleCart}>
            <ShoppingBag size={20} />
            {cartItems.length > 0 && (
              <span className="cart-badge">{cartItems.length}</span>
            )}
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
          <div className="navbar-lang" style={{display: 'flex', marginTop: '2rem'}} onClick={toggleLanguage}>
            <Globe size={18} />
            <span>{lang} / SAR</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
