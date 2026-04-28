import React from 'react';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-bg">
        <img 
          src="/hero-bg.png" 
          alt="DNA PLUS CARE Luxury Background" 
          className="hero-img animate-fade"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        <div>
          <p className="luxury-text mb-6 animate-fade" style={{animationDelay: '0.2s'}}>
            DNA PLUS CARE • EST. 2026
          </p>
          <h1 className="hero-title animate-fade" style={{animationDelay: '0.4s'}}>
            Clinically Engineered. <br />
            <span>Visible Results.</span>
          </h1>
          <p className="hero-subtitle animate-fade" style={{animationDelay: '0.6s'}}>
            Unlock the science of genetic skincare. Precision formulas designed for cellular restoration and timeless skin health.
          </p>
          
          <div className="hero-actions animate-fade" style={{animationDelay: '0.8s'}}>
            <a href="/shop" className="btn btn-hero-primary">
              Discover the Collection
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="hero-scroll-hint">
        <span className="luxury-text">Scroll to Explore</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
};

export default Hero;
