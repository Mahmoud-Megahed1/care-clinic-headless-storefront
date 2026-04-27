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
          <p className="luxury-text mb-4 animate-fade" style={{animationDelay: '0.2s'}}>
            Advanced Dermatological Science
          </p>
          <h1 className="hero-title animate-fade" style={{animationDelay: '0.4s'}}>
            The Future of <br />
            <span>Skin Care</span>
          </h1>
          <p className="hero-subtitle animate-fade" style={{animationDelay: '0.6s'}}>
            Precision-engineered formulas rooted in DNA analysis to unlock your skin's true potential. Experience the luxury of medical excellence.
          </p>
          
          <div className="hero-actions animate-fade" style={{animationDelay: '0.8s'}}>
            <a href="/shop" className="btn btn-hero-primary group">
              Shop Collection <ArrowRight size={18} />
            </a>
            <a href="/science" className="btn btn-hero-outline">
              Our Science
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
